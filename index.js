import{S as u,i as l}from"./assets/vendor-De63neY_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n=document.querySelector(".js-search-form");function f(i){const t=new URLSearchParams({key:"48238539-5c4f953a21d3e608577efa510",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${t}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const c=document.querySelector(".js-img-list");function d(i){const{webformatURL:t,largeImageURL:s,tags:o,likes:e,views:r,comments:a,downloads:m}=i;return`<li class="img-list-item js-item">
        <a href="${s}" class="gallery-link">
          <img class="img" src="${t}" alt="${o}" width="360" />
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
              <p class="value">${a}</p>
            </div>
            <div class="img-info">
              <p class="label">Downloads</p>
              <p class="value">${m}</p>
            </div>
          </div>
        </a>
      </li>`}function p(i){const t=i.map(s=>d(s)).join("");c.innerHTML=t,new u(".js-img-list a",{captionsData:"alt",captionDelay:200}).refresh()}const g=i=>{i.preventDefault();const t=n.elements.search_request.value.trim();if(t===""){l.show({message:"Please enter your request!"}),c.innerHTML="";return}f(t).then(s=>{if(s.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",n.reset();return}p(s.hits),n.reset()}).catch(s=>l.error({message:s.message}))};n.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
