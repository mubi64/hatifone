import React from "react";

const NextNumber = (props) => {
  return (
    <>
      <ul className={props.className}>
        <li className="pag-item disabled">
          <a className="pag-link pag-link-prev" href="#">
            <span>&lt; Prev</span>
          </a>
        </li>
        <li className="pag-item active">
          <a className="pag-link" href="#">
            1
          </a>
        </li>
        <li className="pag-item">
          <a className="pag-link" href="#">
            2
          </a>
        </li>
        <li className="pag-item pag-mobile-hide">
          <a className="pag-link" href="#">
            3
          </a>
        </li>
        <li className="pag-item">
          <span className="inactive pag-link">...</span>
        </li>
        <li className="pag-item">
          <a className="pag-link" href="#">
            12
          </a>
        </li>
        <li className="pag-item">
          <a className="pag-link pag-link-next" href="#">
            <span>Next  <div className="rdc-next"></div></span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default NextNumber;
