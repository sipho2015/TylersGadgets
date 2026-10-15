import { siteConfig as c } from '../../../data/site-config.js';
import { products } from '../../../data/products.js';
import { generalEnquiry,escapeHtml as e } from '../../core/format.js';
import { emailLink } from '../../core/enquiries.js';
import { button,image,arrow } from '../../core/ui.js';

const icons={
 phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 5h4M11 19h2"/>',
 repair:'<path d="m14 6 4-4a6 6 0 0 1-8 8l-7 7a2 2 0 0 0 4 4l7-7a6 6 0 0 0 8-8l-4 4z"/>',
 message:'<path d="M21 11a8 8 0 0 1-8 8H7l-4 3v-7a8 8 0 1 1 18-4Z"/><path d="M7 10h10M7 14h6"/>',
 pin:'<path d="M19 9c0 6-7 13-7 13S5 15 5 9a7 7 0 1 1 14 0Z"/><circle cx="12" cy="9" r="2.5"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'
};
const icon=name=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
const aboutPhoto=(name,alt,eager=false)=>`<img src="assets/about/${name}-1200.webp" srcset="assets/about/${name}-600.webp 600w, assets/about/${name}-1200.webp 1200w" sizes="(max-width: 700px) calc(100vw - 40px), 46vw" width="1200" height="900" alt="${e(alt)}" ${eager?'fetchpriority="high"':'loading="lazy"'} decoding="async">`;

export function aboutMetadata(){return {
 title:`About ${c.name} | Electronics & Repairs in ${c.serviceArea}`,
 description:`Learn about ${c.name} in ${c.serviceArea}, ${c.country}. Explore smartphones, laptops, accessories, device repair services, and convenient customer support.`,
 image:'assets/about/everyday-tech-1200.webp'
};}

