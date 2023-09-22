import axios from 'axios';

const SEARCH_URL = 'https://api.thecatapi.com/v1/images/search?breed_ids=';
const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = (axios.defaults.headers.common['x-api-key'] =
  'live_KyfL4pvBYgASckltKQrpcxKOeguyY5zf3tDNqmhMsEUi8Gxfzujo0I8OhcNs7HHE');

function fetchBreeds(url, api) {
  return fetch(`${url}?x-api-key=${api}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
