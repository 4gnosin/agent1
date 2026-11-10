import subprocess, re

res = subprocess.run([
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--disable-gpu",
    "--allow-file-access-from-files",
    "--virtual-time-budget=5000",
    "--dump-dom",
    "file:///C:/Users/konst/OneDrive/Desktop/agent/site/index.html#/antoxi/notes/ch06-sec-02"
], capture_output=True, text=True, encoding="utf-8")

print("katex-error count in DOM:", res.stdout.count("katex-error"))
print("katex spans count in DOM:", res.stdout.count('class="katex'))

# Check image in note
imgs = re.findall(r'<img[^>]+src="([^">]+)"', res.stdout)
print("Images found in DOM:", imgs)
