import React, { useEffect } from "react";
import About2last from "./About2last";
import AboutBanner from "./AboutBanner";
// import AboutTeam from "./AboutTeam";
import Benefites from "./Benefites";
import Mision from "./Mision";

const About = (props) => {

  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div>
      <AboutBanner />
      <Mision />
      <Benefites />
      {/* <AboutTeam /> */}
      <About2last />
    </div>
  );
};

export default About;
