import React from "react";

const ServicesCard = (props) => {
  return (
    <>
      <div className="col-xs-10 col-sm-6 col-lg-4">
        <div className="thumbnail thumbnail-boxed">
          <div className="thumbnail-media">
            <img
              className="thumbnail-img"
              src={props.img}
              alt=""
              width="370"
              height="220"
            />
          </div>
          <div className="thumbnail-body">
            <div className="thumbnail-title h4">
              <a href="#">{props.title}</a>
            </div>
            <div className="thumbnail-text">{props.pera}</div>
            <div className="thumbnail-price">{props.price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
