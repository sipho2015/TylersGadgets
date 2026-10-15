import { hasPrice } from './products.js';

export function validDate(value){
 if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}(?:T.*)?$/.test(value))return null;
 const date=new Date(value);
 const [year,month,day]=value.slice(0,10).split('-').map(Number);
 const calendar=new Date(Date.UTC(year,month-1,day));
 return Number.isFinite(date.getTime())&&calendar.toISOString().slice(0,10)===value.slice(0,10)?date:null;
}
export function newArrivals(items,now=new Date()){
 return items.filter(p=>{const date=validDate(p.dateAdded||p.addedAt);return p.newArrival===true||(date&&date<=now&&now-date<=30*86400000);})
 .sort((a,b)=>(validDate(b.dateAdded||b.addedAt)?.getTime()||0)-(validDate(a.dateAdded||a.addedAt)?.getTime()||0)).slice(0,8);
}
export function activeOffer(p,now=new Date()){
 if(p.availability==='sold')return null;
 const original=p.originalPrice??p.oldPrice,promotional=p.promotionalPrice??p.price;
 if(!hasPrice(original)||!hasPrice(promotional)||promotional>=original)return null;
 if(p.promotionExpiry){const expiry=validDate(p.promotionExpiry);if(!expiry)return null;if(p.promotionExpiry.length===10)expiry.setUTCHours(23,59,59,999);if(expiry<now)return null;}
 return {original,promotional,label:p.promotionLabel||'Special offer',discount:Math.round((original-promotional)/original*100)};
}
