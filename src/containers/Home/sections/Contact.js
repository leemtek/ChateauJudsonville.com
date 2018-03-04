import React, { Component } from 'react'
import Formsy from 'formsy-react';
import CjInput from "../../../components/UI/Input/HomeContact/CjInput";
import CjTextArea from "../../../components/UI/Input/HomeContact/CjTextArea";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { canSubmit: false };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  handleSubmit(model) {
    // fetch('http://example.com/', {
    //   method: 'post',
    //   body: JSON.stringify(model)
    // });

    console.log(model);
  }

  render() {
    return (
      <section id="section-contact" className="alternate">
        <div className="container">

          <header className="text-center">

            <h2 className="font-dosis">
              <strong>CONTACT</strong>
            </h2>
            
            <div className="divider half-margins onepage center">{/* lines divider */}</div>

          </header>

          <div className="text-center">
            <h4>Drop us a line or <strong>just say</strong> <em><strong>Hello!</strong></em></h4>
            <p>Have any specific needs or want you would like to discuss? Questions? <strong>We're happy</strong><br />
            to disscuss any needs, wants, or questions you may have. We cant wait to hear from you!</p>
          </div>

          {/* Form */}
          <Formsy id="onepageContact" className="onepage block form-inline margin-top60" onValidSubmit={this.handleSubmit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <div className="row">
              <div className="col-md-4">
                <CjInput className="fullwidth" type="text" 
                  name="contact_name" 
                  placeholder="NAME *" 
                  title="Name"
                  required />
              </div>{/* /.col */}
              <div className="col-md-4">
                <CjInput className="fullwidth" type="email" 
                  name="contact_email"
                  placeholder="EMAIL *" 
                  title="Email"
                  validations="isEmail"
                  validationError="Invalid Email. Required format: username@domain.com"
                  required />
              </div>
              <div className="col-md-4">
                <CjInput className="fullwidth" type="text" 
                name="contact_subject"
                placeholder="SUBJECT" 
                title="subject" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <CjTextArea className="fullwidth" rows="5" type="textarea" 
                  name="contact_message" 
                  placeholder="MESSAGE *"
                  required />
              </div>
              <div className="col-md-12">
                <button className="btn btn-primary" disabled={!this.state.canSubmit}>SEND MESSAGE</button>
              </div>
            </div>
          </Formsy>
        </div>
      </section>
    ); // return
  } // render()
}
