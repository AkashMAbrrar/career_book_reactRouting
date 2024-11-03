import { useEffect, useState } from "react";
import Book from "../Book/Book";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/public/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center mt-10">Books</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:container md:mx-auto sm:container sm:mx-auto  gap-6 mb-24 customGrid">
        {books.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;

/**
 * 1: state to store the data(books)
 * 2: useEffect for loading data and side effect
 * 3: fetch to load data and set the data to the state
 * **/
