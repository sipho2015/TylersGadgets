import fs from 'node:fs';
import {chromium} from './tools/node_modules/playwright/index.mjs';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto('http://localhost:3100/gadgets/');const rows=[];
for(let count=1;count<=3;count++){
 await page.locator('#listing [data-selection="compare"]').nth(count-1).click();
 await page.locator('[data-open-collection="compare"]').click();
 for(const width of [320,375,430,768,1024,1440]){
  await page.setViewportSize({width,height:900});
  const sizes=await page.locator('.collection-dialog').evaluate(el=>({dialogWidth:el.clientWidth,contentWidth:el.scrollWidth,wide:document.documentElement.scrollWidth>innerWidth}));
  const table=await page.locator('.comparison-scroll').evaluate(el=>({visible:getComputedStyle(el).display!=='none',width:el.clientWidth,content:el.scrollWidth}));
  if(sizes.contentWidth>sizes.dialogWidth||sizes.wide||(table.visible&&table.content>table.width))throw Error(JSON.stringify({count,width,sizes,table}));
  if(width<=700&&await page.locator('.comparison-card:visible').count()!==count)throw Error('Mobile cards not visible');
  rows.push({count,width,overflow:false});
 }
 if(count===3){await page.setViewportSize({width:375,height:900});await page.screenshot({path:'.verification/compare-mobile.png'});await page.setViewportSize({width:1440,height:900});await page.screenshot({path:'.verification/compare-desktop.png'});}
 await page.keyboard.press('Escape');
}
await page.setViewportSize({width:375,height:900});await page.locator('[data-open-collection="compare"]').click();await page.locator('.comparison-card:visible [data-selection="compare"]').first().click();if(await page.locator('.comparison-card:visible').count()!==2)throw Error('Removal failed');await page.locator('[data-clear-collection="compare"]').click();if(await page.locator('[data-count="compare"]').textContent()!=='0')throw Error('Clear failed');await page.keyboard.press('Escape');
if(errors.length)throw Error(errors.join('\n'));
fs.writeFileSync('.verification/compare-layout-report.json',JSON.stringify({layouts:rows,errors},null,2));console.log('Passed 18 comparison layouts (one, two and three devices at all six widths), removal, clear and Escape; no horizontal scrolling or JavaScript errors.');await browser.close();
