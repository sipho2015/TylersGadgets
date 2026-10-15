import { activeOffer } from './promotions.js';
import { siteConfig as c } from '../../data/site-config.js';
import { enquiry,money } from './format.js';
import { hasPrice } from './products.js';

export const emailLink=(subject,body)=>`mailto:${c.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
export const productMessage=p=>`Hello ${c.name},\n\nI am interested in ${p.name}${p.storage?' — '+p.storage:''}${hasPrice(activeOffer(p)?.promotional??p.price)?' — '+money(activeOffer(p)?.promotional??p.price)+' USD':''}.\nPlease confirm the current price, availability, condition and delivery or collection arrangements.\n\nThank you.`;
export const productEmail=p=>emailLink('Product enquiry: '+p.name,productMessage(p));
export const multiProductMessage=items=>`Hello ${c.name},\n\nI am interested in the following products:\n\n${items.map((p,i)=>`${i+1}. ${p.name}${p.storage?' — '+p.storage:''}${hasPrice(activeOffer(p)?.promotional??p.price)?' — '+money(activeOffer(p)?.promotional??p.price)+' USD':' — price to confirm'}${p.availability==='sold'?' (listed as sold; please suggest alternatives)':''}`).join('\n')}\n\nCould you please confirm their current prices, availability, and delivery or collection arrangements?\n\nThank you.`;
export const multiProductLinks=items=>({whatsapp:enquiry(multiProductMessage(items)),email:emailLink('Gadget enquiry',multiProductMessage(items))});
export function repairMessage({brand='',model='',service='',problem='',contact='WhatsApp'}={}){
 return `Hello ${c.name},\n\nI would like to enquire about a device repair.\nDevice: ${[brand,model].filter(Boolean).join(' ')||'To confirm'}\nRepair needed: ${service||'Assessment'}${problem?'\nProblem: '+problem:''}\nPreferred contact: ${contact}\n\nPlease advise on the estimated cost and repair arrangements.\n\nThank you.`;
}
export function tradeMessage(details={}){
 const labels={brand:'Brand',model:'Model',storage:'Storage',condition:'Condition',batteryHealth:'Battery health',faults:'Known faults',accessories:'Included accessories'};
 return `Hello ${c.name},\n\nI would like a sell or trade-in assessment.\n${Object.entries(labels).map(([key,label])=>`${label}: ${details[key]?.trim()||'To confirm'}`).join('\n')}\n\nPlease advise on the assessment and next steps. I understand any value must be confirmed by ${c.name}.\n\nThank you.`;
}
export const messageLinks=(subject,body)=>({whatsapp:enquiry(body),email:emailLink(subject,body)});
