import{u as n}from"./index.Dajn0SSL.js";import"./index.DhYZZe0J.js";import"./index.DjKJqAo0.js";gsap.registerPlugin(ScrollTrigger);const d=({...i})=>{const o={start:"top bottom-=30%",end:"bottom bottom-=30%"};function a(){const t=document.querySelector(".main");t.classList.remove("light-theme"),t.classList.add("dark-theme")}function l(){const t=document.querySelector(".main");t.classList.remove("dark-theme"),t.classList.add("light-theme")}return n(()=>{const t=[...document.querySelectorAll("[data-theme=dark]")],c=[...document.querySelectorAll("[data-theme=light]")];t.forEach((e,r)=>{ScrollTrigger.create({trigger:e,...o,onEnter:a,onEnterBack:a,id:`dark-${r}`,markers:!0})}),c.forEach((e,r)=>{ScrollTrigger.create({trigger:e,...o,onEnter:l,onEnterBack:l,id:`light-${r}`,markers:!0})})},[]),null};export{d as default};