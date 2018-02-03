import React, { Component } from 'react';
import '../App.css';

import Slider from "./home/Slider";
import Callout from "./home/Callout";
import About from "./home/About";
import Contact from "./home/Contact";

class Home extends Component {
  render() {
    return (
      <div>
        {/* REVOLUTION SLIDER */}
        <Slider />
        {/* /REVOLUTION SLIDER */}

        {/* DARK CALLOUT */}
        <Callout />
        {/* /DARK CALLOUT */}

        {/* ABOUT */}
        <About />
        {/* /ABOUT */}

        {/* CONTACT */}
        <Contact />
        {/* /CONTACT */}
      </div>
    );
  }
}

export default Home;
