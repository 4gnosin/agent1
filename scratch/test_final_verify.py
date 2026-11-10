import subprocess, re

for url in [
    "file:///C:/Users/konst/OneDrive/Desktop/agent/site/index.html#/antoxi/notes/ch06-sec-02",
    "file:///C:/Users/konst/OneDrive/Desktop/agent/site/index.html#/antoxi/notes/ch06-perilipsi"
]:
    res = subprocess.run([
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "--headless=new",
        "--disable-gpu",
        "--allow-file-access-from-files",
        "--virtual-time-budget=5000",
        "--dump-dom",
        url
    ], capture_output=True, text=True, encoding="utf-8")
    
    slug = url.split('/')[-1]
    errs = res.stdout.count("katex-error")
    spans = res.stdout.count('class="katex')
    imgs = re.findall(r'<figure[^>]*note-image[^>]*>[\s\S]*?<img[^>]+src="([^">]+)"', res.stdout)
    print(f"[{slug}] katex-errors: {errs}, katex-rendered: {spans}, note-images: {imgs}")
