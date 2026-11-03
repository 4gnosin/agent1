import fitz

doc = fitz.open('data/inbox/done/b_thermod_ch12.pdf')
p13 = doc[12]

# Let's crop from y=170 to y=330
clip = fitz.Rect(100, 170, 480, 335)
pix = p13.get_pixmap(clip=clip, dpi=200)
pix.save("scratch_crop_roof.png")
print("Saved scratch_crop_roof.png", pix.width, pix.height)
