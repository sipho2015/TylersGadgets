import fs from 'node:fs/promises';
import sharp from './tools/node_modules/sharp/dist/index.mjs';
const ids=[914912,28042836,7442196,4675007,12997240,3921633];
await fs.mkdir('.verification/accessory-candidates',{recursive:true});
const tiles=await Promise.all(ids.map(async(id,i)=>{const r=await fetch(`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&w=1000`);if(!r.ok)throw Error(id+' '+r.status);const bytes=Buffer.from(await r.arrayBuffer());await fs.writeFile(`.verification/accessory-candidates/${id}.jpg`,bytes);return{input:await sharp(bytes).resize(350,250,{fit:'contain',background:'#fff'}).jpeg().toBuffer(),left:(i%3)*350,top:Math.floor(i/3)*250};}));
await sharp({create:{width:1050,height:500,channels:3,background:'#fff'}}).composite(tiles).jpeg().toFile('.verification/accessory-candidates/sheet.jpg');
