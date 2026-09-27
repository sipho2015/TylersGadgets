import { repairs } from '../../../data/products.js';
import { siteConfig } from '../../../data/site-config.js';
import { media } from '../../../data/content.js';
import { repairEnquiry,escapeHtml as e } from '../../core/format.js';
import { button,image,steps,sectionTitle } from '../../core/ui.js';
const descriptions=['Tell us about cracks, touch issues or display damage.','Having trouble connecting or charging? Describe the symptoms.','Ask about replacing damaged glass on the back of your device.','Tell us about battery life, charging or unexpected shutdowns.','Discuss software issues and device diagnostics.','Not sure what’s wrong? Tell us what your device is doing.'];
export function renderRepairs(){
 return `<main id="main" tabindex="-1"><section class="container section split page-hero"><div><p class="eyebrow">Device repairs / ${e(siteConfig.serviceArea)}</p><h1>Get Your Device<br>Working Again<span>.</span></h1><p>A cracked screen. A tired battery. A device that just won’t cooperate. Tell us the problem and let’s talk through your options.</p>${button('Get a Repair Quote',repairEnquiry())}</div><div class="split-photo">${image(media.repairs,'Device equipment on a workspace',true,'','assets/placeholders/repair.svg')}</div></section>
 <section class="section soft"><div class="container">${sectionTitle('What needs a little care?','Find your repair.')}<div class="repair-grid">${repairs.map((r,i)=>`<article><span class="service-icon" aria-hidden="true">${['▤','↯','◇','▰','⌘','＋'][i]}</span><h3>${e(r)}</h3><p>${descriptions[i]}</p>${button('Get Quote',repairEnquiry(r),true)}</article>`).join('')}</div></div></section>
 <section class="section container">${sectionTitle('A clear next step','How Repairs Work')}${steps([['Tell Us Your Device','Share the brand and model.'],['Explain the Problem','Describe what happened and the symptoms.'],['Receive Your Quote','Confirm assessment, costs and expected timing.'],['Arrange Your Repair','Discuss the next steps directly with us.']])}</section>
 <section class="container repair-enquiry-panel"><div>${sectionTitle('Start the conversation','Tell us what needs fixing.')}<p>These optional details prepare your WhatsApp message. Nothing is submitted until you send it in WhatsApp.</p></div><form id="repair-enquiry-form"><label for="repair-brand">Brand<select id="repair-brand"><option value="">Choose brand</option>${['Apple','Samsung','Lenovo','HP','Dell','Huawei','Other'].map(brand=>`<option>${brand}</option>`).join('')}</select></label><label for="repair-model">Device / model<input id="repair-model" maxlength="100" placeholder="e.g. iPhone 13" autocomplete="off"></label><label for="repair-service">Problem<select id="repair-service"><option value="">Choose a repair</option>${repairs.map(service=>`<option>${e(service)}</option>`).join('')}</select></label><a id="repair-quote-link" class="button" href="${repairEnquiry()}" target="_blank" rel="noopener noreferrer">Get Quote on WhatsApp ↗</a></form></section></main>`;
}
export function bindRepairEnquiry(){
 const form=document.querySelector('#repair-enquiry-form');if(!form)return;
 const update=()=>document.querySelector('#repair-quote-link').href=repairEnquiry(document.querySelector('#repair-service').value,{brand:document.querySelector('#repair-brand').value,model:document.querySelector('#repair-model').value.trim()});
 form.addEventListener('input',update);form.addEventListener('change',update);
 form.addEventListener('submit',event=>{event.preventDefault();update();document.querySelector('#repair-quote-link').click();});
}
