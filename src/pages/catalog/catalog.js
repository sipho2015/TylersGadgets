import { activeOffer } from '../../core/promotions.js';
import { recentlyViewed } from './collections.js';
import { products } from '../../../data/products.js';
import { siteConfig } from '../../../data/site-config.js';
import { productGrid, image } from '../../core/ui.js';
import { hasPrice,availabilityOptions } from '../../core/products.js';
import { escapeHtml as e } from '../../core/format.js';
export function filterProducts(items,{search='',category='all',brand='all',condition='all',availability='all',sort='featured'}={}){
 const term=search.trim().toLowerCase();
 const result=items.filter(p=>
  (category==='all'||p.category===category)&&
  (brand==='all'||p.brand===brand)&&
  (condition==='all'||(condition==='Boxed'?p.boxed===true:p.condition===condition))&&
  (availability==='all'||p.availability===availability)&&
  [p.name,p.brand,p.model,p.storage,p.description,...Object.values(p.specifications||{})].join(' ').toLowerCase().includes(term)
 );
 return result.sort((a,b)=>{
  if(sort==='low'||sort==='high'){
   // Unknown prices always follow confirmed prices, in either direction.
   const aPrice=activeOffer(a)?.promotional??a.price,bPrice=activeOffer(b)?.promotional??b.price;
   if(hasPrice(aPrice)!==hasPrice(bPrice))return hasPrice(aPrice)?-1:1;
   if(!hasPrice(aPrice))return 0;
   return sort==='low'?aPrice-bPrice:bPrice-aPrice;
  }
  if(sort==='newest')return (Date.parse(b.dateAdded||b.addedAt)||0)-(Date.parse(a.dateAdded||a.addedAt)||0);
  return Number(!!b.featured)-Number(!!a.featured);
 });
}
export function renderCatalog(category=null){
 const welcomePhotos=[
  {category:'phones',label:'Phones',product:products.find(p=>p.id==='iphone-14-pro-max')},
  {category:'laptops',label:'Laptops',product:products.find(p=>p.id==='macbook-air')},
  {category:'accessories',label:'Accessories',product:products.find(p=>p.id==='phone-lanyard-straps')}
 ].filter(item=>item.product);
 const photoCards=welcomePhotos.map(({category,label,product})=>`<a class="catalog-welcome-photo" href="#${category}" aria-label="Browse ${label.toLowerCase()}">${image(product.image,product.name+' from our collection',true)}<span>${label} <b aria-hidden="true">&#8599;</b></span></a>`).join('');
 return `<main class="container section catalog-page" id="main" tabindex="-1"><section class="catalog-welcome" aria-labelledby="catalog-title"><div class="page-heading"><p class="eyebrow">The gadget collection / ${e(siteConfig.serviceArea)}</p><h1 id="catalog-title">Find Your<br>Next Device<span>.</span></h1><p>Phones, laptops and everyday essentials. Clear conditions. A direct conversation.</p><span class="currency-note">Prices in ${e(siteConfig.currency)} · Confirm current stock on WhatsApp</span></div><div class="catalog-welcome-photos">${photoCards}</div></section><details class="catalog-filter-panel" open><summary>Filter &amp; sort<span aria-hidden="true">+</span></summary><div class="catalog-controls"><label class="search-label">Search gadgets<input id="product-search" type="search" placeholder="Search product, brand or model…" autocomplete="off"></label><label>Condition<select id="condition-filter"><option value="all">All conditions</option>${['New','Used','Refurbished','Boxed'].map(c=>`<option>${c}</option>`).join('')}</select></label><label>Availability<select id="availability-filter"><option value="all">All availability</option>${Object.entries(availabilityOptions).map(([value,status])=>`<option value="${value}">${status.label}</option>`).join('')}</select></label><label>Sort by<select id="product-sort"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="newest">Newest</option></select></label></div><div class="catalog-bar"><div class="filters" aria-label="Product category">${['all','phones','laptops','accessories'].map(c=>`<button type="button" data-filter="${c}" aria-pressed="${c===(category||'all')}" class="${c===(category||'all')?'active':''}">${c==='all'?'All gadgets':c}</button>`).join('')}</div><button type="button" class="text-button" id="clear-filters">Clear filters</button><p id="result-count" role="status" aria-live="polite"></p></div></details><p class="catalog-results" id="visible-result-count" role="status" aria-live="polite"></p><div id="listing"></div>${recentlyViewed()}</main>`;
}
export function bindCatalogFilters(){
 const listing=document.querySelector('#listing');if(!listing)return;
 const filterPanel=document.querySelector('.catalog-filter-panel');
 const desktopFilters=window.matchMedia('(min-width: 801px)');
 filterPanel.open=desktopFilters.matches;
 desktopFilters.addEventListener('change',event=>{filterPanel.open=event.matches;},{once:true});
 const brands=[...new Set(products.filter(p=>p.category==='phones'&&p.brand).map(p=>p.brand))].sort((a,b)=>a.localeCompare(b));
 const brandSection=document.createElement('div');
 brandSection.className='phone-brand-filter';
 brandSection.innerHTML=`<p id="phone-brand-label">Shop phones by brand</p><div class="filters" role="group" aria-labelledby="phone-brand-label"><button type="button" data-brand="all" aria-pressed="true" class="active">All Phones</button>${brands.map(brand=>`<button type="button" data-brand="${e(brand)}" aria-pressed="false">${e(brand==='Apple'?'Apple / iPhone':brand)}</button>`).join('')}</div>`;
 document.querySelector('.catalog-filter-panel').append(brandSection);
 let selectedBrand='all';
 function selectBrand(brand){
  selectedBrand=brand;
  brandSection.querySelectorAll('[data-brand]').forEach(b=>{const active=b.dataset.brand===brand;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 }
 const search=document.querySelector('#product-search'),condition=document.querySelector('#condition-filter'),availability=document.querySelector('#availability-filter'),sort=document.querySelector('#product-sort');
 function update(){
  const category=document.querySelector('[data-filter][aria-pressed="true"]').dataset.filter;
  brandSection.hidden=category!=='phones';
  if(category!=='phones')selectBrand('all');
  const items=filterProducts(products,{brand:selectedBrand,search:search.value,condition:condition.value,availability:availability.value,sort:sort.value,category});
  document.querySelector('#result-count').textContent=`${items.length} ${items.length===1?'device':'devices'}`;
  document.querySelector('#visible-result-count').textContent=`${items.length} ${items.length===1?'device':'devices'}`;
  listing.innerHTML=items.length?productGrid(items):'<div class="empty-state"><h2>No devices found.</h2><p>Try another search or clear your filters.</p><button class="button" id="reset-filters">Clear filters</button></div>';
  document.querySelector('#reset-filters')?.addEventListener('click',()=>{search.value='';condition.value='all';availability.value='all';sort.value='featured';document.querySelector('[data-filter="all"]').click();});
 }
 document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});update();}));
 document.querySelector('#clear-filters')?.addEventListener('click',()=>{search.value='';condition.value='all';availability.value='all';sort.value='featured';selectBrand('all');document.querySelector('[data-filter="all"]').click();});
 search.addEventListener('input',update);
 brandSection.querySelectorAll('[data-brand]').forEach(b=>b.addEventListener('click',()=>{selectBrand(b.dataset.brand);update();}));
 for(const control of [condition,availability,sort])control.addEventListener('change',update);
 update();
}
