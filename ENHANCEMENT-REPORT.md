# Website enhancement report

Completed on 14 October 2026 on branch `feature/catalogue-enhancements`. No commits, pushes or deployments were performed.

## Preserved scope

The initial workspace was on `new-features` with uncommitted image moves and previous website changes. Those changes were carried onto the feature branch without resetting, stashing or overwriting the user's work. All 45 product records exactly match the JSON snapshot captured before enhancement, including IDs, slugs, prices, specifications, photographs, packaging and disclosed condition information.

The site remains HTML/CSS/native JavaScript with a development-time Node build. It has no backend, database, accounts, payments, checkout, order processing or repair tracking. WhatsApp and email links prepare messages for the customer to send.

## Implemented

- Consistent product cards with View Details, Compare, Save for Later and Add to Enquiry actions.
- Two-column product detail layout, price beside the heading, email enquiry, image viewer and touch navigation where multiple photos exist.
- Comparison for two or three products, removal/clear controls, available specification rows, missing-value labels and stacked device cards on narrow screens.
- Multi-product enquiry lists with individual prices and correctly encoded WhatsApp/email messages; sold items explicitly request alternatives.
- Local saved products and up to eight recently viewed items. Comparison and enquiry selections are also stored as IDs. Unavailable storage falls back to memory; stale/malformed IDs are discarded.
- Related products ranked by category, brand, storage, price proximity and confirmed availability, excluding self/duplicates.
- Updated homepage hero and section order. Verified-data-only new arrivals and offers, with active promotional prices used in cards, details, enquiries and structured data.
- Repair enquiries with brand, model, service, problem description and preferred contact method; WhatsApp/email options and manual attachment guidance.
- Trade-in enquiries with brand/model/storage/condition/battery/fault/accessory fields and no automatic valuation.
- Empty approved-repair showcase and authentic-testimonial components, hidden until supplied content qualifies.
- Existing business, delivery, policy, navigation, FAQ and gallery functionality preserved. Privacy now explains browser storage and unstored forms.
- Static generation for 58 readable pages, including all 45 direct product URLs, metadata, LocalBusiness/Product structured data and domain-aware canonical links/sitemap.
- Existing hash links supported, direct URLs refresh correctly and basic content/contact links remain available without JavaScript.
- Responsive WebP variants for 54 local source photos (44 unique photographs), while preserving originals. Generated variants occupy about 9.09 MB collectively, compared with 15.56 MB for the unique originals; the browser downloads only selected sizes.
- Combined production stylesheet, preserved initial rendered HTML, lazy loading, reserved image dimensions, corrected image sizing, accessible dialogs/focus and reduced-motion support.
- Vercel configuration with `npm run build` and output `dist`.

## Verification

All **23 automated tests pass**. The build completes and generates 58 pages. Static tests verify each product's readable HTML, absolute social metadata, canonical links, original data-derived offers, local asset/link targets and a 58-entry sitemap using an isolated test origin.

Local headless Chrome checked **84 page/width combinations** across 320, 375, 430, 768, 1024 and 1440 pixels. Pages covered home, catalogue, product details, repairs, gallery, about, all category pages and all five policies. No horizontal overflow, uncaught JavaScript errors or local failed HTTP responses were recorded.

Interaction checks passed for catalogue category/reset filters, comparison limits/removal, saved persistence, multi-product WhatsApp/email parity, product viewer, recently viewed products, repair/trade message generation, gallery category/brand filters and keyboard navigation, mobile menu closing, legacy product links, direct URL refresh and content without JavaScript. The browser connector had no session available; checks used the installed local Chrome browser with development-only Playwright.

Lighthouse 13.5.0 measurements against the local production preview, using mobile defaults:

| Page | Performance | Accessibility | Best practices | SEO | Layout shift |
| --- | ---: | ---: | ---: | ---: | ---: |
| Homepage | 90 | 100 | 100 | 100 | 0 |
| iPhone 14 Pro Max | 87 | 100 | 100 | 100 | 0 |

Both saved reports have no runtime errors, run warnings or failed audit computations. The Lighthouse CLI emitted an internal NO_LCP trace-engine message during the homepage run, despite producing complete metrics and category scores. These are local measurements, not production guarantees. Reports are in `.verification/lighthouse-home-final.report.html` and `.verification/lighthouse-product-complete.report.html`. Browser evidence is in `.verification/browser-report.json`, with screenshots alongside it. These files are intentionally Git-ignored.

## Content and deployment follow-up

No genuine new-arrival dates/flags, promotions, testimonials or repair pairs are currently supplied, so those sections remain hidden. Existing laptop/accessory prices, individual warranties and Sunday delivery fees still require business confirmation. General Unsplash imagery remains where it existed; actual local product/gallery images are preserved.

The user plans a Vercel address first, then a .co.zw or .com domain. The exact hostname has not yet been assigned here. The build uses `SITE_URL`, a configured `siteUrl`, or Vercel's production hostname environment variable. A local build without those values omits canonical links/sitemap instead of inventing a domain. Enable Vercel system environment variables, or supply `SITE_URL` with the assigned full HTTPS origin, then deploy. For a custom domain, update that origin and rebuild.

Production deployment itself has not been performed or visually tested on Vercel. Complete a brief live check after publishing to verify the assigned domain, sitemap, social image URLs and external contact links.

## Preview

```powershell
npm.cmd run build
npm.cmd run preview
```

Open http://localhost:3000. Full editing, image preparation and verification instructions are in README.md.

## Comparison layout follow-up

Removed forced table minimum widths. Desktop comparison now fits the dialog, and screens up to 700px show vertically stacked device cards with labelled specifications and contact/removal actions. Verified one, two and three products at all six requested widths (18 layouts): no horizontal scrolling, no JavaScript errors, and removal, clearing and Escape all passed. All 23 automated tests and the static build still pass.
