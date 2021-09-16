import React from "react";
import Page1Header from "../Page1Header";
import FaqsCom from "./FaqsCom";

const Faqs = () => {
  return (
    <>
      <Page1Header
        active="Faqs"
        className="section breadcrumbs-custom bg-100"
      />
      <FaqsCom />
    </>
  );
};

export default Faqs;
