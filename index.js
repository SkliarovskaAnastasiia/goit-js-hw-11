import{i as c,S as f}from"./assets/vendor-B07T6_gy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n=document.querySelector(".js-search-form");function p(i){const t=new URLSearchParams({key:"48238539-5c4f953a21d3e608577efa510",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:102});return fetch(`https://pixabay.com/api/?${t}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const l=document.querySelector(".js-img-list");function h(i){const{webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:o,downloads:u}=i;return`<li class="img-list-item js-item">
        <a href="${s}" class="gallery-link">
          <img class="img" src="${t}" alt="${a}" width="360" />
          <div class="info-wrapper">
            <div class="img-info">
              <p class="label">Likes</p>
              <p class="value">${e}</p>
            </div>
            <div class="img-info">
              <p class="label">Views</p>
              <p class="value">${r}</p>
            </div>
            <div class="img-info">
              <p class="label">Comments</p>
              <p class="value">${o}</p>
            </div>
            <div class="img-info">
              <p class="label">Downloads</p>
              <p class="value">${u}</p>
            </div>
          </div>
        </a>
      </li>`}function g(i){const t=i.map(s=>h(s)).join("");l.innerHTML=t}const m=document.querySelector(".js-arrow");window.addEventListener("scroll",()=>{window.scrollY>500?m.classList.add("is-shown"):m.classList.remove("is-shown")});const d=document.querySelector(".js-loader"),y=i=>{i.preventDefault(),l.innerHTML="";const t=n.elements.search_request.value.trim();if(t===""){c.show({message:"Please enter your request!",position:"topRight"}),l.innerHTML="";return}d.classList.remove("hidden"),p(t).then(s=>{if(s.hits.length===0){d.classList.add("hidden"),c.show({iconUrl:"./img/error.svg",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",backgroundColor:"#ef4040",theme:"dark",messageColor:"#ffffff"}),l.innerHTML="",n.reset();return}g(s.hits),d.classList.add("hidden"),n.reset(),new f(".js-img-list a",{captionsData:"alt",captionDelay:200}).refresh()}).catch(s=>c.error({message:s.message,position:"topRight"}))};n.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
