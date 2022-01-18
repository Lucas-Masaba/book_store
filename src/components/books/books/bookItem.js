import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookfromStore = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <li key={book.id}>
      <span>{book.title}</span>
      <span>
        {
        ` by ${book.author}
        `
}
      </span>
      <button type="button" onClick={removeBookfromStore}>Remove</button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
