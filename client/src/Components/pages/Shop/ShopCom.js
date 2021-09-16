import React from "react";
import NextNumber from "../../News/GridNews/NextNumber";
import ShopGridCard from "./ShopGridCard";
import ShopSidebar from "./ShopSidebar";

const ShopCom = () => {
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
                          {/* <option label="Low to high"></option> */}
                          <option>Low to high</option>
                          <option>High to low</option>
                        </select>
                      </div>
                    </div>
                    <div className="shop-menu-btns">
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
                      </button>
                      <a className="shop-menu-btn" href="/listshop">
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-30 row-lg-40">
                <ShopGridCard
                  img="images/grid-shop-01-270x270.jpg"
                  pera="CyberGO SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD"
                  price="$12.00"
                />
                <div className="col-xs-6 col-lg-4">
                  <div className="product">
                    <div className="product-header">
                      <div className="product-media">
                        <img
                          className="product-img"
                          src="images/grid-shop-02-270x270.jpg"
                          alt=""
                          width="270"
                          height="270"
                        />
                      </div>
                      <a
                        className="product-icon icon mdi mdi-cart-outline"
                        href="single-product.html"
                      ></a>
                      <div className="product-tags">
                        <a className="tag tag-1 tag-danger" href="#">
                          Sale
                        </a>
                        <a className="tag tag-1 tag-primary" href="#">
                          Featured
                        </a>
                      </div>
                    </div>
                    <div className="product-subtitle text-caption">Devices</div>
                    <div className="product-title small">
                      <a href="single-product.html">
                        iStep Ryzen 5 3600 6-Core, 12-Thread Desktop Processor
                      </a>
                    </div>
                    <div className="product-price h6">
                      <span className="product-price-new">$12.00</span>
                      <span className="product-price-old">$18.00</span>
                    </div>
                  </div>
                </div>
                <ShopGridCard
                  img="images/grid-shop-03-270x270.jpg"
                  pera="FixIT Laptop CPU Cooling Fan Replacement"
                  price="$12.00"
                />

                <ShopGridCard
                  img="images/grid-shop-04-270x270.jpg"
                  pera="iStep 12TB Elements Desktop External Hard Drive"
                  price="$12.00"
                />
                <ShopGridCard
                  img="images/grid-shop-05-270x270.jpg"
                  pera=" InVision SB220Q bi 21.5 Inches Full HD IPS Ultra-Thin
                  Monitor"
                  price="$12.00"
                />
                <ShopGridCard
                  img="images/grid-shop-06-270x270.jpg"
                  pera="CyberGO Vengeance LPX 16GB (2x8GB) Desktop Memory Kit"
                  price="$12.00"
                />
                <ShopGridCard
                  img="images/grid-shop-01-270x270.jpg"
                  pera="wildFish 2TB Internal SATA 6Gb/s Hard Drive HDD"
                  price="$12.00"
                />
                <ShopGridCard
                  img="images/grid-shop-02-270x270.jpg"
                  pera="EVO GAMING GeForce GT 710 1GB GDRR3 64-bit"
                  price="$12.00"
                />
                <ShopGridCard
                  img="images/grid-shop-03-270x270.jpg"
                  pera="XFX RX 580 GTS Special Edition 1386MHz OC+, 8GB GDDR5"
                  price="$12.00"
                />
                <ShopGridCard
                  img="images/grid-shop-04-270x270.jpg"
                  pera="WIndUP FS-9002 20+8LED ARGB White 120mm Case Fan"
                  price="$12.00"
                />
                <ShopGridCard
                  img="images/grid-shop-05-270x270.jpg"
                  pera="RGT AM4 Gaming X570-Plus Zen 3 Motherboard"
                  price="$12.00"
                />
                <ShopGridCard
                  img="images/grid-shop-06-270x270.jpg"
                  pera="xTra Power Red Devil RX 5700 XT 8GB Graphics Card"
                  price="$12.00"
                />
                <ShopGridCard
                  img="images/grid-shop-01-270x270.jpg"
                  pera="InVision Hyper 212 RGB Black Edition CPU Air Cooler"
                  price="$12.00"
                />
                <ShopGridCard
                  img="images/grid-shop-02-270x270.jpg"
                  pera="WindUP MasterLiquid ML240L RGB V2 Water Cooling System"
                  price="$12.00"
                />
                <ShopGridCard
                  img="images/grid-shop-03-270x270.jpg"
                  pera=" XTR Core v7-9700K Desktop Processor"
                  price="$12.00"
                />
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

export default ShopCom;
