import{i,S as d}from"./assets/vendor-B2mb6eXk.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const m=t=>{const r=[{title:"Likes",value:t.likes},{title:"Views",value:t.views},{title:"Comments",value:t.comments},{title:"Downloads",value:t.downloads}].map(o=>`
        <div class="gallery-item">
          <p class="gallery-title">${o.title}</p>
          <p class="gallery-count">${o.value}</p>
        </div>`).join("");return`
    <li class="gallery-card">
      <article class="card">
        <a
        class="gallery-link" href="${t.largeImageURL}" target="_blank" rel="noopener noreferrer">
          <img class="gallery-img" src="${t.webformURL}" alt="${t.tags}" />
        </a>
        <div class="gallery-container">
          ${r}
        </div>
      </article>
    </li>`},h="https://pixabay.com/api/",y="48488586-a0a2593ae7f5d81beed47469e",p=t=>{const a=new URLSearchParams({q:t,key:y,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}?${a}`).then(r=>{if(!r.ok)throw new Error(`Error: ${r.status} ${r.statusText}`);return r.json()}).catch(r=>{throw console.error("Error fetching photos:",r.message),r})},n=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),u=document.querySelector(".loader"),g=t=>{if(t.preventDefault(),t.currentTarget.elements.user_query.value.trim()===""){i.error({message:"Please enter your request",position:"topRight"});return}u.classList.remove("is-hidden"),p(searchQuery).then(r=>{if(r.total===0){i.error({message:"Sorry, there are no images match your seartching query. Please try again!",position:"topRight"}),c.innerHTML="",n.reset();return}const o=r.hits.map(e=>m(e)).join("");c.innerHTML=o,new d(".js-gallery a",{captionDelay:300,captionData:"alr"})}).catch(r=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(r)}).finally(()=>{u.classList.add("is-hidden")}),n.reset()};n.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
