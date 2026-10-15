import { escapeHtml as e } from './format.js';
import { messageLinks,tradeMessage } from './enquiries.js';

export function tradeForm(){
 const links=messageLinks('Sell or trade-in assessment',tradeMessage());
 return `<form id="trade-enquiry-form" class="contact-form"><div class="form-fields">${[['brand','Device brand'],['model','Device model'],['storage','Storage'],['condition','Condition'],['batteryHealth','Battery health, if known'],['faults','Known faults'],['accessories','Included accessories']].map(([name,label])=>`<label>${label}<input name="${name}" maxlength="180" autocomplete="off"></label>`).join('')}</div><p class="small">Optional details prepare a message. Any assessment and value must be confirmed with us.</p><div class="actions"><a data-trade-whatsapp class="button" href="${e(links.whatsapp)}" target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a><a data-trade-email class="button secondary" href="${e(links.email)}">Ask by Email</a></div></form>`;
}
export function bindTradeForm(){
 const form=document.querySelector('#trade-enquiry-form');if(!form)return;
 const update=()=>{const details=Object.fromEntries(new FormData(form));const links=messageLinks('Sell or trade-in assessment',tradeMessage(details));form.querySelector('[data-trade-whatsapp]').href=links.whatsapp;form.querySelector('[data-trade-email]').href=links.email;};
 form.addEventListener('input',update);form.addEventListener('submit',event=>{event.preventDefault();update();});
}
