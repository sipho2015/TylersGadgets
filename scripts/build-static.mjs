import { structuredData } from '../src/core/seo.js';
import fs from 'node:fs';
import path from 'node:path';
import { products } from '../data/products.js';
import { siteConfig as c } from '../data/site-config.js';
import { policyLinks } from '../data/policies.js';
import { pageFor,routeMetadata } from '../src/core/router.js';
import { header,footer,productGrid } from '../src/core/ui.js';
import { collectionToolbar } from '../src/pages/catalog/collections.js';
import { staticLinks,routePath,publicUrl } from '../src/core/urls.js';
import { escapeHtml as e } from '../src/core/format.js';

const out=path.resolve(process.argv[2]||'dist');
if(!out.startsWith(process.cwd()+path.sep)||out===process.cwd())throw Error('Output must be a directory inside the project');
fs.mkdirSync(out,{recursive:true});
for(const directory of ['assets','src','data'])fs.cpSync(directory,path.join(out,directory),{recursive:true});
const base=process.env.SITE_URL||c.siteUrl||(process.env.VERCEL_PROJECT_PRODUCTION_URL?'https://'+process.env.VERCEL_PROJECT_PRODUCTION_URL:'');
if(base){const url=new URL(base);if(!['https:','http:'].includes(url.protocol)||url.username||url.password)throw Error('SITE_URL must be a public HTTP(S) origin');if(url.pathname!=='/'||url.search||url.hash)throw Error('SITE_URL must contain only the website origin');}
if(base){const configFile=path.join(out,'data/site-config.js');fs.writeFileSync(configFile,fs.readFileSync(configFile,'utf8').replace(/siteUrl:\s*["'][^"']*["']/,()=>`siteUrl: ${JSON.stringify(base)}`));}
let template=fs.readFileSync('index.html','utf8');
const styles=[...template.matchAll(/<link rel="stylesheet" href="([^"]+)">/g)].map(match=>match[1]);
fs.writeFileSync(path.join(out,'assets/site.css'),styles.map(file=>fs.readFileSync(file,'utf8')).join('\n'));
template=template.replace(/<link rel="stylesheet" href="[^"]+">/g,'').replace('</head>','<link rel="stylesheet" href="assets/site.css"></head>');
const routes=['home','gadgets','phones','laptops','accessories','repairs','gallery','about',...policyLinks.map(([id])=>id),...products.map(p=>'product/'+(p.slug||p.id))];
const absolute=value=>value?(base?new URL(value,base).href:value):null;

for(const route of routes){
 const meta=routeMetadata(route),canonical=publicUrl(route,base);
 let html=template.replace(/<title>[\s\S]*?<\/title>/,`<title>${e(meta.title)}</title>`);
 for(const [kind,name,value] of [['name','description',meta.description],['property','og:title',meta.title],['property','og:description',meta.description],['property','og:image',absolute(meta.image)],['name','twitter:title',meta.title],['name','twitter:description',meta.description],['name','twitter:image',absolute(meta.image)]]){
  html=html.replace(new RegExp('<meta '+kind+'="'+name+'"[^>]*>'),()=>`<meta ${kind}="${name}" content="${e(value)}">`);
 }
 html=html.replace(/<link rel="canonical"[^>]*>\s*/g,'').replace(/<meta property="og:url"[^>]*>\s*/g,'');
 html=html.replace('<head>','<head><base href="/">');
 let content=pageFor(route);
 if(['gadgets','phones','laptops','accessories'].includes(route))content=content.replace('<div id="listing"></div>',`<div id="listing">${productGrid(route==='gadgets'?products:products.filter(p=>p.category===route))}</div>`);
 html=html.replace('<div id="app"></div>',`<div id="app">${staticLinks(header(route)+collectionToolbar()+content+footer())}</div>`);
 html=html.replace('<html lang="en">',`<html lang="en" data-static="true" data-route="${route}">`);
 html=html.replace('</head>',`${canonical?`<link rel="canonical" href="${e(canonical)}"><meta property="og:url" content="${e(canonical)}">`:''}<script type="application/ld+json">${JSON.stringify(structuredData(route,base)).replace(/</g,'\\u003c')}</script><noscript><style>.collection-toolbar,.selection-actions,.catalog-filter-panel,.catalog-controls,.catalog-bar,.gallery-filters,.gallery-brand-filters,.menu{display:none!important}@media(max-width:800px){nav{display:flex;position:static;flex-wrap:wrap;padding:8px;height:auto}.nav-wrap{height:auto;flex-wrap:wrap;padding-block:12px}}.main-image-button,.gallery-grid figure>button{cursor:default}</style></noscript></head>`);
 html=html.replace('<noscript>Please enable JavaScript to browse this catalogue.</noscript>','<noscript>Enable JavaScript for filtering, image viewers, comparison and saved lists. You can still browse products and contact us.</noscript>');
 const destination=route==='home'?out:path.join(out,decodeURIComponent(routePath(route)));
 fs.mkdirSync(destination,{recursive:true});fs.writeFileSync(path.join(destination,'index.html'),html);
}
fs.mkdirSync(path.join(out,'shop'),{recursive:true});fs.writeFileSync(path.join(out,'shop/index.html'),'<meta http-equiv="refresh" content="0;url=/gadgets/"><a href="/gadgets/">Browse gadgets</a>');
let robots='User-agent: *\nAllow: /\n';
if(base){fs.writeFileSync(path.join(out,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route=>`<url><loc>${e(publicUrl(route,base))}</loc></url>`).join('')}</urlset>`);robots+='Sitemap: '+absolute('sitemap.xml')+'\n';}
else{fs.rmSync(path.join(out,'sitemap.xml'),{force:true});console.log('Public URL not configured: canonical links and sitemap deferred. Set SITE_URL or siteConfig.siteUrl and rebuild.');}
fs.writeFileSync(path.join(out,'robots.txt'),robots);
console.log(`Generated ${routes.length} static pages in dist; all ${products.length} product records preserved.`);
