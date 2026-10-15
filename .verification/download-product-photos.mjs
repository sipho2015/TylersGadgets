const photos=[
 {id:'thinkpad-e14',file:'assets/products/laptops/thinkpad-e14-reference.jpg',url:'https://upload.wikimedia.org/wikipedia/commons/c/c5/Lenovo_ThinkPad_E14_G7_14_WUXGA.jpg'},
 {id:'powerbank',file:'assets/products/accessories/power-bank-reference.jpg',photo:5208777},
 {id:'buds',file:'assets/products/accessories/wireless-earbuds-reference.jpg',photo:33298189},
 {id:'everyday-laptop',file:'assets/products/laptops/everyday-laptop-reference.jpg',photo:291777},
 {id:'work-study-laptop',file:'assets/products/laptops/work-study-laptop-reference.jpg',photo:2861984},
 {id:'wireless-mouse',file:'assets/products/accessories/wireless-mouse-reference.jpg',photo:13870516},
 {id:'computer-keyboard',file:'assets/products/accessories/computer-keyboard-reference.jpg',photo:20510020},
 {id:'over-ear-headphones',file:'assets/products/accessories/over-ear-headphones-reference.jpg',photo:16303234},
 {id:'portable-speaker',file:'assets/products/accessories/portable-speaker-reference.jpg',photo:374753}
];
const fs=await import('node:fs/promises');await fs.mkdir('.verification/photo-downloads',{recursive:true});
await Promise.all(photos.map(async p=>{const url=p.url||`https://images.pexels.com/photos/${p.photo}/pexels-photo-${p.photo}.jpeg?auto=compress&cs=tinysrgb&w=1600`;try{const response=await fetch(url,{signal:AbortSignal.timeout(45000),headers:{'User-Agent':'TylersGadgets/1.0 reference-photography'}});if(!response.ok)throw Error(response.status);const bytes=Buffer.from(await response.arrayBuffer());if(!response.headers.get('content-type')?.startsWith('image/'))throw Error('Not an image');await fs.writeFile(p.file,bytes);console.log(p.id+': '+bytes.length+' bytes');}catch(error){console.log(p.id+': FAILED '+error.message);}}));
await fs.writeFile('.verification/photo-downloads/manifest.json',JSON.stringify(photos,null,2));
