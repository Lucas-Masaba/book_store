import React from 'react';
import Navbar from '../../navbar';

const Books = () => (
  <div>
    <Navbar />
    <div>
      <ul className="book_container" />
      <button type="button">Remove</button>
      <form action="/">
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);

export default Books;
