import './index.css';
import React from 'react';
import Header from '../src/components/Header';
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
        <BookCard name={"Harry Potter and the Sorcerer's Stone"} author={"J. K. Rowling"} price={14.99} image={""}/>
      <Footer />
    </div>
  );
};

export default App;
