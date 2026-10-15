import test from 'node:test';
import assert from 'node:assert/strict';
import { products } from '../data/products.js';
import { createSelections } from '../src/core/selections.js';
import { comparisonTable } from '../src/pages/catalog/collections.js';
import { multiProductLinks,productEmail,repairMessage,tradeMessage } from '../src/core/enquiries.js';
import { siteConfig } from '../data/site-config.js';

test('selections enforce comparison limit, persist IDs and tolerate blocked storage',()=>{
 const values=new Map(),storage={getItem:key=>values.get(key),setItem:(key,value)=>values.set(key,value)};
 const state=createSelections(storage);
 for(const p of products.slice(0,3))assert.equal(state.toggle('compare',p.id).ok,true);
 assert.equal(state.toggle('compare',products[3].id).ok,false);
 assert.equal(createSelections(storage).ids('compare').length,3);
 state.toggle('compare',products[0].id);assert.equal(state.ids('compare').length,2);
 state.clear('compare');assert.deepEqual(state.ids('compare'),[]);
 const blocked=createSelections({getItem(){throw Error();},setItem(){throw Error();}});
 assert.equal(blocked.toggle('saved',products[0].id).ok,true);
 assert.equal(blocked.toggle('saved','missing').ok,false);
 for(const p of products.slice(0,12))blocked.visit(p.id);
 blocked.visit(products[4].id);assert.equal(blocked.ids('recent').length,8);assert.equal(blocked.ids('recent')[0],products[4].id);
 assert.deepEqual(createSelections({getItem:()=>'{bad'}).ids('saved'),[]);
 assert.deepEqual(createSelections({getItem:()=>JSON.stringify([products[0].id,products[0].id,'missing'])}).ids('saved'),[products[0].id]);
});
test('multi-product WhatsApp and email retain actual details and safely encode text',()=>{
 const items=[{...products[0],name:'Device & accessories?',price:null},{...products[4],price:120,availability:'sold'}];
 const links=multiProductLinks(items),whatsapp=new URL(links.whatsapp),email=new URL(links.email);
 assert.equal(whatsapp.pathname,'/'+siteConfig.whatsapp);assert.equal(email.pathname,siteConfig.email);
 assert.equal(whatsapp.searchParams.get('text'),email.searchParams.get('body'));
 for(const phrase of ['Device & accessories?','price to confirm','$120','listed as sold','delivery'])assert.ok(email.searchParams.get('body').includes(phrase));
 assert.ok(new URL(productEmail(items[0])).searchParams.get('subject').includes(items[0].name));
});
test('comparison shows missing values without inventing specifications',()=>{
 const html=comparisonTable([{...products[0],specifications:{ram:'8GB'}},{...products[1],specifications:{}}]);
 assert.ok(html.includes('Not specified'));assert.ok(html.includes('8GB'));assert.ok(!html.includes('Battery health'));
 assert.ok(html.includes('scope="row"'));assert.ok(html.includes('scope="col"'));
});
test('repair and trade messages include supplied details and require an assessment',()=>{
 const repair=repairMessage({brand:'Apple',model:'iPhone X',problem:'Cracked & damaged',service:'Screen',contact:'Email'});
 for(const part of ['Apple iPhone X','Cracked & damaged','Screen','Email'])assert.ok(repair.includes(part));
 const trade=tradeMessage({brand:'Samsung',faults:'Screen blot',batteryHealth:'Unknown'});
 assert.ok(trade.includes('Screen blot'));assert.ok(trade.includes('value must be confirmed'));assert.ok(trade.includes('Storage: To confirm'));
});
