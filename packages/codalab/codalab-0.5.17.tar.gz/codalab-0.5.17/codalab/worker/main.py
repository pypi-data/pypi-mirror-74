#!/usr/bin/env python3
# For information about the design of the worker, see design.pdf in the same
# directory as this file. For information about running a worker, see the
# tutorial on the CodaLab documentation.

import argparse
import getpass
import os
import logging
import signal
import socket
import stat
import subprocess
import sys
import psutil

from codalab.lib.formatting import parse_size
from .bundle_service_client import BundleServiceClient, BundleAuthException
from . import docker_utils
from .worker import Worker
from codalab.worker.dependency_manager import DependencyManager
from codalab.worker.docker_image_manager import DockerImageManager

logger = logging.getLogger(__name__)


DEFAULT_EXIT_AFTER_NUM_RUNS = 999999999


def parse_args():
    parser = argparse.ArgumentParser(description='CodaLab worker.')
    parser.add_argument('--tag', help='Tag that allows for scheduling runs on specific workers.')
    parser.add_argument(
        '--server',
        default='https://worksheets.codalab.org',
        help='URL of the CodaLab server, in the format '
        '<http|https>://<hostname>[:<port>] (e.g., https://worksheets.codalab.org)',
    )
    parser.add_argument(
        '--work-dir',
        default='codalab-worker-scratch',
        help='Directory where to store temporary bundle data, '
        'including dependencies and the data from run '
        'bundles.',
    )
    parser.add_argument(
        '--network-prefix', default='codalab_worker_network', help='Docker network name prefix'
    )
    parser.add_argument(
        '--cpuset',
        type=parse_cpuset_args,
        metavar='CPUSET_STR',
        default='ALL',
        help='Comma-separated list of CPUs in which to allow bundle execution, '
        '(e.g., \"0,2,3\", \"1\").',
    )
    parser.add_argument(
        '--gpuset',
        type=parse_gpuset_args,
        metavar='GPUSET_STR',
        default='ALL',
        help='Comma-separated list of GPUs in which to allow bundle execution. '
        'Each GPU can be specified by its index or UUID'
        '(e.g., \"0,1\", \"1\", \"GPU-62casdfasd-asfas...\"',
    )
    parser.add_argument(
        '--max-work-dir-size',
        type=parse_size,
        metavar='SIZE',
        default='10g',
        help='Maximum size of the temporary bundle data ' '(e.g., 3, 3k, 3m, 3g, 3t).',
    )
    parser.add_argument(
        '--max-image-cache-size',
        type=parse_size,
        metavar='SIZE',
        default=None,
        help='Limit the disk space used to cache Docker images '
        'for worker jobs to the specified amount (e.g. '
        '3, 3k, 3m, 3g, 3t). If the limit is exceeded, '
        'the least recently used images are removed first. '
        'Worker will not remove any images if this option '
        'is not specified.',
    )
    parser.add_argument(
        '--max-image-size',
        type=parse_size,
        metavar='SIZE',
        default=None,
        help='Limit the size of Docker images to download from the Docker Hub'
        '(e.g. 3, 3k, 3m, 3g, 3t). If the limit is exceeded, '
        'the requested image will not be downloaded. '
        'The bundle depends on this image will fail accordingly.',
    )
    parser.add_argument(
        '--max-memory',
        type=parse_size,
        metavar='SIZE',
        default=None,
        help='Limit the amount of memory to a worker in bytes' '(e.g. 3, 3k, 3m, 3g, 3t).',
    )
    parser.add_argument(
        '--password-file',
        help='Path to the file containing the username and '
        'password for logging into the bundle service, '
        'each on a separate line. If not specified, the '
        'password is read from standard input.',
    )
    parser.add_argument(
        '--verbose', action='store_true', help='Whether to output verbose log messages.'
    )
    parser.add_argument(
        '--exit-when-idle',
        action='store_true',
        help='If specified the worker quits if it finds itself with no jobs after a checkin',
    )
    parser.add_argument(
        '--idle-seconds',
        help='Not running anything for this many seconds constitutes idle',
        type=int,
        default=0,
    )
    parser.add_argument(
        '--id',
        default='%s(%d)' % (socket.gethostname(), os.getpid()),
        help='Internal use: ID to use for the worker.',
    )
    parser.add_argument(
        '--shared-file-system',
        action='store_true',
        help='To be used when the server and the worker share the bundle store on their filesystems.',
    )
    parser.add_argument(
        '--tag-exclusive',
        action='store_true',
        help='To be used when the worker should only run bundles that match the worker\'s tag.',
    )
    parser.add_argument(
        '--pass-down-termination',
        action='store_true',
        help='Terminate the worker and kill all the existing running bundles.',
    )
    parser.add_argument(
        '--delete-work-dir-on-exit',
        action='store_true',
        help="Delete the worker's working directory when the worker process exits.",
    )
    parser.add_argument(
        '--exit-after-num-runs',
        type=int,
        default=DEFAULT_EXIT_AFTER_NUM_RUNS,
        help='The worker quits after this many jobs assigned to this worker',
    )
    parser.add_argument(
        '--exit-on-exception',
        action='store_true',
        help="Exit the worker if it encounters an exception (rather than sleeping).",
    )
    return parser.parse_args()


