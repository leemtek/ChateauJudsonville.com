import React, { Component } from 'react'
import Formsy from 'formsy-react';
import CjInput from "../../../components/UI/Input/HomeContact/CjInput";
import CjTextArea from "../../../components/UI/Input/HomeContact/CjTextArea";
import ReCAPTCHA from "react-google-recaptcha";

export default class Contact extends Component {
  isTest = true;
  
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);

    this.state = { 
      canSubmit: false,
      recaptcha: {
        valid: false,
        response: null
      } // recaptcha
    }; // state
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  /**
   * Submits to Google Cloud Function
   * @param {string} model - All form values.
   */
  handleSubmit = (model) => {
    // Simulate JSON response.
    if (this.state.recaptcha.valid === true){
      // Add captcha value to model.
      model.googleResponse = this.state.recaptcha.response;
      
      console.log(model);

      // Submit results to GCF and attain response code.
      let gcfResponse = fetch((this.isTest) ? "http://localhost:5000/leemtek-secure-forms/us-central1/chateaujudsonville/send" : "https://realurl.com/send", {
        method: "post",
        body: JSON.stringify(model), 
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
      .then(response => console.log(response.json()));
    } else {
      document.getElementById("required-recaptcha").style.display = "initial";
    } // if
  }

  /**
   * Set recaptcha value.
   * @param {string} value 
   */
  handleRecaptchaOnChange = (value) => {
    if (value != null) {
      this.setState({
        recaptcha: {
          valid: true,
          response: value
        } // recaptcha
      }); // setState

      // Hide required label.
      document.getElementById("required-recaptcha").style.display = "none";
    } else {
      this.setState({
        recaptcha: {
          valid: false,
          response: null
        } // recaptcha
      }); // setState

      // Display required label.
      document.getElementById("required-recaptcha").style.display = "initial";
    } // else
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
                  name="strName" 
                  placeholder="NAME *" 
                  title="Name"
                  required />
              </div>{/* /.col */}
              <div className="col-md-4">
                <CjInput className="fullwidth" type="email" 
                  name="strEmail"
                  placeholder="EMAIL *" 
                  title="Email"
                  validations="isEmail"
                  validationError="Invalid Email. Required format: username@domain.com"
                  required />
              </div>{/* /col */}
              <div className="col-md-4">
                <CjInput className="fullwidth" type="text" 
                  name="strSubject"
                  placeholder="SUBJECT" 
                  title="subject" />
              </div>{/* /col */}
            </div>{/* /row */}

            <div className="row">
              <div className="col-md-12">
                <CjTextArea className="fullwidth" rows="5" type="textarea" 
                  name="strMessage" 
                  placeholder="MESSAGE *"
                  required />
              </div>{/* /col */}
            </div>{/* /row */}

            <div className="row">
              <div className="col-md-12">
                <ReCAPTCHA
                  ref="recaptcha"
                  sitekey="6LeEpk4UAAAAACUCpNPGTI9-9V8b5-swJGH9XBTs"
                  onChange={this.handleRecaptchaOnChange}
                />
                <small id="required-recaptcha" className="label label-danger" style={{display: "none"}}>Recaptcha Required</small>
              </div>{/* /col */}
            </div>{/* /row */}
            
            <div className="row" style={{paddingTop: "20px"}}>
              <div className="col-md-12">
                <button className="btn btn-primary" disabled={!this.state.canSubmit}>SEND MESSAGE</button>
              </div>
            </div>{/* /row */}
          </Formsy>
        </div>
      </section>
    ); // return
  } // render()
}
