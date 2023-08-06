import argparse
import contextlib
import logging
import os
import fabric
import yaml


logging.basicConfig()
logger = logging.getLogger('sctl')
logger.setLevel(logging.INFO)


def sctl_configuration(path):
    try:
        return yaml.load(open(path), Loader=yaml.FullLoader)
    except FileNotFoundError:
        try:
            return yaml.load(open('~/.sctl/config.yml'), Loader=yaml.FullLoader)
        except FileNotFoundError:
            raise argparse.ArgumentError('No configuration can be found!')


def parse_inputs():
    parser = argparse.ArgumentParser('sctl')
    parser.add_argument('-c', '--configuration', default='.sctl/config.yml', type=sctl_configuration)
    parser.add_argument('-d', '--directory')

    action_parser = argparse.ArgumentParser('sctl')
    action_subparsers = action_parser.add_subparsers(required=True, dest='action')

    exec_parser = action_subparsers.add_parser('exec')
    exec_parser.add_argument('command', help='command to execute')

    download_parser = action_subparsers.add_parser('download')
    download_parser.add_argument('remote', help='remote path')
    download_parser.add_argument('local', nargs='?', default=None, help='local path')

    upload_parser = action_subparsers.add_parser('upload')
    upload_parser.add_argument('local', help='local path')
    upload_parser.add_argument('remote', nargs='?', default=None, help='remote path')

    args, extras = parser.parse_known_args()
    if extras and extras[0] in ['exec','download', 'upload']:
        return action_parser.parse_args(extras, namespace=args)

    extras.insert(0, 'exec')
    return action_parser.parse_args(extras, namespace=args)


def sctl():
    inputs = parse_inputs()
    inputs.configuration.setdefault('directory', inputs.directory)
    directory = inputs.directory if inputs.directory else inputs.configuration['directory'] if 'directory' in inputs.configuration else None

    for node in inputs.configuration['nodes']:
        cnx = fabric.Connection(**node)
        with cnx.cd(directory) if directory else contextlib.nullcontext():
            if inputs.action == 'exec':
                logger.info(f'Executing on {node}')
                result = cnx.run(inputs.command)
                logger.info(result.stdout)
                if not result.ok:
                    logger.error(result.stderr)

            elif inputs.action == 'download':
                logger.info(f'Downloading from {node}')
                local = inputs.local
                if local is None and len(inputs.configuration['nodes']) > 1:
                    local = f'{node["host"]}.{os.path.basename(inputs.remote)}'
                result = cnx.get(inputs.remote, local)
                logger.info(f'Downloaded {result.remote} to {result.local}')

            elif inputs.action == 'upload':
                logger.info(f'Uploading to {node}')
                result = cnx.put(inputs.local, inputs.remote)
                logger.info(f'Uploaded {result.local} to {result.remote}')


if __name__ == '__main__':
    main()
