import React from "react";

const contact = () => {
  return <section id="section-contact" class="alternate">
    <div class="container">

      <header class="text-center">

        <h1 class="font-dosis">
          CONTACT
        </h1>
        
        <div class="divider half-margins onepage center">{/* lines divider */}</div>

      </header>

      <div class="text-center">
        <h4>Drop us a line or <strong>just say</strong> <em><strong>Hello!</strong></em></h4>
        <p>
          Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit. <br />
          Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc.
        </p>
      </div>

      {/* Form */}
      <form id="onepageContact" method="post" action="#" class="onepage block form-inline margin-top60">
        <div class="row">
          <div class="col-md-4"><input required class="fullwidth" type="text" name="contact_name" id="contact_name" value="" placeholder="NAME *" title="Name" /></div>
          <div class="col-md-4"><input required class="fullwidth" type="email" name="newsletter_email" id="newsletter_email" value="" placeholder="EMAIL *" title="Email" /></div>
          <div class="col-md-4"><input class="fullwidth" type="text" name="contact_subject" id="contact_subject" value="" placeholder="SUBJECT" title="subject" /></div>
        </div>

        <div class="row">
          <div class="col-md-12"><textarea required class="fullwidth" rows="5" name="contact_comment" id="contact_comment" placeholder="MESSAGE *"></textarea></div>
          <div class="col-md-12">
            <button id="contact_submit" class="btn btn-primary">SEND MESSAGE</button>
          </div>
        </div>
      </form>


    </div>
  </section>
}

export default contact;