import React from "react";
import CartComprops from "./CartComprops";

const CartCom = () => {
  return (
    <div>
      <section className="section section-lg bg-transparent text-center">
        <div className="container">
          <h1 className="text-divider">
            <span className="text-divider-item"></span>My Cart
          </h1>
          <div className="row justify-content-center text-sm-start">
            <div className="col-xl-10">
              <div className="product-table table-custom-responsive">
                <table className="table-custom">
                  <thead>

                  <CartComprops
                    img="images/cart-01-130x130.jpg"
                    title="IFixIT Laptop CPU Cooling Fan Replacement"
                    pera="Conse ctetur adipisicing elit, sed do eiusmod sample
                          paragraph text lorem."
                  />
                  <CartComprops
                    img="images/cart-02-130x130.jpg"
                    title="InVision SB220Q bi 21.5 Inches Full HD IPS
                            Ultra-Thin Monitor"
                    pera="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod."
                  />
                  </thead>

                </table>
              </div>
              <div className="row">
                <div className="col-12">
                  <h4>Have a Promo Code?</h4>
                  <form className="rd-mailform rd-form-inline rd-form-inline-width">
                    <div className="form-wrap">
                      <label className="form-label" htmlFor="cart-code">
                        Promo code
                      </label>
                      <input
                        className="form-input"
                        id="cart-code"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div className="form-button">
                      <button
                        className="btn btn-secondary btn-ujarak"
                        type="submit"
                      >
                        Apply
                      </button>
                    </div>
                  </form>
                  <div className="divider divider-1"></div>
                </div>
              </div>
              <div className="row row-15 row-lg-40 align-items-center justify-content-sm-between">
                <div className="col-12 order-sm-0 text-sm-end">
                  <div className="small text-600">Total:</div>
                  <h3 className="text-primary">$24.00</h3>
                </div>
                <div className="col-sm-auto order-sm-2">
                  <a className="btn btn-primary btn-ujarak" href="checkout.html">
                    Proceed to Checkout
                  </a>
                </div>
                <div className="col-sm-auto order-sm-1">
                  <a className="link link-btn link-btn-1" href="#">
                    UpdateCart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartCom;
