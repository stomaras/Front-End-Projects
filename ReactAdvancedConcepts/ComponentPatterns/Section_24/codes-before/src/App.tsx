import { useEffect, useState } from "react";
import Loader from "./components/loader/loader";
import "./App.css";
import axios from "axios";
import Book from "./components/books/book";
import Books from "./components/books/books";

export type Book = {
  id: number;
  title: string;
  author?: string;
};


export const fetchBooks = async (count: number) => {
  const response = await axios.get(`/api/books?limit=${count}`);
  return response.data;
};

function App() {
  const [books, setBooks] = useState<Book[]>([]);


  return (
    <main className="w-full max-w-2xl py-16 mx-auto">
      <Books 
       setBooks={setBooks}
      >
        {books.map((book) => {
          return <Book title={book.title} author={book.author}/>;
        })}
      </Books>
    </main>
  );
}

export default App;
