import React, { useEffect } from "react";
import AboutHeaderSection from "../AboutHeaderSection";
import Team1 from "./Team1";
import Team2 from "./Team2";
import Team3 from "./Team3";

const AboutTeams = () => {
  useEffect(() => {
    document.title = "Team";
  }, []);
  return (
    <>
      <AboutHeaderSection
        className="section breadcrumbs-custom"
        link="/about"
        item1="ABOUT"
        item2="TEAM"
      />
      <Team1 />
      <Team2 />
      <Team3 />
    </>
  );
};

export default AboutTeams;
