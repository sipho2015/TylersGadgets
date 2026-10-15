import { activeOffer } from '../../core/promotions.js';
import { selectionButtons } from '../../core/selections.js';
import { recentlyViewed } from '../catalog/collections.js';
import { products } from '../../../data/products.js';
import { siteConfig } from '../../../data/site-config.js';
import { escapeHtml as e,money,deliveryEnquiry } from '../../core/format.js';
import { image,conditionBadges,availabilityBadge,productActions,productGrid,sectionTitle,paymentMethods } from '../../core/ui.js';
import { productImages,fallbackImage,hasPrice,conditionDescriptions } from '../../core/products.js';
import { specificationEntries,relatedProducts } from './specifications.js';

export function renderProduct(id){
 const p=products.find(p=>p.id===id||p.slug===id);
 if(!p)return '<main id="main" class="container section not-found" tabindex="-1"><p class="eyebrow">This device could not be found</p><h1>Let’s find another option.</h1><p>The listing may have changed. Explore the current collection.</p><a class="button" href="#gadgets">Back to Gadgets ↗</a></main>';
 return renderProductDetails(p);
}
export function renderProductDetails(p){
 const offer=activeOffer(p);
 if(offer)p={...p,price:offer.promotional,oldPrice:offer.original};
 const images=productImages(p),fallback=fallbackImage(p.category);
 const related=relatedProducts(p,products),specs=specificationEntries(p);
 const grade=p.conditionInfo&&p.conditionInfo!==p.condition?p.conditionInfo:null;
 const condition=[grade?`${p.condition?p.condition:'Condition'} · ${grade}`:conditionDescriptions[p.condition],p.boxed===true?'Supplied with its box.':p.boxed===false?'Not supplied with its box.':null].filter(Boolean).join(' ');
 const info=[['Overview',p.description],['Condition',condition],['What’s Included',p.whatsIncluded],['Delivery / Collection',siteConfig.deliveryInfo],['Warranty',p.warrantyInfo||siteConfig.warrantyInfo]].filter(([,c])=>Array.isArray(c)?c.length:!!c);
 const facts=[['Storage',p.storage||p.specifications?.storage],['Colour',p.colour||p.specifications?.colour],['Condition',grade||p.condition],['Packaging',p.boxed===true?'Boxed':p.boxed===false?'Unboxed':null]].filter(([,v])=>v);
 return `<main class="container section product-detail" id="main" tabindex="-1">
 <a class="back text-link" href="#gadgets">← Back to Gadgets</a>
 <div class="detail-grid"><div class="product-gallery">
 <div class="detail-image">

 <button class="main-image-button" type="button" aria-label="View larger image of ${e(p.name)}">${image(images[0],p.name+' — product image',true,'main-product-image',fallback)}<span class="enlarge-hint" aria-hidden="true">View larger ↗</span></button>
 </div>
 ${images.length>1?`<div class="thumbnails" aria-label="Product photographs">${images.map((src,i)=>`<button type="button" data-product-image="${e(src)}" aria-label="View ${e(p.name)} image ${i+1}" aria-pressed="${i===0}">${image(src,p.name+' — product image '+(i+1),false,'product-thumbnail',fallback)}</button>`).join('')}</div>`:''}
 <p class="image-note">${e(p.imageNote||"Ask us for current photographs of this device before purchasing.")}</p>
 </div><div class="detail-copy"><p class="eyebrow">${e(p.brand)}</p><h1>${e(p.name)}</h1> <div class="detail-price" aria-label="Product price"><strong class="${hasPrice(p.price)?'':'price-pending'}">${money(p.price)}</strong>${hasPrice(p.price)?`<span>${e(siteConfig.currency)}</span>`:''}${hasPrice(p.price)&&hasPrice(p.oldPrice)&&p.oldPrice>p.price?`<del>${money(p.oldPrice)}</del>`:''}</div>${p.highlights?.length?`<ul class="product-highlights">${p.highlights.map(detail=>`<li>${e(detail)}</li>`).join('')}</ul>`:p.shortDescription||p.description?`<p>${e(p.shortDescription||p.description)}</p>`:''}<div class="inline-badges">${conditionBadges(p)}${availabilityBadge(p)}</div>
 ${facts.length?`<dl class="device-facts">${facts.map(([k,v])=>`<div><dt>${k}</dt><dd>${e(v)}</dd></div>`).join('')}</dl>`:''}
 ${productActions(p)}${selectionButtons(p)}<p class="small muted">Confirm current stock, price and purchase details before payment.</p>${paymentMethods()}<a class="text-link policy-inline-link" href="#warranty">Read our Warranty Policy ↗</a></div></div>
 ${specs.length?`<section class="product-specifications" aria-labelledby="specifications-title"><h2 id="specifications-title">Specifications</h2><dl class="specification-grid">${specs.map(([label,value])=>`<div><dt>${e(label)}</dt><dd>${e(value)}</dd></div>`).join('')}</dl></section>`:''}
 <div class="product-information">${info.map(([t,c])=>`<section><h2>${t}</h2>${Array.isArray(c)?`<ul>${c.map(s=>`<li>${e(s)}</li>`).join('')}</ul>`:`<p>${e(c)}</p>`}${t==='Delivery / Collection'?`<a class="text-link" href="${deliveryEnquiry()}" target="_blank" rel="noopener noreferrer">Ask about delivery ↗</a>`:''}</section>`).join('')}</div>
 ${related.length?`<section class="section">${sectionTitle('Keep exploring','Related Products')}${productGrid(related)}</section>`:''}
 ${recentlyViewed(p.id)}
 <dialog class="product-viewer" aria-labelledby="product-viewer-caption"><button class="product-viewer-close" type="button" aria-label="Close enlarged product image">×</button><img data-fallback-src="${e(fallback)}" alt=""><p id="product-viewer-caption" aria-live="polite">${e(p.name)}</p>${images.length>1?'<div class="product-viewer-controls"><button type="button" data-image-step="-1">← Previous</button><button type="button" data-image-step="1">Next →</button></div>':''}</dialog>
 </main>`;
}
export function bindProductGallery(){
 const main=document.querySelector('.main-product-image');if(!main)return;
 const buttons=[...document.querySelectorAll('[data-product-image]')];
 const opener=document.querySelector('.main-image-button'),dialog=document.querySelector('.product-viewer');
 const enlarged=dialog.querySelector('img'),caption=dialog.querySelector('#product-viewer-caption');
 let selected=0;
 let touchStart=null;
 opener.addEventListener('touchstart',event=>{touchStart=event.changedTouches[0]?.clientX;},{passive:true});
 opener.addEventListener('touchend',event=>{const end=event.changedTouches[0]?.clientX;if(touchStart!==null&&Math.abs(end-touchStart)>50&&buttons.length)select((selected+(end<touchStart?1:-1)+buttons.length)%buttons.length);touchStart=null;},{passive:true});
 function syncViewer(){
  delete enlarged.dataset.fallback;enlarged.src=main.src;enlarged.alt=main.alt;
  caption.textContent=main.alt+(buttons.length?' · '+(selected+1)+' / '+buttons.length:'');
 }
 function select(index){
  selected=index;const b=buttons[index];
  main.removeAttribute('srcset');main.removeAttribute('sizes');delete main.dataset.fallback;
  main.src=b.dataset.productImage;main.alt=b.querySelector('img').alt;
  buttons.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
  if(dialog.open){delete enlarged.dataset.fallback;enlarged.src=b.dataset.productImage;enlarged.alt=main.alt;caption.textContent=main.alt+' · '+(selected+1)+' / '+buttons.length;}
 }
 buttons.forEach((b,i)=>b.addEventListener('click',()=>select(i)));
 document.querySelector('.thumbnails')?.addEventListener('keydown',event=>{
  const current=buttons.indexOf(document.activeElement);
  if(current<0||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
  event.preventDefault();
  const next=event.key==='Home'?0:event.key==='End'?buttons.length-1:(current+(event.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length;
  select(next);buttons[next].focus();
 });
 opener.addEventListener('click',()=>{syncViewer();dialog.showModal();document.body.classList.add('modal-open');});
 dialog.querySelector('.product-viewer-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
 dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');opener.focus();});
 const move=step=>{if(buttons.length)select((selected+step+buttons.length)%buttons.length);};
 dialog.querySelectorAll('[data-image-step]').forEach(b=>b.addEventListener('click',()=>move(Number(b.dataset.imageStep))));
 dialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();move(event.key==='ArrowRight'?1:-1);}});
}
