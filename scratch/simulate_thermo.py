import re
import json
from pathlib import Path

# Load all thermo files in order of index.html
html = Path("site/index.html").read_text(encoding="utf-8")
scripts = re.findall(r'<script\b[^>]*\bsrc=["\']([^"\']+)["\']', html)

thermo_scripts = [s for s in scripts if "thermod" in s or "thermo" in s]
print("Thermo scripts count:", len(thermo_scripts))

# Let's inspect sections in content/b/thermod/
sections = []
for s in thermo_scripts:
    if "content/b/thermod/" in s:
        p = Path("site") / s
        code = p.read_text(encoding="utf-8")
        # Find num and title
        nums = re.findall(r'"num":\s*"([^"]+)"', code)
        slugs = re.findall(r'"slug":\s*"([^"]+)"', code)
        titles = re.findall(r'"title":\s*"([^"]+)"', code)
        print(f"File {s}: num={nums}, slug={slugs}")
        if nums:
            sections.append({"num": nums[0], "slug": slugs[0], "file": s})

print("\nAll sections found:")
for sec in sections:
    ch = sec["num"].split(".")[0]
    print(f"  Chapter {ch} | num={sec['num']} | slug={sec['slug']} ({sec['file']})")

chapter_ids = sorted(list(set(s["num"].split(".")[0] for s in sections)), key=lambda x: int(x) if x.isdigit() else 999)
print("\nUnique chapters of sections:", chapter_ids)
