import { searchFormEl, fetchImages } from './js/pixabay-api.js';

const onFormSubmit = event => {
  event.preventDefault();

  fetchImages();

  searchFormEl.reset();
};

searchFormEl.addEventListener('submit', onFormSubmit);
