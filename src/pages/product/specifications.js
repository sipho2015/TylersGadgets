// Accept structured specs and older arrays without discarding existing catalogue data.
export function specificationEntries(product) {
 const labels={brand:'Brand',model:'Model',faceId:'Face ID',swaps:'Swaps',storage:'Storage',ram:'RAM',display:'Display',processor:'Processor',camera:'Camera',battery:'Battery',batteryHealth:'Battery health',operatingSystem:'Operating System',network:'Network',sim:'SIM',colour:'Colour',condition:'Condition',boxed:'Boxed status',graphics:'Graphics',capacity:'Capacity',charging:'Charging',output:'Output',indicator:'Indicator',connectivity:'Connectivity',controls:'Controls',batteryLife:'Battery life',case:'Case'};
 const specs=product.specifications;
 const entries=new Map();
 const add=(key,value)=>{
  if(value===null||value===undefined||String(value).trim()==='')return;
  entries.set(key,[labels[key]||key.replace(/([a-z])([A-Z])/g,'$1 $2').replace(/^./,c=>c.toUpperCase()),String(value)]);
 };
 if(Array.isArray(specs))specs.forEach((value,i)=>add('Detail '+(i+1),value));
 else if(specs&&typeof specs==='object')Object.entries(specs).forEach(([key,value])=>add(key,value));
 // Include known identity fields only when there is technical information to show.
 if(entries.size||product.storage||product.colour){
  const identity=new Map();
  for(const [key,value]of [['brand',product.brand],['model',product.model||product.name]])if(value)identity.set(key,[labels[key],value]);
  for(const [key,value]of entries)identity.set(key,value);
  entries.clear();for(const [key,value]of identity)entries.set(key,value);
  add('storage',product.storage||specs?.storage);add('colour',product.colour||specs?.colour);
  add('condition',[product.condition,product.conditionInfo&&product.conditionInfo!==product.condition?product.conditionInfo:null].filter(Boolean).join(' / '));
  if(typeof product.boxed==='boolean')add('boxed',product.boxed?'Boxed':'Unboxed');
 }
 return [...entries.values()];
}
export function relatedProducts(product,items,limit=4){
 const seen=new Set([product.id]);
 return items.filter(p=>{if(seen.has(p.id))return false;seen.add(p.id);return true;})
 .map((p,index)=>({p,index,score:Number(p.category===product.category)*10+Number(!!p.brand&&p.brand===product.brand)*4+Number(!!p.storage&&p.storage===product.storage)*2+(['in-stock','low-stock'].includes(p.availability)?3:p.availability==='sold'?-8:0)+(typeof p.price==='number'&&typeof product.price==='number'?Math.max(0,2-Math.abs(p.price-product.price)/Math.max(product.price,1)):0)}))
 .filter(({p})=>p.category===product.category||p.category==='accessories')
 .sort((a,b)=>b.score-a.score||a.index-b.index).slice(0,limit).map(({p})=>p);
}
