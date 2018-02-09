import React from "react";

const about = () => {
  return (
    <section className="alternate" id="section-about" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <header className="text-center">
          <h2>About Chateau Judsonville</h2>
          <p className="lead">Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
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
  );
}

export default about;