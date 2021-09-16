import React from "react";
import { Link } from "react-router-dom";

const Page1Header = (props) => {
  return (
    <>
      <section className={props.className}>
        <div className="container">
          <ul className="breadcrumbs-custom-path text-caption">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <a>Pages</a>
            </li> */}
            {/* <li>
              <a href="#">Pages 1</a>
            </li> */}
            <li className="active">{props.active}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Page1Header;
