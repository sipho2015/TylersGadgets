import fs from 'node:fs/promises';
export const items = [
 ['usb-wall-charger','USB Wall Charger Head',4097207,'white-adapter-on-a-blue-surface','Markus Winkler'],
 ['usb-charging-cable','USB Charging Cable',914915,'close-up-photo-of-white-usb-cable','Matthias Zomer'],
 ['lightning-charging-cable','Lightning Charging Cable',914912,'close-up-photography-of-white-iphone-charger','Matthias Zomer'],
 ['usb-hub','USB Hub',7742586,'a-usb-hub-plugged-into-a-laptop','Rann Vijay'],
 ['travel-plug-adapter','Travel Plug Adapter',32688515,'universal-plug-adapter-on-cluttered-surface','Alexey Demidov'],
 ['sd-memory-card','SD Memory Card',1738642,'128gb-lexar-micro-sd-card-adapter','Luis Quintero'],
 ['laptop-stand','Laptop Stand',4792717,'modern-laptop-placed-on-stand-on-desk','Anete Lusina'],
 ['car-phone-holder','Car Phone Holder',13536013,'close-up-of-a-magnetic-phone-holder','Abdulvahap Demir'],
 ['phone-tripod','Phone Tripod',13709180,'a-mobile-phone-on-black-tripod','Amar Preciado'],
 ['hdmi-cable','HDMI Cable',12997230,'close-up-shot-of-an-hdmi-cable','Srattha Nualsate'],
 ['usb-flash-drive','USB Flash Drive',7442196,'usb-flash-drives-in-row-on-rough-surface','Jonathan Borba'],
 ['portable-hard-drive','Portable Hard Drive',4675007,'close-up-of-a-usb-hard-drive','Nothing Ahead']
].map(([id,name,photo,title,author])=>({id,name,photo,file:`assets/products/accessories/${id}-reference.jpg`,url:`https://www.pexels.com/photo/${title}-${photo}/`,provider:'Pexels',author,license:'Pexels License',licenseUrl:'https://www.pexels.com/license/',downloaded:'2026-10-15'}));
await fs.writeFile('.verification/accessory-before/new-sources.json',JSON.stringify(items,null,2)+'\n');
const downloads=await Promise.allSettled(items.map(async p=>{
 let response=await fetch(`https://images.pexels.com/photos/${p.photo}/pexels-photo-${p.photo}.jpeg?auto=compress&cs=tinysrgb&w=1600`,{signal:AbortSignal.timeout(45000)});
 if(response.status===404)response=await fetch(`https://images.pexels.com/photos/${p.photo}/pexels-photo-${p.photo}.jpg?auto=compress&cs=tinysrgb&w=1600`,{signal:AbortSignal.timeout(45000)});
 if(!response.ok||!response.headers.get('content-type')?.startsWith('image/'))throw Error(`Download failed ${p.id}: ${response.status}`);
 const bytes=Buffer.from(await response.arrayBuffer());await fs.writeFile(p.file,bytes);console.log(p.id+': '+bytes.length+' bytes');
}));
for(let i=0;i<downloads.length;i++)if(downloads[i].status==='rejected')console.log(items[i].id+': '+downloads[i].reason.message);
if(downloads.some(r=>r.status==='rejected'))process.exitCode=1;
const sharp=(await import('./tools/node_modules/sharp/dist/index.mjs')).default;
const tiles=await Promise.all(items.map(async (p,i)=>({input:await sharp(await fs.readFile(p.file).catch(()=>sharp({create:{width:350,height:250,channels:3,background:'#eee'}}).jpeg().toBuffer())).resize(350,250,{fit:'contain',background:'#fff'}).jpeg().toBuffer(),left:(i%3)*350,top:Math.floor(i/3)*250})));
await sharp({create:{width:1050,height:Math.ceil(items.length/3)*250,channels:3,background:'#fff'}}).composite(tiles).jpeg().toFile('.verification/new-accessories-sheet.jpg');
