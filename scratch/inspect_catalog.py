import sys, re
sys.stdout.reconfigure(encoding="utf-8")

with open("site/js/catalog.js", encoding="utf-8", errors="ignore") as f:
    text = f.read()

matches = re.findall(r'id:\s*["\']([^"\']+)["\'],\s*title:\s*["\']([^"\']+)["\']', text)
for m in matches:
    print(m)
