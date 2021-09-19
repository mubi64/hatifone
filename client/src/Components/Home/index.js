import React, { useEffect } from "react";
import Banner from "./Banner";
import WeOffer from "./WeOffer";
import WhoAre from "./WhoAre";
import Gallery from "./Gallery";
import ChooseUs from "./ChooseUs";
// import Package from "../Package";
// import Team from "./Team";
import SignUp from "./SignUp";
// import LatesNews from "./LatesNews";

const Home = (props) => {
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
