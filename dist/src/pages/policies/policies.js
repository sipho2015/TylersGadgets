import { getPolicies,policyLinks } from '../../../data/policies.js';
import { siteConfig } from '../../../data/site-config.js';
import { escapeHtml as e,generalEnquiry,deliveryEnquiry } from '../../core/format.js';
import { button } from '../../core/ui.js';
export function renderPolicy(route){
 const policy=getPolicies()[route];
 if(!policy)return '';
 return `<main id="main" tabindex="-1" class="container section policy-page"><div class="page-heading"><p class="eyebrow">Customer information / ${e(siteConfig.name)}</p><h1>${e(policy.title)}</h1><p>${e(policy.intro)}</p></div><div class="policy-layout"><aside><div class="policy-navigation" aria-label="Customer information">${policyLinks.map(([id,label])=>`<a href="#${id}" ${id===route?'aria-current="page"':''}>${label}<span aria-hidden="true">↗</span></a>`).join('')}</div></aside><article class="policy-content">${policy.sections.map(section=>`<section><h2>${e(section.title)}</h2>${(section.paragraphs||[]).map(p=>`<p>${e(p)}</p>`).join('')}${section.items?`<ul>${section.items.map(item=>`<li>${e(item)}</li>`).join('')}</ul>`:''}</section>`).join('')}<div class="policy-help"><h2>Have a question?</h2><p>Speak to us before arranging a purchase, repair or return.</p>${button(route==='delivery-policy'?'Ask About Delivery':'Chat on WhatsApp',route==='delivery-policy'?deliveryEnquiry():generalEnquiry())}${route==='privacy'?`<a class="text-link" href="mailto:${e(siteConfig.email)}">${e(siteConfig.email)}</a>`:''}</div></article></div></main>`;
}
