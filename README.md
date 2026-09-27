# Tyler's Gadgets

Electronics catalogue and repair website for Victoria Falls, Zimbabwe, built with HTML, CSS and browser-native JavaScript modules. Purchases, repairs, trade-ins and delivery enquiries continue through WhatsApp. No framework, database, accounts, shopping cart or checkout.

## Preview and checks

- Run `npm start`, then open http://localhost:3000.
- If PowerShell blocks npm.ps1, use `npm.cmd start` or `node scripts/serve.mjs`.
- Run `npm.cmd test` for automated catalogue, pricing, stock-action, enquiry, rendering and syntax checks.
- Run `npm.cmd run seo` after changing business metadata or the public site URL.
- Stop the local preview with Ctrl+C. This dependency-free development server binds to the local machine only.

## Editing guide

| Content | File |
| --- | --- |
| Confirmed business/contact details, USD currency, payments, hours, delivery rules | data/site-config.js |
| Products, confirmed USD prices, stock, conditions, repair services | data/products.js |
| Photography, gallery content, FAQ | data/content.js |
| Owner-supplied warranty, returns, delivery, privacy and terms | data/policies.js |
| Shared theme tokens and responsive components | src/core/styles.css |
| Page-specific content and styling | src/pages/ |
| Currency and centralised WhatsApp helpers | src/core/format.js |
| Stock labels, category image fallbacks and condition definitions | src/core/products.js |

The confirmed location is Moringa Sun El Hardware, Victoria Falls. Current payments are Cash and EcoCash. Update paymentMethods in site-config.js to add another supported payment method when confirmed.

## USD prices need manual entry

Every existing product has `price: null` and `priceStatus: "awaiting-usd-confirmation"`. Customers see **Contact for Price**, and WhatsApp messages ask for the current USD price. No previous ZAR amount is displayed as USD or automatically converted.

`legacyPrice` preserves the original ZAR price for source reference only. When a USD price is confirmed, enter it as a numeric `price` and remove the awaiting-confirmation marker. Only set `oldPrice` if a genuine prior USD price is confirmed. Do not copy legacyPrice into price.

Unknown prices sort after confirmed prices in both price-sort directions. Decimal USD prices are supported.

## Product data

Keep `id` and `slug` stable so existing links continue working. Add another object to the products array using an existing object as a guide.

- category: phones, laptops or accessories.
- condition: New, Used or Refurbished.
- conditionInfo: optional detailed grade; original Excellent / Like new grades are retained.
- boxed: true, false, or null when unconfirmed. Boxed never implies New.
- availability: in-stock, low-stock, sold or coming-soon.
- image: primary image; images: array of additional photo URLs. Duplicate URLs are removed, and thumbnails appear only when multiple images exist.
- featured: includes the device in homepage featured products.
- dateAdded: optional ISO date for Newest sorting. Legacy addedAt is still supported.
- Optional: storage, colour, model, shortDescription, specifications (label/value object; legacy arrays are also supported), whatsIncluded (array), warrantyInfo.

Only enter confirmed information. Missing specifications, included items or product warranty information do not create empty or invented sections. A link to the general Warranty Policy remains available.

Stock actions:

| Status | Primary action |
| --- | --- |
| In Stock | Order on WhatsApp |
| Low Stock | Check Availability |
| Sold | Disabled Sold button, with Ask About Similar Devices |
| Coming Soon | Ask About Availability |

Sold products remain visible and cannot generate a normal order message. Availability filters include all four states.

## Routes and policies

Existing routes remain: #home, #gadgets, #shop, #phones, #laptops, #accessories, #repairs, #gallery, #about, #contact, #delivery and #product/iphone-13.

New customer-information routes: #warranty, #returns, #delivery-policy, #privacy and #terms. The existing #delivery link still reaches the homepage delivery section.

Policy copy follows the supplied business brief. Product-specific warranty periods and Sunday delivery fees remain unconfirmed and are not invented.

## Photos, SEO and privacy

Unsplash photographs are development imagery. Replace them with accurate business and product photographs before launch. Category-specific local fallbacks handle missing or failed images. FAQ and all policy/business wording remain editable.

Set siteUrl to the confirmed public homepage URL, then run `npm.cmd run seo`. The script refreshes static social metadata and robots.txt and generates the canonical tag and sitemap. Without a confirmed domain, no domain or sitemap is invented. Since hash views share one document, the sitemap lists only the homepage. Social crawlers that do not run JavaScript see the shared static preview rather than a separate product preview.

The repair selector only prepares a WhatsApp link. No form submission is stored by this website. WhatsApp and external image providers have their own practices, explained in the Privacy Policy.

Testimonials remain hidden until genuine feedback is supplied in siteConfig.testimonials as { name, quote }. No invented ratings or reviews are published.

## Verification status

Automated checks cover the confirmed business settings, price safety, combined search/filters, missing-price sorting, every availability CTA, message encoding, absent optional data, policy content, route links, local assets and JavaScript syntax.

The browser connector was unavailable during implementation, so browser console checks, photo appearance and visual/interactions testing at 320, 375, 430, 768, 1024 and 1440 pixels remain pending. Verify navigation, keyboard focus, responsive layouts, filtering, thumbnails, lightbox, FAQs and the final WhatsApp message before publishing.

## Product detail galleries

Each product currently has a lead photo and three generic vector illustration placeholders. Replace the image URLs in data/products.js with real product photographs. One image works without a thumbnail row; two or more images enable scrolling thumbnails and an enlarged viewer with keyboard controls.

The primary price appears once, at the top-left of the main image. Technical specifications are rendered from non-empty object fields in a responsive definition grid. Existing specifications, condition grades and stock/WhatsApp behaviour are preserved.
