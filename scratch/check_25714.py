import fitz
from PIL import Image

doc = fitz.open('25714-1.pdf')
page = doc[0]

for idx, img in enumerate(page.get_image_info()):
    print(f"Image {idx}: bbox={img['bbox']}, size={img['width']}x{img['height']}, colorspace={img['colorspace']}")

# Let's inspect drawing rects
print(f"Drawings count: {len(page.get_drawings())}")
for d in page.get_drawings():
    print(f"Drawing rect: {d['rect']}, items: {len(d['items'])}")

# Check text around y=100..250
print("--- Text in y=[100, 250] ---")
for b in page.get_text('blocks'):
    if b[1] >= 100 and b[3] <= 260:
        print(f"Block: {b[:4]} -> {repr(b[4])}")
