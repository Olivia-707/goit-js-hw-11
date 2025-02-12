import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '48488586-a0a2593ae7f5d81beed47469e';

export const fetchPhotosByQuery = searchedQuery => {
  const searchParams = new URLSearchParams({
    q: searchedQuery,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching photos:', error.message);
      throw error;
    });
};
