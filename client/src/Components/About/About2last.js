import React from "react";
import { Link } from "react-router-dom";

const About2last = () => {
  return (
    <>
      <section className="section section-lg bg-100 text-center text-lg-start">
        <div className="container">
          <div className="row row-40 justify-content-between">
            <div className="col-lg-6 col-xl-5">
              <h2 className="text-divider">
                <span className="text-divider-item"></span>Why People Choose
                Hatifone
              </h2>
              <p>
                <span className="d-inline-block" style={{ maxWidth: "550px" }}>
                  There are dozens of reasons why our clients choose HATIFONE as
                  their call center service provider of choice. We can provide
                  you best available features for call center software and fully
                  integrated CRM.
                </span>
              </p>
              <Link className="btn btn-secondary btn-ujarak" to="/contactus">
                Contact Us for Consultancy
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="row row-30 row-lg-60 justify-content-center justify-content-lg-start">
                <div className="col-xs-6 col-md-4 col-lg-6">
                  <article className="blurb">
                    <div className="icon blurb-icon">
                      <img
                        src="images/icon-04-64x64.png"
                        alt=""
                        width="64"
                        height="64"
                      />
                    </div>
                    <div className="blurb-title h4">Affordable</div>
                    <div className="blurb-text">
                      Hatifone is affordable for any kind of business from large
                      to small size.
                    </div>
                  </article>
                </div>
                <div className="col-xs-6 col-md-4 col-lg-6">
                  <article className="blurb">
                    <div className="icon blurb-icon">
                      <img
                        src="images/icon-05-64x64.png"
                        alt=""
                        width="64"
                        height="64"
                      />
                    </div>
                    <div className="blurb-title h4">Reliable</div>
                    <div className="blurb-text">
                      Hatifone is a reliable software that many clients are
                      already using.
                    </div>
                  </article>
                </div>
                <div className="col-xs-6 col-md-4 col-lg-6">
                  <article className="blurb">
                    <div className="icon blurb-icon">
                      <img
                        src="images/icon-06-64x64.png"
                        alt=""
                        width="64"
                        height="64"
                      />
                    </div>
                    <div className="blurb-title h4">Result-Oriented</div>
                    <div className="blurb-text">
                      Businesses use Hatifone to generate the Result-Oriented
                      sales.
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About2last;
