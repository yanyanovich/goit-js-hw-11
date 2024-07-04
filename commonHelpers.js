import{i as a,S as c}from"./assets/vendor-f33cd494.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u="44768400-50ed818a42c4b3c7dfabdf0f1",f="https://pixabay.com/api/";function d(o){return fetch(`${f}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits)}function m(o){const t=document.querySelector(".gallery");if(t.innerHTML="",o.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=o.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-item">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
          <div class="info">
            <p class="info-item"><b>Likes</b> ${e.likes}</p>
            <p class="info-item"><b>Views</b> ${e.views}</p>
            <p class="info-item"><b>Comments</b> ${e.comments}</p>
            <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
          </div>
        </a>
    </li>
  `).join("");t.innerHTML=n,new c(".gallery a",{captionsData:"alt"}).refresh()}function p(){document.querySelector(".loader").classList.add("visible")}function h(){document.querySelector(".loader").classList.remove("visible")}const l={form:document.querySelector(".form"),input:document.querySelector(".search-input")};l.form.addEventListener("submit",y);function y(o){o.preventDefault();const t=l.input.value.trim();if(t===""){a.warning({title:"Warning",message:"Please enter a search term!"});return}p(),d(t).then(n=>{h(),m(n)}).catch(n=>{a.error({title:"Error",message:"Something went wrong. Please try again!"})}),l.input.value=""}
//# sourceMappingURL=commonHelpers.js.map
