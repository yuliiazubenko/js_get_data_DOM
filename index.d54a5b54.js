var t=document.querySelectorAll(".population"),e=[];t.forEach(function(t){var n=parseInt(t.textContent.replace(/,/g,""),10);e.push(n)});var n=e.reduce(function(t,e){return t+e},0),o=Math.round(n/e.length),r=function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};document.querySelector(".total-population").textContent=r(n),document.querySelector(".average-population").textContent=r(o);
//# sourceMappingURL=index.d54a5b54.js.map
