import { newArrivals,activeOffer } from '../../core/promotions.js';
import { tradeForm } from '../../core/contact-forms.js';
import { emailLink } from '../../core/enquiries.js';
import { products } from '../../../data/products.js';
import { siteConfig as c } from '../../../data/site-config.js';
import { getFaqs } from '../../../data/content.js';
import { escapeHtml as e,money,generalEnquiry,repairEnquiry,tradeEnquiry,deliveryEnquiry } from '../../core/format.js';
import { hasPrice } from '../../core/products.js';
import { button as sharedButton,image,sectionTitle,productGrid as sharedProductGrid,contactDetails,paymentMethods,arrow } from '../../core/ui.js';

// Keep shared navigation and card behavior, with plain text actions on this page.
const button=(...args)=>sharedButton(...args).replace(arrow,'');
const productGrid=items=>sharedProductGrid(items).replaceAll(arrow,'');
const workspacePhoto=(name,alt,sizes='(max-width: 600px) calc(50vw - 26px), (max-width: 900px) 45vw, 30vw')=>`<img src="assets/about/${name}-1200.webp" srcset="assets/about/${name}-600.webp 600w, assets/about/${name}-1200.webp 1200w" sizes="${e(sizes)}" width="1200" height="900" alt="${e(alt)}" loading="lazy" decoding="async">`;

const productById=id=>products.find(p=>p.id===id);
const productLink=p=>'#product/'+(p.slug||p.id);
const canShow=p=>p&&!p.referenceOnly&&!p.referencePhoto&&!['sold','coming-soon'].includes(p.availability);
const currentPrice=p=>activeOffer(p)?.promotional??p.price;

