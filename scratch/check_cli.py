import sys, re
sys.stdout.reconfigure(encoding="utf-8")

with open("src/cli.py", encoding="utf-8", errors="ignore") as f:
    text = f.read()

subcmds = re.findall(r'add_parser\(\s*["\']([^"\']+)["\']', text)
print("CLI subcommands:", subcmds)
