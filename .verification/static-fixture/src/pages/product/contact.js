import { siteConfig as c } from '../../../data/site-config.js';
import { money,productEnquiry,enquiry,whatsappLink } from '../../core/format.js';
import { emailLink } from '../../core/enquiries.js';
import { hasPrice } from '../../core/products.js';
import { publicUrl,routePath } from '../../core/urls.js';
import { activeOffer } from '../../core/promotions.js';

export function productPageUrl(p,context){
 const route='product/'+(p.slug||p.id);
 if(c.siteUrl)return publicUrl(route);
 if(!context?.origin||!/^https?:\/\//.test(context.origin))return null;
 return context.staticSite?new URL(routePath(route),context.origin).href:new URL(context.pathname||'/',context.origin).href.split('#')[0]+'#'+route;
}
export function currentProductUrl(p){
 const location=globalThis.location;
 return productPageUrl(p,location?{origin:location.origin,pathname:location.pathname,staticSite:globalThis.document?.documentElement?.dataset.static==='true'}:null);
}
export function detailContact(p,url=currentProductUrl(p)){
 const product={...p,storage:p.storage||p.specifications?.storage};
 const price=activeOffer(product)?.promotional??product.price;
 const condition=[p.condition,p.conditionInfo!==p.condition?p.conditionInfo:null,p.boxed===true?'Boxed':p.boxed===false?'Unboxed':null].filter(Boolean).join(' / ');
 const body=[`Hello ${c.name},`,'',p.availability==='sold'?'I see this product is listed as sold. Do you have any similar devices?':'I would like to enquire about the following product:','',`Product: ${p.name}`,product.storage?`Storage: ${product.storage}`:null,condition?`Condition: ${condition}`:null,hasPrice(price)?`Price: ${money(price)} (${c.currency})`:'Price: Contact for Price',url?`Product link: ${url}`:null,'','Please confirm the current availability, price, and delivery or collection options.','','Thank you.'].filter(value=>value!==null).join('\n');
 const existing=new URL(productEnquiry(product)).searchParams.get('text');
 const label=({'in-stock':'Enquire on WhatsApp','low-stock':'Check Availability',sold:'Ask About Similar Devices','coming-soon':'Ask About Availability'})[p.availability]||'Confirm Availability';
 return {label,whatsapp:enquiry(existing+(url?'\nProduct link: '+url:'')),email:emailLink('Product Enquiry — '+p.name,body)};
}
export const shareWhatsApp=(p,url)=>whatsappLink('',`${p.name}\n${url}`);

export async function copyProductLink(url,navigator=globalThis.navigator){
 try{if(!navigator?.clipboard?.writeText)return false;await navigator.clipboard.writeText(url);return true;}catch{return false;}
}
