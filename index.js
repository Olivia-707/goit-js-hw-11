import{a as d,i,S as m}from"./assets/vendor-C_7oAj77.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const p=r=>{const t=[{title:"Likes",value:r.likes},{title:"Views",value:r.views},{title:"Comments",value:r.comments},{title:"Downloads",value:r.downloads}].map(o=>`
        <div class="gallery-item">
          <p class="gallery-title">${o.title}</p>
          <p class="gallery-count">${o.value}</p>
        </div>`).join("");return`
    <li class="gallery-card">
      <article class="card">
        <a class="gallery-link" href="${r.largeImageURL}" target="_blank" rel="noopener noreferrer">
          <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="gallery-container">
          ${t}
        </div>
      </article>
    </li>`};d.defaults.baseURL="https://pixabay.com/api/";const h="https://pixabay.com/api/",y="48488586-a0a2593ae7f5d81beed47469e",f=r=>{const s=new URLSearchParams({q:r,key:y,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}?${s}`).then(t=>{if(!t.ok)throw new Error(`Error: ${t.status} ${t.statusText}`);return t.json()}).catch(t=>{throw console.error("Error fetching photos:",t.message),t})};d.defaults.baseURL="https://pixabay.com/api/";const n=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),u=document.querySelector(".loader"),g=r=>{r.preventDefault();const s=r.currentTarget.elements.user_query.value.trim();if(s===""){i.error({message:"Please enter your request",position:"topRight"});return}u.classList.remove("is-hidden"),f(s).then(t=>{if(t.total===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",n.reset();return}const o=t.hits.map(e=>p(e)).join("");c.innerHTML=o,new m(".js-gallery a",{captionDelay:300,captionsData:"alt"})}).catch(t=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(t)}).finally(()=>{u.classList.add("is-hidden")}),n.reset()};n.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
