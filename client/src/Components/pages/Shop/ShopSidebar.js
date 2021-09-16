import React from "react";
import Searchbar from "../../News/GridNews/Searchbar";

const ShopSidebar = () => {
  return (
    <>
      <div className="col-md-4 col-xl-3 widgets">
        <Searchbar />
        <div className="widget">
          <div className="widget-title h6">Browse</div>
          <div className="widget-body">
            <ul className="widget-list">
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" defaultChecked />
                  <span className="widget-list-title">Laptops </span>
                  <span className="widget-list-meta">(20)</span>
                </label>
              </li>
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">Video cards </span>
                  <span className="widget-list-meta">(10)</span>
                </label>
              </li>
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">
                    Hard drives and disk arrays{" "}
                  </span>
                  <span className="widget-list-meta">(8)</span>
                </label>
              </li>
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">Processors </span>
                  <span className="widget-list-meta">(12)</span>
                </label>
              </li>
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">SSD </span>
                  <span className="widget-list-meta">(7)</span>
                </label>
              </li>
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">Memory </span>
                  <span className="widget-list-meta">(2)</span>
                </label>
              </li>
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">Motherboards </span>
                  <span className="widget-list-meta">(6)</span>
                </label>
              </li>
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">Power supplies </span>
                  <span className="widget-list-meta">(14)</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget">
          <div className="widget-title h6">Brand</div>
          <div className="widget-body">
            <ul className="widget-list">
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">CyberGO </span>
                  <span className="widget-list-meta">(20)</span>
                </label>
              </li>
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">iStep </span>
                  <span className="widget-list-meta">(10)</span>
                </label>
              </li>
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">InVision </span>
                  <span className="widget-list-meta">(8)</span>
                </label>
              </li>
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">WindUP </span>
                  <span className="widget-list-meta">(12)</span>
                </label>
              </li>
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">FixIT </span>
                  <span className="widget-list-meta">(7)</span>
                </label>
              </li>
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">WildFish </span>
                  <span className="widget-list-meta">(2)</span>
                </label>
              </li>
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">XTR </span>
                  <span className="widget-list-meta">(6)</span>
                </label>
              </li>
              <li className="widget-list-item">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="widget-list-title">XFX </span>
                  <span className="widget-list-meta">(14)</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget">
          <div className="widget-title h6">Price range</div>
          <div className="widget-body">
            <div className="rd-range-meta">
              <div className="rd-range-form-wrap">
                <span>$</span>
                <input
                  className="rd-range-input rd-range-input-value-1 rd-range-input-2-symbol"
                  type="text"
                  name="value-1"
                  size="1"
                />
              </div>
              <div className="rd-range-form-wrap">
                <span> - </span>
              </div>
              <div className="rd-range-form-wrap">
                <span>$</span>
                <input
                  className="rd-range-input rd-range-input-value-2"
                  type="text"
                  name="value-2"
                  size="1"
                />
              </div>
            </div>
            <div
              className="rd-range"
              data-min="0"
              data-max="500"
              data-min-diff="10"
              data-start="[100, 240]"
              data-step="1"
              data-input=".rd-range-input-value-1"
              data-input-2=".rd-range-input-value-2"
            ></div>
          </div>
        </div>
        <div className="widget">
          <div className="h7 widget-title">Top rated product</div>
          <div className="widget-body">
            <div className="product product-small">
              <div className="product-media">
                <img
                  className="product-img"
                  src="images/grid-shop-07-70x70.jpg"
                  alt=""
                  width="70"
                  height="70"
                />
              </div>
              <div className="product-body">
                <div className="product-title">
                  <a href="single-product.html">
                    xTra Power Red Devil RX 5700 XT Graphics Card
                  </a>
                </div>
                <div className="product-price xsmall">$25.56</div>
              </div>
            </div>
            <div className="product product-small">
              <div className="product-media">
                <img
                  className="product-img"
                  src="images/grid-shop-08-70x70.jpg"
                  alt=""
                  width="70"
                  height="70"
                />
              </div>
              <div className="product-body">
                <div className="product-title">
                  <a href="single-product.html">
                    XFX RX 580 GTS Special Edition 1386MHz OC+
                  </a>
                </div>
                <div className="product-price xsmall">$28.00</div>
              </div>
            </div>
            <div className="product product-small">
              <div className="product-media">
                <img
                  className="product-img"
                  src="images/grid-shop-09-70x70.jpg"
                  alt=""
                  width="70"
                  height="70"
                />
              </div>
              <div className="product-body">
                <div className="product-title">
                  <a href="single-product.html">
                    RGT AM4 Gaming X570-Plus Motherboard
                  </a>
                </div>
                <div className="product-price xsmall">$18.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget">
          <div className="widget-title h6">Filter by interface</div>
          <div className="widget-body">
            <form className="rd-form-inline form-inline-1 form-sm text-start">
              <div className="form-wrap">
                <label
                  className="form-label form-label-sm"
                  htmlFor="shop-filter"
                >
                  Interface type
                </label>
                <input
                  className="form-input form-input-sm form-input-light"
                  id="shop-filter"
                  type="text"
                  name="name"
                />
              </div>
              <div className="form-button">
                <button className="btn btn-secondary btn-ujarak" type="submit">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="widget">
          <div className="widget-title h6">
            Filter by the PC accessory memory type
          </div>
          <div className="widget-body">
            <select
              className="form-input form-input-light form-input-sm"
              name="price"
              data-placeholder="GDDR5"
            >
              <option label="placeholder"></option>
              <option>GDDR5</option>
              <option>GDDR3</option>
              <option>GDDR2</option>
              <option>DDR4</option>
              <option>DDR3</option>
            </select>
          </div>
        </div>
        <div className="widget">
          <div className="widget-title h6">RAM capacity</div>
          <div className="widget-body">
            <ul className="widget-list widget-list-1">
              <li className="widget-list-item">
                <span className="widget-list-title">
                  <a className="link-underline" href="#">
                    2GB{" "}
                  </a>
                </span>
                <span className="widget-list-meta">(20)</span>
              </li>
              <li className="widget-list-item">
                <span className="widget-list-title">
                  <a className="link-underline" href="#">
                    4GB{" "}
                  </a>
                </span>
                <span className="widget-list-meta">(10)</span>
              </li>
              <li className="widget-list-item">
                <span className="widget-list-title">
                  <a className="link-underline" href="#">
                    6GB{" "}
                  </a>
                </span>
                <span className="widget-list-meta">(8)</span>
              </li>
              <li className="widget-list-item">
                <span className="widget-list-title">
                  <a className="link-underline" href="#">
                    8GB{" "}
                  </a>
                </span>
                <span className="widget-list-meta">(12)</span>
              </li>
              <li className="widget-list-item">
                <span className="widget-list-title">
                  <a className="link-underline" href="#">
                    12GB{" "}
                  </a>
                </span>
                <span className="widget-list-meta">(7)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget">
          <div className="widget-title h6">Tags</div>
          <div className="widget-body">
            <div className="widget-tags">
              <a className="widget-tag" href="">
                Computer
              </a>
              <span>, </span>
              <a className="widget-tag" href="">
                Processors
              </a>
              <span>, </span>
              <a className="widget-tag" href="">
                Graphics Cards
              </a>
              <span>, </span>
              <a className="widget-tag" href="">
                Memory
              </a>
              <span>, </span>
              <a className="widget-tag" href="">
                SSD
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSidebar;
