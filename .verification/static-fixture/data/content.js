import { products } from './products.js';
import { siteConfig as c } from './site-config.js';
// Development imagery: replace these URLs with actual business photographs.
const photo=(id,width=1000)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
export const media={
 hero:photo('photo-1496181133206-80ce9b88a853',1400),
 phones:products.find(p=>p.category==='phones')?.image||'assets/placeholders/phone.svg',
 laptops:photo('photo-1517336714731-489689fd1ca8',700),
 accessories:'assets/products/accessories/Accessory1.jpeg',
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
  {
    "image": "assets/products/gallery/iphoneXr_Boxed.jpeg",
    "category": "Phones",
    "brand": "Apple",
    "title": "iPhone XR (Boxed)",
    "alt": "iPhone XR (Boxed)"
  },
  {
    "image": "assets/products/gallery/iphone13ProMax_Boxed.jpeg",
    "category": "Phones",
    "brand": "Apple",
    "title": "iPhone 13 Pro Max (Boxed)",
    "alt": "iPhone 13 Pro Max (Boxed)"
  },
  {
    "image": "assets/products/gallery/iphone14ProMax_Boxed.jpeg",
    "category": "Phones",
    "brand": "Apple",
    "title": "iPhone 14 Pro Max (Boxed)",
    "alt": "iPhone 14 Pro Max (Boxed)"
  },
  {
    "image": "assets/products/gallery/iphone15_Boxed.jpeg",
    "category": "Phones",
    "brand": "Apple",
    "title": "iPhone 15 (Boxed)",
    "alt": "iPhone 15 (Boxed)"
  },
  {
    "image": "assets/products/gallery/Samsung A07.jpeg",
    "category": "Phones",
    "brand": "Samsung",
    "title": "Samsung Galaxy A07",
    "alt": "Samsung Galaxy A07"
  },
  {
    "image": "assets/products/gallery/Samsung S20FE 5G_2.jpeg",
    "category": "Phones",
    "brand": "Samsung",
    "title": "Samsung Galaxy S20 FE 5G",
    "alt": "Samsung Galaxy S20 FE 5G"
  },
  {
    "image": "assets/products/gallery/SamsungS21 Ultra.jpeg",
    "category": "Phones",
    "brand": "Samsung",
    "title": "Samsung Galaxy S21 Ultra",
    "alt": "Samsung Galaxy S21 Ultra"
  },
  {
    "image": "assets/products/gallery/Accessory2.jpeg",
    "category": "Accessories",
    "title": "Phone Case with Lanyard",
    "alt": "Phone Case with Lanyard"
  },
  {
    "image": "assets/products/gallery/Accessory6.jpeg",
    "category": "Accessories",
    "title": "USB-C Wired Earphones",
    "alt": "USB-C Wired Earphones"
  },
  {
    "image": "assets/products/gallery/Accessory7.jpeg",
    "category": "Accessories",
    "title": "Wireless Earbuds with Charging Case",
    "alt": "Wireless Earbuds with Charging Case"
  }
];

// Add approved real repair examples: {model, repairType, before, after, description}.
export const repairShowcases=[];
