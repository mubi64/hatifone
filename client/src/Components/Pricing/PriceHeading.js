import React from "react";

const PriceHeading = (props) => {
  return (
    <>
      <h2 className="text-divider">
        <span className="text-divider-item"></span>{props.title}
      </h2>
      <p>
        <span className="d-inline-block" style={{ maxWidth: "550px" }}>
          {props.pera}
        </span>
      </p>
    </>
  );
};

export default PriceHeading;
