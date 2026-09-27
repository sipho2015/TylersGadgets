import { siteConfig as c } from './site-config.js';
// Owner-supplied policy copy. No warranty duration or delivery fee is assumed.
export const policyLinks = [
 ['warranty','Warranty'],['returns','Returns & Refunds'],['delivery-policy','Delivery'],
 ['privacy','Privacy'],['terms','Terms & Conditions']
];
export function getPolicies() {
 return {
  warranty: {
   title:'Warranty Policy', intro:`${c.name} aims to provide customers with reliable devices and quality repair services.`,
   sections:[
    {title:'Device Sales',paragraphs:[
     'Warranty coverage, where applicable, will be communicated to the customer before purchase.',
     'Warranty terms may differ depending on whether a device is New, Used, Refurbished or supplied boxed and on the particular product being purchased. Boxed does not automatically mean New.',
     'Customers are encouraged to inspect and test their device when receiving or collecting it.',
     'Unless otherwise agreed, warranty coverage does not extend to damage caused after purchase, including accidental damage, liquid damage, physical damage, misuse, unauthorised repairs or modifications.'
    ]},
    {title:'Repairs',paragraphs:[
     'Where a repair includes warranty coverage, the applicable warranty period and coverage will be communicated when the repair is completed.',
     'Repair warranty applies only to the specific repair or replacement part covered by the agreed warranty. It does not automatically cover unrelated faults or damage occurring after the repair.'
    ]},
    {title:'Warranty Claims',paragraphs:[
     `Customers should contact ${c.name} through WhatsApp and provide details of the device, purchase or repair, and problem experienced.`,
     'The device may need to be inspected before the appropriate remedy is determined.',
     `Nothing in this policy limits customer rights provided under applicable ${c.country} law.`
    ]}
   ]
  },
  returns:{
   title:'Returns & Refunds',intro:`If you experience a problem with a product purchased from ${c.name}, contact us as soon as possible.`,
   sections:[
    {title:'How requests are assessed',paragraphs:['Return or refund requests will be assessed based on:'],items:['Product condition','Reason for return','Agreed warranty terms','Applicable consumer law']},
    {title:'Returning a device',paragraphs:[
     'Where applicable, products should be returned with accessories and items originally supplied.',
     'Returns or refunds may not apply where damage occurred after purchase through misuse, accidental damage, liquid damage, unauthorised repair, modification or other customer-caused damage.',
     'For Used or Refurbished products, customers should review the disclosed condition before purchasing. Normal cosmetic characteristics clearly disclosed before purchase should not be treated as undisclosed defects.',
     `Contact ${c.name} through WhatsApp before returning a product.`
    ]},
    {title:'Your consumer rights',paragraphs:[`Nothing in this policy removes customer rights provided under applicable ${c.country} law.`]}
   ]
  },
  privacy:{
   title:'Privacy Policy',intro:`${c.name} respects the privacy of customers and website visitors.`,
   sections:[
    {title:'Information you provide',paragraphs:['Information you voluntarily provide may include:'],items:['Name','Phone number','Email','Product or repair enquiry','Delivery information','Communications with the business']},
    {title:'How information is used',paragraphs:['The website primarily directs orders and enquiries through WhatsApp. Information may be used to:'],items:['Respond to enquiries','Confirm availability','Arrange purchases','Provide repairs','Arrange collection or delivery','Provide customer support','Maintain necessary business records']},
    {title:'Third-party services',paragraphs:['Services such as WhatsApp have their own privacy practices and terms. Following an enquiry link opens WhatsApp; you choose whether to send the prepared message.','This website also loads some images from Unsplash. Requests to external image services disclose connection information such as your IP address to those services.']},
    {title:'Communications and privacy questions',paragraphs:['Internet communications cannot be guaranteed to be completely secure. Only share information needed to handle your enquiry.',`For privacy questions, contact ${c.name} at ${c.email}.`]}
   ]
  },
  terms:{
   title:'Terms & Conditions',intro:`Please review the following information when browsing or arranging a purchase or repair with ${c.name}.`,
   sections:[
    {title:'Product condition',paragraphs:['Products may be New, Used or Refurbished. A device may separately be supplied with its box. Boxed does not automatically mean New. Review the condition and specifications for the particular device before purchasing.']},
    {title:'Availability and prices',paragraphs:[
     'Product availability may display In Stock, Low Stock, Sold or Coming Soon. Confirm current availability before completing a transaction.',
     `All website prices are displayed in ${c.currencyName} (${c.currency}) unless explicitly stated otherwise. Where no price is listed, contact us for the current price before purchasing.`
    ]},
    {title:'Payments',paragraphs:[`Current payment methods: ${c.paymentMethods.join(' and ')}. Confirm the price and payment arrangement directly before completing your purchase.`]},
    {title:'Repair quotations',paragraphs:['Repair pricing and completion time may depend on the device, fault, replacement-part availability and work required. A device may need inspection before a final repair quotation is provided.']},
    {title:'Arrangements and customer rights',paragraphs:['Orders, repairs, delivery arrangements and other enquiries may be handled through WhatsApp.',`Nothing in these terms removes customer rights under applicable ${c.country} law.`]}
   ]
  },
  'delivery-policy':{
   title:'Delivery Policy',intro:`${c.name} provides delivery services for eligible orders in and around ${c.serviceArea}, ${c.country}.`,
   sections:[
    {title:'Before delivery',paragraphs:['Confirm the following with us:'],items:['Product availability','Condition','Price','Payment arrangement','Delivery location','Delivery timing']},
    {title:'Delivery days and charges',paragraphs:[c.deliveryInfo]},
    {title:'Timing and receiving your order',paragraphs:[
     'Delivery timing depends on product availability, customer location and the confirmed arrangement.',
     'Please provide correct contact and delivery information. Inspect your order when receiving it and promptly report any issue.',
     'If circumstances outside reasonable control affect delivery, we will communicate changes where possible.'
    ]}
   ]
  }
 };
}
