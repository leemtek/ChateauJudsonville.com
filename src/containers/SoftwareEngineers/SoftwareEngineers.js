import React from "react";

const softwareengineers = () => {
  return (
    <div style={{ paddingTop: "60px" }}>
      <section className="page-title">
				<div className="container">
					<header>
            {/* Breadcrumb */}
						<ul className="breadcrumb">
							<li><a href="/">Home</a></li>
							<li className="active">Software Engineers</li>
						</ul>

						{/* Page Title */}
            <h2>Software Engineers</h2>
					</header>
				</div>			
			</section>

      <section className="container">

        {/* Our Software Engineers */}
        <h3 className="text-center">Our <strong>Software Engineering Team</strong></h3>

        <p className="lead text-center">
          Meet our Software Engineering team who helped build our React web application.
        </p>

        <div className="row" style={{paddingTop: "20px"}}>
          <div className="col-sm-3 col-md-3">
            <div className="box-content thumbnail text-center">
              <a href="page-about-me.html" className="item-image">
                <img className="img-responsive" src="https://theme.stepofweb.com/Epona/v1.4.4/HTML/assets/images/demo/people/fixed-height/9.jpg" alt="Duane Leem" />
                <h3>
                  <span>Duane Leem</span> <br />
                  <small>Project Manager</small>
                </h3>
              </a>
              <div className="caption text-left">
                <p>Loves to help people solve their complex problems using the power of Web Programming. Loves to brag to his kids how coding is awesome.</p>
                <a href="https://www.facebook.com/duaneleem" className="social rounded fa fa-facebook"></a>
              </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="box-content thumbnail text-center">
              <a href="page-about-me.html" className="item-image">
                <img className="img-responsive" src="https://theme.stepofweb.com/Epona/v1.4.4/HTML/assets/images/demo/people/fixed-height/10.jpg" alt="Derrick Leem" />
                <h3>
                  <span>Derrick Leem</span> <br />
                  <small>Engineer</small>
                </h3>
              </a>
              <div className="caption text-left">
                <p>Lorem ipsum dolor sit amet. Etharums your template rerum facilis dolores nemis.</p>
                <a href="#" className="social rounded fa fa-facebook"></a>
                <a href="#" className="social rounded fa fa-twitter"></a>
                <a href="#" className="social rounded fa fa-google-plus"></a>
              </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="box-content thumbnail text-center">
              <a href="page-about-me.html" className="item-image">
                <img className="img-responsive" src="https://theme.stepofweb.com/Epona/v1.4.4/HTML/assets/images/demo/people/fixed-height/11.jpg" alt="" />
                <h3>
                  <span>Will Carpio</span> <br />
                  <small>Engineer</small>
                </h3>
              </a>
              <div className="caption text-left">
                <p>Lorem ipsum dolor sit amet. Etharums your template rerum facilis dolores nemis omnis fugats vitaes you need this template amets sumon.</p>
                <a href="#" className="social rounded fa fa-facebook"></a>
                <a href="#" className="social rounded fa fa-twitter"></a>
                <a href="#" className="social rounded fa fa-google-plus"></a>
              </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="box-content thumbnail text-center">
              <a href="page-about-me.html" className="item-image">
                <img className="img-responsive" src="https://theme.stepofweb.com/Epona/v1.4.4/HTML/assets/images/demo/people/fixed-height/13.jpg" alt="" />
                <h3>
                  <span>Gabe Tumbaga</span> <br />
                  <small>Engineer</small>
                </h3>
              </a>
              <div className="caption text-left">
                <p>Lorem ipsum dolor sit amet. Etharums your template rerum facilis dolores nemis omnis fugats vitaes you need this template.</p>
                <a href="#" className="social rounded fa fa-facebook"></a>
                <a href="#" className="social rounded fa fa-twitter"></a>
                <a href="#" className="social rounded fa fa-google-plus"></a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default softwareengineers;