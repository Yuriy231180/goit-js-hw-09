import"./assets/modulepreload-polyfill-3cfb730f.js";import{t as n}from"./assets/vendor-71ac5ada.js";const r="feedback-form-state",e=document.querySelector(".feedback-form"),t=e.querySelector("input");t.classList.add("input");const a=e.querySelector("textarea");a.classList.add("textarea");const l=e.querySelector("button");l.classList.add("submitbatton");const u=e.querySelector("label");u.classList.add("labelname");const s=JSON.parse(localStorage.getItem(r));s&&(a.value=s.message.trim(),t.value=s.email.trim(),l.disabled=!(t.value&&a.value));e.addEventListener("input",n(()=>{localStorage.setItem(r,JSON.stringify({email:t.value,message:a.value})),l.disabled=!(t.value&&a.value)},500));e.addEventListener("submit",m=>{m.preventDefault();let o=t.value.trim(),i=a.value.trim();o!==""&&i!==""?(console.log({email:o,message:i}),localStorage.removeItem(r),e.reset()):alert("Будь ласка, заповніть всі поля форми."),l.disabled=!0});
//# sourceMappingURL=commonHelpers2.js.map
