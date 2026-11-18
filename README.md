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
