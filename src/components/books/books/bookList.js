import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addBook, removeBook } from '../../redux/books/books';
import PropTypes from 'prop-types';
import BookItem from './bookItem';
// const dispatch = useDispatch();

// const submitBookToStore = () => {
//   const newBook = {
//     id,
//     title,
//     author,
//   };
//   dispatch(addBook(newBook));
// };

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
