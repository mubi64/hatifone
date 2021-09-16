import React from "react";

const RecentProducts = () => {
  return (
    <>
      <section className="section section-lg bg-100 text-center">
        <div className="container">
          <h2 className="text-divider">
            <span className="text-divider-item"></span>Recent products
          </h2>
          <div className="row row-30 row-lg-40 text-start">
            <div className="col-xs-6 col-lg-3">
              <div className="product">
                <div className="product-header">
                  <div className="product-media">
                    <img
                      className="product-img"
                      src="images/single-product-07-270x270.jpg"
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
                  <a href="/singleproduct">
                    FixIT Laptop CPU Cooling Fan Replacement
                  </a>
                </div>
                <div className="product-price h6">
                  <span>$12.00</span>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-lg-3">
              <div className="product">
                <div className="product-header">
                  <div className="product-media">
                    <img
                      className="product-img"
                      src="images/single-product-08-270x270.jpg"
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
                  <a href="/singleproduct">
                    iStep 12TB Elements Desktop External Hard Drive
                  </a>
                </div>
                <div className="product-price h6">
                  <span>$12.00</span>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-lg-3">
              <div className="product">
                <div className="product-header">
                  <div className="product-media">
                    <img
                      className="product-img"
                      src="images/single-product-09-270x270.jpg"
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
                  <a href="/singleproduct">
                    InVision SB220Q bi 21.5 Inches Full HD IPS Ultra-Thin
                    Monitor
                  </a>
                </div>
                <div className="product-price h6">
                  <span>$12.00</span>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-lg-3">
              <div className="product">
                <div className="product-header">
                  <div className="product-media">
                    <img
                      className="product-img"
                      src="images/single-product-10-270x270.jpg"
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
                  <a href="/singleproduct">
                    CyberGO Vengeance LPX 16GB (2x8GB) Desktop Memory Kit
                  </a>
                </div>
                <div className="product-price h6">
                  <span>$12.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProducts;
