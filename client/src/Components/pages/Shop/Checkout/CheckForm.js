import React from "react";
import CheckHeader from "./CheckHeader";

const CheckForm = () => {
  return (
    <>
      <section className="section-bustom-bg">
        <CheckHeader active="checkout" />

        <section className="section section-lg bg-transparent">
          <div className="container">
            <div className="row row-50 justify-content-center justify-content-xl-between">
              <div className="col-md-6">
                <form className="form-block">
                  <h2>Checkout</h2>
                  <div className="form-block-info">
                    <h4>Contact information</h4>
                    <div className="form-wrap">
                      <label
                        className="form-label"
                        htmlFor="checkout-address-1"
                      >
                        Your email address
                      </label>
                      <input
                        className="form-input"
                        id="checkout-address-1"
                        type="email"
                        name="email"
                      />
                    </div>
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span>
                        Keep me up to date on news and exclusive offers
                      </span>
                    </label>
                  </div>
                  <div className="form-block-info">
                    <h4>Shipping address</h4>
                    <div className="row row-20">
                      <div className="col-sm-6 col-md-12 col-lg-6">
                        <div className="form-wrap">
                          <label
                            className="form-label"
                            htmlFor="checkout-first-name"
                          >
                            Your first name
                          </label>
                          <input
                            className="form-input"
                            id="checkout-first-name"
                            type="text"
                            name="first-name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-12 col-lg-6">
                        <div className="form-wrap">
                          <label
                            className="form-label"
                            htmlFor="checkout-last-name"
                          >
                            Your last name
                          </label>
                          <input
                            className="form-input"
                            id="checkout-last-name"
                            type="text"
                            name="last-name"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-wrap">
                          <label
                            className="form-label"
                            htmlFor="checkout-address"
                          >
                            Your address
                          </label>
                          <input
                            className="form-input"
                            id="checkout-address"
                            type="text"
                            name="address"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-wrap">
                          <label
                            className="form-label"
                            htmlFor="checkout-apartment"
                          >
                            Apartment, suite, etc. (optional)
                          </label>
                          <input
                            className="form-input"
                            id="checkout-apartment"
                            type="text"
                            name="apartment"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-wrap">
                          <label className="form-label" htmlFor="checkout-city">
                            City
                          </label>
                          <input
                            className="form-input"
                            id="checkout-city"
                            type="text"
                            name="city"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-12 col-lg-6">
                        <div className="form-wrap">
                          <select
                            className="form-input"
                            name="country"
                            data-placeholder="Country/Region"
                          >
                            <option label="placeholder"></option>
                            <option>USA</option>
                            <option>UK</option>
                            <option>Germany</option>
                            <option>France</option>
                            <option>Spain</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-12 col-lg-6">
                        <div className="form-wrap">
                          <label className="form-label" htmlFor="checkout-code">
                            Postal code
                          </label>
                          <input
                            className="form-input"
                            id="checkout-code"
                            type="text"
                            name="code"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-button text-sm-end">
                      <a
                        className="btn btn-secondary btn-ujarak"
                        href="shipping.html"
                      >
                        Continue to Shipping
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 col-xl-5">
                <div className="checkout">
                  <div className="checkout-header">
                    <div>
                      <div className="checkout-title h3">My Cart</div>
                    </div>
                    <div>
                      <a
                        className="link-btn link-btn-1 xsmall"
                        href="cart.html"
                      >
                        Edit Cart
                      </a>
                    </div>
                  </div>
                  <div className="checkout-item">
                    <div className="checkout-table table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <td>x1</td>
                            <td>
                              <img
                                className="checkout-product-img"
                                src="images/checkout-01-80x80.jpg"
                                alt=""
                                width="80"
                                height="80"
                              />
                            </td>
                            <td>
                              <a
                                className="checkout-product-title link-underline"
                                href="single-product.html"
                              >
                                FixIT Laptop CPU Cooling Fan Replacement
                              </a>
                            </td>
                            <td>
                              <div className="checkout-product-price">
                                $12.00
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>x1</td>
                            <td>
                              <img
                                className="checkout-product-img"
                                src="images/checkout-02-80x80.jpg"
                                alt=""
                                width="80"
                                height="80"
                              />
                            </td>
                            <td>
                              <a
                                className="checkout-product-title link-underline"
                                href="single-product.html"
                              >
                                InVision SB220Q bi 21.5 Inches Full HD IPS
                                Ultra-Thin Monitor
                              </a>
                            </td>
                            <td>
                              <div className="checkout-product-price">
                                $12.00
                              </div>
                            </td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                  <div className="checkout-item">
                    <ul className="list-md">
                      <li className="d-flex justify-content-between align-items-center">
                        <div className="pe-2">2 item worth</div>
                        <div className="small fw-bold">$24.00</div>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <div className="pe-2">Cost of delivery</div>
                        <div className="small fw-bold">Free</div>
                      </li>
                    </ul>
                  </div>
                  <div className="checkout-item">
                    <ul className="list-md">
                      <li className="d-flex justify-content-between align-items-center">
                        <div className="pe-2 text-600">Total</div>
                        <div>
                          <span className="fw-medium text-primary">$</span>
                          <span className="fw-bold h4 text-primary">24.00</span>
                        </div>
                      </li>
                    </ul>
                    <div className="checkout-info">
                      <div className="checkout-info-icon icon mdi mdi-information-outline"></div>
                      <div className="checkout-info-body">
                        <p>
                          Aliquet risus feugiat in ante. Sed cras ornare arcu
                          dui. Pretium lectus quam id leo.
                        </p>
                        <p>
                          <span>Confirming the order, I accept the </span>
                          <u>
                            <a href="privacy-policy.html">privacy policy</a>
                          </u>
                          <span>.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default CheckForm;
