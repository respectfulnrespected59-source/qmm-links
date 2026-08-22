# Rebuild every image and video the site serves, from the ORIGINALS in the game repos and
# from the storefronts. Nothing under assets/ is hand-edited: if a screenshot needs to
# change, recapture it in its own repo and re-run this.
#
# Four sources, four naming schemes, one page that has to load fast on a phone:
#   Amazon media CDN ...... book covers        (image id read off each product page)
#   public-files.gumroad .. product art        (id read off each product's og:image)
#   i.ytimg.com ........... video thumbnails   (the Watch section is a facade, see below)
#   local game repos ...... screenshots + reels
#
#   powershell -File tools/build_assets.ps1
#
# Requires ffmpeg on PATH (it does all the scaling and the encodes).
#
# ASCII ONLY, deliberately. Windows PowerShell 5.1 reads a BOM-less .ps1 as ANSI, and a
# UTF-8 em-dash decodes to a curly quote that the parser treats as a string delimiter --
# the file then fails with "missing terminator" a hundred lines from the real cause.

$ErrorActionPreference = 'Stop'
$ROOT   = Split-Path -Parent $PSScriptRoot
$IMG    = Join-Path $ROOT 'assets\img'
$VID    = Join-Path $ROOT 'assets\video'
$RACE3D = 'C:\Users\respe\qmm-racing-3d'
$RACE2D = 'C:\Users\respe\qmm-racing'
$CHESS  = 'C:\Users\respe\bloodlines-noble-chess'
$CACHE  = Join-Path $PSScriptRoot '_cache'

New-Item -ItemType Directory -Force -Path $IMG, $VID, $CACHE | Out-Null

