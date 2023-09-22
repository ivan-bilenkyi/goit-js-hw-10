
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const refs = {
  breedSelect: document.querySelector('.js-breed-select'),
  catInfo: document.querySelector('.js-cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

const { breedSelect, catInfo, loader, error } = refs;

loader.style.display = 'none';
error.style.display = 'none';

fetchBreeds()
  .then(result => {
    const optionBeerds = createOptionBeerds(result);
    breedSelect.innerHTML = optionBeerds;
  })
  .catch(error => console.log(error))
  .finally(() => (loader.style.display = 'none'));

function createOptionBeerds(selectArr) {
  return selectArr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}
breedSelect.addEventListener('change', function () {
  loader.style.display = 'block';
console.log(this.value);
  const breedId = this.value;
  fetchCatByBreed(breedId)
    .then(result => {
      console.log(result);
      const beerd = ({ url, breeds } = result[0]);
      console.log(url);
      createMarkupBeerd(beerd);
    })
    .catch(error =>
      console.log(error)
    )
    .finally(() => (loader.style.display = 'none'));
});

// function selectionBreed() {
//   loader.style.display = 'block';
// console.log(this.value);
//   const breedId = this.value;
//   fetchCatByBreed(breedId)
//     .then(result => {
//       console.log(result);
//       const beerd = ({ url, breeds } = result[0]);
//       console.log(url);
//       createMarkupBeerd(beerd);
//     })
//     .catch(error =>
//       console.log(error)
//     )
//     .finally(() => (loader.style.display = 'none'));
// }
function createMarkupBeerd({ url, breeds }) {
  console.log();
  const markup = `
    <div class="box">
      <img src="${url}" alt="${breeds[0].name}" width="500"/>
    </div>
    <div class="box">
      <h1>${breeds[0].name}</h1>
      <p>${breeds[0].description}</p>
      <p><b>Temperament:</b> ${breeds[0].temperament}</p>
    </div>`;
  catInfo.innerHTML = markup;
}