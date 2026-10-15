import { products } from '../../data/products.js';

const limits={compare:3,enquiry:products.length,saved:products.length,recent:8};
export function createSelections(storage){
 const memory={};
 const clean=(kind,ids)=>[...new Set(Array.isArray(ids)?ids.filter(id=>typeof id==='string'&&products.some(p=>p.id===id)):[])].slice(0,limits[kind]);
 for(const kind of Object.keys(limits)){
  try{memory[kind]=clean(kind,JSON.parse(storage?.getItem('tylers:'+kind)||'[]'));}catch{memory[kind]=[];}
 }
 const persist=kind=>{try{storage?.setItem('tylers:'+kind,JSON.stringify(memory[kind]));}catch{/* Memory remains usable when browser storage is unavailable. */}};
 return {
  ids:kind=>[...(memory[kind]||[])],
  items:kind=>(memory[kind]||[]).map(id=>products.find(p=>p.id===id)),
  has:(kind,id)=>memory[kind]?.includes(id)||false,
  toggle(kind,id){
   if(!limits[kind]||!products.some(p=>p.id===id))return {ok:false,message:'Product not found.'};
   const current=memory[kind];
   if(current.includes(id))memory[kind]=current.filter(value=>value!==id);
   else if(current.length>=limits[kind])return {ok:false,message:`You can compare up to ${limits[kind]} products. Remove one first.`};
   else current.push(id);
   persist(kind);return {ok:true};
  },
  clear(kind){if(limits[kind]){memory[kind]=[];persist(kind);}},
  visit(id){if(!products.some(p=>p.id===id))return;memory.recent=[id,...memory.recent.filter(value=>value!==id)].slice(0,limits.recent);persist('recent');}
 };
}
let browserStorage;
try{browserStorage=globalThis.localStorage;}catch{}
export const selections=createSelections(browserStorage);

export function selectionButtons(p,compact=false){
 const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 return `<div class="selection-actions">${(compact?[['compare','Compare','In comparison'],['saved','Save','Saved']]:[['compare','Compare','In comparison'],['saved','Save for Later','Saved'],['enquiry','Add to Enquiry','In enquiry list']]).map(([kind,label,selected])=>`<button type="button" data-selection="${kind}" data-product-id="${escape(p.id)}" aria-label="${label}: ${escape(p.name)}" aria-pressed="${selections.has(kind,p.id)}">${selections.has(kind,p.id)?selected:label}</button>`).join('')}</div>`;
}
