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
    "image": "assets/products/laptops/macbook-air-reference.jpg",
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
      "assets/products/laptops/macbook-air-reference.jpg"
    ],
    "shortDescription": "Slim, silent and seriously capable for study, work and creative projects.",
    "storage": "256GB SSD",
    "legacyPrice": {
      "amount": 14999,
      "currency": "ZAR"
    },
    "priceStatus": "awaiting-usd-confirmation",
    "referencePhoto": true,
    "imageNote": "Reference MacBook photograph only; the model, generation and condition pictured may differ from the listed device. Ask for current photographs before purchasing.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/person-using-a-macbook-air-4974913/",
      "author": "olia danilevich",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "thinkpad-e14",
    "name": "Lenovo ThinkPad E14",
    "brand": "Lenovo",
    "category": "laptops",
    "price": null,
    "image": "assets/products/laptops/thinkpad-e14-reference.jpg",
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
      "assets/products/laptops/thinkpad-e14-reference.jpg"
    ],
    "shortDescription": "A business-ready laptop built for reliable all-day productivity.",
    "storage": "512GB SSD",
    "legacyPrice": {
      "amount": 10499,
      "currency": "ZAR"
    },
    "priceStatus": "awaiting-usd-confirmation",
    "referencePhoto": true,
    "imageNote": "Reference ThinkPad E14 Gen 7 photograph; the generation and condition may differ from the listed device. Ask for current photographs before purchasing.",
    "imageSource": {
      "provider": "Wikimedia Commons",
      "url": "https://commons.wikimedia.org/wiki/File:Lenovo_ThinkPad_E14_G7_14_WUXGA.jpg",
      "author": "Rakoon",
      "license": "CC0 1.0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
    }
  },
  {
    "id": "powerbank",
    "name": "20,000mAh Power Bank",
    "brand": "Volt",
    "category": "accessories",
    "price": null,
    "image": "assets/products/accessories/power-bank-reference.jpg",
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
      "assets/products/accessories/power-bank-reference.jpg"
    ],
    "shortDescription": "Keep your essential devices charged when you are on the move.",
    "legacyPrice": {
      "amount": 699,
      "currency": "ZAR"
    },
    "priceStatus": "awaiting-usd-confirmation",
    "referencePhoto": true,
    "imageNote": "Reference photograph only; the brand, model and features pictured may differ from the listed product. Ask for current photographs before purchasing.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/overhead-shot-of-a-cellphone-charging-from-a-power-bank-5208777/",
      "author": "Kaboompics",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "buds",
    "name": "Wireless Earbuds",
    "brand": "SoundGo",
    "category": "accessories",
    "price": null,
    "image": "assets/products/accessories/wireless-earbuds-reference.jpg",
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
      "assets/products/accessories/wireless-earbuds-reference.jpg"
    ],
    "shortDescription": "Comfortable wireless listening with a compact charging case.",
    "legacyPrice": {
      "amount": 549,
      "currency": "ZAR"
    },
    "priceStatus": "awaiting-usd-confirmation",
    "referencePhoto": true,
    "imageNote": "Reference photograph only; the brand, model and features pictured may differ from the listed product. Ask for current photographs before purchasing.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/minimalist-black-wireless-earbuds-on-white-background-33298189/",
      "author": "Puru Raj",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
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
  },
  {
    "id": "everyday-laptop",
    "slug": "everyday-laptop",
    "name": "Everyday Laptop",
    "category": "laptops",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/laptops/everyday-laptop-reference.jpg",
    "images": [
      "assets/products/laptops/everyday-laptop-reference.jpg"
    ],
    "description": "Reference listing with illustrative photography. Confirm the actual brand, model, specifications, condition, price and availability with us before arranging a purchase.",
    "shortDescription": "Reference listing. Product details and availability to confirm.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. This image does not confirm the exact product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/silver-laptop-computer-on-table-291777/",
      "author": "AS Photography",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "work-study-laptop",
    "slug": "work-study-laptop",
    "name": "Work & Study Laptop",
    "category": "laptops",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/laptops/work-study-laptop-reference.jpg",
    "images": [
      "assets/products/laptops/work-study-laptop-reference.jpg"
    ],
    "description": "Reference listing with illustrative photography. Confirm the actual brand, model, specifications, condition, price and availability with us before arranging a purchase.",
    "shortDescription": "Reference listing. Product details and availability to confirm.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. This image does not confirm the exact product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/black-laptop-computer-and-wireless-mouse-on-table-2861984/",
      "author": "Adam Sondel",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "wireless-mouse",
    "slug": "wireless-mouse",
    "name": "Wireless Mouse",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/wireless-mouse-reference.jpg",
    "images": [
      "assets/products/accessories/wireless-mouse-reference.jpg"
    ],
    "description": "Reference listing with illustrative photography. Confirm the actual brand, model, specifications, condition, price and availability with us before arranging a purchase.",
    "shortDescription": "Reference listing. Product details and availability to confirm.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. This image does not confirm the exact product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/photograph-of-a-black-wireless-mouse-13870516/",
      "author": "Matheus Bertelli",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "computer-keyboard",
    "slug": "computer-keyboard",
    "name": "Computer Keyboard",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/computer-keyboard-reference.jpg",
    "images": [
      "assets/products/accessories/computer-keyboard-reference.jpg"
    ],
    "description": "Reference listing with illustrative photography. Confirm the actual brand, model, specifications, condition, price and availability with us before arranging a purchase.",
    "shortDescription": "Reference listing. Product details and availability to confirm.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. This image does not confirm the exact product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/a-black-computer-keyboard-on-white-background-20510020/",
      "author": "Matheus Bertelli",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "over-ear-headphones",
    "slug": "over-ear-headphones",
    "name": "Over-Ear Headphones",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/over-ear-headphones-reference.jpg",
    "images": [
      "assets/products/accessories/over-ear-headphones-reference.jpg"
    ],
    "description": "Reference listing with illustrative photography. Confirm the actual brand, model, specifications, condition, price and availability with us before arranging a purchase.",
    "shortDescription": "Reference listing. Product details and availability to confirm.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. This image does not confirm the exact product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/black-headphones-on-a-desk-16303234/",
      "author": null,
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "portable-speaker",
    "slug": "portable-speaker",
    "name": "Portable Speaker",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/portable-speaker-reference.jpg",
    "images": [
      "assets/products/accessories/portable-speaker-reference.jpg"
    ],
    "description": "Reference listing with illustrative photography. Confirm the actual brand, model, specifications, condition, price and availability with us before arranging a purchase.",
    "shortDescription": "Reference listing. Product details and availability to confirm.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. This image does not confirm the exact product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/rectangular-black-speaker-on-white-wooden-surface-374753/",
      "author": null,
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "usb-wall-charger",
    "slug": "usb-wall-charger",
    "name": "USB Wall Charger Head",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/usb-wall-charger-reference.jpg",
    "images": [
      "assets/products/accessories/usb-wall-charger-reference.jpg"
    ],
    "description": "Looking for a replacement charger head for a phone or tablet? Ask us to match the wall plug, USB port and power requirements to your device. Confirm the actual model, charging output and whether a cable is included. Reference listing with illustrative photography. Confirm the actual product, condition, price and availability with us.",
    "shortDescription": "Replacement charger heads. Confirm the plug, port and charging output.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. The pictured brand, model, capacity, design and other items shown do not confirm the product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/white-adapter-on-a-blue-surface-4097207/",
      "author": "Markus Winkler",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "usb-charging-cable",
    "slug": "usb-charging-cable",
    "name": "USB Charging Cable",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/usb-charging-cable-reference.jpg",
    "images": [
      "assets/products/accessories/usb-charging-cable-reference.jpg"
    ],
    "description": "A replacement charging cord for everyday use. Tell us the device model and the connectors needed at both ends so we can confirm a suitable cable, its length and supported charging or data functions. Reference listing with illustrative photography. Confirm the actual product, condition, price and availability with us.",
    "shortDescription": "Everyday charging cords. Confirm both connectors and cable length.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. The pictured brand, model, capacity, design and other items shown do not confirm the product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/close-up-photo-of-white-usb-cable-914915/",
      "author": "Matthias Zomer",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "lightning-charging-cable",
    "slug": "lightning-charging-cable",
    "name": "Lightning Charging Cable",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/lightning-charging-cable-reference.jpg",
    "images": [
      "assets/products/accessories/lightning-charging-cable-reference.jpg"
    ],
    "description": "Looking for a Lightning charging cord for a compatible iPhone or iPad? Confirm your device model, the connector at the charger end, cable length and available options before purchasing. Reference listing with illustrative photography. Confirm the actual product, condition, price and availability with us.",
    "shortDescription": "Lightning cords for compatible devices. Confirm the charger-end connector.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. The pictured brand, model, capacity, design and other items shown do not confirm the product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/close-up-photography-of-white-iphone-charger-914912/",
      "author": "Matthias Zomer",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "usb-hub",
    "slug": "usb-hub",
    "name": "USB Hub",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/usb-hub-reference.jpg",
    "images": [
      "assets/products/accessories/usb-hub-reference.jpg"
    ],
    "description": "Connect more accessories to a compatible computer. Tell us your laptop model and the ports you need so we can confirm an appropriate hub, connection type and supported functions. Reference listing with illustrative photography. Confirm the actual product, condition, price and availability with us.",
    "shortDescription": "More connection options for your computer. Confirm ports and compatibility.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. The pictured brand, model, capacity, design and other items shown do not confirm the product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/a-usb-hub-plugged-into-a-laptop-7742586/",
      "author": "Rann Vijay",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "travel-plug-adapter",
    "slug": "travel-plug-adapter",
    "name": "Travel Plug Adapter",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/travel-plug-adapter-reference.jpg",
    "images": [
      "assets/products/accessories/travel-plug-adapter-reference.jpg"
    ],
    "description": "Planning a trip or connecting a device with a different plug? Ask us to check the destination socket and your device requirements. Confirm the adapter type and electrical ratings; do not assume an adapter converts voltage. Reference listing with illustrative photography. Confirm the actual product, condition, price and availability with us.",
    "shortDescription": "Plug adapters for travel. Confirm the destination socket and ratings.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. The pictured brand, model, capacity, design and other items shown do not confirm the product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/universal-plug-adapter-on-cluttered-surface-32688515/",
      "author": "Alexey Demidov",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "sd-memory-card",
    "slug": "sd-memory-card",
    "name": "SD Memory Card",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/sd-memory-card-reference.jpg",
    "images": [
      "assets/products/accessories/sd-memory-card-reference.jpg"
    ],
    "description": "Ask about removable storage for a compatible camera or device. Confirm the required card format, capacity, speed rating and device compatibility. The brand and capacity visible in the reference photo are illustrative. Reference listing with illustrative photography. Confirm the actual product, condition, price and availability with us.",
    "shortDescription": "Removable storage. Confirm format, capacity and device compatibility.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. The pictured brand, model, capacity, design and other items shown do not confirm the product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/128gb-lexar-micro-sd-card-adapter-1738642/",
      "author": "Luis Quintero",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "laptop-stand",
    "slug": "laptop-stand",
    "name": "Laptop Stand",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/laptop-stand-reference.jpg",
    "images": [
      "assets/products/accessories/laptop-stand-reference.jpg"
    ],
    "description": "Raise a laptop on your desk with a suitable stand. Ask us to confirm the available design, supported laptop size, adjustment options and materials. The laptop and other desk equipment in the reference photo are not part of this listing. Reference listing with illustrative photography. Confirm the actual product, condition, price and availability with us.",
    "shortDescription": "Desk support for your laptop. Confirm size and stand design.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. The pictured brand, model, capacity, design and other items shown do not confirm the product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/modern-laptop-placed-on-stand-on-desk-4792717/",
      "author": "Anete Lusina",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "car-phone-holder",
    "slug": "car-phone-holder",
    "name": "Car Phone Holder",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/car-phone-holder-reference.jpg",
    "images": [
      "assets/products/accessories/car-phone-holder-reference.jpg"
    ],
    "description": "Keep a compatible phone mounted in the car. Ask us to confirm the mounting style, phone and case fit, and any required mounting accessories before purchasing. The photographed design is illustrative. Reference listing with illustrative photography. Confirm the actual product, condition, price and availability with us.",
    "shortDescription": "Phone mounts for the car. Confirm mounting style and device fit.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. The pictured brand, model, capacity, design and other items shown do not confirm the product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/close-up-of-a-magnetic-phone-holder-13536013/",
      "author": "Abdulvahap Demir",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "phone-tripod",
    "slug": "phone-tripod",
    "name": "Phone Tripod",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/phone-tripod-reference.jpg",
    "images": [
      "assets/products/accessories/phone-tripod-reference.jpg"
    ],
    "description": "A phone support option for photos, video calls or creating content. Confirm the phone clamp size, tripod design, height and included parts. The phone pictured is for illustration only. Reference listing with illustrative photography. Confirm the actual product, condition, price and availability with us.",
    "shortDescription": "Support for phone photos and videos. Confirm clamp size and included parts.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. The pictured brand, model, capacity, design and other items shown do not confirm the product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/a-mobile-phone-on-black-tripod-13709180/",
      "author": "Amar Preciado",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "hdmi-cable",
    "slug": "hdmi-cable",
    "name": "HDMI Cable",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/hdmi-cable-reference.jpg",
    "images": [
      "assets/products/accessories/hdmi-cable-reference.jpg"
    ],
    "description": "Looking to connect compatible display equipment? Tell us the devices, required cable length and intended use so we can confirm connector types and supported display formats. Reference listing with illustrative photography. Confirm the actual product, condition, price and availability with us.",
    "shortDescription": "Display connection cables. Confirm connectors, length and supported formats.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. The pictured brand, model, capacity, design and other items shown do not confirm the product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/close-up-shot-of-an-hdmi-cable-12997230/",
      "author": "Srattha Nualsate",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "usb-flash-drive",
    "slug": "usb-flash-drive",
    "name": "USB Flash Drive",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/usb-flash-drive-reference.jpg",
    "images": [
      "assets/products/accessories/usb-flash-drive-reference.jpg"
    ],
    "description": "Portable storage for compatible computers and devices. Ask us to confirm the connector, capacity, brand and transfer specifications. The reference photo shows example designs, not a multi-item bundle. Reference listing with illustrative photography. Confirm the actual product, condition, price and availability with us.",
    "shortDescription": "Portable USB storage. Confirm connector type and capacity.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. The pictured brand, model, capacity, design and other items shown do not confirm the product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/usb-flash-drives-in-row-on-rough-surface-7442196/",
      "author": "Jonathan Borba",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
  },
  {
    "id": "portable-hard-drive",
    "slug": "portable-hard-drive",
    "name": "Portable Hard Drive",
    "category": "accessories",
    "price": null,
    "priceStatus": "awaiting-usd-confirmation",
    "boxed": null,
    "featured": false,
    "referenceOnly": true,
    "referencePhoto": true,
    "image": "assets/products/accessories/portable-hard-drive-reference.jpg",
    "images": [
      "assets/products/accessories/portable-hard-drive-reference.jpg"
    ],
    "description": "Ask about external storage for your files and backups. Confirm the actual drive type, capacity, connection, compatibility and included cable before purchasing. Reference listing with illustrative photography. Confirm the actual product, condition, price and availability with us.",
    "shortDescription": "External storage options. Confirm drive type, capacity and connection.",
    "specifications": {},
    "imageNote": "Illustrative reference photograph only. The pictured brand, model, capacity, design and other items shown do not confirm the product or available stock. Ask for current photographs and product details.",
    "imageSource": {
      "provider": "Pexels",
      "url": "https://www.pexels.com/photo/black-square-device-on-brown-wooden-table-3915760/",
      "author": "Andrea Piacquadio",
      "license": "Pexels License",
      "licenseUrl": "https://www.pexels.com/license/"
    }
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
