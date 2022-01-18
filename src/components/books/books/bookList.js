import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './bookItem';

const BookList = (props) => {
  const { books } = props;
  return (

    <ul className="book_container">
      {books.length === 0 && (
      <div>No books added yet</div>
      )}
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}

    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

BookList.defaultProps = {};

export default BookList;
