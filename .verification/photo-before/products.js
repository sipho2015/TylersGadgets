// USD prices require manual confirmation: replace price: null with a confirmed USD number.
// legacyPrice preserves the historical ZAR amount for reference ONLY. Never display or convert it.
// condition: New | Used | Refurbished. boxed: true | false | null (unconfirmed).
// availability: in-stock | low-stock | sold | coming-soon. dateAdded: optional ISO date.
// Gallery illustrations are generic development placeholders, not photographs of actual stock.
// Replace images with real product photographs. Structured specs only contain previously listed facts.
// Newly photographed phones omit condition and availability until confirmed. Add further views to their images arrays.
// Boxed listings are separate devices; do not copy pricing or specifications from another listing of the same model.
// Numbered photo suffixes are additional gallery views, not separate listings.
export const products = [
  {
    "id": "macbook-air",
    "name": "MacBook Air M1",
    "brand": "Apple",
    "category": "laptops",
    "price": null,
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
    "condition": "Used",
    "availability": "in-stock",
    "description": "Slim, silent and seriously capable for study, work and creative projects.",
    "specifications": {
      "processor": "Apple M1 chip",
      "ram": "8GB unified memory",
      "storage": "256GB SSD",
      "display": "13.3-inch Retina display"
    },
    "slug": "macbook-air",
    "conditionInfo": "Like new",
    "boxed": null,
    "featured": true,
    "images": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85"
    ],
    "shortDescription": "Slim, silent and seriously capable for study, work and creative projects.",
    "storage": "256GB SSD",
    "legacyPrice": {
      "amount": 14999,
      "currency": "ZAR"
    },
    "priceStatus": "awaiting-usd-confirmation"
  },
  {
    "id": "thinkpad-e14",
    "name": "Lenovo ThinkPad E14",
    "brand": "Lenovo",
    "category": "laptops",
    "price": null,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
    "condition": "Used",
    "availability": "in-stock",
    "description": "A business-ready laptop built for reliable all-day productivity.",
    "specifications": {
      "processor": "Intel Core i5",
      "ram": "16GB RAM",
      "storage": "512GB SSD",
      "display": "14-inch FHD display"
    },
    "slug": "thinkpad-e14",
    "conditionInfo": "Excellent",
    "boxed": null,
    "featured": true,
    "images": [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85"
    ],
    "shortDescription": "A business-ready laptop built for reliable all-day productivity.",
    "storage": "512GB SSD",
    "legacyPrice": {
      "amount": 10499,
      "currency": "ZAR"
    },
    "priceStatus": "awaiting-usd-confirmation"
  },
  {
    "id": "powerbank",
    "name": "20,000mAh Power Bank",
    "brand": "Volt",
    "category": "accessories",
    "price": null,
    "image": "https://images.unsplash.com/photo-1609592424824-76f9eebd3b9e?auto=format&fit=crop&w=900&q=85",
    "condition": "New",
    "availability": "in-stock",
    "description": "Keep your essential devices charged when you are on the move.",
    "specifications": {
      "capacity": "20,000mAh capacity",
      "charging": "USB-C fast charging",
      "output": "Dual USB output",
      "indicator": "LED indicator"
    },
    "slug": "powerbank",
    "conditionInfo": "New",
    "boxed": null,
    "featured": false,
    "images": [
      "https://images.unsplash.com/photo-1609592424824-76f9eebd3b9e?auto=format&fit=crop&w=900&q=85"
    ],
    "shortDescription": "Keep your essential devices charged when you are on the move.",
    "legacyPrice": {
      "amount": 699,
      "currency": "ZAR"
    },
    "priceStatus": "awaiting-usd-confirmation"
  },
  {
    "id": "buds",
    "name": "Wireless Earbuds",
    "brand": "SoundGo",
    "category": "accessories",
    "price": null,
    "image": "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85",
    "condition": "New",
    "availability": "in-stock",
    "description": "Comfortable wireless listening with a compact charging case.",
    "specifications": {
      "connectivity": "Bluetooth 5.3",
      "controls": "Touch controls",
      "batteryLife": "Up to 24-hour battery",
      "case": "USB-C case"
    },
    "slug": "buds",
    "conditionInfo": "New",
    "boxed": null,
    "featured": false,
    "images": [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85"
    ],
    "shortDescription": "Comfortable wireless listening with a compact charging case.",
    "legacyPrice": {
      "amount": 549,
      "currency": "ZAR"
    },
    "priceStatus": "awaiting-usd-confirmation"
  },
  {
    "id": "iphone-x",
    "slug": "iphone-x",
    "brand": "Apple",
    "name": "iPhone X",
    "category": "phones",
    "price": 120,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphoneX.jpeg",
    "images": [
      "assets/products/phones/iphones/iphoneX.jpeg"
    ],
    "shortDescription": "64GB storage. Clean condition. Face ID working.",
    "specifications": {
      "storage": "64GB",
      "faceId": "Working"
    },
    "storage": "64GB",
    "conditionInfo": "Clean",
    "description": "64GB storage. Clean condition. Face ID working.",
    "highlights": [
      "64GB storage",
      "Face ID working",
      "Clean condition"
    ]
  },
  {
    "id": "iphone-xr",
    "slug": "iphone-xr",
    "brand": "Apple",
    "name": "iPhone XR",
    "category": "phones",
    "price": 180,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone Xr_Galore.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone Xr_Galore.jpeg"
    ],
    "shortDescription": "128GB storage. Face ID working. Clean condition.",
    "specifications": {
      "storage": "128GB",
      "faceId": "Working"
    },
    "storage": "128GB",
    "conditionInfo": "Clean",
    "highlights": [
      "128GB storage",
      "Face ID working",
      "Clean condition"
    ],
    "description": "128GB storage. Face ID working. Clean condition.",
    "imageNote": "Shared iPhone XR collection photo. Ask for photographs of this specific device."
  },
  {
    "id": "iphone-xr-boxed",
    "slug": "iphone-xr-boxed",
    "brand": "Apple",
    "name": "iPhone XR (Boxed)",
    "category": "phones",
    "price": 260,
    "boxed": true,
    "featured": false,
    "image": "assets/products/phones/iphones/iphoneXr_Boxed.jpeg",
    "images": [
      "assets/products/phones/iphones/iphoneXr_Boxed.jpeg"
    ],
    "shortDescription": "128GB storage. Boxed. Coral.",
    "highlights": [
      "128GB storage",
      "Boxed",
      "Coral"
    ],
    "specifications": {
      "storage": "128GB",
      "colour": "Coral"
    },
    "storage": "128GB",
    "colour": "Coral",
    "description": "128GB storage. Boxed. Coral."
  },
  {
    "id": "iphone-xr-128gb-orange",
    "slug": "iphone-xr-128gb-orange",
    "brand": "Apple",
    "name": "iPhone XR (Orange)",
    "category": "phones",
    "price": 130,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone Xr_Galore.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone Xr_Galore.jpeg"
    ],
    "shortDescription": "128GB storage. Orange. Clean condition. Face ID not working.",
    "specifications": {
      "storage": "128GB",
      "colour": "Orange",
      "faceId": "Not working"
    },
    "storage": "128GB",
    "conditionInfo": "Clean; Face ID not working",
    "highlights": [
      "128GB storage",
      "Orange",
      "Clean condition",
      "Face ID not working"
    ],
    "description": "128GB storage. Orange. Clean condition. Face ID not working.",
    "imageNote": "Shared iPhone XR collection photo. Ask for photographs of this specific device.",
    "colour": "Orange"
  },
  {
    "id": "iphone-xr-64gb-black",
    "slug": "iphone-xr-64gb-black",
    "brand": "Apple",
    "name": "iPhone XR (Black)",
    "category": "phones",
    "price": 160,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone Xr_Galore.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone Xr_Galore.jpeg"
    ],
    "shortDescription": "64GB storage. Black. Face ID working. Clean condition.",
    "specifications": {
      "storage": "64GB",
      "colour": "Black",
      "faceId": "Working"
    },
    "storage": "64GB",
    "conditionInfo": "Clean",
    "highlights": [
      "64GB storage",
      "Black",
      "Face ID working",
      "Clean condition"
    ],
    "description": "64GB storage. Black. Face ID working. Clean condition.",
    "imageNote": "Shared iPhone XR collection photo. Ask for photographs of this specific device.",
    "colour": "Black"
  },
  {
    "id": "iphone-xr-blue",
    "slug": "iphone-xr-blue",
    "brand": "Apple",
    "name": "iPhone XR (Blue)",
    "category": "phones",
    "price": 180,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphoneXr_Blue.jpeg",
    "images": [
      "assets/products/phones/iphones/iphoneXr_Blue.jpeg"
    ],
    "shortDescription": "128GB storage. 100% battery health. Clean condition. Face ID working.",
    "specifications": {
      "storage": "128GB",
      "colour": "Blue",
      "batteryHealth": "100%",
      "faceId": "Working"
    },
    "colour": "Blue",
    "storage": "128GB",
    "conditionInfo": "Clean",
    "highlights": [
      "128GB storage",
      "100% battery health",
      "Clean condition",
      "Face ID working"
    ],
    "description": "128GB storage. 100% battery health. Clean condition. Face ID working."
  },
  {
    "id": "iphone-xs-max",
    "slug": "iphone-xs-max",
    "brand": "Apple",
    "name": "iPhone XS Max",
    "category": "phones",
    "price": 190,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphoneXsMax.jpeg",
    "images": [
      "assets/products/phones/iphones/iphoneXsMax.jpeg"
    ],
    "shortDescription": "256GB storage. Clean condition. Face ID working. 100% battery health.",
    "specifications": {
      "storage": "256GB",
      "faceId": "Working",
      "batteryHealth": "100%"
    },
    "storage": "256GB",
    "conditionInfo": "Clean",
    "description": "256GB storage. Clean condition. Face ID working. 100% battery health.",
    "highlights": [
      "256GB storage",
      "Face ID working",
      "100% battery health",
      "Clean condition"
    ]
  },
  {
    "id": "iphone-xs-max-boxed",
    "slug": "iphone-xs-max-boxed",
    "brand": "Apple",
    "name": "iPhone XS Max (Boxed)",
    "category": "phones",
    "price": 300,
    "boxed": true,
    "featured": false,
    "image": "assets/products/phones/iphones/iphoneXsMax_Boxed.jpeg",
    "images": [
      "assets/products/phones/iphones/iphoneXsMax_Boxed.jpeg"
    ],
    "shortDescription": "256GB storage. Boxed. Gold.",
    "highlights": [
      "256GB storage",
      "Boxed",
      "Gold"
    ],
    "specifications": {
      "storage": "256GB",
      "colour": "Gold"
    },
    "storage": "256GB",
    "colour": "Gold",
    "description": "256GB storage. Boxed. Gold."
  },
  {
    "id": "iphone-11",
    "slug": "iphone-11",
    "brand": "Apple",
    "name": "iPhone 11",
    "category": "phones",
    "price": 240,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone11.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone11.jpeg"
    ],
    "shortDescription": "128GB storage. 100% battery health. Face ID working. Clean condition.",
    "specifications": {
      "storage": "128GB",
      "batteryHealth": "100%",
      "faceId": "Working"
    },
    "storage": "128GB",
    "conditionInfo": "Clean",
    "highlights": [
      "128GB storage",
      "100% battery health",
      "Face ID working",
      "Clean condition"
    ],
    "description": "128GB storage. 100% battery health. Face ID working. Clean condition."
  },
  {
    "id": "iphone-11-boxed",
    "slug": "iphone-11-boxed",
    "brand": "Apple",
    "name": "iPhone 11 (Boxed)",
    "category": "phones",
    "price": 330,
    "boxed": true,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone11_Boxed.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone11_Boxed.jpeg",
      "assets/products/phones/iphones/ipphone11_Boxed.jpeg"
    ],
    "shortDescription": "128GB storage. Green. Physical dual SIM. Boxed.",
    "highlights": [
      "128GB storage",
      "Green",
      "Physical dual SIM",
      "Boxed"
    ],
    "specifications": {
      "storage": "128GB",
      "colour": "Green",
      "sim": "Physical dual SIM"
    },
    "storage": "128GB",
    "colour": "Green",
    "description": "128GB storage. Green. Physical dual SIM. Boxed."
  },
  {
    "id": "iphone-11-pro-max",
    "slug": "iphone-11-pro-max",
    "brand": "Apple",
    "name": "iPhone 11 Pro Max",
    "category": "phones",
    "price": 200,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone11ProMax.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone11ProMax.jpeg"
    ],
    "shortDescription": "64GB storage. Face ID not working. Clean condition.",
    "specifications": {
      "storage": "64GB",
      "faceId": "Not working"
    },
    "storage": "64GB",
    "conditionInfo": "Clean; Face ID not working",
    "highlights": [
      "64GB storage",
      "Face ID not working",
      "Clean condition"
    ],
    "description": "64GB storage. Face ID not working. Clean condition."
  },
  {
    "id": "iphone-11-pro-max-boxed",
    "slug": "iphone-11-pro-max-boxed",
    "brand": "Apple",
    "name": "iPhone 11 Pro Max (Boxed)",
    "category": "phones",
    "price": 400,
    "boxed": true,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone11ProMax_Boxed.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone11ProMax_Boxed.jpeg"
    ],
    "shortDescription": "256GB storage. Boxed. White.",
    "highlights": [
      "256GB storage",
      "Boxed",
      "White"
    ],
    "specifications": {
      "storage": "256GB",
      "colour": "White"
    },
    "storage": "256GB",
    "colour": "White",
    "description": "256GB storage. Boxed. White."
  },
  {
    "id": "iphone-12-pro-max",
    "slug": "iphone-12-pro-max",
    "brand": "Apple",
    "name": "iPhone 12 Pro Max",
    "category": "phones",
    "price": 370,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone12ProMax.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone12ProMax.jpeg"
    ],
    "shortDescription": "256GB storage. Clean condition. Face ID working.",
    "specifications": {
      "storage": "256GB",
      "faceId": "Working"
    },
    "storage": "256GB",
    "conditionInfo": "Clean",
    "description": "256GB storage. Clean condition. Face ID working.",
    "highlights": [
      "256GB storage",
      "Face ID working",
      "Clean condition"
    ]
  },
  {
    "id": "samsung-a04e",
    "slug": "samsung-a04e",
    "brand": "Samsung",
    "name": "Samsung Galaxy A04e",
    "category": "phones",
    "price": 80,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/Samsung/Samsung A04e.jpeg",
    "images": [
      "assets/products/phones/Samsung/Samsung A04e.jpeg"
    ],
    "shortDescription": "32GB storage. Clean condition. Fully functional.",
    "specifications": {
      "storage": "32GB",
      "functionality": "Fully functional"
    },
    "storage": "32GB",
    "conditionInfo": "Clean",
    "highlights": [
      "32GB storage",
      "Clean condition",
      "Fully functional"
    ],
    "description": "32GB storage. Clean condition. Fully functional."
  },
  {
    "id": "samsung-a07",
    "slug": "samsung-a07",
    "brand": "Samsung",
    "name": "Samsung Galaxy A07",
    "category": "phones",
    "price": 150,
    "boxed": true,
    "featured": false,
    "image": "assets/products/phones/Samsung/Samsung A07.jpeg",
    "images": [
      "assets/products/phones/Samsung/Samsung A07.jpeg"
    ],
    "shortDescription": "128GB storage. Boxed and sealed.",
    "specifications": {
      "storage": "128GB",
      "packaging": "Boxed and sealed"
    },
    "storage": "128GB",
    "sealed": true,
    "highlights": [
      "128GB storage",
      "Boxed and sealed"
    ],
    "description": "128GB storage. Boxed and sealed."
  },
  {
    "id": "samsung-a14",
    "slug": "samsung-a14",
    "brand": "Samsung",
    "name": "Samsung Galaxy A14",
    "category": "phones",
    "price": 100,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/Samsung/Samsung A14.jpeg",
    "images": [
      "assets/products/phones/Samsung/Samsung A14.jpeg"
    ],
    "shortDescription": "128GB storage. Side fingerprint. Choice of 2. Clean condition. $100 each.",
    "specifications": {
      "storage": "128GB",
      "fingerprint": "Side fingerprint",
      "selection": "Choice of 2"
    },
    "storage": "128GB",
    "conditionInfo": "Clean",
    "highlights": [
      "128GB storage",
      "Side fingerprint",
      "Choice of 2",
      "Clean condition",
      "$100 each"
    ],
    "description": "128GB storage. Side fingerprint. Choice of 2. Clean condition. $100 each."
  },
  {
    "id": "iphone-13-boxed",
    "slug": "iphone-13-boxed",
    "brand": "Apple",
    "name": "iPhone 13 (Boxed)",
    "category": "phones",
    "price": 480,
    "boxed": true,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone13_Boxed.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone13_Boxed.jpeg"
    ],
    "shortDescription": "128GB storage. White. Boxed.",
    "highlights": [
      "128GB storage",
      "White",
      "Boxed"
    ],
    "specifications": {
      "storage": "128GB",
      "colour": "White"
    },
    "storage": "128GB",
    "colour": "White",
    "description": "128GB storage. White. Boxed."
  },
  {
    "id": "iphone-13-pro-max",
    "slug": "iphone-13-pro-max",
    "brand": "Apple",
    "name": "iPhone 13 Pro Max",
    "category": "phones",
    "price": 500,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone13ProMax.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone13ProMax.jpeg"
    ],
    "shortDescription": "128GB storage. 88% battery health. Face ID working. Clean condition.",
    "specifications": {
      "storage": "128GB",
      "batteryHealth": "88%",
      "faceId": "Working"
    },
    "storage": "128GB",
    "conditionInfo": "Clean",
    "highlights": [
      "128GB storage",
      "88% battery health",
      "Face ID working",
      "Clean condition"
    ],
    "description": "128GB storage. 88% battery health. Face ID working. Clean condition."
  },
  {
    "id": "iphone-13-pro-max-boxed",
    "slug": "iphone-13-pro-max-boxed",
    "brand": "Apple",
    "name": "iPhone 13 Pro Max (Boxed)",
    "category": "phones",
    "price": 570,
    "boxed": true,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone13ProMax_Boxed.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone13ProMax_Boxed.jpeg"
    ],
    "shortDescription": "128GB storage. Boxed.",
    "highlights": [
      "128GB storage",
      "Boxed"
    ],
    "specifications": {
      "storage": "128GB"
    },
    "storage": "128GB",
    "description": "128GB storage. Boxed."
  },
  {
    "id": "iphone-14-plus",
    "slug": "iphone-14-plus",
    "brand": "Apple",
    "name": "iPhone 14 Plus",
    "category": "phones",
    "price": 550,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone14Plus.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone14Plus.jpeg",
      "assets/products/phones/iphones/iphone14Plus_2.jpeg"
    ],
    "shortDescription": "128GB storage. Clean condition. Face ID working. iOS-to-iOS swaps accepted.",
    "specifications": {
      "storage": "128GB",
      "faceId": "Working",
      "swaps": "iOS-to-iOS swaps accepted"
    },
    "storage": "128GB",
    "conditionInfo": "Clean",
    "description": "128GB storage. Clean condition. Face ID working. iOS-to-iOS swaps accepted.",
    "highlights": [
      "128GB storage",
      "Face ID working",
      "Clean condition",
      "iOS-to-iOS swaps accepted"
    ]
  },
  {
    "id": "iphone-14-pro-max",
    "slug": "iphone-14-pro-max",
    "brand": "Apple",
    "name": "iPhone 14 Pro Max",
    "category": "phones",
    "price": 600,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone14ProMax.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone14ProMax.jpeg",
      "assets/products/phones/iphones/iphone14ProMax_2.jpeg"
    ],
    "shortDescription": "128GB storage. Clean condition. Face ID working. 100% battery health. Physical dual SIM.",
    "specifications": {
      "storage": "128GB",
      "faceId": "Working",
      "batteryHealth": "100%",
      "sim": "Physical dual SIM"
    },
    "storage": "128GB",
    "conditionInfo": "Clean",
    "description": "128GB storage. Clean condition. Face ID working. 100% battery health. Physical dual SIM.",
    "highlights": [
      "128GB storage",
      "Face ID working",
      "100% battery health",
      "Physical dual SIM",
      "Clean condition"
    ]
  },
  {
    "id": "iphone-14-pro-max-boxed",
    "slug": "iphone-14-pro-max-boxed",
    "brand": "Apple",
    "name": "iPhone 14 Pro Max (Boxed)",
    "category": "phones",
    "price": 700,
    "boxed": true,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone14ProMax_Boxed.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone14ProMax_Boxed.jpeg"
    ],
    "shortDescription": "128GB storage. Deep Purple. Boxed.",
    "highlights": [
      "128GB storage",
      "Deep Purple",
      "Boxed"
    ],
    "specifications": {
      "storage": "128GB",
      "colour": "Deep Purple"
    },
    "storage": "128GB",
    "colour": "Deep Purple",
    "description": "128GB storage. Deep Purple. Boxed."
  },
  {
    "id": "iphone-15",
    "slug": "iphone-15",
    "brand": "Apple",
    "name": "iPhone 15",
    "category": "phones",
    "price": 650,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone15.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone15.jpeg"
    ],
    "shortDescription": "128GB storage. 89% battery health. Face ID working. Clean condition. ICASA approved. Physical dual SIM.",
    "specifications": {
      "storage": "128GB",
      "batteryHealth": "89%",
      "faceId": "Working",
      "approval": "ICASA approved",
      "sim": "Physical dual SIM"
    },
    "storage": "128GB",
    "conditionInfo": "Clean",
    "highlights": [
      "128GB storage",
      "89% battery health",
      "Face ID working",
      "Clean condition",
      "ICASA approved",
      "Physical dual SIM"
    ],
    "description": "128GB storage. 89% battery health. Face ID working. Clean condition. ICASA approved. Physical dual SIM."
  },
  {
    "id": "iphone-15-boxed",
    "slug": "iphone-15-boxed",
    "brand": "Apple",
    "name": "iPhone 15 (Boxed)",
    "category": "phones",
    "price": 700,
    "boxed": true,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone15_Boxed.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone15_Boxed.jpeg"
    ],
    "shortDescription": "128GB storage. Blue. Boxed.",
    "highlights": [
      "128GB storage",
      "Blue",
      "Boxed"
    ],
    "specifications": {
      "storage": "128GB",
      "colour": "Blue"
    },
    "storage": "128GB",
    "colour": "Blue",
    "description": "128GB storage. Blue. Boxed."
  },
  {
    "id": "iphone-15-pro-max",
    "slug": "iphone-15-pro-max",
    "brand": "Apple",
    "name": "iPhone 15 Pro Max",
    "category": "phones",
    "price": 800,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone15ProMax.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone15ProMax.jpeg"
    ],
    "shortDescription": "256GB storage. 85% battery health. Clean condition. Face ID working. ICASA approved.",
    "specifications": {
      "storage": "256GB",
      "batteryHealth": "85%",
      "faceId": "Working",
      "approval": "ICASA approved"
    },
    "storage": "256GB",
    "conditionInfo": "Clean",
    "highlights": [
      "256GB storage",
      "85% battery health",
      "Clean condition",
      "Face ID working",
      "ICASA approved"
    ],
    "description": "256GB storage. 85% battery health. Clean condition. Face ID working. ICASA approved."
  },
  {
    "id": "iphone-16",
    "slug": "iphone-16",
    "brand": "Apple",
    "name": "iPhone 16",
    "category": "phones",
    "price": 800,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone16.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone16.jpeg"
    ],
    "shortDescription": "128GB storage. Face ID working. Clean condition. 88% battery health. ICASA approved.",
    "specifications": {
      "storage": "128GB",
      "faceId": "Working",
      "batteryHealth": "88%",
      "approval": "ICASA approved"
    },
    "storage": "128GB",
    "conditionInfo": "Clean",
    "highlights": [
      "128GB storage",
      "Face ID working",
      "Clean condition",
      "88% battery health",
      "ICASA approved"
    ],
    "description": "128GB storage. Face ID working. Clean condition. 88% battery health. ICASA approved."
  },
  {
    "id": "iphone-16-plus",
    "slug": "iphone-16-plus",
    "brand": "Apple",
    "name": "iPhone 16 Plus",
    "category": "phones",
    "price": 850,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/iphones/iphone16Plus.jpeg",
    "images": [
      "assets/products/phones/iphones/iphone16Plus.jpeg"
    ],
    "shortDescription": "128GB storage. 94% battery health. ICASA approved. Face ID working. Clean condition. Black.",
    "specifications": {
      "storage": "128GB",
      "colour": "Black",
      "batteryHealth": "94%",
      "approval": "ICASA approved",
      "faceId": "Working"
    },
    "storage": "128GB",
    "colour": "Black",
    "conditionInfo": "Clean",
    "highlights": [
      "128GB storage",
      "94% battery health",
      "ICASA approved",
      "Face ID working",
      "Clean condition",
      "Black"
    ],
    "description": "128GB storage. 94% battery health. ICASA approved. Face ID working. Clean condition. Black."
  },
  {
    "id": "samsung-a16",
    "slug": "samsung-a16",
    "brand": "Samsung",
    "name": "Samsung Galaxy A16",
    "category": "phones",
    "price": 150,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/Samsung/Samsung A16.jpeg",
    "images": [
      "assets/products/phones/Samsung/Samsung A16.jpeg"
    ],
    "shortDescription": "128GB storage. Clean condition.",
    "specifications": {
      "storage": "128GB"
    },
    "storage": "128GB",
    "conditionInfo": "Clean",
    "highlights": [
      "128GB storage",
      "Clean condition"
    ],
    "description": "128GB storage. Clean condition."
  },
  {
    "id": "samsung-a33-5g",
    "slug": "samsung-a33-5g",
    "brand": "Samsung",
    "name": "Samsung Galaxy A33 5G",
    "category": "phones",
    "price": 150,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/Samsung/Samsung A33 5G.jpeg",
    "images": [
      "assets/products/phones/Samsung/Samsung A33 5G.jpeg"
    ],
    "shortDescription": "128GB storage. On-screen fingerprint. 6GB RAM. Clean condition. Swaps accepted.",
    "specifications": {
      "storage": "128GB",
      "fingerprint": "On-screen fingerprint",
      "ram": "6GB",
      "swaps": "Swaps accepted"
    },
    "storage": "128GB",
    "conditionInfo": "Clean",
    "highlights": [
      "128GB storage",
      "On-screen fingerprint",
      "6GB RAM",
      "Clean condition",
      "Swaps accepted"
    ],
    "description": "128GB storage. On-screen fingerprint. 6GB RAM. Clean condition. Swaps accepted."
  },
  {
    "id": "samsung-a56-5g",
    "slug": "samsung-a56-5g",
    "brand": "Samsung",
    "name": "Samsung Galaxy A56 5G",
    "category": "phones",
    "price": 300,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/Samsung/Samsung A56 5G.jpeg",
    "images": [
      "assets/products/phones/Samsung/Samsung A56 5G.jpeg"
    ],
    "shortDescription": "256GB storage. On-screen fingerprint. Cleanest condition. 8GB RAM. ICASA approved. Physical dual SIM.",
    "specifications": {
      "storage": "256GB",
      "fingerprint": "On-screen fingerprint",
      "ram": "8GB",
      "approval": "ICASA approved",
      "sim": "Physical dual SIM"
    },
    "storage": "256GB",
    "conditionInfo": "Cleanest",
    "highlights": [
      "256GB storage",
      "On-screen fingerprint",
      "Cleanest condition",
      "8GB RAM",
      "ICASA approved",
      "Physical dual SIM"
    ],
    "description": "256GB storage. On-screen fingerprint. Cleanest condition. 8GB RAM. ICASA approved. Physical dual SIM."
  },
  {
    "id": "samsung-s20-fe-5g",
    "slug": "samsung-s20-fe-5g",
    "brand": "Samsung",
    "name": "Samsung Galaxy S20 FE 5G",
    "category": "phones",
    "price": 170,
    "boxed": false,
    "featured": false,
    "image": "assets/products/phones/Samsung/Samsung S20FE 5G.jpeg",
    "images": [
      "assets/products/phones/Samsung/Samsung S20FE 5G.jpeg",
      "assets/products/phones/Samsung/Samsung S20FE 5G_2.jpeg"
    ],
    "shortDescription": "128GB storage. Clean condition. New, no box. Dual SIM.",
    "specifications": {
      "storage": "128GB",
      "sim": "Dual SIM"
    },
    "storage": "128GB",
    "condition": "New",
    "conditionInfo": "Clean",
    "highlights": [
      "128GB storage",
      "Clean condition",
      "New, no box",
      "Dual SIM"
    ],
    "description": "128GB storage. Clean condition. New, no box. Dual SIM."
  },
  {
    "id": "samsung-s20-plus",
    "slug": "samsung-s20-plus",
    "brand": "Samsung",
    "name": "Samsung Galaxy S20 Plus",
    "category": "phones",
    "price": 200,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/Samsung/Samsung S20 Plus.jpeg",
    "images": [
      "assets/products/phones/Samsung/Samsung S20 Plus.jpeg"
    ],
    "shortDescription": "128GB storage. On-screen fingerprint. Full screen. Clean condition. 12GB RAM.",
    "specifications": {
      "storage": "128GB",
      "fingerprint": "On-screen fingerprint",
      "display": "Full screen",
      "ram": "12GB"
    },
    "storage": "128GB",
    "conditionInfo": "Clean",
    "highlights": [
      "128GB storage",
      "On-screen fingerprint",
      "Full screen",
      "Clean condition",
      "12GB RAM"
    ],
    "description": "128GB storage. On-screen fingerprint. Full screen. Clean condition. 12GB RAM."
  },
  {
    "id": "samsung-s21-ultra",
    "slug": "samsung-s21-ultra",
    "brand": "Samsung",
    "name": "Samsung Galaxy S21 Ultra",
    "category": "phones",
    "price": 200,
    "boxed": null,
    "featured": false,
    "image": "assets/products/phones/Samsung/SamsungS21 Ultra.jpeg",
    "images": [
      "assets/products/phones/Samsung/SamsungS21 Ultra.jpeg"
    ],
    "shortDescription": "256GB storage. On-screen fingerprint. 12GB RAM. Clean condition. Small blot on screen.",
    "specifications": {
      "storage": "256GB",
      "ram": "12GB",
      "fingerprint": "On-screen fingerprint",
      "screenCondition": "Small blot on screen"
    },
    "storage": "256GB",
    "conditionInfo": "Clean; small blot on screen",
    "highlights": [
      "256GB storage",
      "On-screen fingerprint",
      "12GB RAM",
      "Clean condition",
      "Small blot on screen"
    ],
    "description": "256GB storage. On-screen fingerprint. 12GB RAM. Clean condition. Small blot on screen."
  },
  {
    "id": "phone-lanyard-straps",
    "slug": "phone-lanyard-straps",
    "name": "Phone Lanyard Straps",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "image": "assets/products/accessories/Accessory1.jpeg",
    "images": [
      "assets/products/accessories/Accessory1.jpeg"
    ],
    "description": "Phone carrying straps. Ask about colours and compatibility.",
    "shortDescription": "Phone carrying straps. Ask about colours and compatibility.",
    "specifications": {}
  },
  {
    "id": "phone-case-lanyard",
    "slug": "phone-case-lanyard",
    "name": "Phone Case with Lanyard",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "image": "assets/products/accessories/Accessory2.jpeg",
    "images": [
      "assets/products/accessories/Accessory2.jpeg"
    ],
    "description": "Phone case with a carrying strap. Confirm the correct case for your phone model.",
    "shortDescription": "Phone case with a carrying strap. Confirm the correct case for your phone model.",
    "specifications": {}
  },
  {
    "id": "usb-charging-hub",
    "slug": "usb-charging-hub",
    "name": "Multi-port USB Charging Hub",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "image": "assets/products/accessories/Accessory3.jpeg",
    "images": [
      "assets/products/accessories/Accessory3.jpeg"
    ],
    "description": "USB charging hub. Ask about supported devices and charging specifications.",
    "shortDescription": "USB charging hub. Ask about supported devices and charging specifications.",
    "specifications": {}
  },
  {
    "id": "magnetic-wireless-charger",
    "slug": "magnetic-wireless-charger",
    "name": "Magnetic Wireless Charger",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "image": "assets/products/accessories/Accessory4.jpeg",
    "images": [
      "assets/products/accessories/Accessory4.jpeg"
    ],
    "description": "Magnetic wireless charging pad. Confirm compatibility with your device.",
    "shortDescription": "Magnetic wireless charging pad. Confirm compatibility with your device.",
    "specifications": {}
  },
  {
    "id": "speaker-charging-stand",
    "slug": "speaker-charging-stand",
    "name": "Speaker with Light and Charging Stand",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "image": "assets/products/accessories/Accessory5.jpeg",
    "images": [
      "assets/products/accessories/Accessory5.jpeg"
    ],
    "description": "Speaker with a light and phone charging stand. Ask about features and compatibility.",
    "shortDescription": "Speaker with a light and phone charging stand. Ask about features and compatibility.",
    "specifications": {}
  },
  {
    "id": "usb-c-earphones",
    "slug": "usb-c-earphones",
    "name": "USB-C Wired Earphones",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "image": "assets/products/accessories/Accessory6.jpeg",
    "images": [
      "assets/products/accessories/Accessory6.jpeg"
    ],
    "description": "Wired earphones with a USB-C connector. Confirm compatibility with your device.",
    "shortDescription": "Wired earphones with a USB-C connector. Confirm compatibility with your device.",
    "specifications": {}
  },
  {
    "id": "wireless-earbuds-case",
    "slug": "wireless-earbuds-case",
    "name": "Wireless Earbuds with Charging Case",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "image": "assets/products/accessories/Accessory7.jpeg",
    "images": [
      "assets/products/accessories/Accessory7.jpeg"
    ],
    "description": "Wireless earbuds with a charging case. Ask about the exact model and features.",
    "shortDescription": "Wireless earbuds with a charging case. Ask about the exact model and features.",
    "specifications": {}
  },
  {
    "id": "smart-glasses",
    "slug": "smart-glasses",
    "name": "Smart Glasses",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "image": "assets/products/accessories/Accessory8.jpeg",
    "images": [
      "assets/products/accessories/Accessory8.jpeg"
    ],
    "description": "Smart glasses. Ask about the exact model, features and compatibility.",
    "shortDescription": "Smart glasses. Ask about the exact model, features and compatibility.",
    "specifications": {}
  }
];

export const repairs = [
  "Screen & LCD replacement",
  "Charging port repair",
  "Back glass replacement",
  "Battery replacement",
  "Software & diagnostics",
  "Other device repairs"
];
