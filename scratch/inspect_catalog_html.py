import sys, re
sys.stdout.reconfigure(encoding="utf-8")

with open("site/index.html", encoding="utf-8", errors="ignore") as f:
    text = f.read()

idx = text.find("SUBJECTS")
print(text[idx:idx+1200])
