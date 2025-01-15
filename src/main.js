import { searchFormEl, fetchImages } from './js/pixabay-api.js';
import { galleryEl, renderImageCards } from '/js/render-functions.js';
import iziToast from 'izitoast';

const onFormSubmit = event => {
  event.preventDefault();

  const userQuery = searchFormEl.elements.search_request.value.trim();

  if (userQuery === '') {
    iziToast.show({
      message: 'Please enter your request!',
    });

    galleryEl.innerHTML = '';

    return;
  }

  fetchImages(userQuery)
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

      searchFormEl.reset();
    })
    .catch(err =>
      iziToast.error({
        message: err.message,
      })
    );
};

searchFormEl.addEventListener('submit', onFormSubmit);
