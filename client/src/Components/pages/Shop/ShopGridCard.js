import React from "react";

const ShopGridCard = (props) => {
  return (
    <>
      <div className="col-xs-6 col-lg-4">
        <div className="product">
          <div className="product-header">
            <div className="product-media">
              <img
                className="product-img"
                src={props.img}
                alt=""
                width="270"
                height="270"
              />
            </div>
            <a
              className="product-icon icon mdi mdi-cart-outline"
              href="/singleproduct"
            ></a>
          </div>
          <div className="product-subtitle text-caption">Devices</div>
          <div className="product-title small">
            <a href="/singleproduct">{props.pera}</a>
          </div>
          <div className="product-price h6">
            <span>{props.price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopGridCard;
