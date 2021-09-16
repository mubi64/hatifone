import React, { useEffect } from "react";
import Page1Header from "../Page1Header";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return (
    <>
      <Page1Header
        active="Contact us"
        className="section breadcrumbs-custom bg-transparent"
      />
      <ContactForm />
    </>
  );
};

export default ContactUs;
