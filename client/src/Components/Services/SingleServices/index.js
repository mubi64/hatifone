import React from "react";
import AboutHeaderSection from "../../About/AboutHeaderSection";
import SignUpCom from "../../Home/SignUp/SignUpCom";
import Package from "../../Package";
import ServicesSection2 from "./ServicesSection2";

const SingleServices = () => {
  return (
    <>
      <AboutHeaderSection
        className="section breadcrumbs-custom bg-transparent"
        link="/services"
        item1="SERVICES"
        item2="SINGLE SERVICE"
      />
      <SignUpCom
        class="section section-lg breadcrumbs-custom bg-100"
        title="Laptop Repair / Computer Repair"
        pera="Scelerisque dolor in tincidunt vulputate. Amet fermentum sed arcu in nec duis sapien habitasse id. Lectus ullamcorper non pellentesque."
        agry="I agree to the"
        agrylink1=" Privacy Policy "
        and="and"
        agrylink2=" Terms of Service"
      />
      <ServicesSection2 />
      <Package
        title="Select Your Package"
        pera="Take a look at our pricing plans and select the computer repair services that meet your needs the most."
      />
    </>
  );
};

export default SingleServices;
