const modulo=(()=>{"use strict";let e=[];const t=["C","D","H","S"],r=["J","Q","K"];let n=[];const s=document.querySelector("#btnNuevoJuego"),l=document.querySelector("#btnPedir"),a=document.querySelector("#btnDetener"),o=document.querySelectorAll(".divCartas"),d=document.querySelectorAll("small"),c=(t=2)=>{e=i(),n=[];for(let e=0;e<t;e++)n.push(0);d.forEach(e=>e.innerText=0),o.forEach(e=>e.innerHTML=""),l.disabled=!1,a.disabled=!1},i=()=>{e=[];for(let r=2;r<=10;r++)for(let n of t)e.push(`${r}${n}`);for(let n of t){for(let t of r)e.push(`${t}${n}`);e.push(`A${n}`)}return _.shuffle(e)},u=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},h=(e,t)=>(n[t]+=(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:parseInt(t)})(e),d[t].innerText=n[t],n[t]),f=(e,t)=>{const r=document.createElement("img");r.src=`./assets/cartas/${e}.png`,r.classList.add("carta"),o[t].append(r)},b=e=>{let t=0;do{const e=u();t+=h(e,n.length-1),f(e,n.length-1)}while(t<e);(()=>{const[e,t]=n;setTimeout(()=>{t===e?alert("Empate"):e>21?alert("Perdiste"):t>21?alert("Ganaste"):e>t?alert("Ganaste"):alert("Perdiste")},50)})()};return s.addEventListener("click",()=>{c()}),l.addEventListener("click",()=>{const e=u(),t=h(e,0);f(e,0),t>21?(l.disabled=!0,a.disabled=!0,b(t)):21===t&&(l.disabled=!0,a.disabled=!0,b(t))}),a.addEventListener("click",()=>{l.disabled=!0,a.disabled=!0,b([n[0]])}),{nuevoJuego:c}})();