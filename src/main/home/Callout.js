import React from "react";

const callout = () => {
  return <div class="callout dark">{/* add "styleBackgroundColor" class for colored background and white text OR "dark" for a dark callout */}
    <div class="container">

      <div class="row">

        <div class="col-md-9">{/* title + shortdesc */}
          <h3>The best way to grow your business on the internet</h3>
          <p>Check Epona included features and options.</p>
        </div>

        <div class="col-md-3">{/* button */}
          <a href="#purchase" class="btn btn-primary btn-lg">Get Started Now</a>
        </div>

      </div>

    </div>
  </div>
}

export default callout;