import { galleryItems } from '../../../data/content.js';
import { escapeHtml as e } from '../../core/format.js';
import { image } from '../../core/ui.js';
export function renderGallery(){return `<main id="main" tabindex="-1" class="container section"><div class="page-heading"><p class="eyebrow">The world of everyday tech</p><h1>A closer look<span>.</span></h1><p>Phones, workspaces and the essentials that bring it all together.</p></div><div class="filters gallery-filters" aria-label="Gallery category">${['All',...new Set(galleryItems.map(item=>item.category))].map((c,i)=>`<button data-gallery-filter="${c}" aria-pressed="${i===0}" class="${i===0?'active':''}">${c}</button>`).join('')}</div><div class="gallery-grid">${galleryItems.map((g,i)=>`<figure data-category="${g.category}"><button data-gallery-index="${i}" aria-label="Enlarge: ${e(g.title)}">${image(g.image,g.alt,false,'gallery-image')}<span aria-hidden="true">↗</span></button><figcaption><span class="eyebrow">${g.category}</span><h2>${e(g.title)}</h2></figcaption></figure>`).join('')}</div><dialog class="lightbox" aria-labelledby="lightbox-caption"><button class="lightbox-close" aria-label="Close image viewer">×</button><img alt=""><p id="lightbox-caption" aria-live="polite"></p><div class="lightbox-controls"><button data-direction="-1" aria-label="Previous image">← Previous</button><button data-direction="1" aria-label="Next image">Next →</button></div></dialog></main>`;}
export function bindGallery(){
 const dialog=document.querySelector('.lightbox');if(!dialog)return;let current=0,opener;
 const brands=[...new Set(galleryItems.filter(g=>g.category==='Phones'&&g.brand).map(g=>g.brand))].sort((a,b)=>a.localeCompare(b));
 const brandFilters=document.createElement('div');
 brandFilters.className='gallery-brand-filters';
 brandFilters.hidden=true;
 brandFilters.innerHTML=`<p id="gallery-brand-label">Phones by brand</p><div class="filters" role="group" aria-labelledby="gallery-brand-label"><button type="button" data-gallery-brand="all" class="active" aria-pressed="true">All Phones</button>${brands.map(brand=>`<button type="button" data-gallery-brand="${e(brand)}" aria-pressed="false">${e(brand==='Apple'?'Apple / iPhone':brand)}</button>`).join('')}</div>`;
 document.querySelector('.gallery-filters').after(brandFilters);
 let category='All',brand='all';
 function updateFilters(){
  brandFilters.hidden=category!=='Phones';
  brandFilters.querySelectorAll('[data-gallery-brand]').forEach(b=>{const active=b.dataset.galleryBrand===brand;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  document.querySelectorAll('[data-gallery-index]').forEach(b=>{const item=galleryItems[Number(b.dataset.galleryIndex)];b.closest('figure').hidden=(category!=='All'&&item.category!==category)||(category==='Phones'&&brand!=='all'&&item.brand!==brand);});
 }
 brandFilters.querySelectorAll('[data-gallery-brand]').forEach(b=>b.addEventListener('click',()=>{brand=b.dataset.galleryBrand;updateFilters();}));
 const visible=()=>[...document.querySelectorAll('[data-gallery-index]')].filter(b=>!b.closest('figure').hidden).map(b=>Number(b.dataset.galleryIndex));
 function show(index){current=index;const g=galleryItems[current];delete dialog.querySelector('img').dataset.fallback;dialog.querySelector('img').src=g.image;dialog.querySelector('img').alt=g.alt;document.querySelector('#lightbox-caption').textContent=g.title;}
 function move(d){const items=visible();show(items[(items.indexOf(current)+d+items.length)%items.length]);}
 document.querySelectorAll('[data-gallery-filter]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.galleryFilter;if(category!=='Phones')brand='all';document.querySelectorAll('[data-gallery-filter]').forEach(x=>{x.setAttribute('aria-pressed',String(x===b));x.classList.toggle('active',x===b);});updateFilters();}));
 document.querySelectorAll('[data-gallery-index]').forEach(b=>b.addEventListener('click',()=>{opener=b;show(Number(b.dataset.galleryIndex));dialog.showModal();document.body.classList.add('modal-open');}));
 dialog.querySelector('.lightbox-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',ev=>{if(ev.target===dialog)dialog.close();});
 dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');opener?.focus();});
 dialog.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight'){ev.preventDefault();move(1);}if(ev.key==='ArrowLeft'){ev.preventDefault();move(-1);}});
 dialog.querySelectorAll('[data-direction]').forEach(b=>b.addEventListener('click',()=>move(Number(b.dataset.direction))));
}
