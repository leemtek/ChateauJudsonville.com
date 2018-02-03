import React from "react";
import '../App.css';

const app_header = () => {
  return (
    <header id="topNav" className="fixed">
				<div className="container">
          {/* Logo */}
					<a className="logo onepage" href="index.html">
						<img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/logo.png" height="50" alt="" />
					</a>

					{/* Mobile Menu Button */}
					<button className="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
						<i className="fa fa-bars"></i>
					</button>

					{/* Top Nav */}
					<div className="navbar-collapse nav-main-collapse collapse pull-right">
						<nav className="nav-main">

							<ul id="topMain" className="nav nav-pills nav-main">
								<li className="dropdown">
									<a className="scrollTo dropdown-toggle" href="#wrapper">
										HOME <span>welcome</span>
									</a>
									<ul className="dropdown-menu">
										<li><a href="index.html"><i className="fa fa-reply"></i> Default Home</a></li>
										<li><a className="scrollTo" href="#wrapper"><i className="fa fa-home"></i> Onepage Home</a></li>
									</ul>
								</li>
								<li><a className="scrollTo" href="#section-about">ABOUT <span>about us</span></a></li>
								<li><a className="scrollTo" href="#section-work">PORTFOLIO <span>projects</span></a></li>
								<li><a className="scrollTo" href="#section-contact">CONTACT <span>write us</span></a></li>
							</ul>

						</nav>
					</div>
					{/* /Top Nav */}

				</div>{/* /.container */}
			</header>
  );
}
export default app_header;
