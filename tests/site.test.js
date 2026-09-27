import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import {products,repairs} from '../data/products.js';
import {siteConfig as c} from '../data/site-config.js';
import {getPolicies,policyLinks} from '../data/policies.js';
import {getFaqs} from '../data/content.js';
import {filterProducts,renderCatalog} from '../src/pages/catalog/catalog.js';
import {renderProduct,renderProductDetails} from '../src/pages/product/product.js';
import {pageFor,routeMetadata} from '../src/core/router.js';
import {header,footer,productCard,productActions} from '../src/core/ui.js';
import {availabilityOptions,productImages} from '../src/core/products.js';
import {productEnquiry,productAvailabilityEnquiry,repairEnquiry,tradeEnquiry,deliveryEnquiry,generalEnquiry,escapeHtml,money} from '../src/core/format.js';

const message=url=>new URL(url).searchParams.get('text');
test('confirmed business details and historical prices are preserved without conversion',()=>{
 assert.equal(c.currency,'USD');assert.equal(c.serviceArea,'Victoria Falls');assert.equal(c.location,'Moringa Sun El Hardware');
 assert.equal(c.email,'siphomoyo893@gmail.com');assert.equal(c.whatsapp,'263789652298');
 assert.deepEqual(c.paymentMethods,['Cash','EcoCash']);assert.equal(c.hours,'Monday–Saturday: 08:00–21:00');
 assert.deepEqual(products.filter(p=>p.legacyPrice).map(p=>[p.id,p.legacyPrice.amount]),[['macbook-air',14999],['thinkpad-e14',10499],['powerbank',699],['buds',549]]);
 for(const p of products.filter(p=>p.legacyPrice)){assert.equal(p.price,null);if(p.legacyPrice)assert.equal(p.legacyPrice.currency,'ZAR');assert.equal(p.priceStatus,'awaiting-usd-confirmation');if(p.availability)assert.ok(availabilityOptions[p.availability]);if(p.condition)assert.ok(['New','Used','Refurbished'].includes(p.condition));}
 assert.equal(products.find(p=>p.id==='thinkpad-e14').conditionInfo,'Excellent');assert.equal(products.find(p=>p.id==='macbook-air').conditionInfo,'Like new');
});
test('missing and invalid prices never become zero, NaN or assumed USD amounts',()=>{
 for(const price of [null,undefined,0,-1,NaN,Infinity,'450'])assert.equal(money(price),'Contact for Price');
 assert.equal(money(450),'$450');assert.equal(money(450.25),'$450.25');
 for(const p of products.filter(p=>p.price==null)){assert.ok(productCard(p).includes('Contact for Price'));assert.ok(!message(productEnquiry(p)).includes('$'));assert.ok(message(productEnquiry(p)).includes('price in USD'));}
});
test('search and category, condition, boxed and availability filters compose',()=>{
 const original=products.map(p=>p.id);
 assert.deepEqual(filterProducts(products,{search:' APPLE ',category:'laptops',condition:'Used',availability:'in-stock'}).map(p=>p.id),['macbook-air']);
 assert.equal(filterProducts(products,{condition:'New'}).length,3);
 assert.equal(filterProducts(products,{condition:'Boxed'}).length,9);
 const sample=[{...products[0],boxed:true,availability:'sold',model:'A2633'},{...products[1],boxed:false,availability:'low-stock'}];
 assert.equal(filterProducts(sample,{condition:'Boxed',availability:'sold',search:'A2633'}).length,1);
 assert.equal(filterProducts(sample,{availability:'low-stock'}).length,1);
 assert.equal(filterProducts(products,{search:'not-a-device'}).length,0);
 assert.deepEqual(products.map(p=>p.id),original);
});
test('unknown prices sort last both ways and newest uses dateAdded',()=>{
 const items=[{...products[0],price:null},{...products[1],price:450},{...products[2],price:120},{...products[3],price:undefined}];
 assert.deepEqual(filterProducts(items,{sort:'low'}).map(p=>p.price),[120,450,null,undefined]);
 assert.deepEqual(filterProducts(items,{sort:'high'}).map(p=>p.price),[450,120,null,undefined]);
 assert.equal(filterProducts([{...products[0],dateAdded:'2025-01-01'},{...products[1],dateAdded:'2026-01-01'}],{sort:'newest'})[0].id,products[1].id);
});
test('all stock states have accurate labels and safe CTAs',()=>{
 const expectations={'in-stock':'Order on WhatsApp','low-stock':'Check Availability',sold:'Ask About Similar Devices','coming-soon':'Ask About Availability'};
 for(const [availability,label]of Object.entries(expectations)){
  const p={...products[0],availability};const html=productActions(p);
  assert.ok(productCard(p).includes(availabilityOptions[availability].label));assert.ok(html.includes(label));
  if(availability==='sold'){assert.ok(html.includes('disabled>Sold'));assert.ok(!html.includes('Order on WhatsApp'));assert.ok(message(productEnquiry(p)).includes('similar devices'));assert.ok(!message(productEnquiry(p)).includes("I'm interested in"));}
 }
 assert.ok(productActions({...products[0],availability:'unknown'}).includes('Ask About Availability'));
});
test('WhatsApp messages include confirmed details, use one configured number and encode safely',()=>{
 const p={...products[0],name:'Phone & Plus',storage:'128GB',price:450,boxed:true};
 const urls=[generalEnquiry(),tradeEnquiry(),deliveryEnquiry(),...repairs.map(r=>repairEnquiry(r)),...products.map(p=>productEnquiry(p)),productAvailabilityEnquiry(p)];
 for(const url of urls){const u=new URL(url);assert.equal(u.hostname,'wa.me');assert.equal(u.pathname,'/'+c.whatsapp);assert.ok(u.searchParams.get('text').startsWith('Hi '));}
 const text=message(productEnquiry(p));for(const part of [p.name,'128GB','$450','USD','Used','Boxed'])assert.ok(text.includes(part));
 for(const field of ['Device:','Model:','Storage:','Condition:','Boxed: Yes/No'])assert.ok(message(tradeEnquiry()).includes(field));
 const repair=message(repairEnquiry('Screen replacement',{brand:'Apple',model:'iPhone 13'}));assert.ok(repair.includes('Apple iPhone 13'));assert.ok(repair.includes('Screen replacement'));
 assert.ok(message(deliveryEnquiry()).includes('Sunday'));assert.ok(message(deliveryEnquiry()).includes(c.serviceArea));
});
test('missing optional product information has a clean, honest rendering',()=>{
 const minimal={id:'minimal',name:'Example device',category:'laptops',condition:'Used',availability:'coming-soon'};
 const html=renderProductDetails(minimal);
 assert.ok(html.includes('Contact for Price'));assert.ok(html.includes('assets/placeholders/laptop.svg'));
 for(const absent of ['<h2>Specifications</h2>','<h2>Warranty</h2>','<h2>What’s Included</h2>','class="thumbnails"','<dt>Storage</dt>','<dt>Colour</dt>','undefined','NaN'])assert.ok(!html.includes(absent),absent);
 assert.ok(productCard(minimal).includes('Contact for Price'));
 assert.ok(!renderProductDetails({...minimal,image:'one.jpg',images:['one.jpg']}).includes('class="thumbnails"'));
 const multiple={...minimal,image:'one.jpg',images:['one.jpg','two.jpg']};
 assert.deepEqual(productImages(multiple),['one.jpg','two.jpg']);
 assert.equal((renderProductDetails(multiple).match(/data-product-image=/g)||[]).length,2);
 assert.ok(renderProduct('missing').includes('Back to Gadgets'));
});
test('every route renders one main, one h1 and valid internal links and local assets',()=>{
 const routes=['home','gadgets','shop','phones','laptops','accessories','repairs','gallery','about','contact','delivery',...policyLinks.map(([id])=>id),...products.map(p=>'product/'+p.id)];
 const valid=new Set([...routes,'main']);
 for(const route of routes){
  const content=pageFor(route);const html=header(route)+content+footer();
  assert.equal((content.match(/<main\b/g)||[]).length,1,route);assert.equal((content.match(/<h1\b/g)||[]).length,1,route);
  for(const [,hash]of html.matchAll(/href="#([^"]+)"/g))assert.ok(valid.has(hash),'Unknown route '+hash);
  for(const [,src]of html.matchAll(/src="([^"]+)"/g))if(!src.startsWith('https:'))assert.ok(fs.existsSync(src),'Missing '+src);
  for(const forbidden of ['undefined','4.9/5','Happy customer','siphmoyo893','ZAR','Visa','Tyler?s','What?s','won?t'])assert.ok(!html.includes(forbidden),route+': '+forbidden);
 }
 assert.ok(renderCatalog('phones').includes('data-filter="phones" aria-pressed="true"'));
});
test('all supplied policies are present and business values remain configurable',()=>{
 const policies=getPolicies();assert.equal(Object.keys(policies).length,5);
 const serialized=JSON.stringify(policies);
 for(const phrase of ['accidental damage','liquid damage','applicable Zimbabwe law','Sunday','EcoCash','WhatsApp','Boxed does not automatically mean New'])assert.ok(serialized.includes(phrase),phrase);
 assert.ok(getFaqs().some(([q,a])=>q.includes('Boxed')&&a.startsWith('No.')));
 assert.equal(c.testimonials.length,0);
 const original=c.paymentMethods;
 try{c.paymentMethods=['Example payment'];assert.ok(JSON.stringify(getPolicies()).includes('Example payment'));assert.ok(footer().includes('Example payment'));assert.ok(getFaqs().some(([,a])=>a.includes('Example payment')));}finally{c.paymentMethods=original;}
});
test('metadata is local, unique and all JS and entry assets validate',()=>{
 const titles=['home','gadgets','repairs','about',...policyLinks.map(([id])=>id)].map(route=>routeMetadata(route).title);
 assert.equal(new Set(titles).size,titles.length);assert.ok(titles.every(t=>t.includes(c.serviceArea)));
 const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(d=>d.isDirectory()?walk(dir+'/'+d.name):[dir+'/'+d.name]);
 for(const f of [...walk('src'),...walk('data'),...walk('scripts')].filter(f=>/\.(js|mjs)$/.test(f)))execFileSync(process.execPath,['--check',f]);
 for(const [,src]of fs.readFileSync('index.html','utf8').matchAll(/(?:href|src)="([^"#]+)"/g))if(!src.startsWith('https:'))assert.ok(fs.existsSync(src),src);
 assert.equal(escapeHtml('<script>"&'),'&lt;script&gt;&quot;&amp;');
});
