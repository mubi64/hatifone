import React from "react";

const ProdectImg = () => {
  return (
    <>
      <section className="section section-lg bg-transparent">
        <div className="container">
          <div className="row row-30 justify-content-center justify-content-lg-between">
            <div className="col-xs-10 col-md-6 col-xl-5">
              <div className="slick-product-container">
                <div
                  className="slick-slider slick-product slider-for"
                  data-for=".slider-nav"
                >
                  <div className="slick-content">
                    <a
                      className="thumbnail thumbnail-simple"
                      data-lightgallery="item-slick"
                      href="images/single-product-01-800x800.jpg"
                    >
                      <img
                        className="thumbnail-img"
                        src="images/single-product-01-470x470.jpg"
                        alt=""
                        width="470"
                        height="470"
                      />
                      <span className="thumbnail-icon icon mdi mdi-arrow-expand"></span>
                    </a>
                  </div>
                  <div className="slick-content">
                    <a
                      className="thumbnail thumbnail-simple"
                      data-lightgallery="item-slick"
                      href="images/single-product-02-800x800.jpg"
                    >
                      <img
                        className="thumbnail-img"
                        src="images/single-product-02-470x470.jpg"
                        alt=""
                        width="470"
                        height="470"
                      />
                      <span className="thumbnail-icon icon mdi mdi-arrow-expand"></span>
                    </a>
                  </div>
                  <div className="slick-content">
                    <a
                      className="thumbnail thumbnail-simple"
                      data-lightgallery="item-slick"
                      href="images/single-product-03-800x800.jpg"
                    >
                      <img
                        className="thumbnail-img"
                        src="images/single-product-03-470x470.jpg"
                        alt=""
                        width="470"
                        height="470"
                      />
                      <span className="thumbnail-icon icon mdi mdi-arrow-expand"></span>
                    </a>
                  </div>
                  <div className="slick-content">
                    <a
                      className="thumbnail thumbnail-simple"
                      data-lightgallery="item-slick"
                      href="images/single-product-04-800x800.jpg"
                    >
                      <img
                        className="thumbnail-img"
                        src="images/single-product-04-470x470.jpg"
                        alt=""
                        width="470"
                        height="470"
                      />
                      <span className="thumbnail-icon icon mdi mdi-arrow-expand"></span>
                    </a>
                  </div>
                  <div className="slick-content">
                    <a
                      className="thumbnail thumbnail-simple"
                      data-lightgallery="item-slick"
                      href="images/single-product-02-800x800.jpg"
                    >
                      <img
                        className="thumbnail-img"
                        src="images/single-product-05-470x470.jpg"
                        alt=""
                        width="470"
                        height="470"
                      />
                      <span className="thumbnail-icon icon mdi mdi-arrow-expand"></span>
                    </a>
                  </div>
                </div>
                <div
                  className="slick-slider slick-product-nav slider-nav"
                  data-for=".slider-for"
                  data-items="4"
                  data-sm-items="4"
                  data-md-items="5"
                  data-lg-items="5"
                  data-xl-items="5"
                >
                  <div className="slick-content">
                    <img
                      src="images/single-product-01-86x86.jpg"
                      alt=""
                      width="86"
                      height="86"
                    />
                  </div>
                  <div className="slick-content">
                    <img
                      src="images/single-product-02-86x86.jpg"
                      alt=""
                      width="86"
                      height="86"
                    />
                  </div>
                  <div className="slick-content">
                    <img
                      src="images/single-product-03-86x86.jpg"
                      alt=""
                      width="86"
                      height="86"
                    />
                  </div>
                  <div className="slick-content">
                    <img
                      src="images/single-product-04-86x86.jpg"
                      alt=""
                      width="86"
                      height="86"
                    />
                  </div>
                  <div className="slick-content">
                    <img
                      src="images/single-product-05-86x86.jpg"
                      alt=""
                      width="86"
                      height="86"
                    />
                  </div>
                </div>
              </div>
              <a
                className="link-btn link-btn-2"
                href="../../embed/KFVUxSynSXc.html"
                data-lightgallery="item"
              >
                <span className="link-btn-icon mdi mdi-video"></span>
                <span>Watch video</span>
              </a>
            </div>
            <div className="col-md-6">
              <div className="product-single">
                <div className="product-tags">
                  <div className="product-tag tag tag-1 tag-danger">Sale</div>
                </div>
                <div className="product-title h3">
                  CyberGO SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD
                </div>
                <div className="product-price">
                  <span className="product-price-new h3">$12.00</span>
                  <span className="product-price-old h4">$18.00</span>
                </div>
                <div className="product-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  augue mauris augue neque.
                </div>
                <form className="product-form rd-form-inline rd-form-inline-2 text-start">
                  <div className="form-wrap">
                    <label
                      className="form-label text-center"
                     htmlFor="single-product-cart"
                    >
                      1
                    </label>
                    <input
                      className="form-input form-input-light"
                      id="single-product-cart"
                      type="number"
                      name="value"
                    />
                  </div>
                  <div className="form-button">
                    <button
                      className="btn btn-secondary btn-ujarak btn-block"
                      type="submit"
                    >
                      Add to Cart
                    </button>
                  </div>
                </form>
                <div className="product-list">
                  <dl className="list-terms-horizontal">
                    <dt>SKU:</dt>
                    <dd>0001</dd>
                  </dl>
                  <dl className="list-terms-horizontal">
                    <dt>Categories:</dt>
                    <dd>SSD</dd>
                  </dl>
                  <dl className="list-terms-horizontal">
                    <dt>Tags:</dt>
                    <dd>
                      <a href="#">Accessories</a>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProdectImg;
