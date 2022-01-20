import {
  deleteBookFromAPI,
  fetchBooksFromAPI,
  addBookToAPI,
} from '../../../API/APIhandler';

// constants
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKs';

// actions
export const addBook = (newBook) => async (dispatch) => {
  await addBookToAPI(newBook);
  dispatch({
    type: ADD_BOOK,
    payload: newBook,
  });
};

export const removeBook = (id) => async (dispatch) => {
  await deleteBookFromAPI(id);
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};

export const fetchBooks = () => async (dispatch) => {
  const data = await fetchBooksFromAPI();
  const books = [];
  [...Object.entries(data)].forEach((b) => {
    const book = {
      item_id: b[0],
      title: b[1][0].title,
      category: b[1][0].category,
    };
    books.push(book);
  });

  dispatch({
    type: FETCH_BOOKS,
    payload: books,
  });
};

// reducers
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
