import { products } from './products.js';
import { siteConfig as c } from './site-config.js';
// Development imagery: replace these URLs with actual business photographs.
const photo=(id,width=1000)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
export const media={
 hero:photo('photo-1496181133206-80ce9b88a853',1400),
 phones:products.find(p=>p.category==='phones')?.image||'assets/placeholders/phone.svg',
 laptops:photo('photo-1517336714731-489689fd1ca8',700),
 accessories:photo('photo-1606220945770-b5b6c2c55bf1',700),
 repairs:photo('photo-1588702547919-26089e690ecc'),
 about:photo('photo-1496181133206-80ce9b88a853'),
 lifestyle:products.find(p=>p.category==='phones')?.image||'assets/placeholders/phone.svg',
 delivery:photo('photo-1496181133206-80ce9b88a853',700)
};
export function getFaqs(){return [
 ['What does New, Used and Refurbished mean?','New means unused. Used means previously owned. Refurbished describes a previously owned device inspected or restored where applicable. Read the condition information for the specific device.'],
 ['Does Boxed mean the phone is New?','No. Boxed means the device is supplied with its box. Its actual condition is listed separately.'],
 ['How do I order?','Choose a device and tap its WhatsApp enquiry button. Confirm the current stock, price and condition, then agree payment and delivery or collection directly with us.'],
 ['How do repairs work?','Choose a repair service and send your brand, model and a description of the problem. We may need to inspect the device before confirming the quote, parts and timing.'],
 ['Do you deliver?',c.deliveryInfo],
 ['What payment methods do you accept?',`We currently accept ${c.paymentMethods.join(' and ')}. Confirm your payment arrangement with us before purchasing.`],
 ['How do I know whether a device is available?','Listings show In Stock, Low Stock, Sold or Coming Soon. Sold devices cannot be ordered through their listing. Confirm current availability on WhatsApp before completing a transaction.']
];}
export const galleryItems=[
 ...products.filter(p=>p.category==='phones').flatMap(p=>[...new Set([p.image,...(p.images||[])].filter(Boolean))].map((image,index)=>({image,category:'Phones',brand:p.brand,title:p.name,alt:p.name+' photo '+(index+1),productId:p.slug||p.id}))),
 {image:media.laptops,category:'Laptops',title:'A space to create',alt:'Laptop on a workspace'},
 {image:media.accessories,category:'Accessories',title:'The little essentials',alt:'Wireless earbuds and charging case'},
 {image:media.repairs,category:'Repairs',title:'Let’s talk device care',alt:'Computer equipment on a work surface'},
 {image:media.about,category:'Laptops',title:'Ready for your next idea',alt:'Open laptop on a table'}
];
