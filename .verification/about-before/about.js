import { siteConfig as c } from '../../../data/site-config.js';
import { media } from '../../../data/content.js';
import { generalEnquiry,escapeHtml as e } from '../../core/format.js';
import { button,image,sectionTitle,arrow } from '../../core/ui.js';
export function renderAbout(){
 const services=[
  ['01 / EXPLORE','Device Sales','Phones and laptops with specifications, condition information and stock status to help you choose.','gadgets','Explore gadgets'],
  ['02 / REPAIR','Repairs','Enquire about screens, batteries, charging ports and other device problems.','repairs','Find a repair'],
  ['03 / COMPLETE','Accessories','Explore useful extras to complement the devices you use every day.','accessories','Shop accessories'],
  ['04 / CONNECT','Customer Support','Ask about a product, discuss a repair or confirm delivery arrangements through WhatsApp.','contact','Get in touch']
 ];
 return `<main id="main" tabindex="-1"><section class="container section split page-hero"><div><p class="eyebrow">Everyday tech in ${e(c.serviceArea)}</p><h1>About<br>${e(c.name)}<span>.</span></h1><p>Helping you find the right device, with support when you need it. Visit us at ${e(c.location)} in ${e(c.serviceArea)}, ${e(c.country)}.</p>${button('Talk to us',generalEnquiry())}</div><div class="split-photo">${image(media.about,'Laptop on a light desk',true,'','assets/placeholders/laptop.svg')}</div></section>
 <section class="section soft"><div class="container story-layout">${sectionTitle('Our story','Everyday tech. Everyday people.')}<div><p class="large-copy">Technology should fit your life. We’re here to help you make sense of the options.</p><p>${e(c.name)} brings together phones, laptops, accessories and device repair services. Whether you’re choosing your next device or looking for help with one you already own, the conversation starts with what you need.</p><p>Browse the details online, then speak to us directly on WhatsApp to ask questions and confirm your next step.</p></div></div></section>
 <section class="section container">${sectionTitle('What We Do','From your next upgrade to your next repair.')}<div class="benefits about-services">${services.map(([n,t,d,route,label])=>`<article><span>${n}</span><h3>${t}</h3><p>${d}</p><a class="text-link" href="#${route}">${label} ${arrow}</a></article>`).join('')}</div></section>
 <section class="container approach-panel"><p class="eyebrow">Our Approach</p><h2>Start by listening.<br>Keep things clear.</h2><p>Clear communication, transparent product details and honest condition information. Ask your questions, confirm your options and arrange the next step on WhatsApp.</p></section>
 <section class="final-cta container"><p class="eyebrow">Let’s talk</p><h2>Need a Device or Repair?</h2><p>We’re here to help you choose your next step.</p>${button('Chat on WhatsApp',generalEnquiry())}</section></main>`;
}
