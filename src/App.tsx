import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/navigation/Header';
import Footer from "./components/navigation/Footer";
import BookList from "./components/BookList";
import BookDetailsPage from "./components/BookDetailsPage";
import LoginPage from "./pages/login/LoginPage";
import CartDetails from "./components/cart/CartDetails";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/book/:id" element={<BookDetailsPage />} />
                    <Route path={"/login"} element={<LoginPage />} />
                    <Route path={"/checkout"} element={<CartDetails/>} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
