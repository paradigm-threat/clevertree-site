# Clevertree LLC — Icon and Favicon Package

All delivered icons derive from your **original uploaded Clevertree LLC logo** (`brand/clevertree-llc-original.png`). The shape, circuit branches, roots and green/cyan color are NOT replaced by the previously proposed redesign. These are raster PNGs (not vector SVGs); source resolution was 589 x 637 pixels, so large versions are carefully upscaled, not newly traced artwork.

## Files

- `favicons/favicon.ico`: multi-resolution browser icon (16, 32, 48, 64, 128, 256).
- `favicons/favicon-{16,32,48,64,96}x{size}.png`: transparent PNG browser icons.
- `app-icons/apple-touch-icon.png`: 180 x 180 iOS home-screen icon with navy backing.
- `app-icons/android-chrome-{192,512}x{size}.png`: Android/PWA launcher icons.
- `app-icons/icon-maskable-navy-512.png`: 512 square with generous safe area for maskable icons.
- `app-icons/icon-navy-*`: square navy-backed icons at multiple resolutions.
- `app-icons/icon-cream-*`: square cream-backed variants.
- `brand/tree-transparent-*`: tree symbol alone on transparent square canvases.
- `brand/full-logo-transparent-*`: stacked original tree plus CLEVERTREE LLC wordmark.
- `brand/clevertree-llc-horizontal.png`: horizontal layout using the original extracted tree and original wordmark.
- `brand/clevertree-llc-original.png`: untouched source file.
- `preview.png`: visual index of the delivered assets.

## Example HTML

```html
<link rel="icon" href="/favicons/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
<link rel="apple-touch-icon" href="/app-icons/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

Copy the folders plus `site.webmanifest` to your public web root, preserving paths. If paths differ, update the links and manifest `src` values. This package is for **Clevertree LLC**, separate from Clevertree Chat's app icon.

## Small-size note

Because the original design is intricate, some circuit/branch detail necessarily merges at 16px. The icon remains sourced from the original; a genuinely optimized micro-mark would be a separate logo design decision.
