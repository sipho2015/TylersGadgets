# Product detail pages

Product-page-only enhancement completed on 15 October 2026 on `feature/premium-product-pages`. No product data, image assets, routes, shared enquiry behaviour or unrelated page content was changed. No commits, pushes or deployments were made.

## Files

- `product.js`: product presentation, breadcrumb, main-gallery controls, fullscreen viewer, sharing, contact links and mobile enquiry bar.
- `product.css`: scoped product layouts, accessible gallery controls, condition/specification rows and responsive contact bar. The existing shared `.product-actions` grid rule is retained for comparison dialogs.
- `details.js`: reads condition details, bounded highlights and explicit included items without guessing missing facts.
- `contact.js`: reuses configured business contacts, price/availability utilities and routing helpers for product-specific enquiries and sharing.
- `tests/product-details.test.js`: focused condition, highlight, stock-state, URL and clipboard-fallback tests.
- `tests/product-gallery.test.js`: preserves gallery/focus checks and updates the expected section order for the new design.

## Behaviour

Product price appears once near the product name. Actual stock/condition and packaging remain separate. Unknown prices show Contact for Price. Products with one photograph omit thumbnail and previous/next controls. Multiple photographs retain their configured order, use responsive WebP variants when available, and support thumbnail, keyboard and touch navigation. Enlarged images load only when opened. Broken images preserve the category fallback.

Condition reports display supplied condition, battery, screen/body details, Face ID/fingerprint, functionality, network/SIM, faults and packaging where available. Missing fields are omitted; no inspection, warranty, fault-free condition or included items are assumed. Full existing technical specifications and descriptions remain visible.

WhatsApp and encoded email enquiries include actual product details and, when the runtime origin or public URL is known, the product URL. Sold products request alternatives. Sharing supports clipboard copy, WhatsApp sharing and native sharing where available, with cancellation/error feedback and a selectable URL fallback when copying is blocked.

The mobile bar provides product-specific WhatsApp and email actions without repeating the price. It replaces the floating WhatsApp button only on mobile product pages, reserves bottom space with safe-area padding, and hides while a modal is open. The floating button remains available on other pages.

Existing comparison, saved/enquiry lists, recently viewed products, recommendations, warranty/delivery policies and static prerendering remain in use. Related products now appear under You May Also Like.

## Verification

- 28 automated tests pass and the 58-page production build completes.
- All 45 product records exactly match the pre-change snapshot.
- All 16 unrelated route renderings and metadata exactly match their pre-change snapshots, including the redesigned About page.
- Local Chrome verified four product types across 320, 375, 430, 768, 1024 and 1440px (24 layouts): no page overflow or JavaScript errors.
- Browser checks covered gallery selection, previous/next controls, thumbnails, keyboard, Escape/focus restoration, touch swipe, responsive-image switching, single images, unknown prices, all five stock states, policy links, copied URLs, clipboard denial, native sharing/cancellation/failure, image fallback and content without JavaScript.
- Catalogue search/category filtering and restoration of the floating contact button on another page passed.
- Lighthouse accessibility, best-practices and SEO audits returned 100 on a local iPhone 14 Pro Max page. No new performance score is claimed. Local results are not production guarantees.

Browser reports and screenshots live in ignored `.verification/premium-product-*` files. Lighthouse evidence is `.verification/lighthouse-premium-product.report.html`.

## Limits

No business facts were supplied by this upgrade. Unknown prices, availability, warranties and missing specifications still need business confirmation. Native sharing and email require support from the visitor's browser/device; clipboard denial offers manual copying. Touch swipe requires multiple configured images.

Static product URLs and social metadata already existed and are preserved. A confirmed production hostname is still needed for absolute production canonical/sitemap links; the existing build resolves the configured origin or Vercel's assigned production hostname.

Preview the built site at `/product/iphone-14-pro-max/`, or use the original source hash route `#product/iphone-14-pro-max` when running the editable source server.
