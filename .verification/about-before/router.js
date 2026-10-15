import { structuredData } from './seo.js';
import { routeFromLocation,staticLinks,publicUrl } from './urls.js';
import { bindTradeForm } from './contact-forms.js';
import { collectionToolbar,bindCollections,recentlyViewed } from '../pages/catalog/collections.js';
import { selections } from './selections.js';
import { header,footer } from './ui.js';
import { products } from '../../data/products.js';
import { siteConfig as c } from '../../data/site-config.js';
import { media } from '../../data/content.js';
import { getPolicies } from '../../data/policies.js';
import { renderHome } from '../pages/home/home.js';
import { renderCatalog,bindCatalogFilters } from '../pages/catalog/catalog.js';
import { renderProduct,bindProductGallery } from '../pages/product/product.js';
import { renderRepairs,bindRepairEnquiry } from '../pages/repairs/repairs.js';
import { renderGallery,bindGallery } from '../pages/gallery/gallery.js';
import { renderAbout } from '../pages/about/about.js';
import { renderPolicy } from '../pages/policies/policies.js';
export function pageFor(route){
 if(route.startsWith('product/'))return renderProduct(route.split('/')[1]);
 if(getPolicies()[route])return renderPolicy(route);
 if(route==='repairs')return renderRepairs();
 if(route==='gallery')return renderGallery();
 if(route==='about')return renderAbout();
 if(['gadgets','shop','phones','laptops','accessories'].includes(route))return renderCatalog(['gadgets','shop'].includes(route)?null:route);
 return renderHome();
}
export function routeMetadata(route){
 const p=route.startsWith('product/')?products.find(p=>p.id===route.split('/')[1]||p.slug===route.split('/')[1]):null;
 const policy=getPolicies()[route];
 const labels={home:'Phones, laptops & device repairs',gadgets:'Find Your Next Device',shop:'Find Your Next Device',repairs:'Phone & Device Repairs',gallery:'Gallery',about:'About',contact:'Contact',phones:'Phones',laptops:'Laptops',accessories:'Accessories',delivery:'Delivery & Collection'};
 const descriptions={
  home:`Explore phones, laptops, accessories and device repairs in ${c.serviceArea}, ${c.country}. Enquire with ${c.name} on WhatsApp.`,
  gadgets:`Browse phones, laptops and accessories from ${c.name} in ${c.serviceArea}. Check condition and availability, then enquire on WhatsApp.`,
  repairs:`Discuss screen, battery, charging port and other device repairs with ${c.name} in ${c.serviceArea}. Request a repair quote on WhatsApp.`,
  about:`Meet ${c.name}, your local device catalogue and repair service at ${c.location} in ${c.serviceArea}.`,
  contact:`Contact ${c.name} at ${c.location}, ${c.serviceArea}. Find WhatsApp, email and opening hours.`,
  gallery:`Explore phones, laptops, accessories and device-care imagery from ${c.name}.`,
  delivery:c.deliveryInfo,
  phones:`Browse phones in ${c.serviceArea}. Check specifications, condition and availability with ${c.name}.`,
  laptops:`Find a laptop for work or study in ${c.serviceArea}. Explore the current collection at ${c.name}.`,
  accessories:`Explore everyday tech accessories at ${c.name} in ${c.serviceArea}.`
 };
 return {
  title:`${p?.name||policy?.title||labels[route]||(route.startsWith('product/')?'Device not found':'Gadgets')} | ${c.name} ${c.serviceArea}`,
  description:p?.description||policy?.intro||descriptions[route]||descriptions.gadgets,
  image:p?.image||media.hero
 };
}
function metadata(route){
 const meta=routeMetadata(route);document.title=meta.title;
 for(const selector of ['meta[name="description"]','meta[property="og:description"]','meta[name="twitter:description"]'])document.querySelector(selector)?.setAttribute('content',meta.description);
 for(const selector of ['meta[property="og:title"]','meta[name="twitter:title"]'])document.querySelector(selector)?.setAttribute('content',meta.title);
 for(const selector of ['meta[property="og:image"]','meta[name="twitter:image"]'])document.querySelector(selector)?.setAttribute('content',new URL(meta.image,location.origin).href);
 document.querySelector('link[rel="canonical"]')?.remove();
 document.querySelectorAll('script[type="application/ld+json"]').forEach(el=>el.remove());
 const base=c.siteUrl||(document.documentElement.dataset.static==='true'?location.origin:null);
 const schema=document.createElement('script');schema.type='application/ld+json';schema.textContent=JSON.stringify(structuredData(route,base));document.head.append(schema);
 if(base){const link=document.createElement('link');link.rel='canonical';link.href=publicUrl(route,base);document.head.append(link);document.querySelector('meta[property="og:url"]')?.setAttribute('content',link.href);}
}
let firstRender=true;
export function renderRoute(){
 let route=document.documentElement.dataset.static==='true'?routeFromLocation(location):location.hash.slice(1)||'home';
 if(route==='main'){const main=document.querySelector('#main');if(main){main.focus();return;}route='home';}
 document.body.classList.remove('modal-open');
 const product=route.startsWith('product/')?products.find(p=>p.id===route.split('/')[1]||p.slug===route.split('/')[1]):null;
 if(product)selections.visit(product.id);
 if(!(firstRender&&document.documentElement.dataset.static==='true'&&document.documentElement.dataset.route===route&&document.querySelector('#app main'))){
  const content=header(route)+collectionToolbar()+pageFor(route)+footer();
  document.querySelector('#app').innerHTML=document.documentElement.dataset.static==='true'?staticLinks(content):content;
 }
 if(firstRender&&document.documentElement.dataset.static==='true'&&(['gadgets','phones','laptops','accessories'].includes(route)||product)){
  if(!document.querySelector('.recent-products'))document.querySelector('#main')?.insertAdjacentHTML('beforeend',staticLinks(recentlyViewed(product?.id)));
 }
 firstRender=false;
 bindMenu();bindCollections();bindCatalogFilters();bindProductGallery();bindGallery();bindRepairEnquiry();bindTradeForm();metadata(route);
 requestAnimationFrame(()=>{
  const target=['home','delivery','contact'].includes(route)&&document.getElementById(route);
  target?target.scrollIntoView():window.scrollTo(0,0);
  if(location.hash)document.querySelector('#main')?.focus({preventScroll:true});
 });
}
function bindMenu(){
 const menu=document.querySelector('.menu'),header=document.querySelector('.site-header');
 const close=()=>{header.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');};
 menu.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
 header.addEventListener('keydown',e=>{if(e.key==='Escape'){close();menu.focus();}});
 header.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',close));
 header.addEventListener('focusout',e=>{if(!header.contains(e.relatedTarget))close();});
}
