import React from 'react';
import "../styles/MainStyleSheet.css";
import ContactForm from './Contact_form.js';


const ContactUs = () => {

    return (
      <section id="contact">
                      <h4 className="lead">Contact us to get more information</h4>
          <div className="row">
              <ContactForm />
          </div>

        </section>
        );
  }

  export default ContactUs