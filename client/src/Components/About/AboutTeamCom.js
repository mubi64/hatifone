import React from "react";
import AboutTeamCard from "./AboutTeamCard";

const AboutTeamCom = () => {
  return (
    <>
      <AboutTeamCard
        img="images/person-01-270x270.jpg"
        name="Ralph Edwards"
        category="General Manager"
        class1="icon person-social-icon mdi mdi-facebook"
        class2="icon person-social-icon mdi mdi-instagram"
      />
      <AboutTeamCard
        img="images/person-02-270x270.jpg"
        name="Edward Robertson"
        category="Field Technician"
        class1="icon person-social-icon mdi mdi-facebook"
        class2="icon person-social-icon mdi mdi-instagram"
      />
      <AboutTeamCard
        img="images/person-03-270x270.jpg"
        name="Courtney Henry"
        category="Customer Service Manager"
        class1="icon person-social-icon mdi mdi-facebook"
        class2="icon person-social-icon mdi mdi-instagram"
      />
      <AboutTeamCard
        img="images/person-04-270x270.jpg"
        name="Brooklyn Simmons"
        category="Repair Technician"
        class1="icon person-social-icon mdi mdi-facebook"
        class2="icon person-social-icon mdi mdi-instagram"
      />
    </>
  );
};

export default AboutTeamCom;
