import sys
sys.stdout.reconfigure(encoding="utf-8")

with open("trapeza7.py", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

for i in range(320, 375):
    print(f"{i+1}: {lines[i]}", end="")
