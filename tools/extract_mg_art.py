"""Render selected Melanin Guardians pages out of the volume PDFs into assets/img.

Why render the PAGE rather than pull the embedded image: every page in these files is a
single full-bleed image with zero text, so the two are nearly the same picture -- but
rendering keeps the page trim and the true aspect, and Vol.1 stores its art at a size where
the raw stream is ~12 MB a page. Rendering to a fixed height gets a web asset in one step.

The source PDFs live in Downloads, not in a repo, so this is guarded: if they are not there
it prints what is missing and leaves whatever is already in assets/img alone. Re-run it after
a new volume drops.

    python tools/extract_mg_art.py
"""
import os
import sys

try:
    import fitz  # PyMuPDF
except ImportError:
    sys.exit("PyMuPDF not installed:  python -m pip install pymupdf")

SRC = r"C:\Users\respe\Downloads"
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "img")
HEIGHT = 1100          # tall enough to read a page in the lightbox, small enough to ship

VOLS = {
    "v1": "MELANIN_GUARDIANS_VOL_01_THE_FIRST_SPARK.pdf",
    "v2": "MELANIN_GUARDIANS_VOL_02_THE_OTHERS.pdf",
    "v3": "MELANIN_GUARDIANS_VOL_03_THE_AWAKENING_MISSION.pdf",
    "v4": "MELANIN_GUARDIANS_VOL_04_NUVENUS_RISING.pdf",
}

# (slug, volume, 1-based page). Chosen off a contact sheet of all 119 pages for composition
# and for the house palette -- hero gold, melanated cast, no cropped faces at thumbnail size.
PAGES = [
    ("mg-v1-awakening", "v1", 7),
    ("mg-v1-team",      "v1", 19),
    ("mg-v2-whoom",     "v2", 17),
    ("mg-v2-surge",     "v2", 20),
    ("mg-v3-five",      "v3", 8),
    ("mg-v3-venus",     "v3", 19),
    ("mg-v4-portal",    "v4", 6),
    ("mg-v4-newearth",  "v4", 23),
]

os.makedirs(OUT, exist_ok=True)
missing = [n for n in VOLS.values() if not os.path.exists(os.path.join(SRC, n))]
if missing:
    sys.exit("missing volume PDF(s):\n  " + "\n  ".join(missing))

docs = {tag: fitz.open(os.path.join(SRC, name)) for tag, name in VOLS.items()}
for slug, vol, page in PAGES:
    doc = docs[vol]
    if page > len(doc):
        print(f"  {slug}: {vol} has only {len(doc)} pages, skipped")
        continue
    pg = doc[page - 1]
    zoom = HEIGHT / pg.rect.height
    pix = pg.get_pixmap(matrix=fitz.Matrix(zoom, zoom))
    dst = os.path.join(OUT, slug + ".jpg")
    pix.save(dst, jpg_quality=82)
    print(f"  {slug:<20} {vol} p{page:<3} {pix.width}x{pix.height}  {os.path.getsize(dst)//1024} KB")
for d in docs.values():
    d.close()
