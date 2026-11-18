# JapanVisaPhotoCom — marketing site

Live site: **https://japan.visaphoto1tap.com/**

| Path | Purpose |
|------|---------|
| `index.html` | Landing with live iPhone App Store download |
| `privacy.html` | Privacy policy (linked from App Store Connect) |
| `sitemap.xml` / `robots.txt` | SEO |
| `VisaPhotoApps/Marketing/Japan/xiaohongshu/` | Xiaohongshu post previews & export scripts |
| `VisaPhotoApps/Marketing/Japan/appstore/` | App Store screenshot campaign previews & export scripts |
| `screenshots/` | Real device screenshots — **all 6 captured** |
| `demos/` | Real before/after export pairs — all 6 captured |


**iOS app repo:** [VisaPhotoApps](https://github.com/peterjiajunzhang/VisaPhotoApps) — scheme `JapanVisaPhoto`.

Clone on a new machine:

```bash
git clone https://github.com/peterjiajunzhang/JapanVisaPhotoCom.git
git clone https://github.com/peterjiajunzhang/VisaPhotoApps.git
```

Open **`VisaPhotoApps/README.md`** for full workstation setup.

## Static CSS, icons and images

The homepage and privacy policy no longer load Tailwind or Lucide at runtime. The only third-party script left is the Cloudflare Web Analytics beacon.

- **CSS**: `assets/tailwind.css` is prebuilt with Tailwind CSS v3.4.17 from `index.html` and `privacy.html`, using `tailwind.config.cjs` (the theme that used to be inline in the page) and `assets/tailwind.input.css`. After changing any class in `index.html` or `privacy.html`, rebuild it and commit the output:

  ```bash
  npx tailwindcss@3.4.17 -c tailwind.config.cjs -i assets/tailwind.input.css -o assets/tailwind.css --minify
  ```

- **Icons**: Lucide icons are inline `<svg>` in `index.html`. Licence: `assets/licenses/lucide.txt` (ISC).
- **App icons**: `assets/icons/*.webp` are resized copies of each app's `AppIcon.png`, the same files the US site uses; see `assets/icons/provenance.json`. `AppIcon.png` stays as the favicon and social image.
- **Images**: PNG or JPG files over about 300 kB have a WebP copy next to them, and the page uses the WebP. The originals stay in the repo. Images below the fold use `loading="lazy"` and have their real `width`/`height`.

## 2026-11-17 website update

The homepage links directly to a 35×45 mm versus 2×2 in comparison. It cites the Ministry of Foreign Affairs form and the San Francisco Consulate-General’s work/long-term visa instructions after a Certificate of Eligibility. These sources address printed photos. The website illustrates the app’s two JPEG export sizes.

The iPhone download buttons share the App Store Connect campaign `japan-website-20261117` with the matching Visa Photo 1-Tap links. The provider token is the one issued for this developer account. The structured app listing URL remains clean.

### Choosing a size before downloading

The existing English homepage comparison is shareable at `/#size-comparison`. It begins with the current Singapore Japan Visa Application Centre route. The in-person single- or double-entry sightseeing checklist calls for an original, unedited 35×45 mm paper photo; the eVISA route has its own digital upload checklist. Melbourne’s paper short-stay checklist lists both 35×45 mm and 2×2 in. San Francisco’s work or long-stay checklist after a Certificate of Eligibility lists 2×2 in or 2×1.4 in and specifies glossy paper. Each example links to its own instructions. Sources checked November 17, 2026. [Singapore embassy](https://www.sg.emb-japan.go.jp/itpr_en/visit.html) · [JVAC paper checklist](https://www.vfsglobal.com/one-pager/japan/singapore/english/pdf/sight-seeing-Single-or-Double-entry-apr-2026.pdf) · [Singapore JVAC eVISA](https://visa.vfsglobal.com/sgp/en/jpn/apply-e-visa) · [Melbourne checklist](https://www.melbourne.au.emb-japan.go.jp/itpr_en/visa-ss.html) · [San Francisco checklist](https://www.sf.us.emb-japan.go.jp/itpr_en/e_m02_01_03.html) · [Ministry visa form](https://www.mofa.go.jp/files/000124525.pdf)

A single new App Store badge after the comparison reuses the website campaign. The section pairs existing JPEGs of the same person in the two sizes, describes free preview and retries, and tells readers to use their original and skip a paid export if their route requires unedited photos. The visible outputs are the existing 420×540 and 600×600 pixel files. [iPhone App Store listing](https://apps.apple.com/us/app/japan-visa-id-photo-1-tap/id6787615980)
