import React, { useEffect } from "react";
import Banner from "./Banner";
import WeOffer from "./WeOffer";
import WhoAre from "./WhoAre";
import Gallery from "./Gallery";
import ChooseUs from "./ChooseUs";
import SignUp from "./SignUp";
// import Package from "../Package";
// import Team from "./Team";
// import LatesNews from "./LatesNews";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
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
