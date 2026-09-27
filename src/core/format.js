import { siteConfig } from '../../data/site-config.js';
import { hasPrice } from './products.js';
export const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const money = value => hasPrice(value)
  ? new Intl.NumberFormat(siteConfig.locale,{style:'currency',currency:siteConfig.currency,minimumFractionDigits:0,maximumFractionDigits:2}).format(value)
  : 'Contact for Price';
export const whatsappLink = (number,message) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
export const enquiry = message => whatsappLink(siteConfig.whatsapp,message);
export const generalEnquiry = () => enquiry(`Hi ${siteConfig.name}, I have a question. Can you help?`);
function productSummary(p) {
  const price=hasPrice(p.price)?` listed for ${money(p.price)} (${siteConfig.currency})`:'';
  const condition=[p.condition,p.conditionInfo&&p.conditionInfo!==p.condition?p.conditionInfo:null,p.boxed===true?'Boxed':p.boxed===false?'Not boxed':null].filter(Boolean).join(', ');
  return `${p.name}${p.storage?' '+p.storage:''}${price}.${condition?' Condition: '+condition+'.':''}`;
}
export const productAvailabilityEnquiry = p => {
 const question=p.availability==='sold'
   ? 'I see this device is sold. Do you have any similar devices?'
   : p.availability==='coming-soon'?'When might this device be available?':'Is it currently available?';
 return enquiry(`Hi ${siteConfig.name}, I'm enquiring about ${productSummary(p)} ${question}${hasPrice(p.price)?'':' Please confirm the current price in '+siteConfig.currency+'.'}`);
};
export const productEnquiry = (p,question=false) => {
 if(p.availability!=='in-stock')return productAvailabilityEnquiry(p);
 return enquiry(`Hi ${siteConfig.name}, ${question?'I have a question about':"I'm interested in"} ${productSummary(p)} Is it currently available?${hasPrice(p.price)?'':' Please confirm the current price in '+siteConfig.currency+'.'}`);
};
export const repairEnquiry = (service,details={}) => enquiry(`Hi ${siteConfig.name}, I need ${service||'a device repair'}. My device is: ${[details.brand,details.model].filter(Boolean).join(' ')||'[brand/model]'}. Please can I get a repair quote?${details.problem?'\nProblem: '+details.problem:''}`);
export const tradeEnquiry = () => enquiry(`Hi ${siteConfig.name}, I'd like a trade-in/sell quote.\n\nDevice: \nModel: \nStorage: \nCondition: \nBoxed: Yes/No`);
export const deliveryEnquiry = () => enquiry(`Hi ${siteConfig.name}, I'd like to arrange delivery in or around ${siteConfig.serviceArea}.\nLocation: \nPreferred day: \nPlease confirm eligibility for free ${siteConfig.delivery.weekdayDays} delivery or the exact Sunday delivery fee.`);
