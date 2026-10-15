import { activeOffer } from '../../core/promotions.js';
import { selectionButtons } from '../../core/selections.js';
import { recentlyViewed } from '../catalog/collections.js';
import { products } from '../../../data/products.js';
import { siteConfig } from '../../../data/site-config.js';
import { escapeHtml as e,money } from '../../core/format.js';
import { image,conditionBadges,availabilityBadge,productGrid,sectionTitle,paymentMethods,button,external } from '../../core/ui.js';
import { productImages,fallbackImage,hasPrice } from '../../core/products.js';
import { imageManifest } from '../../core/image-manifest.js';
import { specificationEntries,relatedProducts } from './specifications.js';
import { conditionEntries,productHighlights,includedItems } from './details.js';
import { detailContact,currentProductUrl,copyProductLink,shareWhatsApp } from './contact.js';

export function renderProduct(id){
 const p=products.find(p=>p.id===id||p.slug===id);
 if(!p)return '<main id="main" class="container section not-found" tabindex="-1"><p class="eyebrow">This device could not be found</p><h1>Let’s find another option.</h1><p>The listing may have changed. Explore the current collection.</p><a class="button" href="#gadgets">Back to Gadgets &#8599;</a></main>';
 return renderProductDetails(p);
}
const rows=entries=>`<dl class="specification-grid">${entries.map(([label,value])=>`<div><dt>${e(label)}</dt><dd>${e(value)}</dd></div>`).join('')}</dl>`;
const photoSource=src=>imageManifest[src]?.src||src;
const viewerSource=src=>imageManifest[src]?.variants.at(-1)?.src||src;
function contactActions(p,links){return `<div class="product-actions">${p.availability==='sold'?'<span class="product-sold-note">Sold — enquire about similar devices</span>':''}${button(links.label,links.whatsapp)}${button('Enquire by Email',links.email,true)}</div>`;}

