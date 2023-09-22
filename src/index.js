
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const refs = {
  breedSelect: document.querySelector('.js-breed-select'),
  catInfo: document.querySelector('.js-cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

const { breedSelect, catInfo, loader, } = refs;

loader.style.display = 'none';
refs.error.style.display = 'none';

fetchBreeds()
  .then(result => {
    const optionBreeds = createOptionBreeds(result);
    breedSelect.innerHTML = optionBreeds;
  })
  .catch(error => refs.error.style.display = 'block')
  .finally(() => (loader.style.display = 'none'));

function createOptionBreeds(selectArr) {
  return selectArr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}
breedSelect.addEventListener('change', selectionBreed);

function selectionBreed() {
  loader.style.display = 'block';
console.log(this.value);
  const breedId = this.value;
  fetchCatByBreed(breedId)
    .then(result => {
      
      const url = result[0].url
      const breed = result[0].breeds;
      createMarkupBreed(url, breed);
    })
    .catch(error =>
      refs.error.style.display = 'block'
    )
    .finally(() => (loader.style.display = 'none'));
}
function createMarkupBreed( url, breed ) {
  console.log(breed);
  const markup = `
    <div class="box">
      <img src="${url}" alt="${breed[0].name}" width="500"/>
    </div>
    <div class="box">
      <h1>${breed[0].name}</h1>
      <p>${breed[0].description}</p>
      <p><b>Temperament:</b> ${breed[0].temperament}</p>
    </div>`;
  catInfo.innerHTML = markup;
}