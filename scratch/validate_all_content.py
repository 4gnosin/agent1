import re, json, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from src.validators.site_validator import SiteValidator

content_dir = Path("site/content")

def check_math_delimiters(text, file_name):
    errors = []
    
    # 1. Delimiter typos like \(...\} or \[...\)
    # Match \( that is followed by \} before any \)
    for m in re.finditer(r'\\\(+([^)]*?)\\\}', text):
        errors.append(f"Mismatched delimiter: opened with \\( but closed with \\}}: '{m.group(0)}'")
        
    for m in re.finditer(r'\\\[+([^\]]*?)\\\)', text):
        errors.append(f"Mismatched delimiter: opened with \\[ but closed with \\): '{m.group(0)}'")

    # 2. Check for double parentheses around math like ((sigma)) or ((F_{\mu}))
    for m in re.finditer(r'\(\([A-Za-z0-9_\\]+\)\)', text):
        errors.append(f"Double parentheses artifact: '{m.group(0)}'")

    # 3. Check for unclosed \text{
    # Inside \(...\) or \[...\] or $...$
    math_blocks = re.findall(r'(\\\([\s\S]*?\\\)|\\[[\s\S]*?\\]|\$[^\$\n]+\$)', text)
    for mb in math_blocks:
        # Check braces balance in math block
        if mb.count('{') != mb.count('}'):
            errors.append(f"Unbalanced braces in math: '{mb}'")
        # Check \text{...}
        if r'\text{' in mb and mb.count(r'\text{') > mb.count('}'):
            errors.append(f"Unclosed \\text in: '{mb}'")

    return errors

all_errors = {}

for js_file in content_dir.rglob("*.js"):
    text = js_file.read_text(encoding="utf-8")
    errs = check_math_delimiters(text, js_file.name)
    
    # Also check image blocks
    for m in re.finditer(r'"type"\s*:\s*"image"[\s\S]*?"src"\s*:\s*"([^"]+)"', text):
        src = m.group(1).strip()
        p = Path("site") / src
        if not p.exists():
            errs.append(f"Referenced image does not exist: {src}")
        elif p.stat().st_size < 1500:
            errs.append(f"Referenced image is suspicious/blank artifact ({p.stat().st_size} bytes): {src}")
            
    if errs:
        all_errors[str(js_file.relative_to(Path(".")))] = errs

print(f"Files with errors: {len(all_errors)}")
for f, errs in all_errors.items():
    print(f"\n--- {f} ---")
    for e in errs:
        print(f"  * {e}")