function Grab($url, $dst) {
  if (-not (Test-Path $dst)) { Invoke-WebRequest -Uri $url -OutFile $dst -UseBasicParsing -TimeoutSec 60 }
  return $dst
}
function Shrink($src, $dst, $w, $q) {
  if (-not (Test-Path $src)) { Write-Warning "missing: $src"; return }
  ffmpeg -y -hide_banner -loglevel error -i $src -vf "scale=${w}:-2:flags=lanczos" -q:v $q $dst
  Write-Output ("  {0,-30} {1,5} KB" -f (Split-Path $dst -Leaf), [int]((Get-Item $dst).Length / 1KB))
}
# Crop to 16:9 FIRST. The 2D racer renders ultrawide (1920x881) and Gumroad art is 16:9
# already; letting a card stretch either one is the difference between a screenshot and a
# smear.
function Shrink169($src, $dst, $w, $q) {
  if (-not (Test-Path $src)) { Write-Warning "missing: $src"; return }
  ffmpeg -y -hide_banner -loglevel error -i $src `
    -vf "crop='min(iw,ih*16/9)':'min(ih,iw*9/16)',scale=${w}:-2:flags=lanczos" -q:v $q $dst
  Write-Output ("  {0,-30} {1,5} KB" -f (Split-Path $dst -Leaf), [int]((Get-Item $dst).Length / 1KB))
}

# ---- book covers -------------------------------------------------------------------
# _SY1000_ off the media CDN. The /images/P/<ASIN> endpoint caps at 334x500, too soft for a
# 2x card. ASIN -> image id was read off each product page; the search results are the only
# place that publishes the pairing, so it is recorded here.
Write-Output 'books'
$BOOKS = @(
  @{ slug = 'book-magnum-opus';     img = '81LmNZmkwtL' }   # B0GKZSPH45
  @{ slug = 'book-cosmic-lie';      img = '81jxZxYlMQL' }   # B0GB6L4MR3
  @{ slug = 'book-melanin-key';     img = '61fLtlkiBXL' }   # B0GJN5DPCQ
  @{ slug = 'book-quantum-code';    img = '81WwMwvyCLL' }   # B0G6XVTDK2
  @{ slug = 'book-holographic';     img = '81NhkdsTxkL' }   # B0G59TYPMT
  @{ slug = 'book-legacy-document'; img = '81RPX2ygGhL' }   # B0GRPMVX8S
  @{ slug = 'book-sea-moss';        img = '71U04Mgv9gL' }   # B0GQ54G8F2
)
foreach ($b in $BOOKS) {
  $raw = Grab ('https://m.media-amazon.com/images/I/' + $b.img + '._SY1000_.jpg') (Join-Path $CACHE ($b.slug + '.src.jpg'))
  Shrink $raw (Join-Path $IMG ($b.slug + '.jpg')) 520 4
}

# ---- Gumroad product art -----------------------------------------------------------
# The store profile is client-rendered, so these ids came from a headless pass over the
# rendered DOM rather than from the page source. Keep the slug -> id table here; it is the
# only durable record of which artwork belongs to which permalink.
Write-Output 'gumroad'
$GR = @(
  @{ slug = 'gr-starter-map';    id = 'q404fhskzdhtjc37qeptyqe6fl6i' }  # cmphu
  @{ slug = 'gr-builder-kit';    id = 's7phzlaawrlsqrjkxb8t823oqdeh' }  # ooduha
  @{ slug = 'gr-dwy-build';      id = '4p43mykfvk6qyfzzqoyjgces3aum' }  # qsuiwo
  @{ slug = 'gr-icb-1';          id = 'mgms64ww5qmtawmgyp048e932caa' }  # goofg
  @{ slug = 'gr-icb-2';          id = '4oaj53refg3uqlgs1uhov3544112' }  # gxxjkm
  @{ slug = 'gr-icb-3';          id = 'r3prwom02susi3ubf0825si0kzl5' }  # nfifndf
  @{ slug = 'gr-icb-4';          id = 'dq5n62fek0pyephrc2rvcn7mxs99' }  # divlg
  @{ slug = 'gr-icb-5';          id = '6ant5yaczthujrfwqsezeh8farsw' }  # ovpghf
  @{ slug = 'gr-epi-ponzi';      id = 'dy7rk47qlyao9fy9wzvpkc66bxt0' }  # xztby
  @{ slug = 'gr-epi-archive';    id = 'z22hcr79tkg6zrm9ar8y6qy0a5r3' }  # vqbgmt
  @{ slug = 'gr-epi-bundle';     id = 'txq5vgkwdq4glqstboocakngz8b9' }  # xnkon
  @{ slug = 'gr-mg-origin';      id = '1nbvzpy7644rh5zw620c97cd4tb4' }  # bpofkq
  @{ slug = 'gr-mg-12';          id = 'pab0pgj8ackv7jgwh74zmv3263z7' }  # jdheuj
  @{ slug = 'gr-mg-34';          id = '4e36x7y7xd4pgzziiwsxopnrbs7z' }  # eqiocn
  @{ slug = 'gr-print-melvinci'; id = '0b077ahz25mvfg72y4c2b8x06r6e' }  # vaqhfc
  @{ slug = 'gr-print-kimaya';   id = 'lc9ujaviee9ys0kejdunbc35tpuq' }  # fsvkt
  @{ slug = 'gr-bsa-novella';    id = 'u40x2d5mjsbq8ehrllbiykqo6mfo' }  # ptino
  @{ slug = 'gr-bsa-p1';         id = 'ih1xfhosajzrenxrhx6vi7015atf' }  # prsgzy
  @{ slug = 'gr-bsa-p2';         id = '17zm8ok1wc5y6cw8xuv8i97l0kxr' }  # qtwged
  @{ slug = 'gr-bsa-p3';         id = 'x2lnf12po8miohc66lm2k4d5lcx8' }  # zprxvm
  @{ slug = 'gr-bsa-audio';      id = 'rat9vtc6vam1vx7m87p2mxjgsv6r' }  # pexxev
  @{ slug = 'gr-bsa-all';        id = 'oafjd5uqutsh7iglrqbn49x1o6ga' }  # iplwzk
  @{ slug = 'gr-oms-bundle';     id = 'mut7191l36t029qhupisz0stduwk' }  # kemhax
  @{ slug = 'gr-oms-1';          id = '28zoz3vztkdhd3wfkpr6arnzsre1' }  # htmojg
  @{ slug = 'gr-oms-2';          id = 'e44jbll6d472bk4hq6pquyuh61lv' }  # nvefcv
  @{ slug = 'gr-oms-3';          id = 'istm87rzpk4qw4rc8wdxukq80kgl' }  # wgjqg
  @{ slug = 'gr-oms-4';          id = '13774pcsbhky5h0fgnwqf5r3i6ow' }  # lobti
  @{ slug = 'gr-oms-5';          id = '0joct0wctm5dcgjrad68jcj9d2uk' }  # rvzlh
  @{ slug = 'gr-oms-6';          id = 't9x9wkn7j229ctgqyvzhlv9zfpnm' }  # afiui
  @{ slug = 'gr-oms-7';          id = 'cw3obbee6pza0jd1hk5pdn1a26ff' }  # ncaif
  @{ slug = 'gr-laf-book';       id = 'ddfnce9zpxwxc7ckaolrvu7d2xg8' }  # lywakm
  @{ slug = 'gr-laf-ost';        id = '2f0i5wxaazn80yya9t3v0ailnxqj' }  # bjnkrm
  @{ slug = 'gr-laf-bundle';     id = 'dkostycaj572g1kb9qhfcjfyc6ez' }  # lssur
  @{ slug = 'gr-lom-style';      id = 'itf41vu1jks8ppa29pef5dcl132v' }  # pppjdt
  @{ slug = 'gr-lom-feature';    id = '46b3qaalff30x4s8v9da9f08ewt9' }  # zijain
  @{ slug = 'gr-mansas';         id = 'ryeuec1byur0qjub7omw8airgcsy' }  # bgczvox
  @{ slug = 'gr-alkebulies';     id = 'r0jazt9sain351bgrpvq6zniak56' }  # uflapj
  @{ slug = 'gr-2wrongs';        id = 'jhb7nd0kd7bnmyo3zkoii0g8vdpp' }  # gmpqwy
  @{ slug = 'gr-agent-q23';      id = '4b1pig713pvu4xsrh4defjm4jdxu' }  # nfflqh
  @{ slug = 'gr-tesla';          id = 'qwj510342qurlukoe19ou44ct04j' }  # rvwia
  @{ slug = 'gr-detail-kit';     id = '6gor2gao4rxkdsqjlvat45n56cnu' }  # detailshopkit
  @{ slug = 'gr-karen';          id = 'v3pi0od62dkr42c7f3al3hunpc1c' }  # karen-manuscript-repair
)
foreach ($g in $GR) {
  $raw = Grab ('https://public-files.gumroad.com/' + $g.id) (Join-Path $CACHE ($g.slug + '.src.png'))
  Shrink169 $raw (Join-Path $IMG ($g.slug + '.jpg')) 720 5
}

# ---- Melanin Guardians interior art ------------------------------------------------
# Rendered out of the four volume PDFs by a Python helper (PyMuPDF), because ffmpeg cannot
# read PDF and there is no poppler/ghostscript on this box. Guarded: the PDFs live in
# Downloads rather than in a repo, so a missing file warns and leaves the shipped art alone.
Write-Output 'melanin guardians pages'
try {
  python (Join-Path $PSScriptRoot 'extract_mg_art.py')
  if ($LASTEXITCODE -ne 0) { Write-Warning 'extract_mg_art.py failed - keeping existing mg-*.jpg' }
} catch { Write-Warning "python not available - keeping existing mg-*.jpg" }

# ---- YouTube thumbnails ------------------------------------------------------------
# Downloaded, not hotlinked. The Watch section is a click-to-load facade, so no request
# reaches Google until a visitor actually asks for a video; hotlinking the poster would
# undo that on first paint.
Write-Output 'youtube'
$YT = @(
  @{ slug = 'yt-stack';     id = '9mGXmo48cMY' }
  @{ slug = 'yt-guardians'; id = 'SmdGmL4K_CI' }
  @{ slug = 'yt-racing';    id = '4kITY75evOU' }
  @{ slug = 'yt-truth';     id = 'ZoS3cFbVQrY' }
)
foreach ($v in $YT) {
  $raw = Join-Path $CACHE ($v.slug + '.src.jpg')
  if (-not (Test-Path $raw)) {
    try { Invoke-WebRequest -Uri ('https://i.ytimg.com/vi/' + $v.id + '/maxresdefault.jpg') -OutFile $raw -UseBasicParsing -TimeoutSec 60 }
    catch { Invoke-WebRequest -Uri ('https://i.ytimg.com/vi/' + $v.id + '/hqdefault.jpg') -OutFile $raw -UseBasicParsing -TimeoutSec 60 }
  }
  Shrink169 $raw (Join-Path $IMG ($v.slug + '.jpg')) 900 4
}

# ---- QUANTUM MOTORS 3D -------------------------------------------------------------
# Posters come out of tools/reel.mjs, which shoots with ?clean=1 -- no mute/pause cluster,
# no fps readout. The qa_*.png in that repo's root all carry the dev chrome and are the
# wrong picture for a storefront.
Write-Output 'quantum motors 3d'
Shrink169 "$RACE3D\docs\reel\gold.jpg"  (Join-Path $IMG 'qm3d-gold.jpg')  1100 4
Shrink169 "$RACE3D\docs\reel\sf.jpg"    (Join-Path $IMG 'qm3d-sf.jpg')    1100 4
Shrink169 "$RACE3D\docs\reel\egypt.jpg" (Join-Path $IMG 'qm3d-egypt.jpg') 1100 4
Shrink169 "$RACE3D\docs\reel\mali.jpg"  (Join-Path $IMG 'qm3d-mali.jpg')  1100 4

Write-Output 'quantum motors 2d'
Shrink169 "$RACE2D\.shots\race9i-06.png" (Join-Path $IMG 'qm2d-drift.jpg') 1100 4

Write-Output 'bloodlines'
Shrink169 "$CHESS\store\screenshot-cosmos.png"   (Join-Path $IMG 'chess-cosmos.jpg')   1100 4
Shrink169 "$CHESS\store\screenshot-shogun.png"   (Join-Path $IMG 'chess-shogun.jpg')   1100 4
Shrink169 "$CHESS\store\screenshot-mali.png"     (Join-Path $IMG 'chess-mali.jpg')     1100 4
Shrink169 "$CHESS\store\screenshot-select.png"   (Join-Path $IMG 'chess-select.jpg')   1100 4
Shrink169 "$CHESS\store\screenshot-tutorial.png" (Join-Path $IMG 'chess-tutorial.jpg') 1100 4

# ---- reels --------------------------------------------------------------------------
# 1152x648 is the compromise: sharp enough behind a dark scrim on a desktop hero, small
# enough that a phone on cellular is not paying 8 MB for a background loop.
#
# H264 ONLY. This used to also emit a VP9 webm and list it first in the <video>, because it
# was 20% smaller and canPlayType() answers "probably" everywhere. It does not decode: stock
# Chrome and the Playwright build both die with PIPELINE_ERROR_DECODE about 0.3s in, at
# -b:v 800k, at -crf 34, and with alt-ref/lag-in-frames tuned -- while ffmpeg decodes the
# same file to /dev/null without a single warning. The mp4 of the identical frames plays
# start to finish. A hero that freezes on its poster for some slice of visitors is not worth
# 600 KB, so there is nothing to fall back FROM.
Write-Output 'reels'
$goldFrames = "$RACE3D\docs\reel\_frames_gold\list.txt"
if (Test-Path $goldFrames) {
  ffmpeg -y -hide_banner -loglevel error -f concat -safe 0 -i $goldFrames -fps_mode cfr -r 24 `
    -vf 'scale=1152:648' -c:v libx264 -preset veryslow -crf 32 -pix_fmt yuv420p `
    -movflags +faststart (Join-Path $VID 'qm3d-reel.mp4')
  Shrink169 "$RACE3D\docs\reel\gold.jpg" (Join-Path $VID 'qm3d-reel.jpg') 1152 5
} else { Write-Warning "no gold frames -- in ${RACE3D}: node tools/reel.mjs gold --secs 14 --w 1280 --h 720" }

# The chess reel is already encoded at delivery size by that repo's own reel.mjs, and it is
# tiny (a board holds still, so h264 has almost nothing to spend bits on). Copy, do not
# re-encode: a second generation over a near-static picture only adds mush.
if (Test-Path "$CHESS\docs\reel\bloodlines.mp4") {
  foreach ($f in 'bloodlines.mp4', 'bloodlines.jpg') {
    Copy-Item "$CHESS\docs\reel\$f" (Join-Path $VID ('chess-reel' + [IO.Path]::GetExtension($f))) -Force
  }
  foreach ($f in 'chess-reel.mp4', 'chess-reel.jpg') {
    Write-Output ("  {0,-30} {1,5} KB" -f $f, [int]((Get-Item (Join-Path $VID $f)).Length / 1KB))
  }
} else { Write-Warning "no chess reel -- in ${CHESS}: node tools/reel.mjs --secs 17" }

# Sweep any webm left behind by an older run of this script, so a stale unplayable file
# cannot get picked up and shipped again.
Get-ChildItem $VID -Filter *.webm -ErrorAction SilentlyContinue | ForEach-Object {
  Remove-Item $_.FullName -Force; Write-Output ("  removed stale {0}" -f $_.Name)
}

$p = Join-Path $VID 'qm3d-reel.mp4'
if (Test-Path $p) { Write-Output ("  {0,-30} {1,5} KB" -f 'qm3d-reel.mp4', [int]((Get-Item $p).Length / 1KB)) }

# ---- share image --------------------------------------------------------------------
Write-Output 'og'
ffmpeg -y -hide_banner -loglevel error -i "$RACE3D\docs\reel\gold.jpg" `
  -vf "crop='min(iw,ih*1200/630)':'min(ih,iw*630/1200)',scale=1200:630:flags=lanczos" `
  -q:v 4 (Join-Path $IMG 'og.jpg')
Write-Output ("  {0,-30} {1,5} KB" -f 'og.jpg', [int]((Get-Item (Join-Path $IMG 'og.jpg')).Length / 1KB))

Write-Output ''
Write-Output ("total assets/: {0:N1} MB" -f ((Get-ChildItem (Join-Path $ROOT 'assets') -Recurse -File | Measure-Object Length -Sum).Sum / 1MB))
