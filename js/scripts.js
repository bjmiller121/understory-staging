function toggleHeight(t,o){var n=1e3*parseFloat(window.getComputedStyle(t).transitionDuration);if("none"===window.getComputedStyle(t).display){t.style.display="block",t.style.height="auto";let e=t.offsetHeight;t.style.height=0,setTimeout(function(){t.style.height=e+"px"},0),t.classList.add("is-expanded"),void 0!==o&&o.classList.add("is-expanded"),setTimeout(()=>{t.style.removeProperty("height")},n)}else t.style.height=t.offsetHeight+"px",setTimeout(function(){t.style.height=0},0),t.classList.remove("is-expanded"),void 0!==o&&o.classList.remove("is-expanded"),setTimeout(()=>{t.style.removeProperty("display"),t.style.removeProperty("height")},n)}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".dark-mode-toggle");null!=e&&e.addEventListener("click",e=>(document.querySelector("body").classList.toggle("dark-mode"),"on"==localStorage.getItem("dark-mode")?(localStorage.setItem("dark-mode","off"),pa.track({name:"Dark Mode Toggled Off"})):(localStorage.setItem("dark-mode","on"),pa.track({name:"Dark Mode Toggled On"})),void event.preventDefault()));var e=document.querySelector(".main-menu__toggle"),t=document.querySelector(".main-menu__list");null!=e&&e.addEventListener("click",function(e){t.classList.toggle("is-expanded"),event.preventDefault()}),document.querySelectorAll(".main-menu li.is-parent > a").forEach(e=>{e.addEventListener("click",e=>{window.innerWidth<1024&&(toggleHeight(e.target.nextElementSibling,e.target),e.preventDefault())})});null!=document.querySelector(".page-nav")&&(o=document.querySelector(".page-nav__link-left"),n=document.querySelector(".page-nav__link-right"),l=document.querySelector(".page-nav__link-parent"),document.addEventListener("keydown",e=>{switch(e.key){case"ArrowLeft":null!=o&&o.click();break;case"ArrowRight":null!=n&&n.click();break;case"ArrowUp":null!=l&&l.click()}})),document.querySelectorAll(".expandable dt").forEach(e=>{e.addEventListener("click",e=>{toggleHeight(e.target.nextElementSibling,e.target)})});var o,n,l,a=document.querySelector("#shh");null!=a&&a.addEventListener("click",e=>{document.querySelector("body").classList.add("body-fade-out"),setTimeout(function(){window.location.href=a.getAttribute("href")},2e3),e.preventDefault()})});