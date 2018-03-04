import React, { Component } from 'react';
import '../App.css';

import Slider from "./sections/Slider";
import Callout from "./sections/Callout";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

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

        {/* GALLERY */}
        <Gallery />
        {/* /GALLERY */}

        {/* CONTACT */}
        <Contact />
        {/* /CONTACT */}
      </div>
    );
  }
}

export default Home;
