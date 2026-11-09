with open("trapeza7.py", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

for i in range(545, 615):
    if i < len(lines):
        print(f"{i+1}: {lines[i]}", end="")
