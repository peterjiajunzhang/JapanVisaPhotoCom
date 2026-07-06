# JapanVisaPhotoCom — marketing site

Live site: **https://japan.visaphoto1tap.com/**

| Path | Purpose |
|------|---------|
| `index.html` | Landing; App Store CTA is a **"Coming soon"** badge |
| `privacy.html` | Privacy policy (linked from App Store Connect) |
| `sitemap.xml` / `robots.txt` | SEO |
| `VisaPhotoApps/Marketing/Japan/xiaohongshu/` | Xiaohongshu post previews & export scripts |
| `VisaPhotoApps/Marketing/Japan/appstore/` | App Store screenshot campaign previews & export scripts |
| `screenshots/` | Real device screenshots — **all 6 captured** |
| `demos/` | Real before/after export pairs — all 6 captured |

**Status:** all real screenshots and demo pairs are in. `index.html` has a real `#demos` wall and a full 6-screen real `#app` screenshot grid. Still pending: Apple ID / App Store Connect record (CTA still shows "Coming soon").

## ⚠️ Lower confidence than our other apps — read before editing copy

Per `VisaPhotoApps/docs/japan-visa-photo-spec.md`: **every official `.go.jp` domain returned 403 to automated fetch.** All figures (45×45mm size, 32–36mm head height) are triangulated from commercial visa-photo tools that partially disagree with each other, not confirmed against a primary government source. This is deliberately reflected in the site's copy:

- The hero section includes a visible amber disclaimer box, not just fine print.
- The `#compliance-checklist` section is titled **"What we check — and what we can't confirm yet"** and uses `help-circle` (amber) icons instead of `check-circle-2` (green) for the two uncertain figures (size, head height).
- **Do not** add a confident ICAO compliance claim or a JPEG byte-limit compliance claim — no primary source confirms either exists for Japan's digital flow.
- If someone does a manual browser check against a specific consulate site (recommended: `mumbai.in.emb-japan.go.jp/en/visa/photo.html`) and the numbers are confirmed or corrected, update both this site's copy **and** flag it in the iOS repo's spec doc.

## Before submitting to App Store Connect

1. Once `JapanVisaPhoto/Info.plist`'s `AppStoreAppleID` is filled in, update the CTA to a real App Store link.
2. Since Japan supports print-layout (like the US app), consider also capturing a screenshot of the print-sheet view.
3. Re-run exports after any future screenshot changes:
   ```bash
   cd VisaPhotoApps/Marketing/Japan/appstore && npm run export
   cd VisaPhotoApps/Marketing/Japan/xiaohongshu && npm run export
   ```

**Product facts baked into this site** (source: `VisaPhotoApps/docs/japan-visa-photo-spec.md`):
- Paper-first visa photo (unlike China/Schengen/India/Canada) — **print-layout support is enabled** (`supportsPrintLayout = true`), same feature as the US app.
- Default assumption: **45×45mm** print, head height **32–36mm** — both flagged as unconfirmed/lower-confidence in copy.
- No digital eVisa pixel/file-size spec confirmed — don't invent one.
- Accent color: flag red `#BC002D`.

**iOS app repo:** [VisaPhotoApps](https://github.com/peterjiajunzhang/VisaPhotoApps) — scheme `JapanVisaPhoto`.

Clone on a new machine:

```bash
git clone https://github.com/peterjiajunzhang/JapanVisaPhotoCom.git
git clone https://github.com/peterjiajunzhang/VisaPhotoApps.git
```

Open **`VisaPhotoApps/README.md`** for full workstation setup.
