import React from "react";
import ServCards from "../../utils/ServCards";
import ServicesCard from "./ServicesCard";

const Servicescom = () => {
  return (
    <>
      <section className="section section-lg bg-transparent text-center">
        <div className="container">
          <h1 className="text-divider">
            <span className="text-divider-item"></span>What we Offer
          </h1>
          <p>
            <span classname="d-inline-block" style={{ maxwidth: "550px" }}>
              HATIFONE is modern call center software solutions which eliminates
              the legacy &amp; hardware based old fashioned telephony concept.
            </span>
          </p>
          <div className="row row-30 justify-content-center text-lg-start">
            <ServCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicescom;
