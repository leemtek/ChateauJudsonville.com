import React from "react";

const gallery = () => {
  return (
    <section id="section-work" className="alternate">
      <div className="container">
        <header className="text-center">
          <h1 className="font-dosis">
            <strong>OUR</strong> WORK
          </h1>

          <div className="divider half-margins onepage center">{/* lines divider */}</div>

        </header>
        
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et.</p>

        <div id="portfolio">
          <ul className="nav nav-pills isotope-filter isotope-filter noborder" data-sort-id="isotope-list" data-option-key="filter">
            <li  data-option-value="*" className="active"><a href="#">Show All</a></li>
            <li data-option-value=".development"><a href="#">Development</a></li>
            <li data-option-value=".photography"><a href="#">Photography</a></li>
            <li data-option-value=".design"><a href="#">Design</a></li>
          </ul>

          <div className="row">
            <ul className="sort-destination isotope" data-sort-id="isotope-list">
              <li className="sotope-item col-sm-6 col-md-4 development">{/* item */}
                <div className="item-box">
                  <figure>
                    <a className="item-hover" href="portfolio-single-basic.html">
                      <span className="overlay color2"></span>
                      <span className="inner">
                        <span className="block fa fa-plus fsize20"></span>
                        <strong>PROJECT</strong> DETAIL
                      </span>
                    </a>
                    <img className="img-responsive" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/demo/portfolio/a1.jpg" width="260" height="260" alt="" />
                  </figure>
                  <div className="item-box-desc">
                    <h4>Chateau Judsonville Project</h4>
                    <small className="styleColor">29 June, 2014</small>
                  </div>
                </div>
              </li>

              <li className="sotope-item col-sm-6 col-md-4 photography">{/* item 2 */}
                <div className="item-box">
                  <figure>
                    <a className="item-hover lightbox" href="http://www.youtube.com/watch?v=W7Las-MJnJo" data-plugin-options='{"type":"iframe"}'>
                      <span className="overlay color2"></span>
                      <span className="inner">
                        <span className="block fa fa-plus fsize20"></span>
                        <strong>VIEW</strong> VIDEO
                      </span>
                    </a>
                    <img className="img-responsive" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/demo/portfolio/a2.jpg" width="260" height="260" alt="" />
                  </figure>
                  <div className="item-box-desc">
                    <h4>Video Project</h4>
                    <small className="styleColor">29 June, 2014</small>
                  </div>
                </div>
              </li>

              <li className="sotope-item col-sm-6 col-md-4 design">{/* item 3 */}
                <div className="item-box">
                  <figure>
                    <a className="item-hover" href="portfolio-single-basic.html">
                      <span className="overlay color2"></span>
                      <span className="inner">
                        <span className="block fa fa-plus fsize20"></span>
                        <strong>PROJECT</strong> DETAIL
                      </span>
                    </a>
                    <img className="img-responsive" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/demo/portfolio/a3.jpg" width="260" height="260" alt="" />
                  </figure>
                  <div className="item-box-desc">
                    <h4>Chateau Judsonville Project</h4>
                    <small className="styleColor">29 June, 2014</small>
                  </div>
                </div>
              </li>

              <li className="sotope-item col-sm-6 col-md-4 photography">{/* item 4 */}
                <div className="item-box">
                  <figure>
                    <a className="item-hover" href="portfolio-single-basic.html">
                      <span className="overlay color2"></span>
                      <span className="inner">
                        <span className="block fa fa-plus fsize20"></span>
                        <strong>PROJECT</strong> DETAIL
                      </span>
                    </a>
                    <img className="img-responsive" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/demo/portfolio/a4.jpg" width="260" height="260" alt="" />
                  </figure>
                  <div className="item-box-desc">
                    <h4>Chateau Judsonville Project</h4>
                    <small className="styleColor">29 June, 2014</small>
                  </div>
                </div>
              </li>

              <li className="sotope-item col-sm-6 col-md-4 development">{/* item 5 */}
                <div className="item-box">
                  <figure>
                    <a className="item-hover lightbox" href="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/demo/portfolio/a1.jpg" data-plugin-options='{"type":"iframe"}'>
                      <span className="overlay color2"></span>
                      <span className="inner">
                        <span className="block fa fa-plus fsize20"></span>
                        <strong>VIEW</strong> VIDEO
                      </span>
                    </a>
                    <img className="img-responsive" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/demo/portfolio/a5.jpg" width="260" height="260" alt="" />
                  </figure>
                  <div className="item-box-desc">
                    <h4>Video Project</h4>
                    <small className="styleColor">29 June, 2014</small>
                  </div>
                </div>
              </li>

              <li className="sotope-item col-sm-6 col-md-4 design">{/* item 6 */}
                <div className="item-box">
                  <figure>
                    <a className="item-hover" href="portfolio-single-basic.html">
                      <span className="overlay color2"></span>
                      <span className="inner">
                        <span className="block fa fa-plus fsize20"></span>
                        <strong>PROJECT</strong> DETAIL
                      </span>
                    </a>
                    <img className="img-responsive" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/demo/portfolio/a6.jpg" width="260" height="260" alt="" />
                  </figure>
                  <div className="item-box-desc">
                    <h4>Chateau Judsonville Project</h4>
                    <small className="styleColor">29 June, 2014</small>
                  </div>
                </div>
              </li>
            </ul>
          </div>{/* /.masonry-container */}

        </div>{/* portfolio */}
      </div>
    </section>
  );
}

export default gallery;