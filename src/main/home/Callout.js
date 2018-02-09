import React from "react";

const callout = () => {
  return (
    <div className="callout dark">{/* add "styleBackgroundColor" class for colored background and white text OR "dark" for a dark callout */}
      <div className="container">

        <div className="row">

          <div className="col-md-9">{/* title + shortdesc */}
            <h3>Praesent sapien massa, convallis a pellentesque nec.</h3>
            <p>Nulla porttitor accumsan tincidunt.</p>
          </div>

          <div className="col-md-3">{/* button */}
            <a href="#purchase" className="btn btn-primary btn-lg">Contact Us Today</a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default callout;