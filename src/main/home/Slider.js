import React from "react";

const slider = () => {
  return <div className="slider fullwidthbanner-container roundedcorners">
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
}

export default slider;