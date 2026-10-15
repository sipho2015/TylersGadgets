const present=value=>value!==null&&value!==undefined&&String(value).trim()!=='';
const text=value=>Array.isArray(value)?value.filter(present).join(', '):String(value);
const valueFor=(p,key)=>p[key]??p.conditionDetails?.[key]??p.specifications?.[key];

export function conditionEntries(p){
 const entries=[];
 const add=(label,value)=>{if(present(value))entries.push([label,text(value)]);};
 add('Device condition',p.condition);
 if(p.conditionInfo!==p.condition)add('Condition details',p.conditionInfo);
 for(const [key,label] of [['batteryHealth','Battery health'],['screenCondition','Screen condition'],['bodyCondition','Body condition'],['faceId','Face ID'],['fingerprint','Fingerprint'],['cameraFunctionality','Camera functionality'],['chargingFunctionality','Charging functionality'],['sim','SIM configuration'],['network','Network'],['knownFaults','Known faults']])add(label,valueFor(p,key));
 if(!entries.some(([label])=>label==='Known faults'))add('Known faults',valueFor(p,'faults'));
 if(typeof p.boxed==='boolean')add('Packaging',p.boxed?'Supplied with its box.':'Not supplied with its box.');
 add('Included accessories',p.includedAccessories);
 return entries;
}

export function productHighlights(p){
 const storage=p.storage||p.specifications?.storage;
 const skip=new Set([storage,storage?storage+' storage':null,p.condition,p.conditionInfo,p.conditionInfo?p.conditionInfo+' condition':null,p.boxed?'Boxed':null].filter(present).map(value=>String(value).toLowerCase().trim()));
 const recorded=Array.isArray(p.highlights)?p.highlights.filter(present).map(String):[];
 const derived=[['processor','Processor'],['ram','RAM'],['display','Display'],['camera','Camera'],['batteryHealth','Battery health'],['connectivity','Connectivity'],['compatibility','Compatibility'],['charging','Charging'],['capacity','Capacity']].flatMap(([key,label])=>{const value=valueFor(p,key);return present(value)?[`${label}: ${text(value)}`]:[];});
 const candidates=recorded.length?recorded:derived;
 const seen=new Set();
 return candidates.filter(value=>{const key=value.toLowerCase().trim();if(skip.has(key)||seen.has(key))return false;seen.add(key);return true;}).slice(0,5);
}

export function includedItems(p){
 const supplied=Array.isArray(p.whatsIncluded)?p.whatsIncluded:present(p.whatsIncluded)?[p.whatsIncluded]:[];
 return supplied.filter(present).map(String);
}
