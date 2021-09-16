import React from "react";
import { Link } from "react-router-dom";

const AboutHeaderSection = (props) => {
  return (
    <>
      <section className={props.className}>
        <div className="container">
          <ul className="breadcrumbs-custom-path text-caption">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={props.link}>{props.item1}</Link>
            </li>
            <li className="active">{props.item2}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutHeaderSection;
