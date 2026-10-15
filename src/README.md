# Source structure

Browser-native JavaScript, shared data modules and static HTML generation. No frontend framework or runtime backend.

- core/router.js and urls.js: source hash routes, built direct paths, page metadata and responsive menu.
- core/ui.js and styles.css: shared header/footer, product cards, stock/condition actions and design tokens.
- core/selections.js: ID-only browser lists with bounded comparison/recent history and storage fallback.
- core/enquiries.js and contact-forms.js: prepared product, multi-product, repair and trade-in messages.
- core/promotions.js: verified dates/flags and genuine active discounts.
- core/seo.js: business/product structured data using known information.
- core/image-manifest.js: generated local responsive WebP references and dimensions.
- pages/catalog/: catalogue filtering, comparison and saved/enquiry dialogs.
- pages/product/: product details, gallery, optional information and related products.
- pages/home/: category/featured sections, conditional arrivals/offers, trade-in, delivery, FAQ and contact.
- pages/repairs/: existing services, enhanced enquiry and optional real repair examples.
- pages/gallery/: local image grid, category/brand filters and keyboard-operated lightbox.
- pages/about/: business introduction and services.
- pages/policies/: shared renderer for the five existing customer policies.

Business data remains in ../data/. Keep unconfirmed facts absent. `npm run build` generates the production HTML in ../dist/. See ../README.md for maintenance and verification.
