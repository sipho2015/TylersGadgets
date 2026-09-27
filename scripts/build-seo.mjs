import fs from 'node:fs';
import {siteConfig} from '../data/site-config.js';
import {routeMetadata} from '../src/core/router.js';
import {escapeHtml as e} from '../src/core/format.js';
const meta=routeMetadata('home');
let html=fs.readFileSync('index.html','utf8');
html=html.replace(/<title>[\s\S]*?<\/title>/,`<title>${e(meta.title)}</title>`);
for(const [kind,name,value] of [
 ['name','description',meta.description],['property','og:title',meta.title],
 ['property','og:description',meta.description],['property','og:image',meta.image],
 ['name','twitter:title',meta.title],['name','twitter:description',meta.description],
 ['name','twitter:image',meta.image]
]){
 const tag=`<meta ${kind}="${name}" content="${e(value)}">`;
 const expression=new RegExp('<meta '+kind+'="'+name+'"[^>]*>');
 html=expression.test(html)?html.replace(expression,()=>tag):html.replace('</head>',tag+'\n</head>');
}
html=html.replace(/<link rel="canonical"[^>]*>\s*/g,'').replace(/<meta property="og:url"[^>]*>\s*/g,'');
let robots='User-agent: *\nAllow: /\n';
if(siteConfig.siteUrl){
 const url=new URL(siteConfig.siteUrl);url.hash='';
 if(!['https:','http:'].includes(url.protocol))throw new Error('siteUrl must be a public HTTP(S) homepage URL');
 html=html.replace('</head>',`<link rel="canonical" href="${e(url.href)}">\n<meta property="og:url" content="${e(url.href)}">\n</head>`);
 // Hash routes are one document, so list the homepage only.
 fs.writeFileSync('sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${e(url.href)}</loc></url></urlset>\n`);
 robots+='Sitemap: '+new URL('sitemap.xml',url).href+'\n';
}else if(fs.existsSync('sitemap.xml')){
 fs.unlinkSync('sitemap.xml');
}
fs.writeFileSync('index.html',html,'utf8');fs.writeFileSync('robots.txt',robots);
console.log(siteConfig.siteUrl?'SEO metadata, robots.txt and sitemap updated.':'SEO metadata and robots.txt updated. Set siteUrl to generate the canonical and sitemap.');
