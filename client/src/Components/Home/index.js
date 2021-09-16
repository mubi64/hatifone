import React, { useEffect } from "react";
import Banner from "./Banner";
import WeOffer from "./WeOffer";
import WhoAre from "./WhoAre";
import Gallery from "./Gallery";
import ChooseUs from "./ChooseUs";
import Package from "../Package";
import Team from "./Team";
import SignUp from "./SignUp";
import LatesNews from "./LatesNews";

const Home = (props) => {
  const LoadingBar = () => {
    props.setProgress(10);
    <Banner />;
    props.setProgress(30);
    <WhoAre />;
    props.setProgress(50);
    <WeOffer />;
    props.setProgress(70);
    <Team />;
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = "Home";
    LoadingBar();
  }, []);
  return (
    <>
      <Banner />
      <WhoAre />
      <WeOffer />
      <Gallery />
      <ChooseUs />
      {/* <Package
        title="Select Your Packages"
        pera="Take a look at our pricing plans and select the computer repair services that meet your needs the most."
      /> */}
      {/* <Team /> */}
      <SignUp />
      {/* <LatesNews /> */}
    </>
  );
};

export default Home;
