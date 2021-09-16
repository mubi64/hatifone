import React from "react";
import AboutHeaderSection from "../About/AboutHeaderSection";
import Package from "../Package";

const Price = () => {
  return (
    <div>
      <AboutHeaderSection
        className="section breadcrumbs-custom bg-100"
        item1="pricing"
      />
      <Package
        title="Pricing Plan 1"
        pera="Eget nunc lorem mi etiam lacinia lacinia pulvinar metus. Amet lobortis hendrerit viverra amet pretium neque, faucibus elit. Tincidunt quam."
      />
    </div>
  );
};

export default Price;
