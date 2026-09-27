# Source structure

Browser-native JavaScript with hash navigation; no build step is required.

- core/router.js: existing routes, customer policy routes, metadata and mobile menu.
- core/ui.js: header, footer, product cards, condition/availability badges, actions and payment labels.
- core/format.js: escaping, USD formatting and reusable WhatsApp enquiry helpers.
- core/products.js: stock definitions, missing-price handling, condition descriptions and image fallbacks.
- core/styles.css: design tokens and shared responsive components.
- pages/home/: homepage, delivery, trade-in, FAQ and contact.
- pages/catalog/: combined search, category, condition, availability and sort controls.
- pages/product/: optional product information, gallery and stock-aware order actions.
- pages/repairs/: services, repair journey and optional message-preparation form.
- pages/gallery/: filtered image grid and native-dialog lightbox.
- pages/about/: business story, services and approach.
- pages/policies/: shared renderer and responsive reading layout for five customer policies.

Business settings live in ../data/site-config.js; source product data in ../data/products.js; imagery and FAQ in ../data/content.js; supplied policy copy in ../data/policies.js.

Missing prices must remain null until the owner provides USD prices. The historical ZAR amounts are source-only reference data.
