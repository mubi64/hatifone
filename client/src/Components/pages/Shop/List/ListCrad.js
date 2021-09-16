import React from "react";
import NextNumber from "../../../News/GridNews/NextNumber";
import ShopSidebar from "../ShopSidebar";
import ListCardProps from "./ListCardProps";

const ListCrad = () => {
  return (
    <>
      <section className="section section-lg bg-transparent">
        <div className="container">
          <div className="row row-60 flex-md-row-reverse">
            <div className="col-md-8 col-xl-9">
              <div className="shop-menu">
                <div className="shop-menu-left">
                  <div className="shop-menu-tags">
                    <div className="shop-menu-tag">
                      <span>Laptops</span>
                      <a className="shop-menu-close mdi mdi-close" href="#"></a>
                    </div>
                    <div className="shop-menu-tag shop-menu-tag-all">
                      <a href="#">Clear All</a>
                    </div>
                  </div>
                </div>
                <div className="shop-menu-right">
                  <div className="shop-menu-right-inner">
                    <div className="shop-menu-select">
                      <div className="shop-menu-select-title">
                        Sort by price:
                      </div>
                      <div className="shop-menu-select">
                        <select
                          className="form-input"
                          name="price"
                          data-placeholder="Low to high"
                          data-theme="minimal"
                        >
                          <option label="placeholder"></option>
                          <option>Low to high</option>
                          <option>High to low</option>
                        </select>
                      </div>
                    </div>
                    <div className="shop-menu-btns">
                      <a className="shop-menu-btn" href="/gridshop">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <rect
                            x="1"
                            y="1"
                            width="6"
                            height="6"
                            fill="white"
                            strokeWidth="2"
                          ></rect>
                          <rect
                            x="1"
                            y="11"
                            width="6"
                            height="6"
                            fill="white"
                            strokeWidth="2"
                          ></rect>
                          <rect
                            x="11"
                            y="1"
                            width="6"
                            height="6"
                            fill="white"
                            strokeWidth="2"
                          ></rect>
                          <rect
                            x="11"
                            y="11"
                            width="6"
                            height="6"
                            fill="white"
                            strokeWidth="2"
                          ></rect>
                        </svg>
                      </a>
                      <button className="shop-menu-btn active">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <rect
                            x="1"
                            y="1"
                            width="16"
                            height="6"
                            fill="white"
                            strokeWidth="2"
                          ></rect>
                          <rect
                            x="1"
                            y="11"
                            width="16"
                            height="6"
                            fill="white"
                            strokeWidth="2"
                          ></rect>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-30 row-lg-40">
                <div className="col-12">
                  <ListCardProps
                    img="images/list-shop-01-240x240.jpg"
                    title="CyberGO SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD"
                    pera=" Aliquam ante quis ac luctus dictumst. Placerat maecenas
                        luctus leo non quam maecenas ultrices ac. Habitasse nisl
                        etiam massa porta turpis ac. Vehicula cum fermentum
                        donec hac non magna."
                  />

                  <div className="product product-side">
                    <div className="product-header">
                      <div className="product-media">
                        <img
                          className="product-img"
                          src="images/list-shop-02-240x240.jpg"
                          alt=""
                          width="240"
                          height="240"
                        />
                      </div>
                      <a
                        className="product-icon icon mdi mdi-cart-outline"
                        href="#"
                      ></a>
                      <div className="product-tags">
                        <a className="tag tag-1 tag-danger" href="#">
                          Sale
                        </a>
                      </div>
                    </div>
                    <div className="product-body">
                      <div className="product-subtitle text-caption">
                        Devices
                      </div>
                      <div className="product-title small">
                        <a href="single-product.html">
                          iStep Ryzen 5 3600 6-Core, 12-Thread Desktop Processor
                        </a>
                      </div>
                      <div className="product-text xsmall">
                        Massa dolor aliquet tempus viverra. Facilisi dui
                        condimentum viverra posuere. In vitae pharetra congue
                        tellus. Sit eget iaculis elementum erat. Ut malesuada eu
                        sociis quisque non vel blandit.
                      </div>
                      <div className="product-price h6">
                        <span className="product-price-new">$12.00</span>
                        <span className="product-price-old">$18.00</span>
                      </div>
                      <a
                        className="btn btn-sm btn-secondary product-btn"
                        href="#"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>

                  <ListCardProps
                    img="images/list-shop-03-240x240.jpg"
                    title="FixIT Laptop CPU Cooling Fan Replacement"
                    pera="Dolor ultricies convallis aliquam risus donec vulputate
                    faucibus neque et. Habitant id lacus, nulla sed netus
                    semper nunc pellentesque. Lacus eget commodo sed a etiam
                    tristique pulvinar."
                  />
                  <ListCardProps
                    img="images/list-shop-04-240x240.jpg"
                    title="CyberGO SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD"
                    pera=" Aliquam ante quis ac luctus dictumst. Placerat maecenas
                      luctus leo non quam maecenas ultrices ac. Habitasse nisl
                      etiam massa porta turpis ac. Vehicula cum fermentum
                      donec hac non magna."
                  />
                  <ListCardProps
                    img="images/list-shop-05-240x240.jpg"
                    title="CyberGO SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD"
                    pera=" Aliquam ante quis ac luctus dictumst. Placerat maecenas
                    luctus leo non quam maecenas ultrices ac. Habitasse nisl
                    etiam massa porta turpis ac. Vehicula cum fermentum
                    donec hac non magna."
                  />
                  <ListCardProps
                    img="images/list-shop-06-240x240.jpg"
                    title="CyberGO SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD"
                    pera=" Aliquam ante quis ac luctus dictumst. Placerat maecenas
                    luctus leo non quam maecenas ultrices ac. Habitasse nisl
                    etiam massa porta turpis ac. Vehicula cum fermentum
                    donec hac non magna."
                  />
                  <ListCardProps
                    img="images/list-shop-01-240x240.jpg"
                    title="CyberGO SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD"
                    pera=" Aliquam ante quis ac luctus dictumst. Placerat maecenas
                    luctus leo non quam maecenas ultrices ac. Habitasse nisl
                    etiam massa porta turpis ac. Vehicula cum fermentum
                    donec hac non magna."
                  />
                </div>
              </div>
              <NextNumber className="pag justify-content-center justify-content-md-start" />
            </div>
            <ShopSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default ListCrad;
