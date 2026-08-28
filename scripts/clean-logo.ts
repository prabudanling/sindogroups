/**
 * Clean the Sindo logo:
 * 1. Crop the circular gold emblem (drop the "SINDO" wordmark below)
 * 2. Remove the off-white background -> true transparency
 * 3. Decontaminate anti-aliased edges (un-blend from white) to avoid halos on dark backgrounds
 * 4. Output square, tightly-cropped transparent PNGs used across the site
 */
import sharp from "sharp";

const SRC = "/home/z/sindogroups-temp/upload/logo-sindo-groups.png"; // original 281x250
const OUT_MAIN = "/home/z/my-project/public/logo-sindo.png";
const OUT_SM = "/home/z/my-project/public/logo-sindo-sm.png";
const OUT_FULL = "/home/z/my-project/public/logo-sindo-full.png"; // emblem+wordmark transparent (spare)
const PREVIEW_DARK = "/tmp/logo-preview-dark.png";
const PREVIEW_LIGHT = "/tmp/logo-preview-light.png";

const NEAR_WHITE = 242; // >= => background
const EDGE_LO = 205; // <= => fully opaque content

type Px = { r: number; g: number; b: number; a: number };

async function main() {
  const img = sharp(SRC);
  const meta = await img.metadata();
  const W = meta.width!;
  const H = meta.height!;
  const raw = await img.ensureAlpha().raw().toBuffer();
  const get = (x: number, y: number): Px => {
    const i = (y * W + x) * 4;
    return { r: raw[i], g: raw[i + 1], b: raw[i + 2], a: raw[i + 3] };
  };

  // ---- 1. find vertical white gap separating emblem from wordmark ----
  const rowContent = new Array(H).fill(0);
  for (let y = 0; y < H; y++) {
    let c = 0;
    for (let x = 0; x < W; x++) {
      const p = get(x, y);
      const min = Math.min(p.r, p.g, p.b);
      if (min < NEAR_WHITE - 15) c++;
    }
    rowContent[y] = c;
  }
  // find bands of content rows
  const bands: Array<[number, number]> = [];
  let start = -1;
  for (let y = 0; y < H; y++) {
    const has = rowContent[y] > 2;
    if (has && start === -1) start = y;
    if (!has && start !== -1) {
      bands.push([start, y - 1]);
      start = -1;
    }
  }
  if (start !== -1) bands.push([start, H - 1]);
  console.log("content bands (y):", JSON.stringify(bands));
  // emblem = first band (the circle); full lockup = first..last bands merged
  const [ey0, ey1] = bands[0];

  // ---- 2. horizontal bounds of emblem ----
  let x0 = W,
    x1 = 0,
    y0 = H,
    y1 = 0;
  for (let y = ey0; y <= ey1; y++) {
    for (let x = 0; x < W; x++) {
      const p = get(x, y);
      if (Math.min(p.r, p.g, p.b) < NEAR_WHITE - 15) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
  }
  console.log("emblem bbox:", { x0, x1, y0, y1 });

  // ---- 3. build transparent emblem with decontaminated edges ----
  const pad = 6;
  const cw = x1 - x0 + 1 + pad * 2;
  const ch = y1 - y0 + 1 + pad * 2;
  const out = Buffer.alloc(cw * ch * 4, 0);
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const p = get(x, y);
      const mn = Math.min(p.r, p.g, p.b);
      let alpha: number;
      if (mn >= NEAR_WHITE) alpha = 0;
      else if (mn <= EDGE_LO) alpha = 255;
      else alpha = Math.round((255 * (NEAR_WHITE - mn)) / (NEAR_WHITE - EDGE_LO));
      if (alpha === 0) continue;
      // un-blend from white so edges don't leave light halos on navy
      const a = alpha / 255;
      const dec = (c: number) => Math.max(0, Math.min(255, Math.round((c - (1 - a) * 255) / a)));
      const oi = ((y - y0 + pad) * cw + (x - x0 + pad)) * 4;
      out[oi] = dec(p.r);
      out[oi + 1] = dec(p.g);
      out[oi + 2] = dec(p.b);
      out[oi + 3] = alpha;
    }
  }

  const emblem = sharp(out, { raw: { width: cw, height: ch, channels: 4 } });

  // square canvas, emblem centered (site CSS uses fixed h/w squares)
  const size = Math.max(cw, ch) + 8;
  const square = await emblem
    .extend({
      top: Math.floor((size - ch) / 2),
      bottom: Math.ceil((size - ch) / 2),
      left: Math.floor((size - cw) / 2),
      right: Math.ceil((size - cw) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  await sharp(square).resize(320, 320).png().toFile(OUT_MAIN);
  await sharp(square).resize(180, 180).png().toFile(OUT_SM);
  console.log("saved emblem:", OUT_MAIN, OUT_SM, `(${size}x${size} source)`);

  // ---- 4. full lockup (emblem + SINDO wordmark) transparent, as spare asset ----
  const fy0 = bands[0][0];
  const fy1 = bands[bands.length - 1][1];
  let fx0 = W,
    fx1 = 0;
  for (let y = fy0; y <= fy1; y++) {
    for (let x = 0; x < W; x++) {
      if (Math.min(get(x, y).r, get(x, y).g, get(x, y).b) < NEAR_WHITE - 15) {
        if (x < fx0) fx0 = x;
        if (x > fx1) fx1 = x;
      }
    }
  }
  const fpad = 8;
  const fw = fx1 - fx0 + 1 + fpad * 2;
  const fh = fy1 - fy0 + 1 + fpad * 2;
  const fout = Buffer.alloc(fw * fh * 4, 0);
  for (let y = fy0; y <= fy1; y++) {
    for (let x = fx0; x <= fx1; x++) {
      const p = get(x, y);
      const mn = Math.min(p.r, p.g, p.b);
      let alpha: number;
      if (mn >= NEAR_WHITE) alpha = 0;
      else if (mn <= EDGE_LO) alpha = 255;
      else alpha = Math.round((255 * (NEAR_WHITE - mn)) / (NEAR_WHITE - EDGE_LO));
      if (alpha === 0) continue;
      const a = alpha / 255;
      const dec = (c: number) => Math.max(0, Math.min(255, Math.round((c - (1 - a) * 255) / a)));
      const oi = ((y - fy0 + fpad) * fw + (x - fx0 + fpad)) * 4;
      fout[oi] = dec(p.r);
      fout[oi + 1] = dec(p.g);
      fout[oi + 2] = dec(p.b);
      fout[oi + 3] = alpha;
    }
  }
  await sharp(fout, { raw: { width: fw, height: fh, channels: 4 } })
    .png()
    .toFile(OUT_FULL);
  console.log("saved full lockup:", OUT_FULL, `(${fw}x${fh})`);

  // ---- 5. QA previews on navy & cream ----
  const navy = { r: 10, g: 22, b: 40 };
  const cream = { r: 250, g: 247, b: 240 };
  const fullResized = await sharp(OUT_FULL).resize(260).png().toBuffer();
  await sharp({
    create: { width: 460, height: 340, channels: 4, background: { ...navy, alpha: 1 } },
  })
    .composite([
      { input: square, top: 30, left: 50 },
      { input: fullResized, top: 50, left: 150 },
    ])
    .png()
    .toFile(PREVIEW_DARK);
  await sharp({
    create: { width: 460, height: 340, channels: 4, background: { ...cream, alpha: 1 } },
  })
    .composite([
      { input: square, top: 30, left: 50 },
      { input: fullResized, top: 50, left: 150 },
    ])
    .png()
    .toFile(PREVIEW_LIGHT);
  console.log("previews saved");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
