import React from "react";

const ClientsCom = ({ img }) => {
  return (
    <>
      <section className="section section-lg bg-transparent text-center">
        <div className="container">
          <h1 className="text-divider">
            <span className="text-divider-item"></span>Our Clients
          </h1>
          <p>
            <span className="d-inline-block" style={{ maxWidth: "550px" }}>
              HATIFONE is modern call center software solutions which eliminates
              the legacy &amp; hardware based old fashioned telephony concept.
              Below are some of our clients
            </span>
          </p>
          <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-6 gallery ">
            {img.map((currE) => {
              return (
                <>
                  <div className="col" key={currE.id}>
                    <img src={currE.image} alt="img" style={currE.styles} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsCom;
