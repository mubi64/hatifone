import React from "react";

const Page2Header = (props) => {
  return (
    <>
      <section className="section breadcrumbs-custom bg-transparent">
        <div className="container">
          <ul className="breadcrumbs-custom-path text-caption">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
            <li>
              <a href="#">Pages 2</a>
            </li>
            <li className="active">{props.active}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Page2Header;
