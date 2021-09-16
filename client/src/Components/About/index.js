import React, { useEffect } from "react";
import About2last from "./About2last";
import AboutBanner from "./AboutBanner";
import AboutTeam from "./AboutTeam";
import Benefites from "./Benefites";
import Mision from "./Mision";

const About = (props) => {
  const LoadingBar = () => {
    props.setProgress(10);
    <AboutBanner />;
    props.setProgress(30);
    <Mision />;
    props.setProgress(50);
    <Benefites />;
    props.setProgress(70);
    <AboutTeam />;
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = "About";
    LoadingBar();
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
