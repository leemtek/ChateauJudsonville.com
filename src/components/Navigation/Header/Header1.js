import React from "react";
import '../../../App.css';

const app_header1 = () => {
  return (
    <header id="topNav" className="fixed">
				<div className="container">
          {/* Logo */}
					<a className="logo onepage" href="https://duaneleem.com/">
						<img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/logo.png" height="50" alt="duaneleem" />
					</a>

					{/* Mobile Menu Button */}
					<button className="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
						<i className="fa fa-bars"></i>
					</button>

					{/* Top Nav */}
					<div className="navbar-collapse nav-main-collapse collapse pull-right">
						<nav className="nav-main">

							<ul id="topMain" className="nav nav-pills nav-main">

              <li><a href="https://duaneleem.com/" target="_blank">ABOUT <span>about us</span></a></li>
              <li><a href="https://blog.duaneleem.com/" target="_blank">BLOG <span>view blog</span></a></li>
              <li><a href="mailto:Duane@LeemTek.com" target="_blank">CONTACT <span>write us</span></a></li>
							</ul>

						</nav>
					</div>
					{/* /Top Nav */}

				</div>{/* /.container */}
			</header>
  );
}
export default app_header1;
