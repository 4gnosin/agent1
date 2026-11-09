import sys
sys.stdout.reconfigure(encoding="utf-8")

with open("edubooks.py", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

for i, l in enumerate(lines[25:95]):
    print(f"{i+26}: {repr(l.strip())}")
