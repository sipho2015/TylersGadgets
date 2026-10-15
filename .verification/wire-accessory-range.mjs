import fs from 'node:fs';
import assert from 'node:assert/strict';
import {products} from '../data/products.js';
const additions=JSON.parse(fs.readFileSync('.verification/accessory-before/new-sources.json','utf8')).map(({photo,...source})=>source);
const descriptions={
 'usb-wall-charger':'Looking for a replacement charger head for a phone or tablet? Ask us to match the wall plug, USB port and power requirements to your device. Confirm the actual model, charging output and whether a cable is included.',
 'usb-charging-cable':'A replacement charging cord for everyday use. Tell us the device model and the connectors needed at both ends so we can confirm a suitable cable, its length and supported charging or data functions.',
 'lightning-charging-cable':'Looking for a Lightning charging cord for a compatible iPhone or iPad? Confirm your device model, the connector at the charger end, cable length and available options before purchasing.',
 'usb-hub':'Connect more accessories to a compatible computer. Tell us your laptop model and the ports you need so we can confirm an appropriate hub, connection type and supported functions.',
 'travel-plug-adapter':'Planning a trip or connecting a device with a different plug? Ask us to check the destination socket and your device requirements. Confirm the adapter type and electrical ratings; do not assume an adapter converts voltage.',
 'sd-memory-card':'Ask about removable storage for a compatible camera or device. Confirm the required card format, capacity, speed rating and device compatibility. The brand and capacity visible in the reference photo are illustrative.',
 'laptop-stand':'Raise a laptop on your desk with a suitable stand. Ask us to confirm the available design, supported laptop size, adjustment options and materials. The laptop and other desk equipment in the reference photo are not part of this listing.',
 'car-phone-holder':'Keep a compatible phone mounted in the car. Ask us to confirm the mounting style, phone and case fit, and any required mounting accessories before purchasing. The photographed design is illustrative.',
 'phone-tripod':'A phone support option for photos, video calls or creating content. Confirm the phone clamp size, tripod design, height and included parts. The phone pictured is for illustration only.',
 'hdmi-cable':'Looking to connect compatible display equipment? Tell us the devices, required cable length and intended use so we can confirm connector types and supported display formats.',
 'usb-flash-drive':'Portable storage for compatible computers and devices. Ask us to confirm the connector, capacity, brand and transfer specifications. The reference photo shows example designs, not a multi-item bundle.',
 'portable-hard-drive':'Ask about external storage for your files and backups. Confirm the actual drive type, capacity, connection, compatibility and included cable before purchasing.'
};
const shortDescriptions={
 'usb-wall-charger':'Replacement charger heads. Confirm the plug, port and charging output.',
 'usb-charging-cable':'Everyday charging cords. Confirm both connectors and cable length.',
 'lightning-charging-cable':'Lightning cords for compatible devices. Confirm the charger-end connector.',
 'usb-hub':'More connection options for your computer. Confirm ports and compatibility.',
 'travel-plug-adapter':'Plug adapters for travel. Confirm the destination socket and ratings.',
 'sd-memory-card':'Removable storage. Confirm format, capacity and device compatibility.',
 'laptop-stand':'Desk support for your laptop. Confirm size and stand design.',
 'car-phone-holder':'Phone mounts for the car. Confirm mounting style and device fit.',
 'phone-tripod':'Support for phone photos and videos. Confirm clamp size and included parts.',
 'hdmi-cable':'Display connection cables. Confirm connectors, length and supported formats.',
 'usb-flash-drive':'Portable USB storage. Confirm connector type and capacity.',
 'portable-hard-drive':'External storage options. Confirm drive type, capacity and connection.'
};
const newProducts=additions.map(source=>({
 id:source.id,slug:source.id,name:source.name,category:'accessories',price:null,
 priceStatus:'awaiting-usd-confirmation',boxed:null,featured:false,referenceOnly:true,referencePhoto:true,
 image:source.file,images:[source.file],
 description:descriptions[source.id]+' Reference listing with illustrative photography. Confirm the actual product, condition, price and availability with us.',
 shortDescription:shortDescriptions[source.id],specifications:{},
 imageNote:'Illustrative reference photograph only. The pictured brand, model, capacity, design and other items shown do not confirm the product or available stock. Ask for current photographs and product details.',
 imageSource:{provider:source.provider,url:source.url,author:source.author,license:source.license,licenseUrl:source.licenseUrl}
}));
for(const p of newProducts)assert(!products.some(old=>old.id===p.id),'Duplicate '+p.id);
const before=JSON.parse(fs.readFileSync('.verification/accessory-before/products.json','utf8'));
assert.deepEqual(products,before);
const file=fs.readFileSync('data/products.js','utf8');
const start=file.indexOf('export const products = '),end=file.indexOf('\n];',start)+3;
assert(start>=0&&end>start);
fs.writeFileSync('data/products.js',file.slice(0,start)+'export const products = '+JSON.stringify([...products,...newProducts],null,2)+';'+file.slice(end));
const sources=JSON.parse(fs.readFileSync('assets/products/photo-sources.json','utf8'));
fs.writeFileSync('assets/products/photo-sources.json',JSON.stringify([...sources,...additions],null,2)+'\n');
// Reuse the visual-guide layout with catalogue-driven counts and labels.
let guide=fs.readFileSync('.verification/create-photo-guides.mjs','utf8');
guide=guide.replace("import fs from 'node:fs';","import fs from 'node:fs';\nimport {products} from '../data/products.js';\nconst referenceCount=products.filter(p=>p.referenceOnly).length;");
guide=guide.replace('The six new reference listings','The ${referenceCount} reference listings');
const labelStart="p.id.startsWith('everyday-')||p.id.startsWith('work-study-')||['wireless-mouse','computer-keyboard','over-ear-headphones','portable-speaker'].includes(p.id)";
guide=guide.replace(labelStart,'products.find(product=>product.id===p.id)?.referenceOnly');
guide=guide.replace('10 real photographs, saved locally with readable names. Six new reference listings and four existing-photo updates.','${sources.length} real photographs, saved locally with readable names. ${referenceCount} reference listings and four existing-photo updates.');
fs.writeFileSync('.verification/refresh-photo-guides.mjs',guide);
let readme=fs.readFileSync('README.md','utf8');
readme=readme.replace('64 HTML pages','76 HTML pages').replace('and 51 products','and 63 products').replace('51 listings: 33 phones, four laptops, 14 accessories','63 listings: 33 phones, four laptops, 26 accessories').replace('Six listings are clearly marked as references','Eighteen listings are clearly marked as references');
readme=readme.replace('Ten sourced real photographs were added on 15 October 2026, replacing the four older generic product images and adding six reference listings.','Twenty-two sourced real photographs were added on 15 October 2026, replacing four older generic product images and supplying eighteen reference listings. The expanded accessories range includes charger heads, USB and Lightning charging cables, USB hubs, travel plug adapters, memory cards, laptop stands, car phone holders, phone tripods, HDMI cables, USB flash drives and portable hard drives.');
fs.writeFileSync('README.md',readme);
console.log('Added '+newProducts.length+' accessories; preserved all '+before.length+' existing listings.');
