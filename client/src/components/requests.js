const API_URL = 'http://localhost:8000';
async function extractText(image) {
  console.log(image);
  let formData = new FormData();

  formData.append('image', image, image.name);
  const data = await fetch(`${API_URL}/read-image`, {
    method: 'post',
    body: formData,
  });
  const { text } = await data.json();
  console.log(text);
  return text;
}

export { extractText };
