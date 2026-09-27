import { renderRoute } from './core/router.js';
addEventListener('hashchange',renderRoute);
document.addEventListener('error',event=>{
 const img=event.target;
 if(img.tagName==='IMG'&&!img.dataset.fallback){
  img.dataset.fallback='true';img.removeAttribute('srcset');img.removeAttribute('sizes');
  img.src=img.dataset.fallbackSrc||'assets/placeholders/phone.svg';
 }
},true);
renderRoute();
