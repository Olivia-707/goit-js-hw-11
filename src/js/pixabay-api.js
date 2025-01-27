export function getImages(userInputValue) {
  const searchParams = new URLSearchParams({
    key: '48488586-a0a2593ae7f5d81beed47469e',
    q: userInputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 200,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
