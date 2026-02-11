v3/public/favicon-readme.md#L1-200

# Favicons & Web App Icons

This file documents the recommended icon files and the head snippet to include in your HTML when deploying the site. The icons should be generated from the final `Mark` asset (the inline SVG at `components/mark.tsx`) and placed in `public/`.

Recommended output files (place under `public/`):

- `favicon.ico` (contains 16x16, 32x32, 48x48)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon-48x48.png` (optional)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `apple-touch-icon.png` (180x180)
- `mstile-150x150.png`
- `site.webmanifest`
- `browserconfig.xml`
- (optional) `safari-pinned-tab.svg` (if you want a pinned-tab SVG with `fill="currentColor"`)

Important guidelines

- Use the final visual appearance (strokes/fills set for the desired thickness and `currentColor` behavior) when generating raster images so the icons match what you show on the site.
- Use a transparent background for PNG icons unless you specifically want a colored background.
- The `safari-pinned-tab.svg` should use `fill="currentColor"` so Safari can tint it.
- `favicon.ico` should include multiple sizes (16/32/48) in one .ico file for best compatibility.

Head snippet (add inside `<head>`)

Use the snippet below — it covers Apple touch icon, PNG favicons, legacy .ico, manifest, theme color, and MS tile configuration:

v3/public/favicon-readme.md#L201-260

```v3/public/favicon-readme.md#L201-260
<!-- Favicons and web app manifest -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7c3aed"> <!-- optional -->
<link rel="shortcut icon" href="/favicon.ico">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-config" content="/browserconfig.xml">
<meta name="theme-color" content="#ffffff">
```

Notes:

- Replace `#7c3aed` and `#ffffff` with your brand/theme colors (or use the same color as your primary accent).
- If you include `safari-pinned-tab.svg`, ensure it is a monochrome SVG using `fill="currentColor"` so Safari can tint it with the `color` you specify.

Minimal `site.webmanifest` example

v3/public/favicon-readme.md#L261-320

```v3/public/favicon-readme.md#L261-320
{
  "name": "William Pei",
  "short_name": "William",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#7c3aed"
}
```

Minimal `browserconfig.xml` example

v3/public/favicon-readme.md#L321-360

```v3/public/favicon-readme.md#L321-360
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/mstile-150x150.png"/>
      <TileColor>#ffffff</TileColor>
    </tile>
  </msapplication>
</browserconfig>
```

Generating icons

- I recommend generating icons from the final SVG using a tool that preserves stroke/fill appearance and outputs the sizes above (e.g., a local script using `sharp` and `png-to-ico`, or an online generator such as RealFaviconGenerator or plain SVG→PNG exports).
- Make sure the SVG used for export matches the final `Mark` appearance (strokes set to `currentColor` or concrete color depending on how you want the rasterized result).
- If you plan to let CSS control color via `currentColor`, rasterize with the final desired color (e.g., your brand color); PNGs cannot inherit `currentColor` at runtime.

Example filenames and sizes summary

- apple-touch-icon.png — 180×180
- favicon-16x16.png — 16×16
- favicon-32x32.png — 32×32
- favicon-48x48.png — 48×48 (optional)
- android-chrome-192x192.png — 192×192
- android-chrome-512x512.png — 512×512
- mstile-150x150.png — 150×150
- favicon.ico — contains 16×16, 32×32, 48×48

Placement

- Place these files in the `public/` directory so they are served from `/` at site root (paths in the head snippet assume `/`).

If you want, I can:

- Provide a small Node script you can run locally to generate the PNGs and `favicon.ico` from the `public/mark.svg` (I can produce the script contents for you to copy & run).
- Create a `safari-pinned-tab.svg` optimized for pinned tab usage (monochrome `currentColor` version) based on the `Mark` asset.
