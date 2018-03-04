import React, { Component } from 'react';
import './App.css';

import Header from "./components/Navigation/Header/Header";
import Footer from "./components/Navigation/Footer/Footer";
import Home from "./containers/Home/Home";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        
        <Home />

        <Footer />
      </div>
    );
  } // render()
} // App

export default App;
