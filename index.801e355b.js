function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_KyfL4pvBYgASckltKQrpcxKOeguyY5zf3tDNqmhMsEUi8Gxfzujo0I8OhcNs7HHE&breed_ids=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const n={breedSelect:document.querySelector(".js-breed-select"),catInfo:document.querySelector(".js-cat-info"),loader:document.querySelector(".loader"),error:document.querySelector(".error")},{breedSelect:o,catInfo:t,loader:r,error:l}=n;r.style.display="none",l.style.display="none",fetch("https://api.thecatapi.com/v1/breeds?x-api-key=live_KyfL4pvBYgASckltKQrpcxKOeguyY5zf3tDNqmhMsEUi8Gxfzujo0I8OhcNs7HHE").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{const n=e.map((({id:e,name:n})=>`<option value="${e}">${n}</option>`)).join("");o.innerHTML=n})).catch((e=>console.log(e))).finally((()=>r.style.display="none")),o.addEventListener("change",(function(){r.style.display="block",console.log(this.value);e(this.value).then((e=>{console.log(e);const n=({url:url,breeds:breeds}=e[0]);console.log(url),function({url:e,breeds:n}){console.log();const o=`\n    <div class="box">\n      <img src="${e}" alt="${n[0].name}" width="500"/>\n    </div>\n    <div class="box">\n      <h1>${n[0].name}</h1>\n      <p>${n[0].description}</p>\n      <p><b>Temperament:</b> ${n[0].temperament}</p>\n    </div>`;t.innerHTML=o}(n)})).catch((e=>console.log(e))).finally((()=>r.style.display="none"))}));
//# sourceMappingURL=index.801e355b.js.map