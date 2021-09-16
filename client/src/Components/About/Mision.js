import React from "react";

const Mision = () => {
  return (
    <div>
      <section className="section section-lg bg-transparent">
        <div className="container">
          <div className="row row-30 justify-content-xl-between">
            <div className="col-md-6 d-flex d-xl-block">
              <a
                className="video"
                style={{
                  backgroundImage: "url('images/about-02-520x320.jpg')",
                }}
                data-lightgallery="item"
                href="../../embed/KFVUxSynSXc.html"
              >
                <span className="video-icon icon mdi mdi-play"></span>
              </a>
            </div>
            <div className="col-md-6 col-xl-5">
              <h2 className="text-divider">
                <span className="text-divider-item"></span>Our Mission
              </h2>
              <h4 className="fw-medium text-primary">
                We strive to provide the call center software services at the
                highest level.
              </h4>
              <p style={{ textAlign: "justify" }}>
                This software-based solution helps the organizations to minimize
                the business cost by avoiding the use of expensive hardware that
                has high maintenance costs. Our cloud call/ contact center
                solution which can also perform well as an on-premises call/
                contact center solution can be just perfect for you to run
                inbound, outbound and blended call center campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mision;
