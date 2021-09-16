import React from "react";
import Page1Header from "../pages/page1/Page1Header";

const NotFount = () => {
  return (
    <>
      <Page1Header active="404" />
      <section className="section section-lg bg-transparent">
        <div className="container">
          <div className="row row-30 justify-content-center text-center">
            <div className="col-md-8">
              <h1 className="text-divider">
                <span className="text-divider-item"></span>404 :(
              </h1>
              <h4 className="text-primary fw-medium">
                The page you’re looking for doesn’t exist
              </h4>
              <p>
                Unfortunately, the page you are looking for doesn’t exist. You
                may have mistyped the address or the page may have moved.
              </p>
              <a className="btn btn-secondary btn-ujarak" href="/">
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFount;
