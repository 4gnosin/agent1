import os
import sys
from pathlib import Path
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

BASE_DIR = Path(__file__).resolve().parent.parent if Path(__file__).resolve().parent.name == "scripts" else Path(__file__).resolve().parent
site_dir = str(BASE_DIR / 'site')

class CustomHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=site_dir, **kwargs)

if __name__ == '__main__':
    server = ThreadingHTTPServer(('localhost', 8000), CustomHandler)
    print("Serving site on port 8000 (multithreaded)...")
    server.serve_forever()
