import React, { Component } from 'react';
import '../../App.css';

import Slider from "./Sections/Slider";
import Callout from "./Sections/Callout";
import About from "./Sections/About";
import Gallery from "./Sections/Gallery";
import Contact from "./Sections/Contact/Contact";

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
