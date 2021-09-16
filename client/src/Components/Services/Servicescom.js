import React from "react";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";

const Servicescom = () => {
  return (
    <>
      <section className="section section-lg bg-transparent text-center">
        <div className="container">
          <h1 className="text-divider">
            <span className="text-divider-item"></span>What we Offer
          </h1>
          <p>
            <span className="d-inline-block" style={{ maxWidth: "550px" }}>
              HATIFONE is modern call center software solutions which eliminates
              the legacy & hardware based old fashioned telephony concept.
            </span>
          </p>
          <div className="row row-30 justify-content-center text-lg-start">
            <ServicesCard
              img="images/hatifone_1.jpg"
              title="Software Solution"
              pera="HATIFONE will provide you its call center solution
              software with full traning and go live. You can run your
              inhouse call center with the help of HATIFONE software
              where we will be at your back to support you all the time.
              You can access all reports anytime."
              // price="Price up to $20."
            />
            <ServicesCard
              img="images/hatifone_2.jpg"
              title="Software Solution + Agent"
              pera="HATIFONE will outsource your call center complelety where
              you do not need to hire your inhouse agents or setup call
              center. You can get all report on run time where there is
              a possibility to provide specific report on mobile app on
              demand too."
              // price="Price up to $20."
            />
            <ServicesCard
              img="images/hatifone_3.jpg"
              title="Software Solution + CRM"
              pera="All functionalities of call center software solution + CRM where you can upload raw data of leads in CRM which is fully connected with call center software. Upon login, agent can see all the previous history of calls and sales for specific number, if done in past."
              // price="From $10."
            />
            <div className="col-xs-10 col-sm-6 col-lg-4">
              <div className="box-cta">
                <div className="box-cta-title h3">
                  Contact Us for Your First Free Consultation
                </div>
                <div className="box-cta-text">
                  Hatifone is modern call center software solutions which
                  eliminates the legacy & hardware based old fashioned telephony
                  concept.
                </div>
                <Link
                  className="box-cta-btn btn btn-white btn-ujarak"
                  to="/contactus"
                >
                  Contact us now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicescom;
