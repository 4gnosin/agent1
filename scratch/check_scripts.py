import re
from pathlib import Path

html = Path("site/index.html").read_text(encoding="utf-8")
scripts = re.findall(r'<script\b[^>]*\bsrc=["\']([^"\']+)["\']', html)
print("Total scripts:", len(scripts))

missing = []
for s in scripts:
    if s.startswith("http"):
        continue
    p = Path("site") / s
    if not p.is_file():
        missing.append(s)

print("Missing count:", len(missing))
if missing:
    for m in missing:
        print("  Missing:", m)
