import React, { Component } from 'react'
import Formsy from 'formsy-react';
import CjInput from "../../../../components/UI/Input/HomeContact/CjInput";
import CjTextArea from "../../../../components/UI/Input/HomeContact/CjTextArea";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";

export default class Contact extends Component {
  isTest = false;
  
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
  } // constructor

  componentDidMount() {
    // Initially hide the success message.
    document.getElementById("message-success").style.display = "none";
    document.getElementById("message-recaptcha-error").style.display = "none";
  } // componentDidMount()

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
      
      // Output model.
      fetch((this.isTest) ? console.log(model) : "");

      // Submit results to GCF and indicate status.
      fetch((this.isTest) ? "http://localhost:5000/leemtek-secure-forms/us-central1/chateaujudsonville/send" : "https://us-central1-leemtek-secure-forms.cloudfunctions.net/chateaujudsonville/send", {
        method: "post",
        body: JSON.stringify(model), 
        headers: new Headers({"Content-Type": "application/json"})
      })
      .then(response => response.json())
      .then((jsonResult) => {
        if(jsonResult.status === "email sent") {
          // Hide recaptcha and submit button.
          document.getElementById("recaptcha").style.display = "none";
          document.getElementById("message-required-recaptcha").style.display = "none";
          document.getElementById("button-send").style.display = "none";
          
          // Indicate a success message.
          document.getElementById("message-success").style.display = "initial";
          document.getElementById("message-recaptcha-error").style.display = "none";
        } else if(jsonResult.status === "recaptcha failure") {
          // Show recaptcha and submit button.
          document.getElementById("recaptcha").style.display = "initial";
          document.getElementById("message-required-recaptcha").style.display = "initial";
          document.getElementById("button-send").style.display = "initial";
          
          // A recaptcha error occurred.
          document.getElementById("message-success").style.display = "none";
          document.getElementById("message-recaptcha-error").style.display = "initial";
        } else {
          // Show recaptcha and submit button.
          document.getElementById("recaptcha").style.display = "initial";
          document.getElementById("message-required-recaptcha").style.display = "initial";
          document.getElementById("button-send").style.display = "initial";
          
          // A recaptcha error occurred.
          document.getElementById("message-success").style.display = "none";
          document.getElementById("message-recaptcha-error").style.display = "initial";
        }
      });
    } else {
      document.getElementById("message-required-recaptcha").style.display = "initial";
      document.getElementById("button-send").style.display = "initial";
      document.getElementById("message-success").style.display = "none";
      document.getElementById("message-recaptcha-error").style.display = "none";
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
    } else {
      this.setState({
        recaptcha: {
          valid: false,
          response: null
        } // recaptcha
      }); // setState
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
                  id="recaptcha"
                  ref="recaptcha"
                  sitekey="6LeEpk4UAAAAACUCpNPGTI9-9V8b5-swJGH9XBTs"
                  onChange={this.handleRecaptchaOnChange}
                />
                <small id="message-required-recaptcha" className="label label-danger" style={{display: "none"}}>Recaptcha Required</small>
              </div>{/* /col */}
            </div>{/* /row */}
            
            <div className="row" style={{paddingTop: "20px"}}>
              <div className="col-md-4">
                <button id="button-send" className="btn btn-primary" disabled={!this.state.canSubmit}>SEND MESSAGE</button>
                <div id="message-success" className="alert alert-success"><strong>Success!</strong> Your message has been received!</div>
                <div id="message-recaptcha-error" className="alert alert-danger"><strong>Oh snap!</strong> Your ReCAPTCHA is incorrect :(</div>
              </div>
            </div>{/* /row */}
          </Formsy>
        </div>
      </section>
    ); // return
  } // render()
}

