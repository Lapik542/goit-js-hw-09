import"./assets/modulepreload-polyfill-ec808ebb.js";document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".feedback-form"),a=t.querySelector('input[name="email"]'),o=t.querySelector('textarea[name="message"]'),r=()=>{const e={email:a.value.trim(),message:o.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))},m=()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"))||{};e.email&&(a.value=e.email),e.message&&(o.value=e.message)},n=()=>a.value.trim()!==""&&o.value.trim()!=="";t.addEventListener("input",function(e){r(),e.preventDefault()}),t.addEventListener("submit",function(e){if(!n()){alert("Please fill in all fields before submitting the form.");return}const s={email:a.value.trim(),message:o.value.trim()};console.log("Form Data:",s),localStorage.removeItem("feedback-form-state"),t.reset()}),m()});
//# sourceMappingURL=commonHelpers2.js.map