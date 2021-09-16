import React from "react";
import { Link } from "react-router-dom";
import Counts from "./Counts";

const AboutBanner = () => {
  return (
    <div>
      <section className="section breadcrumbs-custom bg-100">
        <div className="container">
          <ul className="breadcrumbs-custom-path text-caption">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active">About</li>
          </ul>
        </div>
      </section>
      <section className="section section-lg bg-100">
        <div className="container">
          <div className="row row-30 justify-content-xl-between">
            <div className="col-md-6">
              <h1 className="text-divider">
                <span className="text-divider-item"></span>Who we are and How we
                Work
              </h1>
              <p className="big" style={{ textAlign: "justify" }}>
                Hatifone provides software driven communication to some of the
                leading brands in Pakistan and Middle East. Enabling seamless
                customer experience, this powerful platform is the answer to all
                your communication challenges. Hatifone enhances leads by a
                significant percentage to increase campaign effectiveness, it
                enables you to call back your customers who gave missed calls,
                the call is processed via auto-dialer, connecting the target
                audience with automated IVR messages and agents.
              </p>
              <Counts />
            </div>
            <div className="col-md-6 col-xl-5 d-none d-md-block">
              <div className="img-responsive">
                <img
                  src="images/about-01-470x580.jpg"
                  alt=""
                  width="470"
                  height="580"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutBanner;
