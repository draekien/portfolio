#!/usr/bin/env node

/**
 * generate-icons.js
 *
 * Generates PNG favicon/icon files and a favicon.ico from the SVG source.
 *
 * Usage:
 * 1. Install dependencies: npm install --save-dev sharp png-to-ico
 * 2. Place your source SVG at: public/mark.svg
 * 3. Run: node scripts/generate-icons.js
 *
 * The script writes files into the `public/` directory:
 *  - favicon-16x16.png
 *  - favicon-32x32.png
 *  - favicon-48x48.png (optional)
 *  - android-chrome-192x192.png
 *  - android-chrome-512x512.png
 *  - apple-touch-icon.png (180x180)
 *  - mstile-150x150.png
 *  - favicon.ico (contains 16/32/48)
 *  - site.webmanifest
 *  - browserconfig.xml
 *
 * Notes:
 * - PNGs are rasterized from the SVG and will include whatever fill/stroke color is present in the SVG file.
 *   If you rely on `currentColor` in the React component, ensure you also create a static `public/mark.svg`
 *   with the desired solid color before running this script (or edit `public/mark.svg` to the color you want).
 */

const fs = require("fs");
const path = require("path");

// Try to require dependencies and provide helpful error messages if missing.
let sharp;
let pngToIco;
try {
  sharp = require("sharp");
} catch (err) {
  console.error(
    "Missing dependency `sharp`. Install it with `npm install --save-dev sharp` and try again.",
  );
  process.exit(1);
}
try {
  // `require` of some packages may return a namespace object with a `.default`
  // property when transpiled/bundled. Accept either the function itself or
  // the `.default` export so `pngToIco(...)` works regardless of how it was resolved.
  pngToIco = require("png-to-ico");
  if (
    pngToIco &&
    typeof pngToIco === "object" &&
    typeof pngToIco.default === "function"
  ) {
    pngToIco = pngToIco.default;
  }
} catch (err) {
  console.error(
    "Missing dependency `png-to-ico`. Install it with `npm install --save-dev png-to-ico` and try again.",
  );
  process.exit(1);
}

const ROOT = path.resolve(__dirname, "..");
const SRC_SVG = path.join(ROOT, "public", "mark.svg");
const OUT_DIR = path.join(ROOT, "public");

if (!fs.existsSync(SRC_SVG)) {
  console.error("Source SVG not found. Expected at:", SRC_SVG);
  process.exit(1);
}

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const ICONS = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-48x48.png", size: 48 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "mstile-150x150.png", size: 150 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
];

async function generatePngs() {
  console.log("Generating PNG icons...");
  await Promise.all(
    ICONS.map(async (ic) => {
      const outPath = path.join(OUT_DIR, ic.name);
      // Use contain so the mark fits in the square. Background transparent.
      await sharp(SRC_SVG)
        .resize(ic.size, ic.size, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png({ quality: 100 })
        .toFile(outPath);
      console.log("Wrote", outPath);
    }),
  );
}

async function generateIco() {
  // Use the PNGs we created for 16, 32, 48
  const pngPaths = [16, 32, 48].map((s) =>
    path.join(OUT_DIR, `favicon-${s}x${s}.png`),
  );
  const missing = pngPaths.filter((p) => !fs.existsSync(p));
  if (missing.length) {
    throw new Error(
      "Missing PNG inputs for ico generation: " + missing.join(", "),
    );
  }
  console.log("Generating favicon.ico from PNGs:", pngPaths.join(", "));
  const buffer = await pngToIco(pngPaths);
  const icoPath = path.join(OUT_DIR, "favicon.ico");
  fs.writeFileSync(icoPath, buffer);
  console.log("Wrote", icoPath);
}

function writeManifest() {
  const manifest = {
    name: "William Pei",
    short_name: "William",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7c3aed",
  };

  const manifestPath = path.join(OUT_DIR, "site.webmanifest");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log("Wrote", manifestPath);
}

function writeBrowserConfig() {
  const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/mstile-150x150.png"/>
      <TileColor>#ffffff</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;
  const out = path.join(OUT_DIR, "browserconfig.xml");
  fs.writeFileSync(out, browserconfig);
  console.log("Wrote", out);
}

async function run() {
  try {
    await generatePngs();
    await generateIco();
    writeManifest();
    writeBrowserConfig();
    console.log("All icons generated successfully.");
    console.log("");
    console.log("Remember to add the following to your <head>:");
    console.log("");
    console.log(
      '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">',
    );
    console.log(
      '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">',
    );
    console.log(
      '<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">',
    );
    console.log('<link rel="manifest" href="/site.webmanifest">');
    console.log(
      '<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7c3aed">',
    );
    console.log('<link rel="shortcut icon" href="/favicon.ico">');
    console.log('<meta name="msapplication-TileColor" content="#ffffff">');
    console.log(
      '<meta name="msapplication-config" content="/browserconfig.xml">',
    );
    console.log('<meta name="theme-color" content="#ffffff">');
  } catch (err) {
    console.error("Error generating icons:", err);
    process.exit(1);
  }
}

run();
