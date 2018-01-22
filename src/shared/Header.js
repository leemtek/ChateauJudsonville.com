import React from "react";
import '../App.css';

const app_header = () => {
  return (
    <header id="header">
      {/* Top Nav */}
      <header id="topNav">
        <div className="container">

          {/* Top Nav */}
          <a className="logo" href="index.html">
            <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/logo_alt.png" height="50" alt="" />
          </a>

          {/* Mobile Menu Button */}
          <button className="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
            <i className="fa fa-bars"></i>
          </button>

          {/* Top Nav */}
          <div className="navbar-collapse nav-main-collapse collapse">
            <nav className="nav-main">
              <ul id="topMain" className="nav nav-pills nav-main">
                <li className="mega-menu dropdown active">
                  <a className="dropdown-toggle" href="#">Home</a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="row">
                        <div className="col-md-4">
                          <h3>Home Samples #1</h3>
                          <ul>
                            <li><a href="index.html"><i className="fa fa-angle-right"></i> Home Version 1</a></li>
                            <li><a href="index-home-2.html"><i className="fa fa-angle-right"></i> Home Version 2</a></li>
                            <li><a href="index-home-3.html"><i className="fa fa-angle-right"></i> Home Version 3</a></li>
                            <li><a href="index-home-4.html"><i className="fa fa-angle-right"></i> Home Version 4</a></li>
                            <li><a href="index-home-5.html"><i className="fa fa-angle-right"></i> Home Version 5</a></li>
                            <li><a href="index-home-6.html"><i className="fa fa-angle-right"></i> Home Version 6</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h3>Home Samples #2</h3>
                          <ul>
                            <li className="active"><a href="index-home-7.html"><i className="fa fa-angle-right"></i> Home Version 7</a></li>
                            <li><a href="index-home-8.html"><i className="fa fa-angle-right"></i> Home Version 8</a></li>
                            <li><a href="index-home-9.html"><i className="fa fa-angle-right"></i> Home Version 9</a></li>
                            <li><a href="index-home-10.html"><i className="fa fa-angle-right"></i> Home Version 10</a></li>
                            <li><a href="index-home-11.html"><i className="fa fa-angle-right"></i> Home Version 11</a></li>
                            <li><a href="index-home-12.html"><i className="fa fa-angle-right"></i> Home Version 12</a></li>
                            <li><a href="index-home-13.html"><i className="fa fa-angle-right"></i><span className="label label-danger pull-right">new</span> Home Left Main Menu</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h3>Home Samples #3</h3>
                          <ul>
                            <li><a href="shop-home-1.html"><i className="fa fa-angle-right"></i> Home Shop</a></li>
                            <li><a href="portfolio-home-1.html"><i className="fa fa-angle-right"></i> Home Portfolio</a></li>
                            <li><a href="blog-home-1.html"><i className="fa fa-angle-right"></i> Home Blog</a></li>
                            <li><a href="magazine-home-1.html"><i className="fa fa-angle-right"></i> Home Magazine</a></li>
                            <li><a href="onepage.html"><i className="fa fa-angle-right"></i> Onepage Parallax</a></li>
                            <li><a href="index-why.html"><i className="fa fa-angle-right"></i> <b>Why Choose Epona?</b></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown mega-menu">
                  <a className="dropdown-toggle" href="#">Pages</a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="row">
                        <div className="col-md-3">
                          <h3>Page Samples #1</h3>
                          <ul>
                            <li><a href="page-about-basic.html"><i className="fa fa-angle-right"></i> About Basic</a></li>
                            <li><a href="page-about-us.html"><i className="fa fa-angle-right"></i> About Us</a></li>
                            <li><a href="page-about-me.html"><i className="fa fa-angle-right"></i> About Me</a></li>
                            <li><a href="page-about-team.html"><i className="fa fa-angle-right"></i> About Our Team</a></li>
                            <li><a href="page-services.html"><i className="fa fa-angle-right"></i> Services</a></li>
                            <li><a href="page-careers.html"><i className="fa fa-angle-right"></i> Careers</a></li>
                            <li><a href="page-gallery.html"><i className="fa fa-angle-right"></i> Gallery</a></li>
                            <li><a href="page-article.html"><i className="fa fa-angle-right"></i> Article Page</a></li>
                            <li><a href="page-faq.html"><i className="fa fa-angle-right"></i> FAQ</a></li>
                            <li><a href="page-clients.html"><span className="label label-default pull-right">new</span> <i className="fa fa-angle-right"></i> Clients</a></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h3>Page Samples #2</h3>
                          <ul>
                            <li><a href="page-timeline-centered.html"><i className="fa fa-angle-right"></i> Timeline Centered</a></li>
                            <li><a href="page-timeline-left.html"><i className="fa fa-angle-right"></i> Timeline Left</a></li>
                            <li><a href="page-timeline-right.html"><i className="fa fa-angle-right"></i> Timeline Right</a></li>
                            <li><a href="page-custom-header.html"><i className="fa fa-angle-right"></i> Custom Header</a></li>
                            <li><a href="page-invoice.html"><i className="fa fa-angle-right"></i> Invoice</a></li>
                            <li><a href="page-login.html"><i className="fa fa-angle-right"></i> Login/Register</a></li>
                            <li><a href="page-account-settings.html"><i className="fa fa-angle-right"></i> Account Settings</a></li>
                            <li><a href="page-search.html"> <span className="label label-default pull-right">new</span><i className="fa fa-angle-right"></i> Search Result</a></li>
                            <li><a href="page-user-profile.html"> <span className="label label-default pull-right">new</span><i className="fa fa-angle-right"></i> User Profile</a></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h3>Page Samples #3</h3>
                          <ul>
                            <li><a href="page-pricing-standard.html"><i className="fa fa-angle-right"></i> Pricing Standard</a></li>
                            <li><a href="page-pricing-expanded.html"><i className="fa fa-angle-right"></i> Pricing Expanded</a></li>
                            <li><a href="page-empty.html"><i className="fa fa-angle-right"></i> Empty Page</a></li>
                            <li><a href="page-full.html"><i className="fa fa-angle-right"></i> Page Full Width</a></li>
                            <li><a href="page-left-sidebar.html"><i className="fa fa-angle-right"></i> Page Left Sidebar</a></li>
                            <li><a href="page-right-sidebar.html"><i className="fa fa-angle-right"></i> Page Right Sidebar</a></li>
                            <li><a href="page-side-navigation.html"><i className="fa fa-angle-right"></i> Side Navigation</a></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h3>Page Samples #4</h3>
                          <ul>
                            
                            <li><a href="page-maintenance.html"><i className="fa fa-angle-right"></i> Maintenance</a></li>
                            <li><a href="page-coming-soon.html"><i className="fa fa-angle-right"></i> Coming Soon</a></li>
                            <li><a href="page-privacy.html"><i className="fa fa-angle-right"></i> Privacy Policy</a></li>
                            <li><a href="page-terms.html"><i className="fa fa-angle-right"></i> Terms Of Services</a></li>
                            <li><a href="page-404.html"><i className="fa fa-angle-right"></i> 404 Error</a></li>
                            <li><a href="page-sitemap.html"><i className="fa fa-angle-right"></i> Sitemap</a></li>
                            <li><a href="email.html"><i className="fa fa-star-o"></i> Email Template</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" href="#">Features</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-toggle" href="#"><i className="fa fa-heart-o"></i> Headers</a>
                      <ul className="dropdown-menu">
                        <li><a href="feature-header-transparent.html">Transparent Header</a></li>
                        <li><a href="feature-header-translucent.html">Translucent Header</a></li>
                        <li><a href="feature-header-below-slider.html">Header Below Slider</a></li>
                        <li><a href="feature-header-sticky.html">Sticky Header</a></li>
                        <li><a href="feature-header-1.html">Header #1 (default)</a></li>
                        <li><a href="feature-header-2.html">Header #2</a></li>
                        <li><a href="feature-header-3.html">Header #3</a></li>
                        <li><a href="feature-header-4.html">Header #4</a></li>
                        <li><a href="feature-header-5.html">Header #5</a></li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-toggle" href="#"><i className="fa fa-heart-o"></i> Footers</a>
                      <ul className="dropdown-menu">
                        <li><a href="feature-footer-1.html#footer">Footer #1 (default)</a></li>
                        <li><a href="feature-footer-2.html#footer">Footer #2</a></li>
                        <li><a href="feature-footer-3.html#footer">Footer #3</a></li>
                        <li><a href="feature-footer-4.html#footer">Footer #4</a></li>
                        <li><a href="feature-footer-5.html#footer">Footer #5</a></li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-toggle" href="#"><i className="fa fa-heart"></i> Sliders</a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-toggle" href="#">Revolution Slider</a>
                          <ul className="dropdown-menu">
                            <li><a href="slider-revolution-fixed-width.html">Fixed Width</a></li>
                            <li><a href="slider-revolution-full-width.html">Full Width</a></li>
                            <li><a href="slider-revolution-full-screen.html">Full Screen</a></li>
                            <li><a href="slider-revolution-video-gallery.html">Video Gallery</a></li>
                            <li><a href="slider-revolution-captions.html">Captions</a></li>
                            <li><a href="slider-revolution-thumbnav-small.html">Thumbnails Nav - Small</a></li>
                            <li><a href="slider-revolution-thumbnav-large.html">Thumbnails Nav - Large</a></li>
                            <li><a href="../Documentation/Revolution_Slider/editor/00.Editor-Captions.html" target="_blank" rel="nofollow"><i className="fa fa-pencil-square-o"></i> <em>Captions Editor</em></a></li>
                            <li><a href="../Documentation/Revolution_Slider/editor/01.Editor-Transitions.html" target="_blank" rel="nofollow"><i className="fa fa-pencil-square-o"></i> <em>Transitions Editor</em></a></li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-toggle" href="#">Layer Slider</a>
                          <ul className="dropdown-menu">
                            <li><a href="slider-layer-full-width.html">Full Width</a></li>
                            <li><a href="slider-layer-fixed-width.html">Fixed Width</a></li>
                            <li><a href="slider-layer-captions.html">Captions</a></li>
                            <li><a href="slider-layer-video-gallery.html">Video Gallery</a></li>
                            <li><a href="slider-layer-carousel.html">Carousel</a></li>
                            <li><a href="slider-layer-3d-transitions.html">2D &amp; 3D Transitions</a></li>
                            <li><a href="slider-layer-thumbnav.html">Thumbnails Nav</a></li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-toggle" href="#">Flex Slider</a>
                          <ul className="dropdown-menu">
                            <li><a href="slider-flex-fixed-width.html">Fixed Width</a></li>
                            <li><a href="slider-flex-full-width.html">Full Width</a></li>
                            <li><a href="slider-flex-carousel.html">Carousel</a></li>
                            <li><a href="slider-flex-video-gallery.html">Video Gallery</a></li>
                            <li><a href="slider-flex-thumbnav.html">Thumbnails Nav</a></li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-toggle" href="#">OWL Carousel</a>
                          <ul className="dropdown-menu">
                            <li><a href="slider-owl-full-width.html">Full Width</a></li>
                            <li><a href="slider-owl-fixed-width.html">Fixed Width</a></li>
                            <li><a href="slider-owl-fixed-progress.html">Fixed Width + Progress</a></li>
                            <li><a href="slider-owl-carousel.html">Carousel</a></li>
                            <li><a href="slider-owl-fade.html">Effect: Fade</a></li>
                            <li><a href="slider-owl-backslide.html">Effect: Back Slide</a></li>
                            <li><a href="slider-owl-godown.html">Effect: Go Down</a></li>
                            <li><a href="slider-owl-fadeup.html">Effect: Fade Up</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-toggle" href="#"><i className="fa fa-code"></i> Shortcodes</a>
                      <ul className="dropdown-menu">
                        <li><a href="shortcodes-counters.html">Counters</a></li>
                        <li><a href="shortcodes-toggles.html">Toggles</a></li>
                        <li><a href="shortcodes-forms-bootstrap.html">Forms</a></li>
                        <li><a href="shortcodes-tables-default.html"><span className="label label-warning pull-right">New</span> Tables</a></li>
                        <li><a href="shortcodes-buttons-default.html">Buttons</a></li>
                        <li><a href="shortcodes-html-editor.html"><span className="label label-warning pull-right">New</span> HTML Editors</a></li>
                        <li><a href="shortcodes-tabs-and-accordions.html">Tabs &amp; Accordions</a></li>
                        <li><a href="shortcodes-callouts.html">Callouts</a></li>
                        <li><a href="shortcodes-dividers.html">Dividers</a></li>
                        <li><a href="shortcodes-lightbox.html">Lightbox</a></li>
                        <li><a href="shortcodes-icons-and-boxes.html">Icons &amp; Boxes</a></li>
                        <li><a href="shortcodes-carousel.html">Carousel</a></li>
                        <li><a href="shortcodes-progress-bars.html">Progress Bars</a></li>
                        <li><a href="shortcodes-alerts.html">Alerts</a></li>
                        <li><a href="shortcodes-video.html">Video &amp; Audio</a></li>
                        <li><a href="shortcodes-tooltips-and-popover.html">Tooltips &amp; Popovers</a></li>
                        <li><a href="shortcodes-modals.html">Modals</a></li>
                        <li><a href="shortcodes-thumbnails.html">Thumbnails</a></li>
                        <li><a href="shortcodes-testimonials.html">Testimonials</a></li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-toggle" href="#">Icons</a>
                      <ul className="dropdown-menu">
                        <li><a href="feature-icons-fontawsome.html">Font Awsome</a></li>
                        <li><a href="feature-icons-glyphicons.html">Glyphicons Icons</a></li>
                        <li><a href="feature-icons-weather.html">Weather Icons</a></li>
                        <li><a href="feature-icons-linecons.html">Linecons Icons</a></li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-toggle" href="#">Maps</a>
                      <ul className="dropdown-menu">
                        <li><a href="feature-maps-google.html">Google Maps</a></li>
                        <li><a href="feature-maps-vectorial.html">Vectorial Maps</a></li>
                      </ul>
                    </li>
                    <li><a href="feature-animations.html">Animations</a></li>
                    <li><a href="feature-grid.html">Grid System</a></li>
                    <li><a href="feature-typography.html">Typography</a></li>
                    <li>
                      <a className="dropdown-toggle" href="#"><b>Infinite Menu</b></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Menu Level 2</a></li>
                        <li>
                          <a className="dropdown-toggle" href="#">Menu Level 2</a>
                          <ul className="dropdown-menu">
                            <li><a href="#">Menu Level 3</a></li>
                            <li>
                              <a className="dropdown-toggle" href="#">Menu Level 3</a>
                              <ul className="dropdown-menu">
                                <li><a href="#">Menu Level 4</a></li>
                                <li>
                                  <a className="dropdown-toggle" href="#">Menu Level 4</a>
                                  <ul className="dropdown-menu">
                                    <li><a href="#">Menu Level 5</a></li>
                                    <li><a href="#">! INFINITE LEVELS !</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" href="#">Portfolio</a>
                  <ul className="dropdown-menu">
                    <li><a href="portfolio-2-columns.html">2 Columns</a></li>
                    <li><a href="portfolio-3-columns.html">3 Columns</a></li>
                    <li><a href="portfolio-4-columns.html">4 Columns</a></li>
                    <li className="divider"></li>
                    <li><a href="portfolio-single-basic.html">Single Basic</a></li>
                    <li><a href="portfolio-single-slider.html">Single Full Slider</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" href="#">Blog</a>
                  <ul className="dropdown-menu">
                    <li><a href="blog-sidebar-left.html">Blog Sidebar Left</a></li>
                    <li><a href="blog-sidebar-right.html">Blog Sidebar Right</a></li>
                    <li><a href="blog-without-sidebar.html">Blog Without Sidebar</a></li>
                    <li className="divider"></li>
                    <li><a href="blog-single-sidebar.html">Blog Single With Sidebar</a></li>
                    <li><a href="blog-single-without-sidebar.html">Blog Single Without Sidebar</a></li>
                  </ul>
                </li>
                <li className="dropdown mega-menu">
                  <a className="dropdown-toggle" href="#">Shop</a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="row">
                        <div className="col-md-4">
                          <h3>Shop Pages</h3>
                          <ul>
                            <li><a href="shop-page-full.html"><i className="fa fa-angle-right"></i> Shop Full Width</a></li>
                            <li><a href="shop-page-full-product.html"><i className="fa fa-angle-right"></i> Shop Product Full Width</a></li>
                            <li><a href="shop-page-sidebar.html"><i className="fa fa-angle-right"></i> Shop Sidebar</a></li>
                            <li><a href="shop-page-sidebar-product.html"><i className="fa fa-angle-right"></i> Shop Product Sidebar</a></li>
                            <li><a href="shop-page-cart.html"><i className="fa fa-angle-right"></i> Shop Cart</a></li>
                            <li><a href="shop-page-checkout.html"><i className="fa fa-angle-right"></i> Shop Checkout</a></li>
                            <li><a href="shop-page-order-history.html"><i className="fa fa-angle-right"></i> Order History</a></li>
                            <li><a href="shop-page-order-history-summary.html"><i className="fa fa-angle-right"></i> Order History Summary</a></li>
                            <li><a href="page-invoice.html"><i className="fa fa-angle-right"></i> Invoice</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h3>Shop Components</h3>
                          <ul>
                            <li><a href="shop-components-featured-slider.html"><i className="fa fa-certificate"></i> Featured Slider</a></li>
                            <li><a href="shop-components-featured-products.html"><i className="fa fa-trophy"></i> Featured Products</a></li>
                            <li><a href="shop-components-product-carousel.html"><i className="fa fa-code"></i> Product Carousel</a></li>
                            <li><a href="shop-components-product-categories.html"><i className="fa fa-tags"></i> Product Categories</a></li>
                            <li><a href="page-login.html"><i className="fa fa-user"></i> Login/Register</a></li>
                            <li><a href="page-account-settings.html"><i className="fa fa-key"></i> Account Settings</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h3>Widgetized</h3>
                          <img className="img-responsive" src="assets/images/demo/desktop.png" alt="" />
                          <p>Epona Megamenu can be 1-4 columns, full width, including widgetized images.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown pull-right">
                  <a className="dropdown-toggle" href="#">Contact</a>
                  <ul className="dropdown-menu">
                    <li><a href="contact-1.html">Contact Version 1</a></li>
                    <li><a href="contact-2.html">Contact Version 2</a></li>
                    <li><a href="contact-3.html">Contact Version 3</a></li>
                    <li><a href="contact-4.html">Contact Version 4</a></li>
                    <li><a href="contact-5.html">Contact Version 5</a></li>
                  </ul>
                </li>
              </ul>

            </nav>
          </div> {/* /Top Nav */}

        </div> {/* /.container */}
      </header>
      {/* /Top Nav */}

    </header>
  );
}
export default app_header;
