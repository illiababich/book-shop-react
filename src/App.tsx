import './index.css';
import React from 'react';
import Header from '../src/components/Header';
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
};

export default App;
