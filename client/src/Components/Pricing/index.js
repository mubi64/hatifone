import React, { useEffect } from "react";
import Price from "./Price";
import PricePlan2 from "./PricePlan2";
import PricePlan3 from "./PricePlan3";

const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing";
  }, []);
  return (
    <>
      <Price />
      <PricePlan2 />
      <PricePlan3 />
    </>
  );
};

export default Pricing;
