import './index.css';
import React from 'react';
import Header from '../src/components/Header';
import Footer from "./components/Footer";
import BookList from "./components/BookList";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <BookList/>
            <Footer/>
        </div>
    );
};

export default App;
