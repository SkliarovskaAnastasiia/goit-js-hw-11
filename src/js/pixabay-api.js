export const searchFormEl = document.querySelector('.js-search-form');

export function fetchImages() {
  const searchedQuery = searchFormEl.elements.search_request.value.trim();

  const searchParams = new URLSearchParams({
    key: '48238539-5c4f953a21d3e608577efa510',
    q: searchedQuery,
    image_type: 'photo',
    orientation: ' horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(responce => {
    if (!responce.ok) {
      throw new Error(responce.status);
    }

    return responce.json();
  });
}
