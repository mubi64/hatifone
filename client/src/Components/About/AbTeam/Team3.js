import React from "react";
import AboutHeading from "../AboutHeading";
import Team3com from "./Team3com";

const Team3 = (props) => {
  return (
    <>
      <section className="section section-lg bg-transparent text-center">
        <div className="container">
          <AboutHeading
            title="Our Team"
            pera="All our technicians are fully qualified and licensed. Moreover, they are incredibly skillful and proficient in various aspects of computer repair."
          />
          <div className="row row-30 text-lg-start">
            <Team3com
              img="images/person-01-270x270.jpg"
              name="Ralph Edwards"
              category="General Manager"
              class1="icon person-social-icon mdi mdi-facebook"
              class2="icon person-social-icon mdi mdi-instagram"
            />
            <Team3com
              img="images/person-02-270x270.jpg"
              name="Edward Robertson"
              category="Field Technician"
              class1="icon person-social-icon mdi mdi-facebook"
              class2="icon person-social-icon mdi mdi-instagram"
            />
            <Team3com
              img="images/person-03-270x270.jpg"
              name="Courtney Henry"
              category="Customer Service Manager"
              class1="icon person-social-icon mdi mdi-facebook"
              class2="icon person-social-icon mdi mdi-instagram"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team3;
