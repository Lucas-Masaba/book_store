import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../../redux/books/books';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookfromStore = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <li className="card" key={book.item_id}>
      <span className="category_p">{book.category}</span>
      <p className="title_p">{book.title}</p>
      <div>
        <button className="remove_button bg-primary text-white" type="button" onClick={removeBookfromStore}>Remove</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
