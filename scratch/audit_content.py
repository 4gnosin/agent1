import os, re, json
from pathlib import Path

content_dir = Path("site/content")
images_dir = Path("site/images")

issues = []

for js_file in content_dir.rglob("*.js"):
    text = js_file.read_text(encoding="utf-8")
    rel_path = js_file.relative_to(Path("."))
    
    # Check 1: Mismatched delimiters like \( ... \} or \[ ... \)
    bad_delim = re.findall(r'(\\?\(.*?[^\\]\\?\})', text)
    if bad_delim:
        issues.append((str(rel_path), "Mismatched delimiter \\( ... \\}", bad_delim[:3]))
        
    bad_delim2 = re.findall(r'(\\?\[.*?[^\\]\\?\))', text)
    if bad_delim2:
        issues.append((str(rel_path), "Mismatched delimiter \\[ ... \\)", bad_delim2[:3]))
        
    # Check 2: Unclosed \text{ or missing braces inside math
    unclosed_text = re.findall(r'(\\text\{[^{}\n]*?(?:\\[)\]$]|"|,))', text)
    if unclosed_text:
        issues.append((str(rel_path), "Unclosed \\text{", unclosed_text[:3]))
        
    # Check 3: Check referenced images
    img_refs = re.findall(r'"src"\s*:\s*"([^"]+)"', text)
    for src in img_refs:
        src_clean = src.strip()
        img_file = Path("site") / src_clean
        if not img_file.exists():
            issues.append((str(rel_path), f"Missing image file: {src_clean}", []))
        else:
            # Check if image is tiny / blank artifact
            size = img_file.stat().st_size
            if size < 2000:
                issues.append((str(rel_path), f"Suspiciously tiny image ({size} bytes): {src_clean}", []))

print(f"Total issues found: {len(issues)}")
for path, kind, details in issues:
    print(f"[{path}] {kind} -> {details}")
