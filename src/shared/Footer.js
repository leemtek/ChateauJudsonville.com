import React from "react";

const footer = () => {
  return (
    <footer id="footer">
      <div className="container">

        <div className="row">

          {/* col #1 */}
          <div className="logo_footer dark col-md-3">

            <img alt="" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/images/logo-dark.png" height="50" className="logo" />

            <p className="block">
              <a href="https://maps.google.com/?q=5220+Judsonville+Dr.+Antioch,%C2%A0+94531&entry=gmail&source=g" target="_blank">5220 Judsonville Dr.<br />Antioch, CA 94531</a><br />
              Email: <a href="mailto:ChateauJudsonville@gmail.com">ChateauJudsonville@gmail.com</a><br />
              Phone: <a href="tel:9257268584">925-726-8584</a><br />
              Fax: 925-204-1500<br /><br />
              License: 075601534
            </p>

            <p className="block">
              <a href="#" className="social fa fa-facebook"></a>
              <a href="#" className="social fa fa-twitter"></a>
              <a href="#" className="social fa fa-google-plus"></a>
              <a href="#" className="social fa fa-linkedin"></a>
            </p>
          </div>
          {/* /col #1 */}

          {/* col #2 */}
          <div className="spaced col-md-3 col-sm-4 hidden-xs">
            <h4>Recent <strong>Posts</strong></h4>
            <ul className="list-unstyled">
              <li>
                <a className="block" href="#">New CSS3 Transitions this Year</a>
                <small>June 29, 2014</small>
              </li>
              <li>
                <a className="block" href="#">Inteligent Transitions In UX Design</a>
                <small>June 29, 2014</small>
              </li>
              <li>
                <a className="block" href="#">Lorem Ipsum Dolor</a>
                <small>June 29, 2014</small>
              </li>
            </ul>
          </div>
          {/* /col #2 */}

          {/* col #3 */}
          <div className="spaced col-md-3 col-sm-4 hidden-xs">
            <h4>Recent <strong>Tweets</strong></h4>
            <ul className="list-unstyled fsize13">
              <li>
                <i className="fa fa-twitter"></i> <a href="#">@John Doe</a> Pilsum dolor lorem sit consectetur adipiscing orem sequat <small className="ago">8 mins ago</small>
              </li>
              <li>
                <i className="fa fa-twitter"></i> <a href="#">@John Doe</a> Remonde sequat ipsum dolor lorem sit consectetur adipiscing  <small className="ago">8 mins ago</small>
              </li>
              <li>
                <i className="fa fa-twitter"></i> <a href="#">@John Doe</a> Imperdiet condimentum diam dolor lorem sit consectetur adipiscing <small className="ago">8 mins ago</small>
              </li>
            </ul>
          </div>
          {/* /col #3 */}

          {/* col #4 */}
          <div className="spaced col-md-3 col-sm-4">
            <h4>About <strong>Us</strong></h4>
            <p>
              Incredibly beautiful responsive Bootstrap Template for Corporate and Creative Professionals.
            </p>

            <h4><small><strong>Subscribe to our Newsletter</strong></small></h4>
            <form id="newsletterSubscribe" method="post" action="php/newsletter.php" className="input-group">
              <input required type="email" className="form-control" name="newsletter_email" id="newsletter_email" value="" placeholder="E-mail Address" />
              <span className="input-group-btn">
                <button className="btn btn-primary">SUBMIT</button>
              </span>
            </form>

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