export function renderProductDetails(original){
 const offer=activeOffer(original),p=offer?{...original,price:offer.promotional,oldPrice:offer.original}:original;
 const images=productImages(p),fallback=fallbackImage(p.category),related=relatedProducts(p,products);
 const specs=specificationEntries(p),condition=conditionEntries(p),highlights=productHighlights(p),included=includedItems(p);
 const facts=[['Storage',p.storage||p.specifications?.storage],['Colour',p.colour||p.specifications?.colour],['Condition details',p.conditionInfo!==p.condition?p.conditionInfo:null],['Packaging',p.boxed===true?'Boxed':p.boxed===false?'Unboxed':null]].filter(([,value])=>value!==null&&value!==undefined&&String(value).trim());
 const links=detailContact(p),url=currentProductUrl(p),category=({phones:'Phones',laptops:'Laptops',accessories:'Accessories'})[p.category];
 const mainPhoto=image(images[0],p.name+' — product image 1',true,'main-product-image',fallback).replace(/ sizes="[^"]*"/,' sizes="(max-width: 700px) calc(100vw - 64px), 46vw"');
 return `<main class="container section product-detail" id="main" tabindex="-1" data-product-id="${e(p.id)}">
 <nav class="product-breadcrumb" aria-label="Breadcrumb"><a href="#home">Home</a><span aria-hidden="true">/</span><a class="back" href="#gadgets">Gadgets</a>${category?`<span aria-hidden="true">/</span><a href="#${e(p.category)}">${category}</a>`:''}<span aria-hidden="true">/</span><span aria-current="page">${e(p.name)}</span></nav>
 <div class="detail-grid"><div class="product-gallery"><div class="detail-image" aria-busy="false"><button class="main-image-button" type="button" aria-label="View larger image of ${e(p.name)}">${mainPhoto}<span class="enlarge-hint" aria-hidden="true">View larger &#8599;</span></button><span class="gallery-loading">Loading photo…</span></div>
 ${images.length>1?`<div class="gallery-controls" aria-label="Product image navigation"><button type="button" data-gallery-step="-1" aria-label="Previous product image">&#8592; Previous</button><span class="photo-count" data-gallery-count role="status" aria-live="polite">1 / ${images.length}</span><button type="button" data-gallery-step="1" aria-label="Next product image">Next &#8594;</button></div><div class="thumbnails" aria-label="Product photographs">${images.map((src,i)=>`<button type="button" data-product-image="${e(src)}" data-main-src="${e(photoSource(src))}" data-viewer-src="${e(viewerSource(src))}" aria-label="View ${e(p.name)} image ${i+1}" aria-pressed="${i===0}">${image(src,p.name+' — product image '+(i+1),false,'product-thumbnail',fallback)}</button>`).join('')}</div>`:''}
 </div>
 <div class="detail-copy">${p.brand?`<p class="eyebrow">${e(p.brand)}</p>`:''}<h1>${e(p.name)}</h1><div class="detail-price" aria-label="Product price"><strong class="${hasPrice(p.price)?'':'price-pending'}">${money(p.price)}</strong>${hasPrice(p.price)?`<span>${e(siteConfig.currency)}</span>`:''}${offer?`<del>${money(offer.original)}</del><span class="detail-offer-label">${e(offer.label)}</span>`:''}</div><div class="inline-badges">${availabilityBadge(p)}${conditionBadges(p)}</div>
 ${facts.length?`<dl class="device-facts">${facts.map(([key,value])=>`<div><dt>${key}</dt><dd>${e(value)}</dd></div>`).join('')}</dl>`:''}
 ${highlights.length?`<section class="product-highlights" aria-labelledby="highlights-title"><h2 id="highlights-title">Product Highlights</h2><ul>${highlights.map(value=>`<li>${e(value)}</li>`).join('')}</ul></section>`:''}
 ${p.warrantyInfo?`<p class="product-warranty-summary"><strong>Warranty</strong> ${e(p.warrantyInfo)}</p>`:''}
 ${contactActions(p,links)}<p class="image-note">${e(p.imageNote||'Ask us for current photographs of this device before purchasing.')}</p>${p.imageSource?`<p class="product-photo-credit">Photo: <a href="${e(p.imageSource.url)}" ${external}>${e(p.imageSource.author||p.imageSource.provider)}</a> &middot; <a href="${e(p.imageSource.licenseUrl)}" ${external}>${e(p.imageSource.license)}</a></p>`:''}<p class="enquiry-note">Confirm current stock, price and purchase details before payment.</p>${paymentMethods()}${selectionButtons(p)}
 <div class="product-assurance"><div><h2>Delivery &amp; collection</h2><p>${e(siteConfig.deliveryInfo)} Collection is available by arrangement. Confirm final arrangements directly with us.</p><a class="text-link" href="#delivery-policy">Read the Delivery Policy &#8599;</a></div><div><h2>Warranty information</h2><p>Contact ${e(siteConfig.name)} to confirm any applicable coverage before purchasing.</p><a class="text-link policy-inline-link" href="#warranty">Read our Warranty Policy &#8599;</a></div></div>
 </div></div>
 <div class="product-information">${p.description||p.shortDescription?`<section class="product-overview"><p class="eyebrow">Get to know this gadget</p><h2>Overview</h2><p>${e(p.description||p.shortDescription)}</p></section>`:''}
 ${specs.length?`<section class="product-specifications" aria-labelledby="specifications-title"><h2 id="specifications-title">Specifications</h2>${rows(specs)}</section>`:''}
 ${condition.length?`<section class="product-condition" aria-labelledby="condition-title"><h2 id="condition-title">Device Condition &amp; Details</h2>${rows(condition)}</section>`:''}
 ${included.length?`<section class="product-included"><h2>What’s Included</h2><ul>${included.map(value=>`<li>${e(value)}</li>`).join('')}</ul></section>`:''}
 </div>
 <section class="product-sharing" aria-labelledby="share-title"><div><p class="eyebrow">Keep it handy</p><h2 id="share-title">Share Product</h2><p>Copy the link or share this gadget with someone.</p></div><div class="product-share-tools"><div class="actions"><button type="button" class="share-button" data-copy-product>Copy product link</button><a class="share-button" data-share-whatsapp ${url?`href="${e(shareWhatsApp(p,url))}"`:'hidden'} ${external}>Share on WhatsApp</a><button type="button" class="share-button" data-native-share hidden>Share…</button></div><p class="share-status" role="status" aria-live="polite"></p><label class="share-link-fallback" hidden>Product link<input type="text" readonly value="${e(url||'')}" aria-label="Product link to copy"></label></div></section>
 ${related.length?`<section class="section product-related">${sectionTitle('Keep exploring','You May Also Like')}${productGrid(related)}</section>`:''}${recentlyViewed(p.id)}
 <div class="mobile-enquiry-bar" aria-label="Product enquiry">${button(links.label,links.whatsapp)}<a class="mobile-email" href="${e(links.email)}">Email enquiry</a></div>
 <dialog class="product-viewer" aria-labelledby="product-viewer-caption"><button class="product-viewer-close" type="button" aria-label="Close enlarged product image">&#215;</button><img data-fallback-src="${e(fallback)}" alt=""><p id="product-viewer-caption" aria-live="polite">${e(p.name)}</p>${images.length>1?'<div class="product-viewer-controls"><button type="button" data-image-step="-1">&#8592; Previous</button><button type="button" data-image-step="1">Next &#8594;</button></div>':''}</dialog></main>`;
}