export function renderAbout(){
 const values=[
  ['phone','Gadgets for Everyday Life','Explore a selection of smartphones, laptops, and accessories suited to different needs, preferences, and budgets.'],
  ['repair','Practical Repair Support','Get assistance with common device problems, from damaged screens and battery issues to charging and software concerns.'],
  ['message','Clear & Direct Communication','Ask questions, confirm availability, and discuss your options directly with us through WhatsApp or email.'],
  ['pin','Convenient Local Service',`Based in ${c.serviceArea}, we help customers arrange suitable delivery or collection options for their purchases.`]
 ];
 const services=[
  {title:'Phones & Laptops',description:'Explore smartphones and laptops with product information that helps you compare features, understand specifications, and find a device that suits your needs.',route:'gadgets',label:'Explore Gadgets',photo:products.find(p=>p.id==='iphone-14-pro-max'),alt:'iPhone 14 Pro Max from the gadget collection'},
  {title:'Accessories',description:'Discover practical accessories, from charging essentials and audio devices to everyday tech add-ons.',route:'accessories',label:'Shop Accessories',photo:products.find(p=>p.id==='phone-lanyard-straps'),alt:'Phone carrying straps from the accessories collection'},
  {title:'Device Repairs',description:'Need assistance with a damaged or faulty device? Explore our repair services and contact us to discuss the problem.',route:'repairs',label:'Explore Repairs',alt:'Illustrative technician workspace with a smartphone under repair'}
 ];
 return `<main id="main" tabindex="-1" class="about-page">
 <section class="container about-hero" aria-labelledby="about-title"><div class="about-hero-copy"><p class="eyebrow">Everyday tech in ${e(c.serviceArea)}</p><h1 id="about-title">Technology<br>Made <span>Simple.</span></h1><p>At ${e(c.name)}, we make it easier to find the technology that fits your everyday life. From smartphones and laptops to accessories and reliable device repair services, we're here to help you stay connected.</p><div class="actions">${button('Explore Gadgets','#gadgets')}${button('Contact Us','#contact',true)}</div><div class="about-local-note">${icon('pin')}<span>${e(c.serviceArea)}, ${e(c.country)}</span></div></div><div class="about-hero-photo">${aboutPhoto('everyday-tech','Laptop, smartphone and headphones arranged on a wooden desk',true)}</div></section>
 <section class="about-story-band"><div class="container about-story" aria-labelledby="about-story-title"><div class="about-story-photo">${aboutPhoto('repair-workspace','Illustrative smartphone repair work at an electronics bench')}</div><div class="about-story-copy"><p class="eyebrow">Our story</p><h2 id="about-story-title">More Than<br>Just Gadgets.</h2><p>At ${e(c.name)}, we believe choosing the right technology should be simple. Whether you're upgrading your smartphone, looking for a dependable laptop, shopping for everyday accessories, or seeking help with a damaged device, we're here to make the experience easier.</p><p>Based in ${e(c.serviceArea)}, ${e(c.country)}, we focus on helping customers understand their options, explore suitable products, and get practical support when their devices need attention.</p><p>Our approach is straightforward: clear information, helpful communication, and a commitment to making technology more accessible to the people we serve.</p></div></div></section>
 <section class="container about-section" aria-labelledby="about-values-title"><div class="about-section-heading"><p class="eyebrow">Why ${e(c.name)}</p><h2 id="about-values-title">The Right Tech.<br>The Right Support.</h2><p>We focus on making your experience straightforward, from exploring gadgets to getting assistance with repairs and everyday technology needs.</p></div><div class="about-value-grid">${values.map(([symbol,title,description])=>`<article class="about-value-card"><span class="about-icon">${icon(symbol)}</span><h3>${e(title)}</h3><p>${e(description)}</p></article>`).join('')}</div></section>
 <section class="container about-section about-services-section" aria-labelledby="about-services-title"><div class="about-section-heading"><p class="eyebrow">What we do</p><h2 id="about-services-title">Everything You Need,<br>All in One Place.</h2><p>From finding your next device to keeping your current one working, explore what ${e(c.name)} has to offer.</p></div><div class="about-service-grid">${services.map(service=>`<article class="about-service-card"><a class="about-service-image" href="#${service.route}" aria-label="${service.label}">${service.photo?image(service.photo.image,service.alt,false,'',`assets/placeholders/${service.route==='accessories'?'accessory':'phone'}.svg`):aboutPhoto('repair-workspace',service.alt)}</a><div class="about-service-copy"><h3>${service.title}</h3><p>${service.description}</p><a class="text-link" href="#${service.route}">${service.label} ${arrow}</a></div></article>`).join('')}</div></section>
 <section class="container about-contact-section" aria-labelledby="about-contact-title"><div class="about-contact-panel"><div class="about-contact-intro"><p class="eyebrow">Visit or contact us</p><h2 id="about-contact-title">We're Here When<br>You Need Us.</h2><p>Have a question about a gadget, need help with a repair, or want to arrange a purchase? Get in touch with ${e(c.name)} and we'll help you with the next step.</p><div class="actions">${button('Chat on WhatsApp',generalEnquiry())}${button('Send an Email',emailLink('General enquiry',`Hello ${c.name}, I have a question about a gadget or repair.`),true)}</div></div><dl class="about-contact-details">${[
  ['pin','Location',e(c.address)],
  ['clock','Opening Hours',`${e(c.openingHours.days)}<br>${e(c.openingHours.time)}`],
  ['phone','WhatsApp / Phone',`<a href="tel:${e(c.phone.replace(/\s/g,''))}">${e(c.displayWhatsapp)}</a>`],
  ['mail','Email',`<a href="${e(emailLink('General enquiry',`Hello ${c.name}, I have a question.`))}">${e(c.email)}</a>`]
 ].map(([symbol,label,value])=>`<div><dt><span class="about-contact-icon">${icon(symbol)}</span>${label}</dt><dd>${value}</dd></div>`).join('')}</dl></div></section>
 <section class="container about-closing-section" aria-labelledby="about-closing-title"><div class="about-closing"><div><p class="eyebrow">Let's find your next step</p><h2 id="about-closing-title">Your Next Device<br>Starts Here.</h2><p>Explore our gadgets, discover accessories, or contact us for help with your next purchase or device repair.</p></div><div class="actions">${button('Browse Gadgets','#gadgets')}${button('Contact Us','#contact',true)}</div></div></section>
 </main>`;
}
