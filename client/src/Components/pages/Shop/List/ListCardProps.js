import React from "react";

const ListCardProps = (props) => {
  return (
    <>
      <div className="product product-side">
        <div className="product-header">
          <div className="product-media">
            <img
              className="product-img"
              src={props.img}
              alt=""
              width="240"
              height="240"
            />
          </div>
          <a className="product-icon icon mdi mdi-cart-outline" href="#"></a>
        </div>
        <div className="product-body">
          <div className="product-subtitle text-caption">Devices</div>
          <div className="product-title small">
            <a href="/singleproduct">{props.title}</a>
          </div>
          <div className="product-text xsmall">{props.pera}</div>
          <div className="product-price h6">
            <span>$12.00</span>
          </div>
          <a className="btn btn-sm btn-secondary product-btn" href="#">
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default ListCardProps;
