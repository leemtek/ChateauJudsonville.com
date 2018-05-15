import React from "react";
import '../../../App.css';

const app_header_default = () => {
  return (
    <header id="topNav" className="fixed">
				<div className="container">
          {/* Logo */}
					<a className="logo onepage" href="/">
						<img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/chateaujudsonville/assets/images/logo.png" height="50" alt="Chateau Judsonville" />
					</a>

					{/* Mobile Menu Button */}
					<button className="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
						<i className="fa fa-bars"></i>
					</button>

					{/* Top Nav */}
					<div className="navbar-collapse nav-main-collapse collapse pull-right">
						<nav className="nav-main">

							<ul id="topMain" className="nav nav-pills nav-main">
              	<li><a href="/">HOME <span>welcome</span></a></li>
							</ul>

						</nav>
					</div>
					{/* /Top Nav */}

				</div>{/* /.container */}
			</header>
  );
}
export default app_header_default;
