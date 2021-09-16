import React from "react";
import CountUp from "react-countup";

const Benefites = () => {
  return (
    <div>
      <section className="section section-lg bg-secondary text-center">
        <div className="container">
          <h2 className="text-divider">
            <span className="text-divider-item"></span>Our Benefits
          </h2>
          <p>
            <span className="d-inline-block" style={{ maxWidth: "550px" }}>
              This software-based solution helps the organizations to minimize
              the business cost by avoiding the use of expensive hardware that
              has high maintenance costs.
            </span>
          </p>
          <div className="row row-30 text-start">
            <div className="col-sm-6 col-md-4">
              <div className="counter-listed">
                <div className="counter-value h1">
                  <span className="counter">
                    <CountUp end={100} duration={0.1} />
                  </span>
                  <span className="counter-postfix">+</span>
                </div>
                <div className="counter-title h4">Deployments</div>
                {/* <div className="counter-text">
                  Tellus mauris a diam maecenas sed adipiscing commodo elit.
                </div>
                <ul className="list-marked-1 counter-list">
                  <li>Justo nec ultrices</li>
                  <li>Nisi quis eleifend</li>
                  <li>Habitasse platea dictumst</li>
                </ul> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="counter-listed">
                <div className="counter-value h1">
                  <span className="counter">
                    <CountUp end={100} duration={0.1} />
                  </span>
                  <span className="counter-postfix">%</span>
                </div>
                <div className="counter-title h4">Positive reviews</div>
                {/* <div className="counter-text">
                  Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </div>
                <ul className="list-marked-1 counter-list">
                  <li>Egestas dui id</li>
                  <li>Dolor sit amet</li>
                  <li>Quis blandit turpis</li>
                </ul> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="counter-listed">
                <div className="counter-value h1">
                  <span className="counter">
                    <CountUp end={50} duration={0.1} />
                  </span>
                  <span className="counter-postfix">+</span>
                </div>
                <div className="counter-title h4">Work force</div>
                {/* <div className="counter-text">
                  Lobortis scelerisque dui faucibus in viverra maecenas.
                </div>
                <ul className="list-marked-1 counter-list">
                  <li>Consectetur adipiscing elit</li>
                  <li>Dolore magna aliqua</li>
                  <li>Arcu non odio</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefites;
