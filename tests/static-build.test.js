import { escapeHtml } from '../src/core/format.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { products } from '../data/products.js';
import { structuredData } from '../src/core/seo.js';
import { routePath,routeFromLocation } from '../src/core/urls.js';
import { imageManifest } from '../src/core/image-manifest.js';

test('static build exposes every product without JavaScript, with accurate metadata and sitemap',()=>{
 const out='.verification/static-fixture';
 execFileSync(process.execPath,['scripts/build-static.mjs',out],{env:{...process.env,SITE_URL:'https://example.test'}});
 const sitemap=fs.readFileSync(out+'/sitemap.xml','utf8');assert.equal((sitemap.match(/<loc>/g)||[]).length,13+products.length);
 assert.ok(fs.readFileSync(out+'/robots.txt','utf8').includes('https://example.test/sitemap.xml'));
 for(const p of products){
  const route='product/'+(p.slug||p.id),html=fs.readFileSync(out+routePath(route)+'index.html','utf8');
  assert.ok(html.includes('<h1>'+escapeHtml(p.name)+'</h1>'),p.id);
  assert.ok(html.includes('href="https://example.test'+routePath(route)+'"'));
  assert.ok(html.includes('<base href="/">'));assert.ok(html.includes('application/ld+json'));
  assert.ok(html.includes('property="og:image" content="https://'));
  const schema=structuredData(route,'https://example.test')[1];
  assert.equal(schema.name,p.name);assert.ok(!schema.aggregateRating);assert.ok(!schema.review);
  if(p.price===null)assert.ok(!schema.offers);else assert.equal(schema.offers.price,p.price);
  if(!p.availability&&schema.offers)assert.ok(!schema.offers.availability);
 }
 assert.equal(routeFromLocation({hash:'',pathname:'/product/iphone-x/'}),'product/iphone-x');
 assert.equal(routeFromLocation({hash:'#phones',pathname:'/'}),'phones');
 const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(item=>item.isDirectory()?walk(dir+'/'+item.name):[dir+'/'+item.name]);
 for(const file of walk(out).filter(file=>file.endsWith('.html'))){
  const html=fs.readFileSync(file,'utf8');
  for(const [,url]of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
   if(/^(https:|http:|mailto:|tel:)/.test(url))continue;
   const relative=url.split('#')[0];if(!relative)continue;
   const target=out+'/'+relative.replace(/^\//,'');
   assert.ok(fs.existsSync(target.endsWith('/')?target+'index.html':target),file+': '+url);
  }
 }
});
test('optimized images provide existing responsive variants and preserve original photographs',()=>{
 assert.ok(Object.keys(imageManifest).length>0);
 for(const [original,entry]of Object.entries(imageManifest)){
  assert.ok(fs.existsSync(original));assert.ok(entry.width>0&&entry.height>0);
  for(const variant of entry.variants){assert.ok(fs.existsSync(variant.src));assert.ok(variant.width<=entry.width);}
 }
});
