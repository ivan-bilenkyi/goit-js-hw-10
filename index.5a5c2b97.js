!function(){var n="https://api.thecatapi.com/v1",e="live_KyfL4pvBYgASckltKQrpcxKOeguyY5zf3tDNqmhMsEUi8Gxfzujo0I8OhcNs7HHE";function o(o){return fetch("".concat(n,"/images/search?api_key=").concat(e,"&breed_ids=").concat(o)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}var t={breedSelect:document.querySelector(".js-breed-select"),catInfo:document.querySelector(".js-cat-info"),loader:document.querySelector(".loader"),error:document.querySelector(".error")},c=t.breedSelect,r=t.catInfo,a=t.loader,l=t.error;a.style.display="none",l.style.display="none",fetch("".concat(n,"/breeds?x-api-key=").concat(e)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){var e=n.map((function(n){var e=n.id,o=n.name;return'<option value="'.concat(e,'">').concat(o,"</option>")})).join("");c.innerHTML=e})).catch((function(n){return console.log(n)})).finally((function(){return a.style.display="none"})),c.addEventListener("change",(function(){a.style.display="block",console.log(this.value),o(this.value).then((function(n){console.log(n);var e=n[0].url;console.log(e);var o=n[0].breeds;console.log(o),function(n){var e=n.url,o=n.breeds;console.log();var t='\n    <div class="box">\n      <img src="'.concat(e,'" alt="').concat(o[0].name,'" width="500"/>\n    </div>\n    <div class="box">\n      <h1>').concat(o[0].name,"</h1>\n      <p>").concat(o[0].description,"</p>\n      <p><b>Temperament:</b> ").concat(o[0].temperament,"</p>\n    </div>");r.innerHTML=t}(o)})).catch((function(n){return console.log(n)})).finally((function(){return a.style.display="none"}))}))}();
//# sourceMappingURL=index.5a5c2b97.js.map
