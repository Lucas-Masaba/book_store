import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookList from './components/books/books/bookList';
import InputBook from './components/books/books/inputBook';
import Categories from './components/categories/categories';
import Navbar from './components/navbar';

function App() {
  const books = useSelector((state) => state.books);
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
