// Confirmed business details. Edit this file to update every page and enquiry.
export const siteConfig = {
  name: "Tyler's Gadgets",
  country: "Zimbabwe",
  serviceArea: "Victoria Falls",
  location: "Moringa Sun El Hardware",
  whatsapp: "263789652298",
  displayWhatsapp: "+263 789 652 298",
  phone: "+263 789 652 298",
  email: "siphomoyo893@gmail.com",
  openingHours: { days: "Monday–Saturday", time: "08:00–21:00" },
  currency: "USD",
  currencyName: "United States Dollars",
  locale: "en-US",
  paymentMethods: ["Cash", "EcoCash"],
  delivery: {
    weekdayDays: "Monday–Saturday",
    weekdayDelivery: "Free delivery {days} where applicable within the normal {serviceArea} service area.",
    sundayDelivery: "Sunday delivery is available at an additional fee.",
    sundayFee: "Confirm the exact Sunday delivery charge on WhatsApp before delivery."
  },
  logo: "assets/branding/tylers-gadgets-logo.jpeg",
  get announcement() { return `Quality Gadgets • Device Repairs • ${this.serviceArea} Delivery`; },
  get address() { return `${this.location}, ${this.serviceArea}, ${this.country}`; },
  get hours() { return `${this.openingHours.days}: ${this.openingHours.time}`; },
  get weekdayDeliveryInfo() {
    return this.delivery.weekdayDelivery.replace("{days}", this.delivery.weekdayDays).replace("{serviceArea}", this.serviceArea);
  },
  get deliveryInfo() {
    return `${this.weekdayDeliveryInfo} ${this.delivery.sundayDelivery} ${this.delivery.sundayFee}`;
  },
  // Add the confirmed public homepage URL before generating a sitemap.
  siteUrl: "",
  socialLinks: [],
  // No per-device warranty period has been confirmed.
  warrantyInfo: "",
  testimonials: []
};
