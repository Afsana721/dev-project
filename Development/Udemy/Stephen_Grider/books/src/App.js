import { useState, useEffect } from "react";
import axios from 'axios';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [ books, setBooks ] = useState([]);     //empty array, currently no book

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  useEffect(() => {
      fetchBooks();
  }, []);


  const editBookById = async(id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    })
    console.log(response);

    const updatedBooks = books.map((book) => {
      if(book.id === id){
        return { ...book, ...response.data };
      }
        return book;
    });
      setBooks(updatedBooks);
  };

  const deleteBookById = async(id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    //create new array after deleting by id
      const updatedBooks = books.filter((book) => {
        return book.id !== id ;
      });
      setBooks(updatedBooks);

      };
  
  //event handler, call eventhandler any time user enter some text to BookCreate component
const createBook = async (title) => {
  const response = await axios.post('http://localhost:3001/books', {
    title
  });
  //console.log(response);

   const updateBooks = [...books, response.data];
  setBooks(updateBooks);

  };                                               

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit = { editBookById } books= { books } onDelete= { deleteBookById } />
     <BookCreate onCreate = {createBook} />
    </div>
  );
}

export default App;
