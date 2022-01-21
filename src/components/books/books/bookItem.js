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
      <div className="content_container">
        <div className="book_info">
          <div className="span_container">
            <span className="category_p">{book.category}</span>
            <span className="title_p">{book.title}</span>
            <span className="author">Anonymous</span>
          </div>
          <div className="button_container">
            <ul className="button_ul button_container" />
            <li>
              <button className="remove_button" type="button">
                {'Comments '}
                <small className="stroke">|</small>
              </button>
            </li>
            <li>
              <button className="remove_button" type="button" onClick={removeBookfromStore}>
                {'Remove '}
                <small className="stroke">|</small>
              </button>
            </li>
            <li>
              <button className="remove_button" type="button">Edit</button>
            </li>
          </div>
        </div>
        <div className="circle_status">
          <div className="circle-wrap">
            <div className="circle">

              <div className="mask full">
                <div className="fill" />
              </div>

              <div className="mask half">
                <div className="fill" />
              </div>

              <div className="inside-circle">
                --%
              </div>

            </div>
          </div>
        </div>
        <div className="vl" />
        <div className="chapter_status">
          <span className="current_chapter">CURRENT CHAPTER</span>
          <span className="some_chapter">Chapter *</span>
          <button type="button" className="update_button">UPDATE PROGRESS</button>
        </div>
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
