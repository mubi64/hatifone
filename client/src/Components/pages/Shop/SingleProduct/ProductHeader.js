import React from "react";

const ProductHeader = (props) => {
  return (
    <>
      <section className="section breadcrumbs-custom bg-transparent">
        <div className="container">
          <ul className="breadcrumbs-custom-path text-caption">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a>{props.item1}</a>
            </li>
            <li>
              <a href="#">{props.item1}</a>
            </li>
            <li className="active">{props.item3}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProductHeader;
