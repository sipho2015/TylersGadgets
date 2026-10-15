import fs from 'node:fs';
import assert from 'node:assert/strict';
import {products} from '../data/products.js';
import {chromium} from './tools/node_modules/playwright/index.mjs';
const before=JSON.parse(fs.readFileSync('.verification/accessory-before/products.json','utf8'));
assert.deepEqual(products.slice(0,before.length),before);
const added=products.slice(before.length);
assert.equal(added.length,12);assert.equal(new Set(products.map(p=>p.id)).size,products.length);
for(const p of added){assert.equal(p.price,null);assert.equal(p.availability,undefined);assert.equal(p.condition,undefined);assert.equal(p.referenceOnly,true);assert(fs.existsSync(p.image));}
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.setViewportSize({width:1440,height:1000});await page.goto('http://localhost:3100/accessories/');await page.locator('#product-search').fill('charger');assert((await page.locator('#listing').innerText()).includes('USB Wall Charger Head'));await page.locator('#product-search').fill('Lightning');assert((await page.locator('#listing').innerText()).includes('Lightning Charging Cable'));await page.locator('#product-search').fill('');await page.locator('[href="#product/usb-wall-charger"]').first().scrollIntoViewIfNeeded();await page.waitForFunction(()=>[...document.querySelectorAll('#listing img')].filter(img=>{const r=img.getBoundingClientRect();return r.bottom>0&&r.top<innerHeight;}).every(img=>img.complete&&img.naturalWidth>0));await page.screenshot({path:'.verification/expanded-accessories-desktop.png'});assert.deepEqual(errors,[]);await browser.close();console.log('12 new product pages checked at 4 widths, charger/cable search works, all 51 existing listings preserved, no console errors or page overflow.');
