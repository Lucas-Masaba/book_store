import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

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
    const newBook = {
      item_id: uuidv4(),
      title: title.trim(),
      category: category.trim(),
    };
    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <form>
      <input value={title} onChange={inputTitleHandler} type="text" placeholder="title" />
      <input
        value={category}
        onChange={inputCategoryHandler}
        type="text"
        placeholder="category"
      />
      <button type="button" onClick={submitBookToStore}>
        Submit
      </button>
    </form>
  );
};

export default InputBook;