function heroProduct(p,secondary=false){
 if(!canShow(p))return '';
 const photo=image(p.image,p.name+' from the collection',!secondary,'home-hero-image')
  .replace(/ sizes="[^"]*"/,' sizes="(max-width: 600px) 48vw, (max-width: 900px) 40vw, 26vw"');
 return `<a class="home-device${secondary?' home-device-secondary':''}" href="${e(productLink(p))}"><div class="home-device-photo">${photo}<span class="home-photo-label">From our collection</span></div><div class="home-device-caption"><span><strong>${e(p.name)}</strong><small>${e(p.storage||p.brand)}</small></span><span class="home-device-price">${money(currentPrice(p))}${hasPrice(currentPrice(p))?`<small>${e(c.currency)}</small>`:''}</span></div><span class="home-device-link">View device</span></a>`;
}
function categoryLink(label,route,copy,photo,note=''){
 return `<a class="home-category" href="#${route}"><div class="home-category-photo">${photo}</div><div class="home-category-copy"><strong>${label}</strong><small>${copy}</small>${note?`<span class="home-category-note">${note}</span>`:''}<span class="home-category-link">Explore ${label.toLowerCase()}</span></div></a>`;
}
export function renderHome(){
 // Owner-supplied photos and maintained prices lead the page. Stock is confirmed directly.
 const picks=['iphone-11','samsung-a56-5g','iphone-13-pro-max','samsung-s20-fe-5g'].map(productById).filter(p=>canShow(p)&&hasPrice(currentPrice(p)));
 return `<main class="home-page" id="main" tabindex="-1">
 <section class="home-hero" id="home" aria-labelledby="home-title"><div class="container home-hero-grid"><div class="home-hero-copy"><p class="eyebrow">Your local gadget shop / ${e(c.serviceArea)}</p><h1 id="home-title">Your next phone.<br><span>Your local store.</span></h1><p>Find a phone you love, a laptop for your next chapter, or the everyday extras you need. Right here in ${e(c.serviceArea)}.</p><div class="actions">${button('Shop Phones','#phones')}${button('Browse All Gadgets','#gadgets',true)}</div><div class="home-hero-note"><p>See a device you like? Chat with us to confirm the price, condition and current stock.</p></div></div><div class="home-hero-products" aria-label="Explore devices from the collection">${heroProduct(productById('iphone-14-pro-max'))}${heroProduct(productById('samsung-a56-5g'),true)}</div></div></section>
 <div class="container home-reassurance"><p>Based in ${e(c.serviceArea)}</p><p>Enquire directly on WhatsApp</p><p>${e(c.paymentMethods.join(' & '))}</p></div>
 <section class="container home-categories" aria-label="Shop by category">${categoryLink('Phones','phones','iPhone & Samsung',image('assets/products/phones/iphones/iphone Xr_Galore.jpeg','Three phones from our collection'))}${categoryLink('Laptops','laptops','For work, study & everyday',workspacePhoto('everyday-tech','Illustrative laptop and headphones on a desk'),'Illustrative photo')}${categoryLink('Accessories','accessories','Everyday essentials',image('assets/products/accessories/Accessory2.jpeg','Phone case and lanyard from the accessories collection'))}${categoryLink('Repairs','repairs','Help for your device',workspacePhoto('repair-workspace','Illustrative technician working on a smartphone'),'Illustrative photo')}</section>
 ${picks.length?`<section class="container home-section home-picks"><div class="section-row">${sectionTitle('A few to get you started','Find your next upgrade.',`Explore a selection from our catalogue. Prices in ${c.currency}; confirm current availability with us.`)}<a class="text-link" href="#gadgets">View all gadgets</a></div>${productGrid(picks)}</section>`:''}
 ${renderProductSection('Just added','New arrivals',newArrivals(products))}
 ${renderProductSection('Real savings','Special offers',products.filter(p=>activeOffer(p)))}
 <section class="container home-section home-services" aria-label="Repair and trade-in services"><article class="home-repair"><div><p class="eyebrow">Keep your device going</p><h2>Cracked screen?<br>Battery giving up?</h2><p>Tell us the brand, model and what went wrong. We will discuss an assessment and quote with you.</p><ul class="home-service-tags"><li>Screen repairs</li><li>Battery issues</li><li>Charging problems</li></ul><div class="actions">${button('Request a Repair Quote',repairEnquiry())}<a class="text-link" href="#repairs">All repair services</a></div></div><figure class="home-repair-photo">${workspacePhoto('repair-workspace','Illustrative technician repairing a smartphone at a workbench','(max-width: 600px) calc(100vw - 40px), 46vw')}<figcaption>Illustrative repair photograph</figcaption></figure></article><article class="home-trade"><div class="home-trade-photo">${image('assets/products/phones/iphones/iphone Xr_Galore.jpeg','A selection of phones from our collection')}</div><p class="eyebrow">Ready for a change?</p><h2>Let’s talk<br>trade-ins.</h2><p>Have a device to sell or trade? Share its details and condition. Any offer follows an assessment.</p><a class="text-link" href="${tradeEnquiry()}" target="_blank" rel="noopener noreferrer">Ask about a trade-in</a><details class="trade-details"><summary>Add your device details </summary>${tradeForm()}</details></article></section>
 ${renderTestimonials()}
 <section class="home-local" id="delivery"><div class="container home-section"><div class="home-local-heading"><p class="eyebrow">A local conversation</p><h2>Online browsing.<br>Personal service.</h2><p>Choose your device, confirm the details with us, then arrange collection or delivery.</p></div><div class="home-local-grid"><article class="home-visit"><span class="home-panel-label">01 / Find us</span><h3>Right here in ${e(c.serviceArea)}.</h3><p>${e(c.location)}<br>${e(c.serviceArea)}, ${e(c.country)}</p><p class="home-hours">${e(c.openingHours.days)}<br>${e(c.openingHours.time)}</p><a class="text-link" href="#gallery">See photos from the collection</a></article><article class="home-delivery"><span class="home-panel-label">02 / Get it to you</span><h3>Delivery or collection.</h3><p>${e(c.weekdayDeliveryInfo)}</p><p>${e(c.delivery.sundayDelivery)} ${e(c.delivery.sundayFee)}</p><div class="home-inline-links"><a class="text-link" href="${deliveryEnquiry()}" target="_blank" rel="noopener noreferrer">Ask about delivery</a><a class="text-link" href="#delivery-policy">Delivery policy</a></div></article><article class="home-payment"><span class="home-panel-label">03 / Agree the details</span><h3>Confirm before you pay.</h3><p>Ask about the exact device, its condition and current price. Agree your payment and collection or delivery arrangements directly with us.</p>${paymentMethods()}</article></div><section class="home-contact" id="contact" aria-labelledby="home-contact-title"><div><p class="eyebrow">Talk to ${e(c.name)}</p><h2 id="home-contact-title">Found something<br>you like?</h2><p>Ask a question, request current photos or arrange a visit.</p><div class="actions">${button('Chat on WhatsApp',generalEnquiry())}${button('Email Us',emailLink('General enquiry','Hello '+c.name+', I have a question.'),true)}</div></div><details class="home-contact-details"><summary>Contact details &amp; opening hours </summary>${contactDetails()}</details></section></div></section>
 <section class="container home-section home-faq"><div>${sectionTitle('Before you enquire','A little more clarity.')}<p>Helpful answers about buying, condition and repairs.</p></div><div class="faq-list">${getFaqs().map(([q,a])=>`<details><summary>${e(q)}</summary><p>${e(a)}</p></details>`).join('')}</div></section>
 </main>`;
}
function renderTestimonials(){
 if(!c.testimonials.length)return '';
 return `<section class="container home-section">${sectionTitle('Customer experiences','In their own words.')}<div class="benefits">${c.testimonials.map(t=>`<figure><blockquote>${e(t.quote)}</blockquote><figcaption>${e(t.name)}${Number.isInteger(t.rating)&&t.rating>=1&&t.rating<=5?`<span aria-label="${t.rating} out of 5 stars">${t.rating} out of 5</span>`:''}${t.date?`<small>${e(t.date)}</small>`:''}</figcaption></figure>`).join('')}</div></section>`;
}
function renderProductSection(eyebrow,title,items){return items.length?`<section class="container home-section">${sectionTitle(eyebrow,title)}${productGrid(items)}</section>`:'';}
