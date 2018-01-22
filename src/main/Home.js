import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div>
        {/* REVOLUTION SLIDER */}
        <div className="slider fullwidthbanner-container roundedcorners">
          <div className="fullwidthbanner" data-height="650">
            <ul className="hide">

              {/* SLIDE */}
              <li data-transition="fade" data-slotamount="14"  data-masterspeed="300" data-delay="10000">

                {/* COVER IMAGE */}
                <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/1x1.png" data-lazyload="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/demo/layerslider/bg4.jpg" alt="" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" />

                <div className="tp-caption medium_text lfl stl"
                  data-x="63"
                  data-y="200"
                  data-speed="300"
                  data-start="500"
                  data-easing="easeOutExpo">EPONA TEMPLATE
                </div>

                <div className="tp-caption large_bold_white sft stb"
                  data-x="60"
                  data-y="223"
                  data-speed="300"
                  data-start="1000"
                  data-easing="easeOutExpo">MULTIPURPOSE
                </div>

                <div className="tp-caption italic small_light_white sft stb"
                  data-x="63"
                  data-y="286"
                  data-speed="500"
                  data-start="2000"
                  data-easing="easeOutExpo">Marketing &bull; Design &bull; Multipurpose
                </div>

                <div className="tp-caption sft medium_light_white" 
                  data-x="600" 
                  data-y="160" 
                  data-speed="600" 
                  data-start="1500" 
                  data-easing="easeOutExpo"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/demo/desktop_slider.png" alt="" />
                </div>

              </li>

              {/* SLIDE */}
              <li data-transition="fade" data-slotamount="7" data-masterspeed="300" data-link="http://www.stepofweb.com/" data-target="_blank" data-saveperformance="off" >

                <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/1x1.png" data-lazyload="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/demo/layerslider/slide-b-1.png" alt="" data-bgfit="cover" data-bgposition="center bottom" data-bgrepeat="no-repeat" />

                <div className="tp-caption sft medium_light_white" 
                  data-x="right" 
                  data-y="bottom" data-voffset="100"
                  data-speed="1000" 
                  data-start="1000" 
                  data-easing="easeOutExpo"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/demo/layerslider/slide-b-4.png" alt="" />
                </div>

                <div className="tp-caption sft medium_light_white" 
                  data-x="right"  data-hoffset="-145"
                  data-y="430" 
                  data-speed="1000" 
                  data-start="1500" 
                  data-easing="easeOutExpo"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/demo/layerslider/bi-colored-butterfly-source_ijc.gif" alt="" />
                </div>

                <div className="tp-caption block_black sfl tp-resizeme" 
                  data-x="70" 
                  data-y="272" 
                  data-speed="750" 
                  data-start="1000" 
                  data-easing="easeOutExpo" 
                  data-splitin="none" 
                  data-splitout="none" 
                  data-elementdelay="0.1" 
                  data-endelementdelay="0.1" 
                  data-endspeed="300">Epona Multipurpose Template
                </div>

                <div className="tp-caption block_black sfl tp-resizeme" 
                  data-x="70" 
                  data-y="316" 
                  data-speed="750" 
                  data-start="1400" 
                  data-easing="easeOutExpo" 
                  data-splitin="none" 
                  data-splitout="none" 
                  data-elementdelay="0.1" 
                  data-endelementdelay="0.1" 
                  data-endspeed="300">Loaded With Options, And Is Simply A Joy To Use
                </div>

                <div className="tp-caption block_black sfr tp-resizeme" 
                  data-x="70" 
                  data-y="360" 
                  data-speed="750" 
                  data-start="1800" 
                  data-easing="easeOutExpo" 
                  data-splitin="none" 
                  data-splitout="none" 
                  data-elementdelay="0.1" 
                  data-endelementdelay="0.1" 
                  data-endspeed="300">Premium Sliders That Are Easy To Use With Any Content
                </div>

              </li>

            </ul>
            <div className="tp-bannertimer"></div>
          </div>
        </div>
        {/* /REVOLUTION SLIDER */}

        {/* DARK CALLOUT */}
        <div className="callout dark arrow-down">
          <div className="container text-center">

            <h2>Powerful : Responsive : Multipurpose</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et.</p>

          </div>
        </div>
        {/* /DARK CALLOUT */}

        {/* SECTION */}
        <section className="alternate">
          <div className="container">
            
            
            <header className="text-center">
              <h2>Why choose Epona?</h2>
              <p className="lead">We thrive on making Epona the most complete and trusted template on wrapbootstrap</p>
              <div className="divider half-margins onepage center">{/* lines divider */}</div>
            </header>

            
            <div className="row">

              <div className="col-md-4 col-sm-6">
                <h4>Passion</h4>
                <p className="dropcap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et elementum erat, biluctus mi. Quisque consequat risus quis tincidunt fringilla. Ut sed rhoncus metus, in rhoncus dolor. Integer tempor ligula est, sed luctus metus tempus a. Pellentesque tempor libero et arcu bibendum mollis. Aliquam eu odio eget diam egestas euismod vel sed orc aenean.</p>
              </div>

              <div className="col-md-4 col-sm-6">
                <h4>Precision</h4>
                <p>Pellentesque tempor libero et arcu bibendum mollis. Donec eu porta elit. Aliquam porta sollicitudin ante, ac fermentum orci mattis et. Phasellus ac nibh eleifend, sagittis purus nec, elementum massa. Quisque tincidunt sapien a sem porttitor, id convallis dolor pharetra. Donec tempor cursus facilisis. Ut eu elementum arcu, vel hendrerit nisi. Cras sed euismod nibh, a adipiscing.</p>
              </div>

              <div className="col-md-4 col-sm-12">

                {/* ACCORDION */}
                <div className="accordion panel-group transparent" id="accordion2">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion2" href="#acordion_1">
                          <i className="fa fa-plus"></i>
                          Our Company Mission
                        </a>
                      </h4>
                    </div>
                    <div id="acordion_1" className="collapse">
                      <div className="panel-body">
                        Lorem Ipsum, tellus ac cursus commodo, mauris sit condim eser ntumsi nibh, uum a justo vitaes amet risus amets un. Posi sectetut amet fermntum orem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion2" href="#acordion_2">
                          <i className="fa fa-plus"></i>
                          The Epona Inside
                        </a>
                      </h4>
                    </div>
                    <div id="acordion_2" className="collapse">
                      <div className="panel-body">
                        Lorem Ipsum, tellus ac cursus commodo, mauris sit condim eser ntumsi nibh, uum a justo vitaes amet risus amets un. Posi sectetut amet fermntum orem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion2" href="#acordion_3">
                          <i className="fa fa-plus"></i>
                          The Epona Philosophy
                        </a>
                      </h4>
                    </div>
                    <div id="acordion_3" className="collapse">
                      <div className="panel-body">
                        Lorem Ipsum, tellus ac cursus commodo, mauris sit condim eser ntumsi nibh, uum a justo vitaes amet risus amets un. Posi sectetut amet fermntum orem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion3" href="#acordion_4">
                          <i className="fa fa-plus"></i>
                          Join our great team
                        </a>
                      </h4>
                    </div>
                    <div id="acordion_4" className="collapse">
                      <div className="panel-body">
                        Lorem Ipsum, tellus ac cursus commodo, mauris sit condim eser ntumsi nibh, uum a justo vitaes amet risus amets un. Posi sectetut amet fermntum orem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.
                      </div>
                    </div>
                  </div>
                </div>
                {/* /ACCORDION */}

              </div>

            </div>



          </div>
        </section>
        {/* /SECTION */}
      </div>
    );
  }
}

export default Home;
