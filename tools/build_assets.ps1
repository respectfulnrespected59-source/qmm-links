# Rebuild every image and video the site serves, from the ORIGINALS in the game repos and
# the download cache. Nothing under assets/ is hand-edited: if a screenshot needs to change,
# recapture it in its own repo and re-run this.
#
# Why a script and not a one-off copy: the covers come from Amazon, the racer stills come out
# of qmm-racing-3d/docs/reel, the chess stills out of bloodlines-noble-chess/store, and the
# Gumroad art out of public-files.gumroad.com. Four sources, four naming schemes, one page
# that has to load fast on a phone. Doing it by hand once means the next pass is guesswork.
#
#   powershell -File tools/build_assets.ps1
#
# Requires ffmpeg on PATH (it does the scaling and the encodes).

$ErrorActionPreference = 'Stop'
$ROOT   = Split-Path -Parent $PSScriptRoot
$IMG    = Join-Path $ROOT 'assets\img'
$VID    = Join-Path $ROOT 'assets\video'
$RACE3D = 'C:\Users\respe\qmm-racing-3d'
$RACE2D = 'C:\Users\respe\qmm-racing'
$CHESS  = 'C:\Users\respe\bloodlines-noble-chess'
$CACHE  = Join-Path $PSScriptRoot '_cache'

New-Item -ItemType Directory -Force -Path $IMG, $VID, $CACHE | Out-Null

function Shrink($src, $dst, $w, $q) {
  if (-not (Test-Path $src)) { Write-Warning "missing: $src"; return }
  ffmpeg -y -hide_banner -loglevel error -i $src -vf "scale=${w}:-2:flags=lanczos" -q:v $q $dst
  $kb = [int]((Get-Item $dst).Length / 1KB)
  Write-Output ("  {0,-28} {1,5} KB" -f (Split-Path $dst -Leaf), $kb)
}

# Crop-to-16:9 first. The 2D racer renders ultrawide (1920x881) and the chess store shots are
# already 16:9 — letting a card stretch either one is the difference between a screenshot and
# a smear.
function Shrink169($src, $dst, $w, $q) {
  if (-not (Test-Path $src)) { Write-Warning "missing: $src"; return }
  ffmpeg -y -hide_banner -loglevel error -i $src `
    -vf "crop='min(iw,ih*16/9)':'min(ih,iw*9/16)',scale=${w}:-2:flags=lanczos" -q:v $q $dst
  $kb = [int]((Get-Item $dst).Length / 1KB)
  Write-Output ("  {0,-28} {1,5} KB" -f (Split-Path $dst -Leaf), $kb)
}

# ---- book covers -------------------------------------------------------------------
# Pulled from Amazon's media CDN at _SY1000_ (the /images/P/<ASIN> endpoint caps at 334x500,
# which is too soft for a 2x card). ASIN -> image id was read off each product page; the
# mapping is recorded here because the search page is the only place that publishes it.
Write-Output 'books'
$BOOKS = @(
  @{ slug = 'book-magnum-opus';     img = '81LmNZmkwtL' }   # B0GKZSPH45
  @{ slug = 'book-cosmic-lie';      img = '81jxZxYlMQL' }   # B0GB6L4MR3
  @{ slug = 'book-melanin-key';     img = '61fLtlkiBXL' }   # B0GJN5DPCQ
  @{ slug = 'book-legacy-document'; img = '81RPX2ygGhL' }   # B0GRPMVX8S
  @{ slug = 'book-sea-moss';        img = '71U04Mgv9gL' }   # B0GQ54G8F2
)
foreach ($b in $BOOKS) {
  $raw = Join-Path $CACHE ($b.slug + '.src.jpg')
  if (-not (Test-Path $raw)) {
    Invoke-WebRequest -Uri ('https://m.media-amazon.com/images/I/' + $b.img + '._SY1000_.jpg') `
      -OutFile $raw -UseBasicParsing -TimeoutSec 60
  }
  Shrink $raw (Join-Path $IMG ($b.slug + '.jpg')) 520 4
}

