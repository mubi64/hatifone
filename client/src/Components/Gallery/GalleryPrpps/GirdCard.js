import React from "react";

const GirdCard = (props) => {
  return (
    <>
      <div className={props.clasess}>
        <a
          className="thumbnail thumbnail-gallery"
          data-lightgallery="item"
          href={props.imagelink}
        >
          <img
            className="thumbnail-img"
            src={props.img}
            alt=""
            width={props.width}
            height={props.height}
          />
          <div className="thumbnail-body">
            <div className="thumbnail-icon icon mdi mdi-plus"></div>
          </div>
        </a>
      </div>
    </>
  );
};

export default GirdCard;
