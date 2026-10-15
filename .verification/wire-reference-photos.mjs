import fs from 'node:fs';
const rows=[
 ['macbook-air','MacBook Air M1','laptops/macbook-air-reference.jpg','https://www.pexels.com/photo/person-using-a-macbook-air-4974913/','Pexels','olia danilevich'],
 ['thinkpad-e14','Lenovo ThinkPad E14','laptops/thinkpad-e14-reference.jpg','https://commons.wikimedia.org/wiki/File:Lenovo_ThinkPad_E14_G7_14_WUXGA.jpg','Wikimedia Commons','Rakoon'],
 ['powerbank','20,000mAh Power Bank','accessories/power-bank-reference.jpg','https://www.pexels.com/photo/overhead-shot-of-a-cellphone-charging-from-a-power-bank-5208777/','Pexels','Kaboompics'],
 ['buds','Wireless Earbuds','accessories/wireless-earbuds-reference.jpg','https://www.pexels.com/photo/minimalist-black-wireless-earbuds-on-white-background-33298189/','Pexels','Puru Raj'],
 ['everyday-laptop','Everyday Laptop','laptops/everyday-laptop-reference.jpg','https://www.pexels.com/photo/silver-laptop-computer-on-table-291777/','Pexels','AS Photography'],
 ['work-study-laptop','Work & Study Laptop','laptops/work-study-laptop-reference.jpg','https://www.pexels.com/photo/black-laptop-computer-and-wireless-mouse-on-table-2861984/','Pexels','Adam Sondel'],
 ['wireless-mouse','Wireless Mouse','accessories/wireless-mouse-reference.jpg','https://www.pexels.com/photo/photograph-of-a-black-wireless-mouse-13870516/','Pexels','Matheus Bertelli'],
 ['computer-keyboard','Computer Keyboard','accessories/computer-keyboard-reference.jpg','https://www.pexels.com/photo/a-black-computer-keyboard-on-white-background-20510020/','Pexels','Matheus Bertelli'],
 ['over-ear-headphones','Over-Ear Headphones','accessories/over-ear-headphones-reference.jpg','https://www.pexels.com/photo/black-headphones-on-a-desk-16303234/','Pexels',null],
 ['portable-speaker','Portable Speaker','accessories/portable-speaker-reference.jpg','https://www.pexels.com/photo/rectangular-black-speaker-on-white-wooden-surface-374753/','Pexels',null]
].map(([id,name,file,url,provider,author])=>({id,name,file:'assets/products/'+file,url,provider,author,license:provider==='Pexels'?'Pexels License':'CC0 1.0',licenseUrl:provider==='Pexels'?'https://www.pexels.com/license/':'https://creativecommons.org/publicdomain/zero/1.0/',downloaded:'2026-10-15'}));
fs.writeFileSync('assets/products/photo-sources.json',JSON.stringify(rows,null,2)+'\n');
let path='data/products.js',s=fs.readFileSync(path,'utf8');
for(const row of rows.slice(0,4)){
 const start=s.indexOf('    "id": "'+row.id+'"');const end=s.indexOf('\n  },',start);let block=s.slice(start,end);
 block=block.replace(/"image": "[^"]+"/,'"image": "'+row.file+'"').replace(/"images": \[[\s\S]*?\]/,'"images": [\n      "'+row.file+'"\n    ]');
 const note=row.id==='macbook-air'?'Reference MacBook photograph only; the model, generation and condition pictured may differ from the listed device. Ask for current photographs before purchasing.':row.id==='thinkpad-e14'?'Reference ThinkPad E14 Gen 7 photograph; the generation and condition may differ from the listed device. Ask for current photographs before purchasing.':'Reference photograph only; the brand, model and features pictured may differ from the listed product. Ask for current photographs before purchasing.';
 block+=',\n    "referencePhoto": true,\n    "imageNote": '+JSON.stringify(note)+',\n    "imageSource": '+JSON.stringify({provider:row.provider,url:row.url,author:row.author,license:row.license,licenseUrl:row.licenseUrl});
 s=s.slice(0,start)+block+s.slice(end);
}
const additions=rows.slice(4).map(row=>({id:row.id,slug:row.id,name:row.name,category:row.file.includes('/laptops/')?'laptops':'accessories',price:null,priceStatus:'awaiting-usd-confirmation',boxed:null,featured:false,referenceOnly:true,referencePhoto:true,image:row.file,images:[row.file],description:'Reference listing with illustrative photography. Confirm the actual brand, model, specifications, condition, price and availability with us before arranging a purchase.',shortDescription:'Reference listing. Product details and availability to confirm.',specifications:{},imageNote:'Illustrative reference photograph only. This image does not confirm the exact product or available stock. Ask for current photographs and product details.',imageSource:{provider:row.provider,url:row.url,author:row.author,license:row.license,licenseUrl:row.licenseUrl}}));
s=s.replace(/\n\];\s*\nexport const repairs/,',\n'+additions.map(p=>'  '+JSON.stringify(p,null,2).replace(/\n/g,'\n  ')).join(',\n')+'\n];\n\nexport const repairs');fs.writeFileSync(path,s);
