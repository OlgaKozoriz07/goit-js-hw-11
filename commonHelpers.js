import{i as c,S as m}from"./assets/vendor-f33cd494.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p="https://pixabay.com/api",f=t=>{const s=new URLSearchParams({key:"45531869-402fff4ce98a39e1a3b7e2442",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}/?${s}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})},h=t=>`
    <li class="gallery-card">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-img"
      src="${t.webformatURL}"
      data-source="${t.largeImageURL}"
      alt="${t.tags}"
    />
  </a>
  <div class="wrapper">
    <ul class="img-content-wrapper">
      <li class="text-info">
        Likes<span class="number">${t.likes}</span>
      </li>
      <li class="text-info">
        Views<span class="number">${t.views}</span>
      </li>
      <li class="text-info">
        Comments<span class="number">${t.comments}</span>
      </li>
      <li class="text-info">
        Downloads<span class="number">${t.downloads}</span>
      </li>
    </ul>
  </div>
</li>
    `,l=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),n=document.querySelector(".loader");function y(t){t.preventDefault();const s=l.elements.user_query.value;if(s===""){c.warning({title:"Caution",message:"Input field must not be empty",position:"topLeft"});return}function a(){n.classList.remove("is-hidden")}function o(){n.classList.add("is-hidden")}a(),setTimeout(o,6e3),f(s).then(e=>{if(n.classList.add("is-hidden"),!e.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),u.innerHTML="";return}const r=e.hits.map(d=>h(d)).join("");u.innerHTML=r,new m(".js-gallery a",{overlay:!0,captionsData:"alt",overlayOpacity:.8,captionDelay:250,focus:!0}).refresh(),l.reset()}).catch(e=>{console.log(e)})}l.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
