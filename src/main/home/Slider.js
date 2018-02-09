import React from "react";

const slider = () => {
  return (
    <div className="slider fullwidthbanner-container roundedcorners">
      <div className="fullwidthbanner" data-height="650">
        <ul className="hide">

          {/* SLIDE */}
          <li data-transition="fade" data-slotamount="14"  data-masterspeed="300" data-delay="10000">

            {/* COVER IMAGE */}
            <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/1x1.png" data-lazyload="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/images/slider1.jpg" alt="Chateau Judsonville Home" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" />

            <div className="tp-caption medium_text lfl stl"
              data-x="63"
              data-y="200"
              data-speed="300"
              data-start="500"
              data-easing="easeOutExpo">WELCOME TO
            </div>

            <div className="tp-caption large_bold_white sft stb"
              style={{ fontSize: "3em" }}
              data-x="60"
              data-y="223"
              data-speed="300"
              data-start="1000"
              data-easing="easeOutExpo">CHATEAU JUDSONVILLE
            </div>

            <div className="tp-caption italic small_light_white sft stb"
              data-x="63"
              data-y="286"
              data-speed="500"
              data-start="1200"
              data-easing="easeOutExpo">Assisted Living &bull; Memory Care
            </div>

            <div className="tp-caption small_light_white sft stb"
              data-x="60"
              data-y="340"
              data-speed="500"
              data-start="1400"
              data-easing="easeOutExpo">
                <div style={{width: "50%"}}>
                  Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. <br />
                  Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. <br />
                  Vivamus suscipit tortor eget felis porttitor volutpat.
                </div>
            </div>

            <div className="tp-caption sft medium_light_white" 
              data-x="600" 
              data-y="160" 
              data-speed="600" 
              data-start="1600" 
              data-easing="easeOutExpo"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/images/slider1_bedroom.jpg" alt="Chateau Judsonville Bedroom" />
            </div>

          </li>

          {/* SLIDE */}
          <li data-transition="fade" data-slotamount="7" data-masterspeed="300" data-target="_blank" data-saveperformance="off" >

            <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/1x1.png" data-lazyload="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/images/slider_pexels-photo-129208.jpg" alt="Contact Us" data-bgfit="cover" data-bgposition="center bottom" data-bgrepeat="no-repeat" />

            {/* <div className="tp-caption sft medium_light_white" 
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
            </div> */}

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
              data-endspeed="300"
              style={{fontSize: "32px"}}
              >We're Here To Help
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
              data-endspeed="300">Find out more about us.
            </div>

            <div className="tp-caption sfr tp-resizeme" 
              data-x="70" 
              data-y="360" 
              data-speed="750" 
              data-start="1800" 
              data-easing="easeOutExpo" 
              data-splitin="none" 
              data-splitout="none" 
              data-elementdelay="0.1" 
              data-endelementdelay="0.1" 
              data-endspeed="300"><a href="#section-contact" className="btn btn-primary btn-lg"><i className="fa fa-phone"></i> Contact Us</a>
            </div>

          </li>

        </ul>
        <div className="tp-bannertimer"></div>
      </div>
    </div>
  );
}

export default slider;