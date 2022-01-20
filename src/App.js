import { React, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './components/books/books/bookList';
import InputBook from './components/books/books/inputBook';
import Categories from './components/categories/categories';
import Navbar from './components/navbar';
import { fetchBooks } from './redux/books/books';

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
          <div>
            <Navbar />
            <BookList books={books} />
            <InputBook />
          </div>
        )}
      />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
