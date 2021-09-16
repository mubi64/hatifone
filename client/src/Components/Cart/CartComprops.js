import React from "react";

const CartComprops = (props) => {
  return (
    <>
      <tr>
        <td>
          <a className="linearicons-trash icon" href="#"></a>
        </td>
        <td>
          <img
            className="product-img"
            src={props.img}
            alt=""
            width="130"
            height="130"
          />
        </td>
        <td>
          <div className="product-body">
            <div className="product-subtitle text-caption">Devices</div>
            <div className="product-title small">
              <a className="link-dark" href="single-product.html">
                {props.title}
              </a>
            </div>
            <div className="product-text xsmall">{props.pera}</div>
          </div>
        </td>
        <td>
          <div className="product-price-first">$12.00</div>
        </td>
        <td>
          <input
            className="form-input form-input-light"
            type="number"
            data-zeros="true"
            defaultValue="1"
            min="1"
            max="1000"
          />
        </td>
        <td>
          <div className="product-price-last">$12.00</div>
        </td>
      </tr>
    </>
  );
};

export default CartComprops;
