if(!self.define){let e,i={};const l=(l,r)=>(l=new URL(l+".js",r).href,i[l]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=i,document.head.appendChild(e)}else e=l,importScripts(l),i()})).then((()=>{let e=i[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(r,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const u=e=>l(e,s),c={module:{uri:s},exports:o,require:u};i[s]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(n(...e),o)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"petup-ecommerce"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.d677b8fb.css",revision:null},{url:"/fonts/bootstrap-icons.6fdf98f9.woff2",revision:null},{url:"/fonts/bootstrap-icons.dba5e3b7.woff",revision:null},{url:"/img/111.4cdce12f.jpg",revision:null},{url:"/img/222.62e51faf.jpg",revision:null},{url:"/img/322.8fcf3a90.jpg",revision:null},{url:"/img/444.d908a8d0.jpg",revision:null},{url:"/img/adsv.180712c6.jpg",revision:null},{url:"/img/cart-2.ac901185.jpg",revision:null},{url:"/img/counter.0477948b.jpg",revision:null},{url:"/img/header-bg.1847ba88.jpg",revision:null},{url:"/img/logo.728a956c.png",revision:null},{url:"/img/p-2.dd479470.jpg",revision:null},{url:"/img/racao.613ec9ad.png",revision:null},{url:"/img/slide1-1.f1e3eb60.jpg",revision:null},{url:"/img/slideshow1-2.e704baa2.jpg",revision:null},{url:"/index.html",revision:"730da2517f8c14bf7799dad85e4e2fa6"},{url:"/js/app.6b585dba.js",revision:null},{url:"/js/chunk-vendors.39c94f07.js",revision:null},{url:"/manifest.json",revision:"571fdc2cc000d47a5495fab9899ca98a"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
