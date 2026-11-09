with open("trapeza7.py", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if "inbox" in l.lower() or "output" in l.lower() or "write(" in l or "save" in l:
        if i > 250:
            print(f"{i+1}: {repr(l.strip())}")