def connect_to_codalab_server(server, password_file):
    # Get the username and password.
    logger.info('Connecting to %s' % server)
    if password_file:
        if os.stat(password_file).st_mode & (stat.S_IRWXG | stat.S_IRWXO):
            print(
                "Permissions on password file are too lax.\n\
                Only the user should be allowed to access the file.\n\
                On Linux, run:\n\
                chmod 600 %s"
                % password_file,
                file=sys.stderr,
            )
            sys.exit(1)
        with open(password_file) as f:
            username = f.readline().strip()
            password = f.readline().strip()
    else:
        username = os.environ.get('CODALAB_USERNAME')
        if username is None:
            username = input('Username: ')
        password = os.environ.get('CODALAB_PASSWORD')
        if password is None:
            password = getpass.getpass()
    try:
        bundle_service = BundleServiceClient(server, username, password)
        return bundle_service
    except BundleAuthException as ex:
        logger.error('Cannot log into the bundle service. Please check your worker credentials.\n')
        logger.debug('Auth error: {}'.format(ex))
        sys.exit(1)


def main():
    args = parse_args()
    # This quits if connection unsuccessful
    bundle_service = connect_to_codalab_server(args.server, args.password_file)
    # Configure logging
    logging.basicConfig(
        format='%(asctime)s %(message)s', level=(logging.DEBUG if args.verbose else logging.INFO)
    )
    if args.shared_file_system:
        # No need to store bundles locally if filesystems are shared
        local_bundles_dir = None
        # Also no need to download dependencies if they're on the filesystem already
        dependency_manager = None
    else:
        local_bundles_dir = os.path.join(args.work_dir, 'runs')
        dependency_manager = DependencyManager(
            os.path.join(args.work_dir, 'dependencies-state.json'),
            bundle_service,
            args.work_dir,
            args.max_work_dir_size,
        )
    # Set up local directories
    if not os.path.exists(args.work_dir):
        logging.debug('Work dir %s doesn\'t exist, creating.', args.work_dir)
        os.makedirs(args.work_dir, 0o770)
    if local_bundles_dir and not os.path.exists(local_bundles_dir):
        logger.info('%s doesn\'t exist, creating.', local_bundles_dir)
        os.makedirs(local_bundles_dir, 0o770)

    docker_runtime = docker_utils.get_available_runtime()
    image_manager = DockerImageManager(
        os.path.join(args.work_dir, 'images-state.json'),
        args.max_image_cache_size,
        args.max_image_size,
    )

    worker = Worker(
        image_manager,
        dependency_manager,
        os.path.join(args.work_dir, 'worker-state.json'),
        args.cpuset,
        args.gpuset,
        args.max_memory,
        args.id,
        args.tag,
        args.work_dir,
        local_bundles_dir,
        args.exit_when_idle,
        args.exit_after_num_runs,
        args.idle_seconds,
        bundle_service,
        args.shared_file_system,
        args.tag_exclusive,
        docker_runtime=docker_runtime,
        docker_network_prefix=args.network_prefix,
        pass_down_termination=args.pass_down_termination,
        delete_work_dir_on_exit=args.delete_work_dir_on_exit,
    )

    # Register a signal handler to ensure safe shutdown.
    for sig in [signal.SIGTERM, signal.SIGINT, signal.SIGHUP]:
        signal.signal(sig, lambda signup, frame: worker.signal())

    # BEGIN: DO NOT CHANGE THIS LINE UNLESS YOU KNOW WHAT YOU ARE DOING
    # THIS IS HERE TO KEEP TEST-CLI FROM HANGING
    logger.info('Worker started!')
    # END

    worker.start()


