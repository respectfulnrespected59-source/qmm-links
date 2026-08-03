# Bing Setup Runbook — "Become The Answer" Step Two

Source of truth: our own video, **"Become The Answer: How to Get AI Assistants to Recommend You"**
(https://youtu.be/bHEcgd734oQ). Step Two, verbatim from the script:

> "Free Bing Webmaster account, verify the site, submit your sitemap. Thirty minutes, one time, done."

Why Bing and not Gemini: the workbook had a find-and-replace error. Copilot runs on Bing, and
ChatGPT's web search leans on Bing. `gemini3.ai/webmasters` does not exist. The real URL is
**https://www.bing.com/webmasters**.

---

## 🔴 STOP — DO NOT PUSH `CNAME` YET

`CNAME` is already written in this repo but **must not be pushed until the domain is bought and DNS
is pointed.**

The moment GitHub Pages sees a `CNAME` file it stops serving
`respectfulnrespected59-source.github.io/qmm-links/` and redirects to `quantummelaninmedia.com`.
If that domain does not resolve yet, **the link in every QMM social bio goes dead.**

Order is: buy domain → set DNS → *then* push `CNAME`. Not before.

---

## Step 1 — Buy the domain (~$12/yr)

`quantummelaninmedia.com` was **available** as of 2026-08-03 (checked via RDAP).

Registrar: Cloudflare Registrar (at-cost, free WHOIS privacy) or Namecheap. Avoid GoDaddy upsells.
Buy the bare `.com`. Skip every add-on except WHOIS privacy, which should be free.

Also available if we ever want a niche site: `aibusinessgps.com`, `detailshopai.com`.
(`quantummelanin.com` is already taken — that is why we take the full name.)

## Step 2 — Point DNS at GitHub Pages

At the registrar's DNS panel, create these records. Hosting stays free; only the name costs money.

**Four A records** for the apex (`@`):

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**One CNAME record** for `www`:

```
www  →  respectfulnrespected59-source.github.io
```

Wait for propagation, then confirm before moving on:

```bash
nslookup quantummelaninmedia.com
```

## Step 3 — Push, then turn on HTTPS

Only once Step 2 resolves:

```bash
cd /c/Users/respe/qmm-links
git add CNAME robots.txt sitemap.xml 4a01e2cb8793c428c9eeb47dd334aa22.txt articles/ BING_SETUP_RUNBOOK.md
git commit -m "feat: custom domain, sitemap, robots, IndexNow key, articles hub"
git push
```

Then GitHub → repo `qmm-links` → **Settings → Pages**:
- Custom domain should already read `quantummelaninmedia.com` (from the `CNAME` file)
- Tick **Enforce HTTPS** (may take a few minutes for the cert to issue)

Verify the artifact, not the log — ask the live host what it is serving:

```bash
curl -s -o /dev/null -w "home=%{http_code}\n"     https://quantummelaninmedia.com/
curl -s -o /dev/null -w "robots=%{http_code}\n"   https://quantummelaninmedia.com/robots.txt
curl -s -o /dev/null -w "sitemap=%{http_code}\n"  https://quantummelaninmedia.com/sitemap.xml
curl -s -o /dev/null -w "key=%{http_code}\n"      https://quantummelaninmedia.com/4a01e2cb8793c428c9eeb47dd334aa22.txt
curl -s -o /dev/null -w "articles=%{http_code}\n" https://quantummelaninmedia.com/articles/
```

All five must be `200`. If any is not, stop and fix it — Bing will fail verification otherwise.

## Step 4 — Bing Webmaster Tools (the actual 30 minutes)

1. Go to **https://www.bing.com/webmasters** and sign in with a Microsoft account.
2. **Add a site** → `https://quantummelaninmedia.com`
   (There is an "Import from Google Search Console" option — skip it, we have no GSC property.)
3. Choose verification method **HTML Meta Tag**. Bing gives a tag like:
   `<meta name="msvalidate.01" content="XXXXXXXXXXXXXXXX" />`
4. Paste that tag into the `<head>` of **both** `index.html` and `articles/index.html`, commit, push,
   wait ~1 min for Pages to redeploy, then click **Verify** in Bing.
   - Alternative: Bing also offers a `BingSiteAuth.xml` file download — drop it in the repo root
     and push. Either works. The meta tag is faster to confirm.
5. **Sitemaps** → Submit `https://quantummelaninmedia.com/sitemap.xml`
6. **IndexNow** → the key `4a01e2cb8793c428c9eeb47dd334aa22` is already hosted at
   `https://quantummelaninmedia.com/4a01e2cb8793c428c9eeb47dd334aa22.txt`. Bing should auto-detect it.

Done. That is the one-time half.

## Step 5 — Per-article routine (the repeating half)

Every time an article publishes:

1. Add a `<url>` block to `sitemap.xml` and bump its `<lastmod>`.
2. Ping IndexNow so Bing crawls in 24–48h instead of waiting:

```bash
curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d '{
    "host": "quantummelaninmedia.com",
    "key": "4a01e2cb8793c428c9eeb47dd334aa22",
    "keyLocation": "https://quantummelaninmedia.com/4a01e2cb8793c428c9eeb47dd334aa22.txt",
    "urlList": [
      "https://quantummelaninmedia.com/articles/THE-NEW-SLUG/",
      "https://quantummelaninmedia.com/sitemap.xml"
    ]
  }'
```

A `200` or `202` means accepted.

3. Push it where people are, same day — the video's "indexing accelerator": LinkedIn on drop day,
   a related piece on Medium pointing back. Crawlers follow traffic, so give them a trail.

## The title rule (do not skip this)

From the script: *"Bing weighs the exact words in your title heavier than Google does. Put the phrase
somebody would actually type in the title, and again in paragraph one."*

Be more literal than feels right. Not "Best AI Tools" — nobody wins that.
**"Best AI Tools for a Two-Person Auto Detail Shop (2026)"** — that one we can own by Friday.

## Non-negotiables carried over from the video

- **Disclosure in the first 100 words.** We build one of the ten and we say so. We do not run the
  workbook's "put yourself at #1 and never mention you built it" play — it is an FTC problem, it
  contradicts the whole I Call Bullshit series, and undisclosed self-ranking is the first thing
  assistants filter out.
- **Rank on checkable criteria only** — price, setup time, does it need a developer.
- **Name the competitor when the competitor is the better pick.** That is the moat.
- **Channel stacking guardrail:** do NOT stop Shorts/Reels to write articles. Articles are the
  *pull* channel added alongside push, not instead of it.

## Success metric

Fifteen articles, not fifty. The day it turns on: **you ask an assistant that question yourself and
QMM comes back unprompted. Screenshot it.** That screenshot is the receipt we post either way.
