import React from "react";
import AboutHeading from "../AboutHeading";
import AboutTeamCom from "../AboutTeamCom";

const Team1 = () => {
  return (
    <>
      <section className="section section-lg bg-transparent text-center">
        <div className="container">
          <AboutHeading
            title="Our Team 1"
            pera="All our technicians are fully qualified and licensed. Moreover, they are incredibly skillful and proficient in various aspects of computer repair."
          />
          <div className="row row-30 text-lg-start">
            <AboutTeamCom />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team1;
