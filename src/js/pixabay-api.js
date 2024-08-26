const BASE_URL = 'https://pixabay.com/api';

export const fetchPhotos = searchedQuery => {
  const urlParams = new URLSearchParams({
    key: '45590965-234de3c6df0497a136de38750',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}/?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};