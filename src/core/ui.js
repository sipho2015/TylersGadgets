import { siteConfig } from '../../data/site-config.js';
import { policyLinks } from '../../data/policies.js';
import { escapeHtml as e, money, generalEnquiry, productEnquiry, productAvailabilityEnquiry } from './format.js';
import { stockStatus, availabilityOptions, hasPrice, fallbackImage } from './products.js';
export const arrow = '<span aria-hidden="true">↗</span>';
export const external = 'target="_blank" rel="noopener noreferrer"';
export const button = (label,href,secondary=false) => `<a class="button${secondary?' secondary':''}" href="${e(href)}" ${href.startsWith('https:')?external:''}>${e(label)} ${arrow}</a>`;
export function image(src,alt,eager=false,cls='',fallback='assets/placeholders/phone.svg') {
 let responsive='';
 if(src?.startsWith('https://images.unsplash.com/')){
  const url=new URL(src);
  responsive=` srcset="${[400,800,1400].map(w=>{url.searchParams.set('w',w);return e(url.href)+' '+w+'w';}).join(', ')}" sizes="${eager?'100vw':'(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw'}"`;
 }
 return `<img class="${e(cls)}" src="${e(src||fallback)}"${responsive} data-fallback-src="${e(fallback)}" alt="${e(alt)}" ${eager?'fetchpriority="high"':'loading="lazy"'} decoding="async">`;
}
export function header(route='home'){
 const active=/^(product\/|phones|laptops|accessories|shop)/.test(route)?'gadgets':route==='delivery'?'home':route;
 return `${siteConfig.announcement?`<div class="announcement">${e(siteConfig.announcement)}</div>`:''}<header class="site-header"><div class="nav-wrap"><a class="brand" href="#home">${image(siteConfig.logo,siteConfig.name+' logo',true)}<span>${e(siteConfig.name)}<small>${e(siteConfig.serviceArea)}</small></span></a><button class="menu" aria-controls="navigation" aria-expanded="false" aria-label="Open navigation"><span></span><span></span></button><nav id="navigation" aria-label="Main navigation">${['Home','Gadgets','Repairs','Gallery','About','Contact'].map(n=>`<a href="#${n.toLowerCase()}" ${active===n.toLowerCase()?'aria-current="page"':''}>${n}</a>`).join('')}</nav><a class="nav-cta" href="${generalEnquiry()}" ${external}>WhatsApp Us ${arrow}</a></div></header>`;
}
export const sectionTitle=(kicker,title,text='')=>`<div class="section-title"><p class="eyebrow">${e(kicker)}</p><h2>${e(title)}</h2>${text?`<p class="muted">${e(text)}</p>`:''}</div>`;
export const conditionBadges=p=>`${p.condition?`<span class="badge condition-${e(p.condition.toLowerCase())}">${e(p.condition)}</span>`:''}${p.boxed===true?'<span class="badge condition-boxed">Boxed</span>':''}`;
export const availabilityBadge=p=>`<span class="stock stock-${availabilityOptions[p.availability]?p.availability:'unknown'}">${stockStatus(p).label}</span>`;
export function productActions(p){
 const sold=p.availability==='sold';
 return `<div class="product-actions">${sold?'<button class="button sold-button" type="button" disabled>Sold</button>':button(stockStatus(p).action,p.availability==='in-stock'?productEnquiry(p):productAvailabilityEnquiry(p))}${button(sold?'Ask About Similar Devices':'Ask About This Device',sold?productAvailabilityEnquiry(p):productEnquiry(p,true),true)}</div>`;
}
export function productCard(p){
 const keySpec=p.storage||Object.values(p.specifications||{})[0]||'';
 return `<article class="product-card"><a class="product-image" href="#product/${e(p.slug||p.id)}">${image(p.image||p.images?.[0],p.name,false,'',fallbackImage(p.category))}<div class="badges">${conditionBadges(p)}</div></a><div class="product-copy"><p class="eyebrow">${e(p.brand)}</p><h3><a href="#product/${e(p.slug||p.id)}">${e(p.name)}</a></h3>${p.category==='phones'&&p.highlights?.length?`<ul class="card-highlights">${p.highlights.map(detail=>`<li>${e(detail)}</li>`).join('')}</ul>`:`<p class="key-spec">${e(keySpec)}${p.conditionInfo&&p.conditionInfo!==p.condition?' · '+e(p.conditionInfo):''}</p>`}${availabilityBadge(p)}<div class="card-bottom"><strong class="${hasPrice(p.price)?'':'price-pending'}">${money(p.price)}</strong><a href="#product/${e(p.slug||p.id)}" aria-label="View details for ${e(p.name)}">View Details ${arrow}</a></div></div></article>`;
}
export const productGrid=items=>`<div class="product-grid">${items.map(productCard).join('')}</div>`;
export const paymentMethods=()=>`<div class="payment-methods" aria-label="Accepted payment methods">${siteConfig.paymentMethods.map(method=>`<span>${e(method)}</span>`).join('')}</div>`;
export function contactDetails(){
 return `<dl class="contact-details"><div><dt>WhatsApp</dt><dd><a href="${generalEnquiry()}" ${external}>${e(siteConfig.displayWhatsapp)}</a></dd></div><div><dt>Call us</dt><dd><a href="tel:${e(siteConfig.phone.replace(/\s/g,''))}">${e(siteConfig.phone)}</a></dd></div>${siteConfig.email?`<div><dt>Email</dt><dd><a href="mailto:${e(siteConfig.email)}">${e(siteConfig.email)}</a></dd></div>`:''}<div><dt>Visit us</dt><dd>${e(siteConfig.location)}<br>${e(siteConfig.serviceArea)}, ${e(siteConfig.country)}</dd></div><div><dt>Opening hours</dt><dd>${e(siteConfig.openingHours.days)}<br>${e(siteConfig.openingHours.time)}</dd></div><div><dt>Payment methods</dt><dd>${paymentMethods()}</dd></div></dl>`;
}
export function footer(){
 return `<footer><div class="container footer-grid"><div class="footer-intro"><a class="footer-logo" href="#home">${e(siteConfig.name)}<span>.</span></a><p>Phones, laptops, accessories and device repairs in ${e(siteConfig.serviceArea)}.</p><p class="footer-payment-label">Pay with</p>${paymentMethods()}</div><div><h2>Explore</h2>${[['gadgets','Shop'],['repairs','Repairs'],['gallery','Gallery'],['about','About'],['contact','Contact']].map(([route,label])=>`<a href="#${route}">${label}</a>`).join('')}</div><div><h2>Customer information</h2>${policyLinks.map(([route,label])=>`<a href="#${route}">${label}</a>`).join('')}</div><div class="footer-contact"><h2>Visit / contact</h2><p>${e(siteConfig.serviceArea)}, ${e(siteConfig.country)}<br>${e(siteConfig.location)}</p><a href="${generalEnquiry()}" ${external}>WhatsApp: ${e(siteConfig.displayWhatsapp)}</a><a href="tel:${e(siteConfig.phone.replace(/\s/g,''))}">Call: ${e(siteConfig.phone)}</a><a href="mailto:${e(siteConfig.email)}">${e(siteConfig.email)}</a><p>${e(siteConfig.openingHours.days)}<br>${e(siteConfig.openingHours.time)}</p>${siteConfig.socialLinks.map(s=>`<a href="${e(s.url)}" ${external}>${e(s.label)}</a>`).join('')}</div><p class="copyright">© ${new Date().getFullYear()} ${e(siteConfig.name)}. All rights reserved.<span>Phones / Laptops / Accessories / Repairs</span></p></div></footer><a class="floating-wa" href="${generalEnquiry()}" ${external} aria-label="Chat with ${e(siteConfig.name)} on WhatsApp">WhatsApp ${arrow}</a>`;
}
export const steps=items=>`<ol class="steps">${items.map(([title,text],i)=>`<li><span class="step-number">0${i+1}</span><h3>${e(title)}</h3><p>${e(text)}</p></li>`).join('')}</ol>`;
export const finalCta=()=>`<section class="final-cta container"><p class="eyebrow">Your next upgrade starts here</p><h2>Looking for your<br>next device?</h2><p>Explore the collection. Ask a question. Find what works for you.</p><div class="actions">${button('Browse Gadgets','#gadgets')}${button('Chat on WhatsApp',generalEnquiry(),true)}</div></section>`;
