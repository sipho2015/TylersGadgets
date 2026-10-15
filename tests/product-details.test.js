import test from 'node:test';
import assert from 'node:assert/strict';
import { conditionEntries,productHighlights,includedItems } from '../src/pages/product/details.js';
import { detailContact,productPageUrl,copyProductLink,shareWhatsApp } from '../src/pages/product/contact.js';
import { renderProductDetails } from '../src/pages/product/product.js';
import { siteConfig as c } from '../data/site-config.js';
import { products } from '../data/products.js';

test('condition report includes only supplied facts and never equates boxed with new',()=>{
 const minimal={id:'sample',name:'Sample',category:'phones',boxed:true};
 assert.deepEqual(conditionEntries(minimal),[['Packaging','Supplied with its box.']]);
 for(const condition of ['New','Used','Refurbished'])assert.ok(conditionEntries({...minimal,condition}).some(([key,value])=>key==='Device condition'&&value===condition));
 const inspected={...minimal,condition:'Used',conditionInfo:'Clean',specifications:{batteryHealth:'89%',faceId:'Not working',screenCondition:'Small blot',sim:'Dual SIM'},knownFaults:['Face ID not working'],includedAccessories:['Cable']};
 const entries=conditionEntries(inspected);
 for(const value of ['Used','Clean','89%','Not working','Small blot','Dual SIM','Face ID not working','Cable'])assert.ok(entries.some(([,actual])=>actual===value));
 assert.ok(!entries.some(([key])=>key==='Camera functionality'));
 const html=renderProductDetails(minimal);assert.ok(!html.includes('Unused/new'));assert.ok(!html.includes('None reported'));assert.ok(!html.includes('inspection completed'));
 assert.ok(!html.includes('product-included'));assert.ok(!html.includes('product-warranty-summary'));
 assert.deepEqual(includedItems({...minimal,whatsIncluded:['',null,'Cable']}),['Cable']);
});

test('highlights are bounded, deduplicated and use configured facts',()=>{
 assert.deepEqual(productHighlights({storage:'128GB',highlights:['128GB storage','Face ID working','Face ID working']}),['Face ID working']);
 assert.equal(productHighlights({highlights:['One','Two','Three','Four','Five','Six']}).length,5);
 assert.deepEqual(productHighlights({specifications:{}}),[]);
 assert.deepEqual(productHighlights({specifications:{ram:'8GB',charging:'USB-C'}}),['RAM: 8GB','Charging: USB-C']);
});

test('product contact actions preserve all stock behaviours and truthful email details',()=>{
 const base={...products[0],name:'Phone & Plus?',storage:'128GB',price:450,condition:'Used',conditionInfo:'Clean',boxed:true};
 for(const [availability,label] of [['in-stock','Enquire on WhatsApp'],['low-stock','Check Availability'],['sold','Ask About Similar Devices'],['coming-soon','Ask About Availability'],[undefined,'Confirm Availability']]){
  const links=detailContact({...base,availability},'https://example.test/product/sample/');
  assert.equal(links.label,label);assert.equal(new URL(links.whatsapp).pathname,'/'+c.whatsapp);
  const email=new URL(links.email),body=email.searchParams.get('body'),whats=new URL(links.whatsapp).searchParams.get('text');
  assert.equal(email.pathname,c.email);
  for(const text of ['Phone & Plus?','128GB','Used','Clean','Boxed','$450','https://example.test/product/sample/']){assert.ok(body.includes(text));assert.ok(whats.includes(text));}
  if(availability==='sold'){assert.ok(body.includes('listed as sold'));assert.ok(whats.includes('similar devices'));assert.ok(!whats.includes("I'm interested in"));}
 }
 const body=new URL(detailContact({...base,price:null}).email).searchParams.get('body');assert.ok(body.includes('Contact for Price'));assert.ok(!body.includes('$'));
});

test('single images omit gallery navigation and multiple images keep their configured order',()=>{
 const single=renderProductDetails({...products[0],image:'first.jpg',images:['first.jpg']});
 assert.ok(!single.includes('data-gallery-step'));assert.ok(!single.includes('data-image-step'));assert.ok(!single.includes('class="thumbnails"'));
 const multiple=renderProductDetails({...products[0],image:'first.jpg',images:['third.jpg','second.jpg']});
 assert.ok(multiple.indexOf('data-product-image="first.jpg"')<multiple.indexOf('data-product-image="third.jpg"'));
 assert.ok(multiple.indexOf('data-product-image="third.jpg"')<multiple.indexOf('data-product-image="second.jpg"'));
 assert.ok(multiple.includes('data-gallery-step="1"'));assert.ok(multiple.includes('data-image-step="-1"'));
});

test('sharing uses working source/static URLs and clipboard failure falls back safely',async()=>{
 const original=c.siteUrl;c.siteUrl='';
 try{
  const p={id:'phone',slug:'phone-plus'};
  assert.equal(productPageUrl(p,{origin:'https://example.test',pathname:'/',staticSite:true}),'https://example.test/product/phone-plus/');
  assert.equal(productPageUrl(p,{origin:'http://localhost:3000',pathname:'/',staticSite:false}),'http://localhost:3000/#product/phone-plus');
  assert.equal(productPageUrl(p),null);
  c.siteUrl='https://shop.example.test';assert.equal(productPageUrl(p),'https://shop.example.test/product/phone-plus/');
  const share=new URL(shareWhatsApp({name:'Phone & Plus'},'https://example.test/product/phone-plus/'));assert.ok(share.searchParams.get('text').includes('https://example.test/product/phone-plus/'));
 }finally{c.siteUrl=original;}
 let copied;assert.equal(await copyProductLink('https://example.test',{clipboard:{async writeText(value){copied=value;}}}),true);assert.equal(copied,'https://example.test');
 assert.equal(await copyProductLink('https://example.test',{}),false);
 assert.equal(await copyProductLink('https://example.test',{clipboard:{async writeText(){throw Error('Denied');}}}),false);
});
