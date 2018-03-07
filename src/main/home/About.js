import React from "react";

const about = () => {
  return (
    <section className="alternate" id="section-about" styles={{ backgroundColor: '#fff' }}>
      <div className="container">
        <header className="text-center">
          <h2 className="font-dosis">
            <strong>ABOUT CHATEAU JUDSONVILLE</strong>
          </h2>
          <p className="lead">helping you continue to live your life the way youve always have. we strive to meet  your needs while helping you live life to your fullest potentional </p>
          <div className="divider half-margins onepage center">{/* lines divider */}</div>
        </header>

        
        <div className="row">

          <div className="col-md-4 col-sm-6">
            <h4>Services</h4>
            <p className="dropcap">We are a non-medical facility that provide services that caters to meet each Resident's need.</p>
            <p>Here is a list of services we offer:</p>
            <ul>
              <li>Continuous 24-Hour care and supervision</li>
              <li>3 nutritious meals daily and snacks available</li>
              <li>Special diet prescribed by physician</li>
              <li>Assistance with personal activities of daily living (dressing, toileting, eating, bathing, grooming and mobility)</li>
              <li>Assistance in taking the prescribed and over the counter medications</li>
              <li>Laundering of personal clothing</li>
              <li>Clean bed and bath linens weekly or as often as needed</li>
              <li>Cleaning of Resident's room</li>
              <li>Assistance in meeting the necessary medical and physical needs of the resident</li>
              <li>Daily Observation of changes in physical, mental, emotional and social functioning.</li>
              <li>Planned and activity program including arrangement for utilization of available community resources.</li>
              <li>Bedside care and tray service for minor temporary illnesses or recovery from surgery.</li>
            </ul>
          </div>

          <div className="col-md-4 col-sm-6">
            <h4>Amenities</h4>
            <p>Established in the beautiful city of Antioch California near the Lone Tree Golf and our Contra Loma Regional Park.</p>

            <p>Our facility offers:<br />
            2 Private Bedroom fully-furnished
            1 Shared Bedroom fully-furnished
            Each room includes HD Flat Screen Tv
            with telephone.</p>

            <p>*Unfurnished room option available
            upon request if Resident prefers their
            own furniture.</p>
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
                  Our mission is to fully meet the needs of each of our Residents' while challenging them to the highest level of personal independence in 
                  the tasks of daily living.<br /><br />
                  We strive to enhance and enrich the lives of our Resident's by creating a safe and comfortable environment that
                  tends and stimulates individuals emotionally, physically, mentally and spiritually.
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
<<<<<<< HEAD
                  A modern single level Californian home, 3,477sq feet with ample open space. Bathrooms with updated counterspace and sinks. A place we've created where you can kick up your feet and call home.
=======
                  A modern single floor Californian home 3,477sq feet with lots of open space. Bathrooms with updated counter space and sinks. A place we've 
                  created where you can kick up your feet and call home.
>>>>>>> b0e9dd8b67fb33731d92cc972a1c1674b7ad0cc5
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
<<<<<<< HEAD
                  We're always striving to aim higher by helping our residents to continue living their most <b>meaningful</b> life in a comfortable setting with our help.                  
=======
                    We're always striving to aim higher by helping our residents to continue living their most <strong>meaningful</strong> life in a comfortable setting with our help.
>>>>>>> b0e9dd8b67fb33731d92cc972a1c1674b7ad0cc5
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
<<<<<<< HEAD
                  We aim to surround ourselves and our residents with the highest caliber caregivers around. Do you feel like you're one of these people? Please drop us a line or E-mail,  we'd love to sit down and meet with you!
=======
                  We aim to keep surround ourselves and our residents with the highest caliber caregivers around. Do you feel like you're one of these people? 
                  Please Send us an e-mail and we'd love to sit down to meet with you!
>>>>>>> b0e9dd8b67fb33731d92cc972a1c1674b7ad0cc5
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
<<<<<<< HEAD

};
=======
}

>>>>>>> b0e9dd8b67fb33731d92cc972a1c1674b7ad0cc5
export default about;