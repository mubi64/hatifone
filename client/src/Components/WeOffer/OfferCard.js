import React from "react";
import ServCards from "../../utils/ServCards";

const OfferCard = (props) => {
  return (
    <>
      <section
        className="pcSection section section-lg bg-transparent text-center"
        id="serv"
      >
        <div className="container">
          <h2 className="text-divider">
            <span className="text-divider-item"></span>What we Offer
          </h2>
          <p>
            <span className="d-inline-block" style={{ maxWidth: "550px" }}>
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

export default OfferCard;
