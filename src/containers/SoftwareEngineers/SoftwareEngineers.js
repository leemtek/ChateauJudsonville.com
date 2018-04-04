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
                <img className="img-responsive" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/images/profile-duaneleem.jpg" alt="Duane Leem" />
                <h3>
                  <span>Duane Leem</span> <br />
                  <small>Project Manager</small>
                </h3>
              </a>
              <div className="caption text-left">
                <p>With extensive knowledge in the IT Field and Project Management Duane is able to lead his team to complete quality work and designs for his clients, Duane is a veteran in the field. While using web development to solve problems and in turn creating solutions. Duane is an avid consumer of knowledge while passing his passion to his Children and those around him.</p>
                <a href="https://www.facebook.com/duaneleem" className="social rounded fa fa-facebook" target="blank"></a>
                <a href="https://www.linkedin.com/in/duaneleem" className="social rounded fa fa-linkedin" target="blank"></a>
                <a href="https://www.duaneleem.com" className="social rounded fa fa-code" target="blank"></a>
              </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="box-content thumbnail text-center">
              <a href="page-about-me.html" className="item-image">
                <img className="img-responsive" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/images/profile-derrickleem.jpg" alt="Derrick Leem" />
                <h3>
                  <span>Derrick Leem</span> <br />
                  <small>Software Engineer</small>
                </h3>
              </a>
              <div className="caption text-left">
                <p>Derrick while doing web development is also currently in school pursuing a degree in computer science. While applying the skills he already had coupled with the new skills through study has propelled him to his current skill level.</p>
                <a href="https://www.linkedin.com/in/derrick-leem/" className="social rounded fa fa-linkedin" target="blank"></a>
              </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="box-content thumbnail text-center">
              <a href="page-about-me.html" className="item-image">
                <img className="img-responsive" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/images/profile-gabetumbaga.jpg" alt="Gabe Tumbaga" />
                <h3>
                  <span>Gabe Tumbaga</span> <br />
                  <small>Web Developer</small>
                </h3>
              </a>
              <div className="caption text-left">
                <p>With experience from multiple aspects in the field Gabe has been apart of a lot. whether its upkeep on ecommerce, React or the many other programming languages he knows. when he's not with his kids or family, you can find him modding Minecraft and tweaking his other favorite games.</p>
                <a href="https://facebook.com/gtumbaga" className="social rounded fa fa-facebook" target="blank"></a>
                <a href="https://twitter.com/gtumbaga" className="social rounded fa fa-twitter" target="blank"></a>
                <a href="https://www.linkedin.com/in/gtumbaga/" className="social rounded fa fa-linkedin" target="blank"></a>
              </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="box-content thumbnail text-center">
              <a href="page-about-me.html" className="item-image">
                <img className="img-responsive" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/images/profile-willcarpio.jpg" alt="Will Carpio and Bart his Dog" />
                <h3>
                  <span>Will Carpio</span> <br />
                  <small>Software Engineer</small>
                </h3>
              </a>
              <div className="caption text-left">
                <p>New to the development team but on the fast track to becoming on par with his peers, Will is versed and knowledgeable in a few languages and on the way to mastering more. When not down working on new project you can usually find him with his dog Bart.</p>
                <a href="https://www.facebook.com/people/Will-Carpio/100008976306275" className="social rounded fa fa-facebook" target="blank"></a>
                <a href="https://twitter.com/Humble_Gatsby" className="social rounded fa fa-twitter" target="blank"></a>
                <a href="https://www.linkedin.com/in/will-carpio-821b1815a/" className="social rounded fa fa-linkedin" target="blank"></a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default softwareengineers;