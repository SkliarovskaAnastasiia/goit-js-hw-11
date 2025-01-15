import { searchFormEl, fetchImages } from './js/pixabay-api.js';
import { renderImageCards } from './js/render-functions.js';

const onFormSubmit = event => {
  event.preventDefault();

  fetchImages()
    .then(imagesData => renderImageCards(imagesData.hits))
    .catch(err => console.log(err));
};

searchFormEl.addEventListener('submit', onFormSubmit);
