import React, { Component } from 'react';
import './App.css';

import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Home from "./main/Home";

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
