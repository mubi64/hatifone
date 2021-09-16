import React from "react";

const CheckHeader = (props) => {
  return (
    <>
      <section className="section breadcrumbs-custom bg-transparent">
        <div className="container">
          <ul className="breadcrumbs-custom-path text-caption">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li className="active">{props.active}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CheckHeader;
