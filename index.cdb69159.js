!function(){var e="https://api.thecatapi.com/v1",n="live_KyfL4pvBYgASckltKQrpcxKOeguyY5zf3tDNqmhMsEUi8Gxfzujo0I8OhcNs7HHE";function t(t){return fetch("".concat(e,"/images/search?api_key=").concat(n,"&breed_ids=").concat(t)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var o={breedSelect:document.querySelector(".js-breed-select"),catInfo:document.querySelector(".js-cat-info"),loader:document.querySelector(".loader"),error:document.querySelector(".error")},r=o.breedSelect,c=o.catInfo,a=o.loader;a.style.display="none",o.error.style.display="none",fetch("".concat(e,"/breeds?x-api-key=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){var n=e.map((function(e){var n=e.id,t=e.name;return'<option value="'.concat(n,'">').concat(t,"</option>")})).join("");r.innerHTML=n})).catch((function(e){return o.error.style.display="block"})).finally((function(){return a.style.display="none"})),r.addEventListener("change",(function(){c.style.display="none",o.error.style.display="none",a.style.display="block",t(this.value).then((function(e){!function(e,n){console.log(n);var t='\n    <div class="box">\n      <img src="'.concat(e,'" alt="').concat(n[0].name,'" width="500"/>\n    </div>\n    <div class="box">\n      <h1>').concat(n[0].name,"</h1>\n      <p>").concat(n[0].description,"</p>\n      <p><b>Temperament:</b> ").concat(n[0].temperament,"</p>\n    </div>");c.innerHTML=t}(e[0].url,e[0].breeds),c.style.display="flex"})).catch((function(e){return o.error.style.display="block"})).finally((function(){return a.style.display="none"}))}))}();
//# sourceMappingURL=index.cdb69159.js.map
