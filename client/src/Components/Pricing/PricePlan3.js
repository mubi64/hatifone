import React from "react";
import AboutHeading from "../About/AboutHeading";

const PricePlan3 = () => {
  return (
    <>
      <section className="section section-lg bg-100 text-center">
        <div className="container">
          <AboutHeading
            title="Pricing Plan 3"
            pera="Leo non praesent volutpat aliquet placerat. Lorem eget ultrices faucibus mi. Adipiscing porta eu nisi, amet dictum non sit et. Enim."
          />
          <div className="row row-xl row-30 justify-content-center text-start">
            <div className="col-xs-10 col-sm-6 col-lg-4">
              <article className="pricing-extended">
                <div className="icon pricing-extended-icon">
                  <img
                    src="images/icon-01-48x48.png"
                    alt=""
                    width="48"
                    height="48"
                  />
                </div>
                <div className="h4 pricing-extended-title">Basic Plan</div>
                <div className="h3 pricing-extended-price">$3.52</div>
                <ul className="pricing-extended-list small">
                  <li>
                    <div className="pricing-extended-list-title">PC Repair:</div>
                    <div className="pricing-extended-list-meta">1 hour</div>
                  </li>
                  <li>
                    <div className="pricing-extended-list-title">System Setup:</div>
                    <div className="pricing-extended-list-meta">15 min</div>
                  </li>
                  <li>
                    <div className="pricing-extended-list-title">
                      Connecting peripherals:
                    </div>
                    <div className="pricing-extended-list-meta">Yes</div>
                  </li>
                </ul>
              </article>
            </div>
            <div className="col-xs-10 col-sm-6 col-lg-4">
              <article className="pricing-extended pricing-accent">
                <div className="icon pricing-extended-icon">
                  <img
                    src="images/icon-02-48x48.png"
                    alt=""
                    width="48"
                    height="48"
                  />
                </div>
                <div className="h4 pricing-extended-title">Standard Plan</div>
                <div className="h3 pricing-extended-price">$5.40</div>
                <ul className="pricing-extended-list small">
                  <li>
                    <div className="pricing-extended-list-title">
                      Laptop Repair:
                    </div>
                    <div className="pricing-extended-list-meta">2 hour</div>
                  </li>
                  <li>
                    <div className="pricing-extended-list-title">OS Updating:</div>
                    <div className="pricing-extended-list-meta">30 min</div>
                  </li>
                  <li>
                    <div className="pricing-extended-list-title">Free support:</div>
                    <div className="pricing-extended-list-meta">Yes</div>
                  </li>
                </ul>
              </article>
            </div>
            <div className="col-xs-10 col-sm-6 col-lg-4">
              <article className="pricing-extended">
                <div className="icon pricing-extended-icon">
                  <img
                    src="images/icon-03-48x48.png"
                    alt=""
                    width="48"
                    height="48"
                  />
                </div>
                <div className="h4 pricing-extended-title">Ultimate plan</div>
                <div className="h3 pricing-extended-price">$7.63</div>
                <ul className="pricing-extended-list small">
                  <li>
                    <div className="pricing-extended-list-title">PC Upgrade:</div>
                    <div className="pricing-extended-list-meta">3 hour</div>
                  </li>
                  <li>
                    <div className="pricing-extended-list-title">
                      System Unit Cleaning:
                    </div>
                    <div className="pricing-extended-list-meta">3 hour</div>
                  </li>
                  <li>
                    <div className="pricing-extended-list-title">
                      OS Optimization:
                    </div>
                    <div className="pricing-extended-list-meta">Yes</div>
                  </li>
                </ul>
              </article>
            </div>
          </div>
          <a className="btn btn-primary btn-ujarak" href="/">
            Sign up for Repair
          </a>
        </div>
      </section>
    </>
  );
};

export default PricePlan3;
