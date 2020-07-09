import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Carouse from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
    <div className="header"><Header /></div>

    <div className="carousel"><Carouse /></div>

   
    <div className="footer"><Footer /></div> 

    </div>
  );
}

export default App;
