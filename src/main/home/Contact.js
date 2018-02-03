import React from "react";

const contact = () => {
  return (
    <section id="section-contact" className="alternate">
      <div className="container">

        <header className="text-center">

          <h1 className="font-dosis">
            CONTACT
          </h1>
          
          <div className="divider half-margins onepage center">{/* lines divider */}</div>

        </header>

        <div className="text-center">
          <h4>Drop us a line or <strong>just say</strong> <em><strong>Hello!</strong></em></h4>
          <p>
            Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit. <br />
            Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc.
          </p>
        </div>

        {/* Form */}
        <form id="onepageContact" method="post" action="#" className="onepage block form-inline margin-top60">
          <div className="row">
            <div className="col-md-4"><input required className="fullwidth" type="text" name="contact_name" id="contact_name" value="" placeholder="NAME *" title="Name" /></div>
            <div className="col-md-4"><input required className="fullwidth" type="email" name="newsletter_email" id="newsletter_email" value="" placeholder="EMAIL *" title="Email" /></div>
            <div className="col-md-4"><input className="fullwidth" type="text" name="contact_subject" id="contact_subject" value="" placeholder="SUBJECT" title="subject" /></div>
          </div>

          <div className="row">
            <div className="col-md-12"><textarea required className="fullwidth" rows="5" name="contact_comment" id="contact_comment" placeholder="MESSAGE *"></textarea></div>
            <div className="col-md-12">
              <button id="contact_submit" className="btn btn-primary">SEND MESSAGE</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default contact;