import { routePath } from './core/urls.js';
import { renderRoute } from './core/router.js';
addEventListener('hashchange',()=>{
 if(document.documentElement.dataset.static==='true'&&location.hash&&!['#contact','#delivery','#main'].includes(location.hash))history.replaceState(null,'',routePath(location.hash.slice(1)));
 renderRoute();
});
addEventListener('popstate',renderRoute);
if(document.documentElement.dataset.static==='true'){
 document.addEventListener('click',event=>{
  const link=event.target.closest('a');if(!link||event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||link.target||link.hasAttribute('download'))return;
  const url=new URL(link.href);if(url.origin!==location.origin||!/^\/(?:$|(?:gadgets|phones|laptops|accessories|repairs|gallery|about|warranty|returns|delivery-policy|privacy|terms|shop)\/|product\/[^/]+\/)/.test(url.pathname))return;
  event.preventDefault();const destination=url.hash&&!['#contact','#delivery','#main'].includes(url.hash)?routePath(url.hash.slice(1)):url.pathname+url.hash;history.pushState(null,'',destination);renderRoute();
 });
 if(location.hash&&!['#contact','#delivery','#main'].includes(location.hash))history.replaceState(null,'',routePath(location.hash.slice(1)));
}
document.addEventListener('error',event=>{
 const img=event.target;
 if(img.tagName==='IMG'&&!img.dataset.fallback){
  img.dataset.fallback='true';img.removeAttribute('srcset');img.removeAttribute('sizes');
  img.src=img.dataset.fallbackSrc||'assets/placeholders/phone.svg';
 }
},true);
renderRoute();
