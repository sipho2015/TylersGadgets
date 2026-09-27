import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {products} from '../data/products.js';
import {renderProductDetails,bindProductGallery} from '../src/pages/product/product.js';
import {specificationEntries,relatedProducts} from '../src/pages/product/specifications.js';
import {productImages} from '../src/core/products.js';
import {filterProducts} from '../src/pages/catalog/catalog.js';
import {productEnquiry} from '../src/core/format.js';

test('products retain their available images, primary image and confirmed specifications',()=>{
 for(const p of products){
  const images=productImages(p);assert.ok(images.length>=1&&images.length<=5);assert.equal(images[0],p.image);
  for(const src of images)if(!src.startsWith('https:'))assert.ok(fs.existsSync(src),src);
  const html=renderProductDetails(p);assert.equal((html.match(/data-product-image=/g)||[]).length,images.length>1?images.length:0);
  for(const value of Object.values(p.specifications))assert.ok(specificationEntries(p).some(([,v])=>v===value),value);
 }
 assert.equal(filterProducts(products,{search:'Bluetooth 5.3'})[0].id,'buds');
 assert.equal(filterProducts(products,{search:'Intel Core i5'})[0].id,'thinkpad-e14');
});

test('one through five photos render only the available thumbnails',()=>{
 for(let count=1;count<=5;count++){
  const images=Array.from({length:count},(_,i)=>'photo-'+i+'.jpg');
  const html=renderProductDetails({...products[0],image:images[0],images});
  assert.equal((html.match(/data-product-image=/g)||[]).length,count===1?0:count);
 }
});

test('price belongs only to the main image and sections follow the requested order',()=>{
 const product={...products[0],storage:'128GB',conditionInfo:'Excellent',price:450,oldPrice:500,boxed:true,whatsIncluded:['Device','Box'],warrantyInfo:'Confirmed test warranty'};
 const html=renderProductDetails(product);
 const mainArea=html.split('class="product-information"')[0];
 assert.equal((mainArea.match(/\$450/g)||[]).length,1);
 assert.ok(mainArea.indexOf('$450')>mainArea.indexOf('class="image-price"'));
 assert.ok(mainArea.indexOf('$450')<mainArea.indexOf('class="detail-copy"'));
 const headings=['Specifications','Overview','Condition','What’s Included','Delivery / Collection','Warranty','Related Products'];
 let previous=-1;
 for(const heading of headings){const position=html.search(new RegExp('<h2[^>]*>'+heading+'</h2>'));assert.ok(position>previous,heading);previous=position;}
 assert.ok(html.includes('Used · Excellent'));
 assert.ok(!html.includes('Previously owned device.'));
 const message=new URL(productEnquiry(product)).searchParams.get('text');
 for(const part of ['$450','128GB','Used','Boxed'])assert.ok(message.includes(part));
});

test('specifications omit blanks, accept legacy arrays and correctly describe unboxed devices',()=>{
 const entries=specificationEntries({name:'Phone',brand:'Brand',condition:'Used',boxed:false,specifications:{ram:'8GB',camera:'',network:null,sim:undefined}});
 assert.ok(entries.some(([k,v])=>k==='RAM'&&v==='8GB'));
 assert.ok(entries.some(([k,v])=>k==='Boxed status'&&v==='Unboxed'));
 assert.ok(!entries.some(([k])=>['Camera','Network','SIM'].includes(k)));
 assert.deepEqual(specificationEntries({specifications:['Original detail']}),[['Detail 1','Original detail']]);
 assert.deepEqual(specificationEntries({specifications:{display:''}}),[]);
 assert.equal(relatedProducts(products[0],products.filter(p=>p.legacyPrice)).length,3);
 assert.equal(relatedProducts(products[0],products.filter(p=>p.legacyPrice))[0].id,'thinkpad-e14');
 assert.equal(relatedProducts(products[0],products.filter(p=>p.legacyPrice))[1].id,'powerbank');
});

test('gallery events switch image and selected state, and viewer restores focus',()=>{
 const original=globalThis.document;
 const element=(extras={})=>({dataset:{},events:{},addEventListener(type,fn){this.events[type]=fn;},setAttribute(k,v){this[k]=v;},removeAttribute(k){delete this[k];},focus(){this.focused=true;},...extras});
 const main=element({src:'first.jpg',alt:'First',srcset:'old responsive image'});
 const buttons=['first.jpg','second.jpg'].map((src,i)=>element({dataset:{productImage:src},querySelector(){return {alt:'Photo '+(i+1)};}}));
 const enlarged=element(),caption=element(),close=element(),opener=element(),strip=element();
 const prev=element({dataset:{imageStep:'-1'}}),next=element({dataset:{imageStep:'1'}});
 let locked=false;
 const dialog=element({
  open:false,querySelector(s){return {'img':enlarged,'#product-viewer-caption':caption,'.product-viewer-close':close}[s];},
  querySelectorAll(){return [prev,next];},showModal(){this.open=true;},close(){this.open=false;this.events.close();}
 });
 globalThis.document={
  activeElement:buttons[0],body:{classList:{add(){locked=true;},remove(){locked=false;}}},
  querySelector(s){return {'.main-product-image':main,'.main-image-button':opener,'.product-viewer':dialog,'.thumbnails':strip}[s];},
  querySelectorAll(){return buttons;}
 };
 try{
  bindProductGallery();buttons[1].events.click();
  assert.equal(main.src,'second.jpg');assert.equal(main.alt,'Photo 2');assert.equal(main.srcset,undefined);
  assert.equal(buttons[1]['aria-pressed'],'true');assert.equal(buttons[0]['aria-pressed'],'false');
  opener.events.click();assert.ok(dialog.open);assert.ok(locked);assert.equal(enlarged.src,'second.jpg');
  next.events.click();assert.equal(main.src,'first.jpg');assert.equal(enlarged.src,'first.jpg');
  dialog.events.keydown({key:'ArrowLeft',preventDefault(){}});assert.equal(main.src,'second.jpg');
  close.events.click();assert.ok(!dialog.open);assert.ok(!locked);assert.ok(opener.focused);
  strip.events.keydown({key:'End',preventDefault(){}});assert.ok(buttons[1].focused);
 }finally{globalThis.document=original;}
});
