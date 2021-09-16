import React from "react";

const Package = (props) => {
  return (
    <section className="section section-lg bg-100 text-center">
      <div className="container">
        <h2 className="text-divider">
          <span className="text-divider-item"></span>{props.title}
        </h2>
        <p>
          <span className="d-inline-block" style={{ maxWidth: "550px" }}>
            {props.pera}
          </span>
        </p>
       
        <div className="row row-xl row-30 row-lg-50 justify-content-center">
          <div className="col-xs-10 col-sm-6 col-md-4">
            <article className="pricing-classic">
              <div className="pricing-classic-header">
                <div className="h4 pricing-classic-title">Basic</div>
                <div className="text-caption pricing-classic-subtitle">
                  Perfect for Simple Repair
                </div>
              </div>
              <div className="pricing-classic-body">
                <div>
                  <div className="h2 price-size pricing-classic-price">
                    $15.00
                  </div>
                  <a
                    className="btn pricing-classic-btn btn-ujarak btn-block btn-default"
                    href="/"
                  >
                    Order now
                  </a>
                  <ul className="pricing-classic-list">
                    <li>PC Repair</li>
                    <li>Virus Removal</li>
                  </ul>
                </div>
                <div className="pricing-information">
                  <div className="icon mdi mdi-information-outline"></div>
                  <div className="small pricing-information-text">
                    Other services can be ordered at an extra rate.
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-xs-10 col-sm-6 col-md-4">
            <article className="pricing-classic pricing-accent">
              <div className="pricing-classic-header">
                <div className="h4 pricing-classic-title">Standard</div>
                <div className="text-caption pricing-classic-subtitle">
                  Most popular
                </div>
              </div>
              <div className="pricing-classic-body">
                <div>
                  <div className="h2 price-size pricing-classic-price">
                    $20.00
                  </div>
                  <a
                    className="btn pricing-classic-btn btn-ujarak btn-block btn-primary"
                    href="/"
                  >
                    Order now
                  </a>
                  <ul className="pricing-classic-list">
                    <li>Laptop Repair</li>
                    <li>Data Recovery</li>
                    <li>OS Installation</li>
                  </ul>
                </div>
                <div className="pricing-information">
                  <div className="icon mdi mdi-information-outline"></div>
                  <div className="small pricing-information-text">
                    Thermal paste replacement and cleaning are available for
                    additional $20.
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-xs-10 col-sm-6 col-md-4">
            <article className="pricing-classic">
              <div className="pricing-classic-header">
                <div className="h4 pricing-classic-title">Ultimate</div>
                <div className="text-caption pricing-classic-subtitle">
                  All services are included
                </div>
              </div>
              <div className="pricing-classic-body">
                <div>
                  <div className="h2 price-size pricing-classic-price">
                    $25.00
                  </div>
                  <a
                    className="btn pricing-classic-btn btn-ujarak btn-block btn-default"
                    href="/"
                  >
                    Order now
                  </a>
                  <ul className="pricing-classic-list">
                    <li>Replacing Thermal Paste</li>
                    <li>Computer Assembly</li>
                    <li>Mac Repair</li>
                    <li>Network Support</li>
                    <li>Free Diagnostics</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
