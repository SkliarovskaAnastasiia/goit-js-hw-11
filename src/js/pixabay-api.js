import { galleryEl, renderImageCards } from '/js/render-functions.js';
import iziToast from 'izitoast';

export const searchFormEl = document.querySelector('.js-search-form');

export function fetchImages() {
  const searchedQuery = searchFormEl.elements.search_request.value.trim();

  if (searchedQuery === '') {
    iziToast.show({
      message: 'Please enter your request!',
    });

    galleryEl.innerHTML = '';

    return;
  }

  const searchParams = new URLSearchParams({
    key: '48238539-5c4f953a21d3e608577efa510',
    q: searchedQuery,
    image_type: 'photo',
    orientation: ' horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(responce => {
      if (!responce.ok) {
        throw new Error(responce.status);
      }

      return responce.json();
    })
    .then(imagesData => {
      if (imagesData.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });

        galleryEl.innerHTML = '';

        searchFormEl.reset();

        return;
      }

      renderImageCards(imagesData.hits);
    })
    .catch(err =>
      iziToast.error({
        message: err.message,
      })
    );
}
