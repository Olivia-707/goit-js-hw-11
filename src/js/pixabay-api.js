const API_KEY = '48488586-a0a2593ae7f5d81beed47469e';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchPhotos(query, page, perPage) {
  const url = `${BASE_URL}? key=${API_KEY}&q=${encodeURLComponent(
    query
  )}$image_type=photo=${perPage}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }

  return await response.json();
}
