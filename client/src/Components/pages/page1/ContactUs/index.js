import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import {Link} from "react-router-dom"

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return (
    <>
     <section class="section breadcrumbs-custom bg-transparent">
        <div class="container">
          <ul class="breadcrumbs-custom-path text-caption">
            <li><Link to="/">Home</Link></li>
            <li class="active">Contact us</li>
          </ul>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default ContactUs;
