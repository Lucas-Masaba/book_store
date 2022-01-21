import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux/books/books';

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const inputTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const inputCategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title !== '' && category !== '') {
      const newBook = {
        item_id: uuidv4(),
        title: title.trim(),
        category: category.trim(),
      };
      dispatch(addBook(newBook));
      setTitle('');
      setCategory('');
    }
  };
  return (
    <div>
      <p className="add_book_p">ADD NEW BOOK</p>
      <form>
        <input
          className="title_input"
          value={title}
          onChange={inputTitleHandler}
          type="text"
          placeholder="Book title"
        />
        <select
          className="category_input"
          value={category}
          onChange={inputCategoryHandler}
        >
          <option value="none">
            Category
          </option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Horror">Horror</option>
          <option value="Reality">Reality</option>
          <option value="Documentary">Documentary</option>
          <option value="Biography">Biography</option>
          <option value="Comedy">Comedy</option>
        </select>
        <button
          className=" submit_button bg-primary text-white"
          type="button"
          onClick={submitBookToStore}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputBook;
