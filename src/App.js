import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './components/books/books/books';
import Categories from './components/categories/categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
