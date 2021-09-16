import React from "react";

const PrivacyPolicyProps = (props) => {
  return (
    <>
      <h3>{props.h3}</h3>
      <h4>{props.h4}</h4>
      <p>{props.pera1}</p>
      <ul className="list list-marked">
        <li className="list-item">{props.li1}</li>
        <li className="list-item">{props.li2}</li>
        <li className="list-item">{props.li3}</li>
        <li className="list-item">{props.li4}</li>
      </ul>
      <p>{props.pera2}</p>
      <h4>{props.h41}</h4>
      <p>{props.pera2}</p>
      <p>{props.pera4}</p>
      <h4>{props.h43}</h4>
      <p>{props.pera5}</p>
      <h4>{props.h43}</h4>
      <p>{props.pera6}</p>
      <p>{props.pera7}</p>
    </>
  );
};

export default PrivacyPolicyProps;
