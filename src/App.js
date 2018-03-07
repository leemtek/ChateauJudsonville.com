import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

// Components
import Header from "./components/Navigation/Header/Header";
import Footer from "./components/Navigation/Footer/Footer";
import Home from "./containers/Home/Home";
import SoftwareEngineers from "./containers/SoftwareEngineers/SoftwareEngineers";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        
        <Switch>
          <Route path="/software-engineers" component={ SoftwareEngineers } />
          <Route path="/" exact component={ Home } />
        </Switch>

        <Footer />
      </div>
    );
  } // render()
} // App

export default App;
