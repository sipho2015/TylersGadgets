import fs from 'node:fs';
import {products} from '../data/products.js';
const referenceCount=products.filter(p=>p.referenceOnly).length;
const sources=JSON.parse(fs.readFileSync('assets/products/photo-sources.json','utf8'));
const e=value=>String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const intro=`# Product photo sources and replacement guide

Added 15 October 2026. These are real, sourced photographs used as illustrative references. They are not photographs of Tyler's Gadgets stock, and do not verify a model, condition, price or availability. Existing owner-provided phone/accessory photographs have not been replaced.

Open [the visual photo guide](photo-guide.html) in your browser to preview every image, open its product page and follow its source link.

## Where the images are

- Laptop originals: \`assets/products/laptops/\`
- Accessory originals: \`assets/products/accessories/\`
- Machine-readable sources: \`assets/products/photo-sources.json\`
- Listing assignments: \`image\` and \`images\` in \`data/products.js\`

Each new photo has one readable \`*-reference.jpg\` file. These new files are served directly; no extra hashed variants were generated for this batch. The previous optimized assets remain in place for the earlier photographs.

## Source list

| Product | Local original | Source | License |
| --- | --- | --- | --- |
`;
const table=sources.map(p=>`| ${p.name} | [${p.file.split('/').at(-1)}](${p.file.replace('assets/products/','')}) | [${p.provider}${p.author?' / '+p.author:''}](${p.url}) | [${p.license}](${p.licenseUrl}) |`).join('\n');
const instructions=`

## Replace a photo later

1. Find the product in the table above and open its local folder.
2. Save your own photograph over that exact JPEG filename. Keep its extension as \`.jpg\`; convert the image if your phone supplies HEIC or PNG.
3. Use a clear photograph, ideally 1200-1600 pixels wide, and keep the file under about 500 KB where practical.
4. If you keep the filename, the website uses your replacement without changes to the image paths. Rebuild and redeploy to update the hosted site.
5. If you choose a new filename or add more views, update both \`image\` and \`images\` in \`data/products.js\`. Put photographs in the correct gallery order; never duplicate one image to create more views.
6. Replace the borrowed-photo \`imageNote\` with accurate wording, remove \`referencePhoto\` and \`imageSource\` when the photo is your own, and update this source record if required.
7. For a new reference listing, replace the temporary product name with its actual name while keeping its ID/slug stable. Enter only confirmed specifications, price, condition and stock, then remove \`referenceOnly\`.
8. Run \`npm.cmd test\`, \`npm.cmd run build\`, then preview or redeploy. Refresh the browser to see the replacement.

The ${referenceCount} reference listings have no assumed price, condition, availability, brand, model or specifications. Existing business facts on the four older listings were preserved; only their photo assignments and reference disclosures changed. The ThinkPad reference depicts an E14 Gen 7, which may differ from the generation in stock; the MacBook photo is a general MacBook reference, not proof of an M1 unit.

Pexels usage information: https://www.pexels.com/license/ . The ThinkPad photograph by Rakoon is CC0, as recorded on its Wikimedia Commons source page. No source endorses Tyler's Gadgets.
`;
fs.writeFileSync('assets/products/PHOTO-SOURCES.md',intro+table+instructions);
const cards=sources.map(p=>`<article><img src="${e(p.file)}" alt="${e(p.name)} reference photograph" loading="lazy"><div><span class="label">${products.find(product=>product.id===p.id)?.referenceOnly?'New reference listing':'Updated existing photo'}</span><h2>${e(p.name)}</h2><p class="filename">${e(p.file)}</p><p>Source: <a href="${e(p.url)}" target="_blank" rel="noopener noreferrer">${e(p.provider)}${p.author?' / '+e(p.author):''}</a><br>License: <a href="${e(p.licenseUrl)}" target="_blank" rel="noopener noreferrer">${e(p.license)}</a></p><div class="links"><a href="/product/${p.id}/">View product</a><a href="${e(p.file)}">Open photo</a></div></div></article>`).join('');
fs.writeFileSync('assets/products/photo-guide.html',`<!doctype html><html lang="en"><head><meta charset="UTF-8"><base href="/"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Product Photo Guide | Tyler's Gadgets</title><style>*{box-sizing:border-box}body{margin:0;background:#f4f6f2;color:#192923;font:16px/1.65 system-ui,sans-serif}main{width:min(1200px,calc(100% - 32px));margin:40px auto}h1{font-size:clamp(28px,4vw,42px);line-height:1.15}h2{font-size:20px;line-height:1.3}a{color:#126c50;text-underline-offset:3px}header{max-width:780px;margin-bottom:32px}header p{color:#59665e}.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}article{background:white;border:1px solid #dce2dc;border-radius:16px;overflow:hidden;min-width:0}article img{width:100%;height:240px;object-fit:contain;background:#f8faf7}article>div{padding:24px}article p{font-size:13px}.filename{overflow-wrap:anywhere;background:#f4f6f2;padding:10px;border-radius:6px}.label{font-size:11px;font-weight:650;text-transform:uppercase;color:#126c50}.links{display:flex;flex-wrap:wrap;gap:16px}.links a{display:inline-flex;align-items:center;min-height:44px;font-size:14px}aside{background:white;border:1px solid #dce2dc;border-radius:16px;padding:24px;margin-top:32px}code{overflow-wrap:anywhere}:focus-visible{outline:3px solid #126c50;outline-offset:4px}@media(max-width:900px){.grid{grid-template-columns:1fr 1fr}}@media(max-width:600px){.grid{grid-template-columns:1fr}}</style></head><body><main><header><a href="/gadgets/">Back to Gadgets</a><h1>Your replaceable product photos.</h1><p>${sources.length} real photographs, saved locally with readable names. ${referenceCount} reference listings and four existing-photo updates. These are illustrative images; actual stock, models and product details must be confirmed.</p><a href="assets/products/PHOTO-SOURCES.md">Read the full source and replacement guide</a></header><div class="grid">${cards}</div><aside><h2>How to replace one</h2><ol><li>Find the filename shown on its card.</li><li>Overwrite that JPEG file with your own photo, or change the product's <code>image</code> and <code>images</code> paths in <code>data/products.js</code>.</li><li>Remove the reference flags and source credit once you use your own photo. Confirm the listing's real details.</li><li>Run <code>npm.cmd test</code> and <code>npm.cmd run build</code>, then redeploy.</li></ol><p>This batch uses the named originals directly. You do not need to edit the old hashed files in <code>assets/optimized/</code>.</p></aside></main></body></html>`);
