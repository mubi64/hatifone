import React from "react";

const PropsCom = (props) => {
  return (
    <>
      <div className="col">
        <img src={props.images} alt="img" style={{ padding: props.styles }} />
      </div>
    </>
  );
};

export default PropsCom;
