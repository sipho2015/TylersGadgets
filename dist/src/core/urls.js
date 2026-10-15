import { siteConfig } from '../../data/site-config.js';

export function routePath(route){
 if(['home','main',''].includes(route))return '/';
 if(route==='contact'||route==='delivery')return '/#'+route;
 if(route==='shop')return '/gadgets/';
 return '/'+route.split('/').map(encodeURIComponent).join('/')+'/';
}
export function routeFromLocation(location){
 const hash=location.hash.slice(1);
 if(hash)return hash;
 return decodeURIComponent(location.pathname).replace(/^\/+|\/+$/g,'').replace(/index\.html$/,'').replace(/\/$/,'')||'home';
}
export function publicUrl(route,base=siteConfig.siteUrl){
 if(!base)return null;
 const url=new URL(routePath(route),base);url.hash='';return url.href;
}
export function staticLinks(html){return html.replace(/href="#([^"\s]+)"/g,(_,route)=>`href="${routePath(route)}"`);}