# ---- Gumroad product art -----------------------------------------------------------
Write-Output 'gumroad'
$GR = @(
  @{ slug = 'gr-starter-map'; id = 'q404fhskzdhtjc37qeptyqe6fl6i' }
  @{ slug = 'gr-builder-kit'; id = 's7phzlaawrlsqrjkxb8t823oqdeh' }
  @{ slug = 'gr-dwy-build';   id = '4p43mykfvk6qyfzzqoyjgces3aum' }
  @{ slug = 'gr-detail-kit';  id = '6gor2gao4rxkdsqjlvat45n56cnu' }
  @{ slug = 'gr-karen';       id = 'v3pi0od62dkr42c7f3al3hunpc1c' }
)
foreach ($g in $GR) {
  $raw = Join-Path $CACHE ($g.slug + '.src.png')
  if (-not (Test-Path $raw)) {
    Invoke-WebRequest -Uri ('https://public-files.gumroad.com/' + $g.id) `
      -OutFile $raw -UseBasicParsing -TimeoutSec 60
  }
  Shrink169 $raw (Join-Path $IMG ($g.slug + '.jpg')) 860 5
}

# ---- QUANTUM MOTORS 3D -------------------------------------------------------------
# Posters come out of tools/reel.mjs, which shoots with ?clean=1 — no mute/pause cluster, no
# fps readout. The qa_*.png in the repo root all carry the dev chrome and are the wrong
# picture for a storefront.
Write-Output 'quantum motors 3d'
Shrink169 "$RACE3D\docs\reel\gold.jpg"  (Join-Path $IMG 'qm3d-gold.jpg')  1100 4
Shrink169 "$RACE3D\docs\reel\sf.jpg"    (Join-Path $IMG 'qm3d-sf.jpg')    1100 4
Shrink169 "$RACE3D\docs\reel\egypt.jpg" (Join-Path $IMG 'qm3d-egypt.jpg') 1100 4
Shrink169 "$RACE3D\docs\reel\mali.jpg"  (Join-Path $IMG 'qm3d-mali.jpg')  1100 4

# ---- QUANTUM MOTORS (2D arcade) ----------------------------------------------------
Write-Output 'quantum motors 2d'
Shrink169 "$RACE2D\.shots\race9i-06.png" (Join-Path $IMG 'qm2d-drift.jpg') 1100 4

# ---- BLOODLINES ---------------------------------------------------------------------
Write-Output 'bloodlines'
Shrink169 "$CHESS\store\screenshot-cosmos.png"   (Join-Path $IMG 'chess-cosmos.jpg')   1100 4
Shrink169 "$CHESS\store\screenshot-shogun.png"   (Join-Path $IMG 'chess-shogun.jpg')   1100 4
Shrink169 "$CHESS\store\screenshot-mali.png"     (Join-Path $IMG 'chess-mali.jpg')     1100 4
Shrink169 "$CHESS\store\screenshot-select.png"   (Join-Path $IMG 'chess-select.jpg')   1100 4
Shrink169 "$CHESS\store\screenshot-tutorial.png" (Join-Path $IMG 'chess-tutorial.jpg') 1100 4

# ---- hero reel ----------------------------------------------------------------------
# 1152x648 is the compromise: sharp enough to fill a desktop hero behind a dark scrim,
# small enough that a phone on cellular is not paying 8 MB to watch a background loop.
# webm first in the <video>, mp4 second — Safari takes the mp4, everything else the webm.
Write-Output 'hero reel'
$src = "$RACE3D\docs\reel\_frames_gold\list.txt"
if (Test-Path $src) {
  ffmpeg -y -hide_banner -loglevel error -f concat -safe 0 -i $src -fps_mode cfr -r 24 `
    -vf 'scale=1152:648' -c:v libx264 -preset veryslow -crf 32 -pix_fmt yuv420p `
    -movflags +faststart (Join-Path $VID 'qm3d-reel.mp4')
  ffmpeg -y -hide_banner -loglevel error -f concat -safe 0 -i $src -fps_mode cfr -r 24 `
    -vf 'scale=1152:648' -c:v libvpx-vp9 -b:v 800k -row-mt 1 -pix_fmt yuv420p `
    (Join-Path $VID 'qm3d-reel.webm')
  Shrink169 "$RACE3D\docs\reel\gold.jpg" (Join-Path $VID 'qm3d-reel.jpg') 1152 5
  foreach ($f in 'qm3d-reel.mp4', 'qm3d-reel.webm') {
    $p = Join-Path $VID $f
    Write-Output ("  {0,-28} {1,5} KB" -f $f, [int]((Get-Item $p).Length / 1KB))
  }
} else {
  Write-Warning "no gold frames — run: node tools/reel.mjs gold --secs 14 --w 1280 --h 720 (in $RACE3D)"
}

Write-Output ''
Write-Output ("total assets/: {0:N1} MB" -f ((Get-ChildItem (Join-Path $ROOT 'assets') -Recurse -File | Measure-Object Length -Sum).Sum / 1MB))
