import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class CustomHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory='site', **kwargs)

if __name__ == '__main__':
    server = ThreadingHTTPServer(('localhost', 8000), CustomHandler)
    print("Serving site on port 8000 (multithreaded)...")
    server.serve_forever()
