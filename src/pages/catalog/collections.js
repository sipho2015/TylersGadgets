import { staticLinks } from '../../core/urls.js';
import { selections } from '../../core/selections.js';
import { escapeHtml as e,money } from '../../core/format.js';
import { multiProductLinks } from '../../core/enquiries.js';
import { image,productGrid,productActions } from '../../core/ui.js';
import { stockStatus } from '../../core/products.js';

export function collectionToolbar(){return `<div class="collection-toolbar" aria-label="Your product lists">${[['compare','Compare'],['enquiry','Enquiry list'],['saved','Saved products']].map(([kind,label])=>`<button type="button" data-open-collection="${kind}">${label} <span data-count="${kind}">${selections.ids(kind).length}</span></button>`).join('')}<span id="selection-status" class="small" role="status" aria-live="polite"></span></div><dialog class="collection-dialog" aria-labelledby="collection-title"><button type="button" class="collection-close" aria-label="Close product list">×</button><div id="collection-content"></div></dialog>`;}

const fields=[['Brand',p=>p.brand],['Price',p=>money(p.price)],['Condition',p=>[p.condition,p.conditionInfo].filter(Boolean).join(' / ')],['Storage',p=>p.storage||p.specifications?.storage],['RAM',p=>p.specifications?.ram],['Battery health',p=>p.specifications?.batteryHealth],['Screen / display',p=>p.specifications?.display||p.specifications?.screenSize],['Camera',p=>p.specifications?.camera],['Packaging',p=>p.boxed===true?'Boxed':p.boxed===false?'Unboxed':null],['Availability',p=>stockStatus(p).label],['Warranty',p=>p.warrantyInfo]];
export function comparisonTable(items){
 const rows=fields.filter(([label,value])=>['Price','Availability'].includes(label)||items.some(p=>value(p)));
 const remove=p=>`<button type="button" data-selection="compare" data-product-id="${e(p.id)}" aria-label="Remove ${e(p.name)} from comparison">Remove</button>`;
 const table=`<div class="comparison-scroll"><table class="comparison-table"><caption>Compare product details</caption><colgroup><col class="comparison-label-column">${items.map(()=>'<col>').join('')}</colgroup><thead><tr><th scope="col">Details</th>${items.map(p=>`<th scope="col">${image(p.image,p.name)}<a href="#product/${e(p.slug||p.id)}">${e(p.name)}</a>${remove(p)}</th>`).join('')}</tr></thead><tbody>${rows.map(([label,value])=>`<tr><th scope="row">${label}</th>${items.map(p=>`<td>${e(value(p)||'Not specified')}</td>`).join('')}</tr>`).join('')}<tr><th scope="row">Enquire</th>${items.map(p=>`<td>${productActions(p)}</td>`).join('')}</tr></tbody></table></div>`;
 const cards=`<div class="comparison-cards">${items.map(p=>`<article class="comparison-card">${image(p.image,p.name)}<h3><a href="#product/${e(p.slug||p.id)}">${e(p.name)}</a></h3>${remove(p)}<dl>${rows.map(([label,value])=>`<div><dt>${label}</dt><dd>${e(value(p)||'Not specified')}</dd></div>`).join('')}</dl>${productActions(p)}</article>`).join('')}</div>`;
 return table+cards;
}
export function collectionContent(kind){
 const items=selections.items(kind),title={compare:'Compare gadgets',enquiry:'Your enquiry list',saved:'Saved for later'}[kind];
 let body=!items.length?'<p>Your list is empty. Browse gadgets and add products that interest you.</p>':kind==='compare'?`${items.length<2?'<p>Add another gadget to compare two or three products.</p>':''}${comparisonTable(items)}`:productGrid(items);
 if(kind==='enquiry'&&items.length){const links=multiProductLinks(items);body+=`<p class="small">Prices and stock must be confirmed. This list prepares an enquiry; it does not reserve products.</p><div class="actions"><a class="button" href="${e(links.whatsapp)}" target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a><a class="button secondary" href="${e(links.email)}">Enquire by Email</a></div>`;}
 return `<h2 id="collection-title">${title}</h2>${body}${items.length?`<button type="button" class="text-button" data-clear-collection="${kind}">Clear ${kind==='compare'?'comparison':'list'}</button>`:''}`;
}
export const recentlyViewed=(exclude)=>{const items=selections.items('recent').filter(p=>p.id!==exclude);return items.length?`<section class="section recent-products"><div class="section-row"><h2>Recently viewed</h2><button class="text-button" type="button" data-clear-collection="recent">Clear history</button></div>${productGrid(items)}</section>`:'';};

export function bindCollections(){
 const root=document.querySelector('#app'),dialog=document.querySelector('.collection-dialog');if(!root||!dialog)return;
 root._disposeCollections?.();
 const controller=new AbortController();
 root._disposeCollections=()=>controller.abort();
 let kind='compare',opener;
 const render=()=>{const html=collectionContent(kind);document.querySelector('#collection-content').innerHTML=document.documentElement.dataset.static==='true'?staticLinks(html):html;};
 const sync=()=>{
  root.querySelectorAll('[data-count]').forEach(el=>el.textContent=selections.ids(el.dataset.count).length);
  root.querySelectorAll('[data-selection][aria-pressed]').forEach(el=>{const active=selections.has(el.dataset.selection,el.dataset.productId);el.setAttribute('aria-pressed',String(active));el.textContent=({compare:active?'In comparison':'Compare',saved:active?'Saved':el.closest('.product-card')?'Save':'Save for Later',enquiry:active?'In enquiry list':'Add to Enquiry'})[el.dataset.selection];});
 };
 root.addEventListener('click',event=>{
  const action=event.target.closest('[data-selection],[data-open-collection],[data-clear-collection],.collection-close');if(!action)return;
  if(action.dataset.selection){const result=selections.toggle(action.dataset.selection,action.dataset.productId);const status=document.querySelector('#selection-status');if(status)status.textContent=result.ok?'Product list updated.':result.message;sync();if(dialog.open){render();sync();dialog.querySelector('[data-selection],.collection-close')?.focus();}}
  if(action.dataset.openCollection){kind=action.dataset.openCollection;opener=action;render();sync();dialog.showModal();document.body.classList.add('modal-open');}
  if(action.dataset.clearCollection){selections.clear(action.dataset.clearCollection);sync();if(action.dataset.clearCollection==='recent')document.querySelectorAll('.recent-products').forEach(el=>el.remove());if(dialog.open)render();}
  if(action.classList.contains('collection-close'))dialog.close();
 },{signal:controller.signal});
 dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
 dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');opener?.focus();});
 sync();
}
