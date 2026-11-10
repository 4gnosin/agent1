import subprocess, re

res = subprocess.run([
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--disable-gpu",
    "--allow-file-access-from-files",
    "--virtual-time-budget=5000",
    "--dump-dom",
    "file:///C:/Users/konst/OneDrive/Desktop/agent/site/index.html#/stoixeia-michanon/board/ch14-25714"
], capture_output=True, text=True, encoding="utf-8")

print("DOM len:", len(res.stdout))
imgs = re.findall(r'<img[^>]+src="([^">]+)"', res.stdout)
print("Images displayed on exercise 25714:", imgs)

# Check exercise title / stem
m = re.search(r'class="ex-stem"[^>]*>([\s\S]*?)</div>', res.stdout)
if m:
    print("Stem:", m.group(1).strip()[:150])
else:
    # try p or kicker
    m2 = re.search(r'<h1[^>]*>([\s\S]*?)</h1>', res.stdout)
    if m2:
        print("H1:", m2.group(1).strip())