def parse_cpuset_args(arg):
    """
    Parse given arg into a set of integers representing cpus

    Arguments:
        arg: comma separated string of ints, or "ALL" representing all available cpus
    """
    try:
        # Get the set of cores that the process can actually use.
        # For instance, on Slurm, the returning value may contain only 4 cores: {2,3,20,21}.
        return os.sched_getaffinity(0)
    except AttributeError:
        # os.sched_getaffinity() isn't available on all platforms,
        # so fallback to using the number of physical cores.
        cpu_count = psutil.cpu_count(logical=False)

    if arg == 'ALL':
        cpuset = list(range(cpu_count))
    else:
        try:
            cpuset = [int(s) for s in arg.split(',')]
        except ValueError:
            raise argparse.ArgumentTypeError(
                "CPUSET_STR invalid format: must be a string of comma-separated integers"
            )

        if not len(cpuset) == len(set(cpuset)):
            raise argparse.ArgumentTypeError("CPUSET_STR invalid: CPUs not distinct values")
        if not all(cpu in range(cpu_count) for cpu in cpuset):
            raise argparse.ArgumentTypeError("CPUSET_STR invalid: CPUs out of range")
    return set(cpuset)


def parse_gpuset_args(arg):
    """
    Parse given arg into a set of strings representing gpu UUIDs

    Arguments:
        arg: comma separated string of ints, or "ALL" representing all gpus
    """
    if arg == '':
        return set()

    try:
        # We run nvidia-smi on the host directly, in order to respect
        # environment variables like CUDA_VISIBLE_DEVICES or other restrictions
        # that, for instance, might be placed by Slurm or a similar resource
        # allocation system. Running nvidia-smi in Docker ignores these
        # restrictions, hence why we don't just simply use
        # docker_utils.get_nvidia_devices()
        nvidia_command = ['nvidia-smi', '--query-gpu=index,uuid', '--format=csv,noheader']
        output = subprocess.run(
            nvidia_command, stdout=subprocess.PIPE, check=True, universal_newlines=True
        ).stdout
        print(output.split('\n')[:-1])
        all_gpus = {
            gpu.split(',')[0].strip(): gpu.split(',')[1].strip() for gpu in output.split('\n')[:-1]
        }
    except (subprocess.CalledProcessError, FileNotFoundError):
        all_gpus = {}

    if arg == 'ALL':
        return set(all_gpus.values())
    else:
        gpuset = arg.split(',')
        if not all(gpu in all_gpus or gpu in all_gpus.values() for gpu in gpuset):
            raise argparse.ArgumentTypeError("GPUSET_STR invalid: GPUs out of range")
        return set(all_gpus.get(gpu, gpu) for gpu in gpuset)


if __name__ == '__main__':
    main()
