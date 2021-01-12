import React from 'react';
import './App.css';

import { Switch, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Content from './components/Content/Content';

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import ThreeDModels from "./components/pages/3DModels/3DModels";

function App() {
  return (
    <div className="App">

      <Header />

      {/* <Content/> */}

        <Switch>
          <Route path="/3D Models" component={ThreeDModels}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>

      <Footer />

    </div>
  );
}

export default App;
