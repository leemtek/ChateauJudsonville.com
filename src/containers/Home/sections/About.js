import React from "react";

const about = () => {
  return (
    <section className="alternate" id="section-about" styles={{ backgroundColor: '#fff' }}>
      <div className="container">
        <header className="text-center">
          <h2 className="font-dosis">
            <strong>ABOUT CHATEAU JUDSONVILLE</strong>
          </h2>
          <p className="lead">Helping you continue to live your life the way you've always have. We strive to meet your needs while helping you 
          live life to your fullest potential.</p>
          <div className="divider half-margins onepage center">{/* lines divider */}</div>
        </header>

        
        <div className="row">

          <div className="col-md-4 col-sm-6">
            <h4>Services</h4>
            <p className="dropcap">We are a non-medical facility that specifically caters to each Resident's needs.</p>
            <p>We offer:</p>
            <ul>
              <li>Continuous 24-hour care and supervision</li>
              <li>3 Nutritious meals and snacks daily</li>
              <li>Special diet prescribed by a physician</li>
              <li>Assistance with personal daily activities (eating, bathing, dressing, grooming, toileting, and mobility)</li>
              <li>Assistance in taking medications</li>
              <li>Notification of resident’s family physician, and other appropriate person/agency of resident’s condition</li>
              <li>Planning or arranging medical and dental appointments.</li>
              <li>Planned activity program including arrangement for utilization of available community resources</li>
              <li>Bedside care and food service for minor temporary illness or recovery from surgery</li>
              <li>Weekly housekeeping</li>
            </ul>
          </div>

          <div className="col-md-4 col-sm-6">
            <h4>Amenities</h4>
            <p>Located in the beautiful city of Antioch California, near the Lone Tree Golf and Contra Loma Regional Park.</p>

            <p>Our facility offers:</p>
            
            <ul>
              <li>2 Private Bedroom fully-furnished</li>
              <li>1 Shared Bedroom fully-furnished, <br />
                * Each room includes HD Flat Screen Television, <br />
                * Telephone</li>
              <li>Lodging for private and semi-private rooms</li>
              <li>Functional living room</li>
              <li>3 Bathrooms</li>
              <li>Kitchen</li>
              <li>Spacious backyard and garden for recreational activities</li>
              <li>Wi-Fi Connection</li>
              <li>Accessible to hospitals and shopping centers</li>
            </ul>

            <p>* Unfurnished room option available upon request if Resident prefers their own furniture.</p>
          </div>

          <div className="col-md-4 col-sm-12">
            <h4>Vision</h4>
            <p>Our vision is to witness our residents achieve self-fulfillment as they are surrounded by people who love and support them physically, emotionally, mentally, and spiritually.</p>

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
                <div id="acordion_1">
                  <div className="panel-body">
                    <p>Our mission is to cultivate our resident's sense of worth and purpose and belonging through supporting their everyday needs while treating them with utmost respect and dignity.</p>
                    <p>We endeavor to enhance and enrich their lives by creating a safe and comfortable environment that encourages them to enjoy and express themselves.</p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion2" href="#acordion_2">
                      <i className="fa fa-plus"></i>
                      The Chateau Judsonville Inside
                    </a>
                  </h4>
                </div>
                <div id="acordion_2" className="collapse">
                  <div className="panel-body">
                  A modern single floor Californian home 3,477sq feet with lots of open space. Bathrooms with updated counter space and sinks. A place we've 
                  created where you can kick up your feet and call home.
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion2" href="#acordion_3">
                      <i className="fa fa-plus"></i>
                      The Chateau Judsonville Philosophy
                    </a>
                  </h4>
                </div>
                <div id="acordion_3" className="collapse">
                  <div className="panel-body">
                    We're always striving to aim higher by helping our residents to continue living their most <strong>meaningful</strong> life in a comfortable setting with our help.
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion3" href="#acordion_4">
                      <i className="fa fa-plus"></i>
                      Join Our Great Team
                    </a>
                  </h4>
                </div>
                <div id="acordion_4" className="collapse">
                  <div className="panel-body">
                  We aim to keep surround ourselves and our residents with the highest caliber caregivers around. Do you feel like you're one of these people? 
                  Please Send us an e-mail and we'd love to sit down to meet with you!
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