export function bindProductGallery(){
 const main=document.querySelector('.main-product-image');if(!main)return;
 const buttons=[...document.querySelectorAll('[data-product-image]')];
 const opener=document.querySelector('.main-image-button'),dialog=document.querySelector('.product-viewer');
 const enlarged=dialog.querySelector('img'),caption=dialog.querySelector('#product-viewer-caption'),frame=document.querySelector('.detail-image'),count=document.querySelector('[data-gallery-count]');
 let selected=0,touchStart=null,swiped=false;
 const settled=()=>frame?.setAttribute('aria-busy','false');
 main.addEventListener('load',settled);main.addEventListener('error',settled);
 function syncViewer(){
  delete enlarged.dataset.fallback;
  enlarged.src=main.dataset.fallback?main.src:buttons[selected]?.dataset.viewerSrc||main.currentSrc||main.src;
  enlarged.alt=main.alt;caption.textContent=main.alt+(buttons.length?' · '+(selected+1)+' / '+buttons.length:'');
 }
 function select(index){
  if(!buttons.length)return;
  selected=(index+buttons.length)%buttons.length;const b=buttons[selected],prepared=imageManifest[b.dataset.productImage];
  frame?.setAttribute('aria-busy','true');delete main.dataset.fallback;main.removeAttribute('srcset');main.removeAttribute('sizes');
  main.src=b.dataset.mainSrc||b.dataset.productImage;main.alt=b.querySelector('img').alt;
  if(prepared){main.srcset=prepared.variants.map(item=>item.src+' '+item.width+'w').join(', ');main.sizes='(max-width: 700px) calc(100vw - 64px), 46vw';}
  buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===selected)));
  if(count)count.textContent=`${selected+1} / ${buttons.length}`;
  if(main.complete)settled();if(dialog.open)syncViewer();
 }
 const move=step=>select(selected+step);
 buttons.forEach((button,i)=>button.addEventListener('click',()=>select(i)));
 document.querySelectorAll('[data-gallery-step]').forEach(button=>button.addEventListener('click',()=>move(Number(button.dataset.galleryStep))));
 document.querySelector('.thumbnails')?.addEventListener('keydown',event=>{
  const current=buttons.indexOf(document.activeElement);if(current<0||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
  event.preventDefault();select(event.key==='Home'?0:event.key==='End'?buttons.length-1:current+(event.key==='ArrowRight'?1:-1));buttons[selected].focus();
 });
 opener.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight'].includes(event.key)&&buttons.length){event.preventDefault();move(event.key==='ArrowRight'?1:-1);}});
 opener.addEventListener('touchstart',event=>{touchStart=event.changedTouches[0]?.clientX;swiped=false;},{passive:true});
 opener.addEventListener('touchend',event=>{const end=event.changedTouches[0]?.clientX;if(touchStart!==null&&Math.abs(end-touchStart)>50&&buttons.length){swiped=true;move(end<touchStart?1:-1);}touchStart=null;},{passive:true});
 opener.addEventListener('click',event=>{if(swiped){event?.preventDefault();swiped=false;return;}syncViewer();dialog.showModal();document.body.classList.add('modal-open');});
 dialog.querySelector('.product-viewer-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
 dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');opener.focus();});
 dialog.querySelectorAll('[data-image-step]').forEach(button=>button.addEventListener('click',()=>move(Number(button.dataset.imageStep))));
 dialog.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();dialog.close();}else if(['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();move(event.key==='ArrowRight'?1:-1);}});
 bindProductSharing();
}

export function bindProductSharing(){
 const root=document.querySelector('.product-detail'),share=document.querySelector('.product-sharing');if(!root||!share)return;
 const p=products.find(item=>item.id===root.dataset.productId);if(!p)return;
 const url=currentProductUrl(p);if(!url)return;
 const status=share.querySelector('.share-status'),fallback=share.querySelector('.share-link-fallback'),field=fallback.querySelector('input');field.value=url;
 const showFallback=message=>{status.textContent=message;fallback.hidden=false;field.focus();field.select();};
 share.querySelector('[data-copy-product]').addEventListener('click',async()=>{if(await copyProductLink(url))status.textContent='Product link copied.';else showFallback('Copy is unavailable. Select and copy the product link below.');});
 const whatsapp=share.querySelector('[data-share-whatsapp]');whatsapp.href=shareWhatsApp(p,url);whatsapp.hidden=false;
 const native=share.querySelector('[data-native-share]');
 if(typeof navigator.share==='function'){native.hidden=false;native.addEventListener('click',async()=>{try{await navigator.share({title:p.name,url});status.textContent='Share action completed.';}catch(error){if(error.name==='AbortError')status.textContent='Sharing cancelled.';else showFallback('Sharing is unavailable. Copy the product link below.');}});}
 root.querySelectorAll('.product-actions a,.mobile-enquiry-bar a').forEach(link=>{const links=detailContact(p,url);link.href=link.href.startsWith('mailto:')?links.email:links.whatsapp;});
}
