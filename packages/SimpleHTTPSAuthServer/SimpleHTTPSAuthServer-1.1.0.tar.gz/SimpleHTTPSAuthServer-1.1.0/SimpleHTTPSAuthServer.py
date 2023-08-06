import base64
import os
import random
import re
import socket
import sys
import ssl
import string

if sys.version_info[0] == 2:
    from BaseHTTPServer import HTTPServer as Server
    from SimpleHTTPServer import SimpleHTTPRequestHandler as Handler
    from SocketServer import ThreadingMixIn
    from httplib import UNAUTHORIZED
    from itertools import izip_longest as zip_longest
elif sys.version_info[0] == 3:
    from http.server import HTTPServer as Server
    from http.server import SimpleHTTPRequestHandler as Handler
    from socketserver import ThreadingMixIn
    from http.client import UNAUTHORIZED
    from itertools import zip_longest

ENV_USERS = 'SIMPLE_HTTPS_USERS'
ENV_PASSWORDS = 'SIMPLE_HTTPS_PASSWORDS'
ENV_KEYS = 'SIMPLE_HTTPS_KEYS'


class AuthHandler(Handler):
    def send_auth_request(self):
        self.send_response(UNAUTHORIZED)
        self.send_header('WWW-Authenticate', 'Basic realm=\"Authorization Required\"')
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_GET(self):
        if not self.server.keys:
            if __name__ == '__main__':
                Handler.do_GET(self)
            return True

        auth_header = self.headers.get('Authorization')
        if auth_header is None:
            self.send_auth_request()
            self.wfile.write('<h1>Authorization Required</h1>'.encode())
            print('no auth header received')
            return False

        elif auth_header[len('Basic '):] in self.server.keys:
            if __name__ == '__main__':
                Handler.do_GET(self)
            return True

        else:
            self.send_auth_request()
            self.wfile.write('<h1>Authorization Required</h1>'.encode())
            auth = re.sub('^Basic ', '', auth_header)
            print('Authentication failed! %s' % base64.b64decode(auth).decode())
            return False

    def super_get(self):
        Handler.do_GET(self)


class HTTPSAuthServer(Server):
    def __init__(self, server_address, RequestHandlerClass=AuthHandler,
                 bind_and_activate=True):
        Server.__init__(
            self, server_address, RequestHandlerClass, bind_and_activate)
        self.keys = []
        self.servercert = None
        self.cacert = None
        self.protocol = 'HTTP'
        self.certreqs = ssl.CERT_NONE

    def set_auth(self, users=None, passwords=None, keys=None):
        if not (users or passwords or keys):
            self.keys = []
            return

        if keys is not None:
            self.keys += keys

        if users is not None or passwords is not None:
            accounts = zip_longest(
                users or [''], passwords or [''], fillvalue=''
            )
            for user, password in accounts:
                self.keys.append(
                    base64.b64encode((user + ':' + password).encode()).decode()
                )

    def set_certs(self, servercert=None, cacert=None):
        self.servercert = servercert
        self.cacert = cacert

        if servercert is not None:
            self.protocol = 'HTTPS'
            if cacert is not None:
                self.certreqs = ssl.CERT_REQUIRED

            self.socket = ssl.wrap_socket(self.socket, certfile=servercert,
                                          server_side=True,
                                          cert_reqs=self.certreqs,
                                          ca_certs=self.cacert)

    def server_bind(self):
        try:
            self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
        except:
            pass
        return Server.server_bind(self)

    def serve_forever(self, poll_interval=0.5):
        if self.servercert is None:
            print('No server certificate is specified. HTTPS is disabled.')
        elif self.cacert is not None:
            print('CA certificate is specified. '
                  'Cilent certificate authentication is enabled.')

        sockname = self.socket.getsockname()
        print('Serving {} on {} port {} ...'.format(
            self.protocol, sockname[0], sockname[1])
        )

        try:
            Server.serve_forever(self, poll_interval)
        except KeyboardInterrupt:
            pass


class ThreadedHTTPSAuthServer(ThreadingMixIn, HTTPSAuthServer):
    daemon_threads = True


def serve_https(bind=None, port=8000, users=None, passwords=None, keys=None,
                servercert=None, cacert=None, threaded=False,
                HandlerClass=AuthHandler):
    if threaded:
        ServerClass = ThreadedHTTPSAuthServer
    else:
        ServerClass = HTTPSAuthServer

    addrinfo = socket.getaddrinfo(
        bind, port, 0, socket.SOCK_STREAM, 0, socket.AI_PASSIVE)[0]
    ServerClass.address_family = addrinfo[0]
    addr = addrinfo[4]

    server = ServerClass(addr, HandlerClass)
    server.set_auth(users, passwords, keys)
    server.set_certs(servercert, cacert)
    server.serve_forever()


def random_string(length):
    return ''.join([random.choice(
        string.ascii_letters +
        string.digits +
        string.punctuation) for i in range(length)])


def split_or_none(val):
    if val is None:
        return None
    return val.split(' ')


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(
        description='An HTTPS server with Basic authentication '
                    'and client certificate authentication',
        formatter_class=argparse.RawTextHelpFormatter)

    parser.add_argument('port', nargs='?', type=int, default=8000)
    parser.add_argument('-b', '--bind', metavar='ADDRESS')
    parser.add_argument('-t', '--threaded', action='store_true')
    parser.add_argument('-u', '--users', nargs='*',
                        default=split_or_none(os.getenv(ENV_USERS)))
    parser.add_argument('-p', '--passwords', nargs='*',
                        default=split_or_none(os.getenv(ENV_PASSWORDS)))
    parser.add_argument('-k', '--keys', nargs='*',
                        default=split_or_none(os.getenv(ENV_KEYS)))
    parser.add_argument('-r', '--random', type=int)
    parser.add_argument('-s', '--servercert')
    parser.add_argument('-c', '--cacert')
    parser.add_argument('-d', '--docroot')
    args = parser.parse_args()

    if args.servercert is not None:
        args.servercert = os.path.abspath(args.servercert)

    if args.cacert is not None:
        args.cacert = os.path.abspath(args.cacert)

    if args.docroot is not None:
        print('Set docroot to %s' % args.docroot)
        os.chdir(args.docroot)

    if args.random is not None:
        args.users = [random_string(args.random)]
        args.passwords = [random_string(args.random)]
        print('Generated username and password -> {} : {}'.format(
            args.users[0], args.passwords[0])
        )

    serve_https(args.bind, args.port, args.users, args.passwords,
                args.keys, args.servercert, args.cacert, args.threaded)
