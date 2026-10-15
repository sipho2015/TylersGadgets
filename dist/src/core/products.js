// Stock codes control both labels and order actions. Unknown values fail safely.
export const availabilityOptions = {
  'in-stock': { label: 'In Stock', action: 'Order on WhatsApp' },
  'low-stock': { label: 'Low Stock', action: 'Check Availability' },
  'sold': { label: 'Sold', action: 'Ask About Similar Devices' },
  'coming-soon': { label: 'Coming Soon', action: 'Ask About Availability' }
};
export const stockStatus = product => availabilityOptions[product.availability] || {label:'Confirm Availability',action:'Ask About Availability'};
export const hasPrice = price => typeof price === 'number' && Number.isFinite(price) && price > 0;
export const fallbackImage = category => `assets/placeholders/${({phones:'phone',laptops:'laptop',accessories:'accessory',repairs:'repair'})[category]||'phone'}.svg`;
export const productImages = product => [...new Set([product.image,...(Array.isArray(product.images)?product.images:[])].filter(src=>typeof src==='string'&&src.trim()))];
export const conditionDescriptions = {
  New:'Unused/new device.',
  Used:'Previously owned device.',
  Refurbished:'Previously owned device that has been inspected or restored where applicable.'
};
