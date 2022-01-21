import { React, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './components/books/books/bookList';
import InputBook from './components/books/books/inputBook';
import Categories from './components/categories/categories';
import Navbar from './components/navbar';
import { fetchBooks } from './redux/books/books';
import './App.css';

function App() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={(
          <div className="books_container container-fluid">
            <Navbar />
            <div className="container">
              <BookList books={books} />
              <hr />
              <InputBook />
            </div>
          </div>
        )}
      />
      <Route
        path="/categories"
        element={(
          <div className="container-fluid">
            <div>
              <Categories />
            </div>
          </div>
      )}
      />
    </Routes>
  );
}

export default App;
