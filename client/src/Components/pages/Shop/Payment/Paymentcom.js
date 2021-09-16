import React from "react";
import CheckHeader from "../Checkout/CheckHeader";

const Paymentcom = () => {
  return (
    <>
      <section className="section-bustom-bg">
        <CheckHeader active="payment" />
        <section className="section section-lg bg-transparent">
          <div className="container">
            <div className="row row-50 justify-content-center justify-content-xl-between">
              <div className="col-md-6">
                <h2>Checkout</h2>
                <div className="table-1 table-custom-responsive">
                  <table>
                    <thead>
                      <tr>
                        <td className="text-600">Contact:</td>
                        <td>
                          <a href="#">mail@demolink.org</a>
                        </td>
                        <td>
                          <a
                            className="link-btn link-btn-1 link-btn-2"
                            href="#"
                          >
                            Change
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-600">Ship to:</td>
                        <td>3517 W. Gray St. Utica, Pennsylvania 57867</td>
                        <td>
                          <a
                            className="link-btn link-btn-1 link-btn-2"
                            href="#"
                          >
                            Change
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-600">Method:</td>
                        <td>Standard delivery</td>
                        <td>
                          <a
                            className="link-btn link-btn-1 link-btn-2"
                            href="#"
                          >
                            Change
                          </a>
                        </td>
                      </tr>
                    </thead>
                  </table>
                </div>
                <h4>Payment method</h4>
                <div className="control-box">
                  <div className="form-wrap">
                    <label className="radio">
                      <input type="radio" name="payment" value="1" defaultChecked />
                      <span className="h6">Direct bank transfer</span>
                      <span className="control-box-text xsmall text-600">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference.
                      </span>
                    </label>
                  </div>
                </div>
                <div className="control-box">
                  <div className="form-wrap">
                    <label className="radio">
                      <input type="radio" name="payment" value="2" />
                      <span className="h6">PayPal</span>
                      <span className="control-box-text xsmall text-600">
                        Pay via PayPal; you can pay with your credit card if you
                        don’t have a PayPal account.
                      </span>
                    </label>
                  </div>
                </div>
                <div className="control-box">
                  <div className="form-wrap">
                    <label className="radio">
                      <input type="radio" name="payment" value="2" />
                      <span className="h6">Cheque Payment</span>
                      <span className="control-box-text xsmall text-600">
                        Please send a check to Store Name, Store Street, Store
                        Town, Store State / County, Store Postcode.
                      </span>
                    </label>
                  </div>
                </div>
                <div className="offset-md d-flex flex-row-reverse flex-wrap justify-content-between align-items-center group-md">
                  <a className="btn btn-secondary btn-ujarak" href="#">
                    Complete Order
                  </a>
                  <a className="link-btn link-btn-1" href="shipping.html">
                    &lt; Return to shipping
                  </a>
                </div>
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
                            <div className="checkout-product-price">$12.00</div>
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
                            <div className="checkout-product-price">$12.00</div>
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

export default Paymentcom;
