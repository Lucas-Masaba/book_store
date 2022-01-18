import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const inputTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const inputAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title: title.trim(),
      author: author.trim(),
    };
    dispatch(addBook(newBook));
  };
  return (
    <form>
      <input onChange={inputTitleHandler} type="text" placeholder="title" />
      <input onChange={inputAuthorHandler} type="text" placeholder="author" />
      <button type="button" onClick={submitBookToStore}>
        Submit
      </button>
    </form>
  );
};

export default InputBook;
