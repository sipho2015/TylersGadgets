import fs from 'node:fs';import {chromium} from './tools/node_modules/playwright/index.mjs';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});const page=await browser.newPage();const errors=[];page.on('pageerror',error=>errors.push(error.message));const layouts=[];
for(const width of [320,375,430,768,1024,1440]){
 await page.setViewportSize({width,height:1000});await page.goto('http://localhost:3100/about/');await page.locator('.about-hero h1').waitFor();
 for(const img of await page.locator('.about-page img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(el=>el.decode());}
 const dimensions=await page.evaluate(()=>({viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,valueColumns:getComputedStyle(document.querySelector('.about-value-grid')).gridTemplateColumns.split(' ').length,hero:getComputedStyle(document.querySelector('.about-hero')).gridTemplateColumns.split(' ').length}));
 if(dimensions.scrollWidth>width)throw Error('Overflow '+width);
 if(width<=700&&dimensions.hero!==1)throw Error('Mobile hero order');
 if(width===1440&&dimensions.valueColumns!==4)throw Error('Desktop value grid');
 if(width===768&&dimensions.valueColumns!==2)throw Error('Tablet value grid');
 layouts.push({width,...dimensions});
}
await page.setViewportSize({width:1440,height:1000});await page.goto('http://localhost:3100/about/');await page.locator('.about-closing').scrollIntoViewIfNeeded();await page.waitForTimeout(200);await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:'.verification/about-desktop.png',fullPage:true});
await page.setViewportSize({width:375,height:1000});await page.screenshot({path:'.verification/about-mobile.png'});await page.locator('.about-contact-panel').screenshot({path:'.verification/about-contact-mobile.png'});
const links=await page.locator('.about-page a').evaluateAll(links=>links.map(a=>({text:a.textContent.trim(),href:a.href})));
const whats=links.find(link=>link.text.includes('Chat on WhatsApp'));if(new URL(whats.href).pathname!=='/263789652298')throw Error('WhatsApp number');
const mail=links.find(link=>link.text.includes('Send an Email'));if(new URL(mail.href).pathname!=='siphomoyo893@gmail.com')throw Error('Email');
await page.goto('http://localhost:3100/about/');await page.locator('.about-hero').getByRole('link',{name:'Explore Gadgets'}).click();if(!page.url().endsWith('/gadgets/'))throw Error('Catalogue link');
await page.goto('http://localhost:3100/about/');await page.locator('.about-service-copy').getByRole('link',{name:'Shop Accessories'}).click();if(!page.url().endsWith('/accessories/'))throw Error('Accessories link');
await page.goto('http://localhost:3100/about/');await page.locator('.about-service-copy').getByRole('link',{name:'Explore Repairs'}).click();if(!page.url().endsWith('/repairs/'))throw Error('Repairs link');
await page.goto('http://localhost:3100/about/');await page.locator('.about-hero').getByRole('link',{name:'Contact Us'}).click();if(!page.url().endsWith('/#contact'))throw Error('Contact link');
const noJS=await browser.newContext({javaScriptEnabled:false});const staticPage=await noJS.newPage();await staticPage.goto('http://localhost:3100/about/');if(!await staticPage.locator('.about-hero h1').textContent())throw Error('Static content');
if(errors.length)throw Error(errors.join('\n'));const report={layouts,links,errors,staticContent:'passed',navigation:'passed'};fs.writeFileSync('.verification/about-browser-report.json',JSON.stringify(report,null,2));console.log('About page passed all six widths, image loading, contact links, category navigation and no-JavaScript content; no overflow or JavaScript errors.');await browser.close();
