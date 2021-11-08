import React from "react";
import ServicesCard from "../Services/ServicesCard";

const OfferCard = (props) => {
  return (
    <>
      <section className="pcSection section section-lg bg-transparent text-center">
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
            <ServicesCard
              img="images/image1.png"
              title="Software Solution"
              pera="HATIFONE will provide you its call center solution
              software with full traning and go live. You can run your
              inhouse call center with the help of HATIFONE software
              where we will be at your back to support you all the time.
              You can access all reports anytime."
              // price="Price up to $20."
            />
            <ServicesCard
              img="images/image2.png"
              title="Software Solution + Agent"
              pera="HATIFONE will outsource your call center complelety where
              you do not need to hire your inhouse agents or setup call
              center. You can get all report on run time where there is
              a possibility to provide specific report on mobile app on
              demand too."
              // price="Price up to $20."
            />
            <ServicesCard
              img="images/image3.png"
              title="Software Solution + CRM"
              pera="All functionalities of call center software solution + CRM where you can upload raw data of leads in CRM which is fully connected with call center software. Upon login, agent can see all the previous history of calls and sales for specific number, if done in past."
              // price="From $10."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferCard;
