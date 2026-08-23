"""Build the Open Graph card for /work/.

The page originally reused the 1600x1000 desktop-and-phone composite as its OG image.
LinkedIn, which is the main place this link gets pasted, renders link cards at roughly
1.91:1 and centre-crops anything taller -- so a 1.6:1 image loses the top and bottom,
which on that composite is the browser chrome and the phone's stat block. This builds a
proper 1200x630 card instead: the pitch on the left, a real screenshot on the right.
"""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = r"C:\Users\respe\qmm-links\assets\img\work-og.jpg"
SHOT = r"C:\Users\respe\qmm-links\tools\_shots\_work__desktop.png"

W, H = 1200, 630
INK = (7, 5, 13)
GOLD = (232, 194, 90)
TXT = (243, 239, 230)
MUT = (169, 159, 192)
LINE = (44, 33, 64)

F = r"C:\Windows\Fonts"
serif = lambda s: ImageFont.truetype(os.path.join(F, "georgia.ttf"), s)
sans = lambda s: ImageFont.truetype(os.path.join(F, "segoeui.ttf"), s)
sansb = lambda s: ImageFont.truetype(os.path.join(F, "segoeuib.ttf"), s)

card = Image.new("RGB", (W, H), INK)
d = ImageDraw.Draw(card)

# Screenshot bleeding off the right edge, dimmed and faded into the background so the
# text side stays the thing you read first.
shot = Image.open(SHOT).convert("RGB").crop((0, 64, 1440, 964))
sw = 620
shot = shot.resize((sw, round(shot.height * sw / shot.width)), Image.LANCZOS)
shot = shot.crop((0, 0, sw, min(shot.height, H - 120)))
sx, sy = W - sw + 40, 62
card.paste(shot, (sx, sy))

# Horizontal fade on the screenshot's left edge, so it dissolves into the panel instead
# of butting against the copy with a hard seam.
fade = Image.new("L", (200, shot.height))
fd = ImageDraw.Draw(fade)
for x in range(200):
    fd.line([(x, 0), (x, shot.height)], fill=int(255 * (1 - x / 200)))
card.paste(Image.new("RGB", (200, shot.height), INK), (sx, sy), fade)

# Vertical fade at the bottom edge for the same reason.
vfade = Image.new("L", (sw, 90))
vd = ImageDraw.Draw(vfade)
for y in range(90):
    vd.line([(0, y), (sw, y)], fill=int(255 * (y / 90)))
card.paste(Image.new("RGB", (sw, 90), INK), (sx, sy + shot.height - 90), vfade)

x = 64
d.text((x, 74), "AVAILABLE FOR FREELANCE", font=sansb(15), fill=GOLD)
d.text((x, 136), "You are standing", font=serif(52), fill=TXT)
d.text((x, 196), "in ", font=serif(52), fill=TXT)
w = d.textlength("in ", font=serif(52))
d.text((x + w, 196), "the portfolio.", font=serif(52), fill=GOLD)

d.text((x, 288), "Robert Hadden Jr. builds fast sites and the", font=sans(21), fill=MUT)
d.text((x, 318), "automation behind them.", font=sans(21), fill=MUT)

d.line([(x, 382), (x + 470, 382)], fill=LINE, width=1)

stats = [("74 KB", "PAGE"), ("0", "FRAMEWORKS"), ("~0.5s", "TTFB"), ("2", "3D GAMES")]
cx = x
for value, label in stats:
    d.text((cx, 404), value, font=serif(34), fill=GOLD)
    d.text((cx, 448), label, font=sansb(12), fill=MUT)
    cx += max(d.textlength(value, font=serif(34)),
              d.textlength(label, font=sansb(12))) + 34

d.text((x, 524), "quantummelaninmedia.com/work/", font=sansb(20), fill=TXT)

card.save(OUT, "JPEG", quality=88, optimize=True, progressive=True)
print(f"{OUT}  {W}x{H}  {os.path.getsize(OUT)//1024} KB")
