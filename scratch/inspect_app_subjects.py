import sys, re
sys.stdout.reconfigure(encoding="utf-8")

with open("site/js/app.js", encoding="utf-8", errors="ignore") as f:
    text = f.read()

idx = text.find("const SUBJECTS =")
if idx == -1:
    idx = text.find("SUBJECTS =")
print(text[idx:idx+1500])
