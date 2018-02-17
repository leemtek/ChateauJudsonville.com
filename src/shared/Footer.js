import React from "react";

const footer = () => {
  return (
    <footer id="footer">
      <div className="container">

        <div className="row">

          {/* col #1 */}
          <div className="logo_footer dark col-md-3">

            <img alt="" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/images/logo-dark.png" height="50" className="logo" />

            <p>"Treating residents as family."</p>

            <p className="block">
              <a href="https://maps.google.com/?q=5220+Judsonville+Dr.+Antioch,%C2%A0+94531&entry=gmail&source=g" target="_blank">5220 Judsonville Dr.<br />Antioch, CA 94531</a><br />
              Email: <a href="mailto:ChateauJudsonville@gmail.com">ChateauJudsonville@gmail.com</a><br />
              Phone: <a href="tel:9257268584">925-726-8584</a><br />
              Fax: 925-204-1500<br /><br />
              CA License #075601534
            </p>

            <p className="block">
              <a href="https://www.facebook.com/ChateauJudsonville1" target="_blank" className="social fa fa-facebook"></a>

              {/* <a href="#" className="social fa fa-twitter"></a>
              <a href="#" className="social fa fa-google-plus"></a>
              <a href="#" className="social fa fa-linkedin"></a> */}
            </p>
          </div>
          {/* /col #1 */}

          {/* col #2 */}
          <div className="spaced col-md-3 col-sm-4">

          </div>
          {/* /col #2 */}

          {/* col #3 */}
          <div class="spaced col-md-3 col-sm-4">
            <h4>About <strong>Us</strong></h4>
            <p>
              <strong>Norman & Malou Bolotaolo</strong><br />
              <em>Owners/Administrators</em>
            </p>
          </div>
          {/* /col #3 */}
            
          {/* col #4 */}
          <div className="spaced col-md-3 col-sm-4">
            <h4>About <strong>Us</strong></h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.7447549999943!2d-121.82032698438086!3d37.959745409268294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808558069e1ec975%3A0x19a19011fb134041!2s5220+Judsonville+Dr%2C+Antioch%2C+CA+94531!5e0!3m2!1sen!2sus!4v1518723180380" width="100%" height="450" frameborder="0" styles='border:0' allowfullscreen></iframe>
          </div>
          {/* /col #4 */}

        </div>

      </div>

      <hr />

      <div className="copyright">
        <div className="container text-center fsize12">
          Web Development by <a href="https://duaneleem.com" target="_blank" title="React Programming" className="copyright">Duane Leem</a> &bull; All Right Reserved &copy; Chateau Judsonville.
        </div>
      </div>
    </footer>
  );
}
export default footer;