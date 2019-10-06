import React from "react";

const callout = () => {
  return (
    <div className="callout dark">{/* add "styleBackgroundColor" class for colored background and white text OR "dark" for a dark callout */}
      <div className="container">

        <div className="row">

          <div className="col-md-9">{/* title + shortdesc */}
            <h3>Independence with the right amount of dependence.</h3>
            <p>Live a strong and independent life like you've always had.</p>
          </div>

          <div className="col-md-3">{/* button */}
            <a href="#section-contact" className="btn btn-primary btn-lg">Contact Us Today</a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default callout;