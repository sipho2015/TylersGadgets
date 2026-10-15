import { products } from '../../data/products.js';
import { siteConfig as c } from '../../data/site-config.js';
import { publicUrl } from './urls.js';
import { hasPrice } from './products.js';
import { activeOffer } from './promotions.js';

export function structuredData(route,base=c.siteUrl){
 const absolute=value=>value?(base?new URL(value,base).href:value):null;
 const [opens,closes]=c.openingHours.time.split(/[\u2013-]/);
 const business={'@context':'https://schema.org','@type':'LocalBusiness',name:c.name,telephone:c.phone,email:c.email,address:{'@type':'PostalAddress',streetAddress:c.location,addressLocality:c.serviceArea,addressCountry:'ZW'},openingHoursSpecification:{'@type':'OpeningHoursSpecification',dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],opens,closes},...(base?{url:publicUrl('home',base),image:absolute(c.logo)}:{})};
 const p=route.startsWith('product/')?products.find(p=>p.slug===route.split('/')[1]||p.id===route.split('/')[1]):null;
 if(!p)return business;
 const product={'@context':'https://schema.org','@type':'Product',name:p.name,image:absolute(p.image),description:p.description||p.shortDescription||p.name,...(p.brand?{brand:{'@type':'Brand',name:p.brand}}:{}),...(base?{url:publicUrl(route,base)}:{})};
 const price=activeOffer(p)?.promotional??p.price;
 if(hasPrice(price)){product.offers={'@type':'Offer',price,priceCurrency:c.currency,...(base?{url:publicUrl(route,base)}:{})};const states={'in-stock':'InStock','low-stock':'LimitedAvailability',sold:'SoldOut'};if(states[p.availability])product.offers.availability='https://schema.org/'+states[p.availability];if(['New','Used','Refurbished'].includes(p.condition))product.offers.itemCondition='https://schema.org/'+p.condition+'Condition';}
 return [business,product];
}
