(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const l=document.querySelector(".js-search-form");function c(){const i=l.elements.search_request.value.trim(),t=new URLSearchParams({key:"48238539-5c4f953a21d3e608577efa510",q:i,image_type:"photo",orientation:" horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${t}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const u=document.querySelector(".img-list");function d(i){const{webformatURL:t,largeImageURL:r,tags:a,likes:e,views:s,comments:o,downloads:n}=i;return`<li class="img-list-item">
        <a href="${r}" class="gallery-link">
          <img src="${t}" alt="${a}" width="360" height="200" />
          <div class="info-wrapper">
            <div class="img-info">
              <p class="label">Likes</p>
              <p class="value">${e}</p>
            </div>
            <div class="img-info">
              <p class="label">Views</p>
              <p class="value">${s}</p>
            </div>
            <div class="img-info">
              <p class="label">Comments</p>
              <p class="value">${o}</p>
            </div>
            <div class="img-info">
              <p class="label">Downloads</p>
              <p class="value">${n}</p>
            </div>
          </div>
        </a>
      </li>`}function m(i){const t=i.map(r=>d(r)).join("");u.innerHTML=t}const f=i=>{i.preventDefault(),c().then(t=>m(t.hits)).catch(t=>console.log(t))};l.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
