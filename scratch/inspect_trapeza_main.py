import sys
sys.stdout.reconfigure(encoding="utf-8")

with open("trapeza7.py", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if "async def main" in l or "def main" in l or "if __name__" in l or "input(" in l:
        print(f"{i+1}: {repr(l.strip())}")
