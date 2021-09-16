import React from "react";

const GridShopHeader = (props) => {
  return (
    <>
      <section className={props.className}>
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
            <li className="active">{props.link}</li>
          </ul>
          <div className="row row-15 align-items-end breadcrumbs-meta">
            <div className="col-md-6 col-xl-7">
              <h1 className="text-divider">
                <span className="text-divider-item"></span>
                {props.title}
              </h1>
            </div>
            <div className="col-md-6 col-xl-5">
              <p>
                We provide a wide variety of computer products for sale. Choose
                what you prefer and we will deliver it to you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GridShopHeader;
