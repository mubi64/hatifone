import React from "react";
import Form from "./Form";
import Timer from "./Timer";

const SoonHeader = () => {
  return (
    <>
      <section
        className="section-fullheight bg-primary context-dark text-center"
        style={{ backgroundImage: "url(images/image-24-1920x990.jpg)" }}
      >
        <div className="section-fullheight-inner section-sm justify-content-between">
          <div className="container">
            <a className="brand" href="/">
              <img
                className="brand-logo-dark"
                src="images/logo-default-270x80.png"
                alt=""
                width="135"
                height="40"
              />
              <img
                className="brand-logo-light"
                src="images/logo-inverse-270x80.png"
                alt=""
                width="135"
                height="40"
              />
              <span className="brand-slogan">Computer Repair</span>
            </a>
          </div>
          <div className="section-sm">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-xl-8">
                  <h1 className="text-divider">
                    <span className="text-divider-item"></span>We’re Getting
                    Ready to Launch in
                  </h1>
                  <p>
                    <span className="d-inline-block" style={{maxWidth: "600px" }}>
                      Stay tuned and subscribe to our newsletter.
                    </span>
                  </p>
                  <Timer />
                  <Form />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <p className="rights text-caption">
              <span>&copy;&nbsp;</span>
              <span className="copyright-year"></span>
              <span>&nbsp;</span>
              <span>Fixoria</span>
              <span>.&nbsp;</span>
              <a href="privacy-policy.html">Privacy Policy</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoonHeader;
