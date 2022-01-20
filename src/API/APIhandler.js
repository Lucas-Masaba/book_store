const appId = 'xm8kNSnjF3gFNbj0XqXz';
const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}`;

export const addBookToAPI = async (newBook) => {
  await fetch(`${baseURL}/books`, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-type': 'application/json',
    },
  });
};

export const deleteBookFromAPI = async (id) => {
  await fetch(`${baseURL}/books/${id}`, {
    method: 'DELETE',
  });
};

export const fetchBooksFromAPI = async () => {
  const response = await fetch(`${baseURL}/books`);
  const getResponse = await response.json();
  return getResponse;
};

export default { addBookToAPI, deleteBookFromAPI, fetchBooksFromAPI };
