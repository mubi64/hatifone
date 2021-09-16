import { useState, useEffect } from "react";
import { Link, useLocation, withRouter } from "react-router-dom";
import MbHeader from "./MbHeader";

function Header({ history }) {
  const location = useLocation();
  const [elements, setElements] = useState(false);
  const [gallrydropdown, setGallryDropdown] = useState(false);
  const [shopdropdown, setShopDropdown] = useState(false);
  const [p2dropdown, setP2Dropdown] = useState(false);
  const [p1dropdown, setP1Dropdown] = useState(false);
  const [pdropdown, setPDropdown] = useState(false);
  const [ndropdown, setNDropdown] = useState(false);
  const [sdropdown, setSDropdown] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [activeToggle, setActiveToggle] = useState(false);

  const getColor = (curr) => {
    if (history.location.pathname === curr) {
      return "#54d1ae";
    }
  };
  const gettrasition = (curr) => {
    if (history.location.pathname === curr) {
      return "underline";
    }
  };

  useEffect(() => {
    setElements(false);
    setGallryDropdown(false);
    setShopDropdown(false);
    setP2Dropdown(false);
    setP1Dropdown(false);
    setPDropdown(false);
    setNDropdown(false);
    setSDropdown(false);
    setToggle(false);
    setDropdown(false);
    setActiveToggle(false);
  }, [location]);

  const changeNavbarPositon = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeNavbarPositon);

  const onMouseEnter = () => {
    if (window.innerWidth < 980) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 980) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onHoverEnter = () => {
    if (window.innerWidth < 980) {
      setSDropdown(false);
    } else {
      setSDropdown(true);
    }
  };
  const onHoverLeave = () => {
    if (window.innerWidth < 980) {
      setSDropdown(false);
    } else {
      setSDropdown(false);
    }
  };
  const onNewsEnter = () => {
    if (window.innerWidth < 980) {
      setNDropdown(false);
    } else {
      setNDropdown(true);
    }
  };
  const onNewsLeave = () => {
    if (window.innerWidth < 980) {
      setNDropdown(false);
    } else {
      setNDropdown(false);
    }
  };
  const onPageEnter = () => {
    if (window.innerWidth < 980) {
      setPDropdown(false);
    } else {
      setPDropdown(true);
    }
  };
  const onPageLeave = () => {
    if (window.innerWidth < 980) {
      setPDropdown(false);
    } else {
      setPDropdown(false);
    }
  };
  const onShopEnter = () => {
    if (window.innerWidth < 980) {
      setShopDropdown(false);
    } else {
      setShopDropdown(true);
    }
  };
  const onShopLeave = () => {
    if (window.innerWidth < 980) {
      setShopDropdown(false);
    } else {
      setShopDropdown(false);
    }
  };
  const onP1Enter = () => {
    if (window.innerWidth < 980) {
      setP1Dropdown(false);
    } else {
      setP1Dropdown(true);
    }
  };
  const onP1Leave = () => {
    if (window.innerWidth < 980) {
      setP1Dropdown(false);
    } else {
      setP1Dropdown(false);
    }
  };
  const onP2Enter = () => {
    if (window.innerWidth < 980) {
      setP2Dropdown(false);
    } else {
      setP2Dropdown(true);
    }
  };
  const onP2Leave = () => {
    if (window.innerWidth < 980) {
      setP2Dropdown(false);
    } else {
      setP2Dropdown(false);
    }
  };
  const onGEnter = () => {
    if (window.innerWidth < 980) {
      setGallryDropdown(false);
    } else {
      setGallryDropdown(true);
    }
  };
  const onGLeave = () => {
    if (window.innerWidth < 980) {
      setGallryDropdown(false);
    } else {
      setGallryDropdown(false);
    }
  };
  const onElementEnter = () => {
    if (window.innerWidth < 980) {
      setElements(false);
    } else {
      setElements(true);
    }
  };
  const onElementLeave = () => {
    if (window.innerWidth < 980) {
      setElements(false);
    } else {
      setElements(false);
    }
  };

  return (
    <>
      <header className="section page-header pcSection">
        <div className="rd-navbar-wrap" style={{ height: "101.6px" }}>
          <nav
            className={
              scroll
                ? "rd-navbar rd-navbar-creative rd-navbar-creative-2 rd-navbar-original rd-navbar-static rd-navbar--is-stuck"
                : "rd-navbar rd-navbar-creative rd-navbar-creative-2 rd-navbar-original rd-navbar-static"
            }
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-fixed"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-xxl-layout="rd-navbar-static"
            data-xxl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="50px"
            data-xl-stick-up-offset="50px"
            data-xxl-stick-up-offset="50px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
            data-lg-auto-height="true"
            data-xl-auto-height="true"
            data-xxl-auto-height="true"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                <div className="rd-navbar-panel">
                  <button
                    className="rd-navbar-toggle toggle-original"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span></span>
                  </button>
                  <div className="rd-navbar-brand">
                    <Link className="brand" to="/">
                      <img
                        className="brand-logo-dark"
                        src="images/Hatifone_L_Transparent.png"
                        alt=""
                        width="135"
                        height="40"
                      />
                      <img
                        className="brand-logo-light"
                        src="images/Hatifone_L_Transparent.png"
                        alt=""
                        width="135"
                        height="40"
                      />
                      <span className="brand-slogan">Call Center Solution</span>
                    </Link>
                  </div>
                </div>
                <div className="rd-navbar-nav-wrap toggle-original-elements">
                  <ul className="rd-navbar-nav">
                    <li className="rd-nav-item">
                      <Link
                        className="rd-nav-link"
                        style={{
                          color: getColor("/"),
                          textDecoration: gettrasition("/"),
                        }}
                        to="/"
                      >
                        Home
                      </Link>
                    </li>

                    <li
                      onMouseEnter={onHoverEnter}
                      onMouseLeave={onHoverLeave}
                      className={`rd-nav-item rd-navbar--has-dropdown rd-navbar-submenu ${
                        sdropdown ? "focus" : ""
                      } `}
                    >
                      <Link
                        className="rd-nav-link"
                        style={{
                          color: getColor("/services"),
                          textDecoration: gettrasition("/services"),
                        }}
                        to="/services"
                      >
                        Services
                      </Link>
                      {/* <span className="rd-navbar-submenu-toggle"></span>
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item">
                          <Link
                            className="rd-dropdown-link"
                            style={{
                              color: getColor("/singleServices"),
                              textDecoration: gettrasition("/singleServices"),
                            }}
                            to="/singleServices"
                          >
                            Single service
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="rd-nav-item">
                      <Link
                        className="rd-nav-link"
                        style={{
                          color: getColor("/clients"),
                          textDecoration: gettrasition("/clients"),
                        }}
                        to="/clients"
                      >
                        Clients
                      </Link>
                    </li>
                    <li
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      className={`rd-nav-item rd-navbar--has-dropdown rd-navbar-submenu ${
                        dropdown ? "focus" : ""
                      } `}
                    >
                      <Link
                        className="rd-nav-link"
                        style={{
                          color: getColor("/about"),
                          textDecoration: gettrasition("/about"),
                        }}
                        to="/about"
                      >
                        About
                      </Link>
                      {/* <span className="rd-navbar-submenu-toggle"></span>
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item">
                          <Link
                            className="rd-dropdown-link"
                            style={{
                              color: getColor("/team"),
                              textDecoration: gettrasition("/team"),
                            }}
                            to="/team"
                          >
                            Team
                          </Link>
                        </li>
                        <li className="rd-dropdown-item">
                          <Link
                            className="rd-dropdown-link"
                            style={{
                              color: getColor("/teamMember"),
                              textDecoration: gettrasition("/teamMember"),
                            }}
                            to="/teamMember"
                          >
                            Team member
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="rd-nav-item">
                      <Link
                        className="rd-nav-link"
                        style={{
                          color: getColor("/contactus"),
                          textDecoration: gettrasition("/contactus"),
                        }}
                        to="/contactus"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="rd-navbar-elements">
                  <div>
                    <button
                      onClick={() => setToggle(!toggle)}
                      className={`sidebar-toggle sidebar-toggle-1 rd-navbar-fixed-element-2 ${
                        toggle ? "active" : ""
                      }`}
                      data-multitoggle=".sidebar-wrap-2"
                    >
                      <span></span>
                    </button>
                  </div>
                  {/* <div>
                    <button
                      onClick={() => setActiveToggle(!activeToggle)}
                      className={`sidebar-toggle sidebar-toggle-1 rd-navbar-fixed-element-1 ${
                        activeToggle ? "active" : ""
                      }`}
                      data-multitoggle=".sidebar-wrap-1"
                    >
                      <span></span>
                    </button>
                  </div> */}
                  <div>
                    <div className="contacts-default">
                      <div className="contacts-default-text">
                        Call Us for any question
                      </div>
                      <a href="tel:+92 (301) 183 2653">+92 (301) 183 2653</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => setToggle(!toggle)}
              className={`sidebar-wrap sidebar-wrap-2 ${
                toggle ? "active" : ""
              } `}
            >
              <button
                className={`sidebar-close ${toggle ? "active" : ""}`}
                data-multitoggle=".sidebar-wrap-1"
                data-multitoggle-blur=".rd-navbar-wrap"
                data-multitoggle-isolate=""
              >
                <span></span>
              </button>
              <div className="sidebar">
                <h3 className="sidebar-title">Get in Touch</h3>
                <img
                  className="sidebar-image"
                  src="images/header-01-380x214.jpg"
                  alt=""
                  width="380"
                  height="214"
                />
                <ul className="contacts-creative">
                  <li>
                    <div className="unit unit-spacing-md">
                      <div className="unit-left">
                        <span className="icon mdi mdi-phone"></span>
                      </div>
                      <div className="unit-body">
                        <a href="tel:+92 (301) 183 2653">+92 (301) 183 2653</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="unit unit-spacing-md">
                      <div className="unit-left">
                        <span className="icon mdi mdi-email-outline"></span>
                      </div>
                      <div className="unit-body">
                        <a href="mailto:info@hatifone.com">info@hatifone.com</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="unit unit-spacing-md">
                      <div className="unit-left">
                        <span className="icon mdi mdi-map-marker"></span>
                      </div>
                      <div className="unit-body">
                        <a href="#">
                          1/6-P, PECHS, Block 6, Laeeq Begum Road,
                          <br className="d-none d-xl-inline" />
                          Near Nursery Flyover, Shahra-e-Faisal,
                          <br className="d-none d-xl-inline" />
                          Karachi Pakistan
                        </a>
                      </div>
                    </div>
                  </li>
                  {/* <li>
                    <div className="unit unit-spacing-md">
                      <div className="unit-left">
                        <span className="icon mdi mdi-clock"></span>
                      </div>
                      <div className="unit-body">
                        <div className="text-600">
                          Mon - Frid: 08:00am - 07:00pm
                        </div>
                        <div className="text-600">
                          Sat - Sun: 10:00am - 05:00pm
                        </div>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
              <div className="sidebar-panel">
                <ul className="list-social">
                  <li>
                    <a
                      className="icon mdi mdi-facebook"
                      href="https://www.facebook.com/HatifOne"
                      target="_blank"
                    ></a>
                  </li>
                  <li>
                    <a
                      className="icon mdi mdi-twitter"
                      href="https://www.facebook.com/HatifOne"
                      target="_blank"
                    ></a>
                  </li>
                  <li>
                    <a
                      className="icon mdi mdi-instagram"
                      href="https://www.facebook.com/HatifOne"
                      target="_blank"
                    ></a>
                  </li>
                  <li>
                    <a
                      className="icon mdi mdi-youtube-play"
                      href="https://www.facebook.com/HatifOne"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div
              // onClick={() => setToggle(!toggle)}
              // className={`sidebar-wrap sidebar-wrap-2 ${
              //   toggle ? "active" : ""
              // } `}
              className="sidebar-wrap sidebar-wrap-1"
             >
              <button
                className={`sidebar-close ${toggle ? "active" : ""}`}
                data-multitoggle=".sidebar-wrap-2"
                data-multitoggle-blur=".rd-navbar-wrap"
                data-multitoggle-isolate=""
              >
                <span></span>
              </button>
              <div className="sidebar">
                <h3 className="sidebar-title">My Cart</h3>
                <div className="product product-small navbar-product">
                  <div className="product-media">
                    <img
                      className="product-img"
                      src="images/header-02-100x100.jpg"
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className="product-body">
                    <div className="product-title">
                      <Link className="link-dark" to="single-product.html">
                        FixIT Laptop CPU Cooling Fan Replacement
                      </Link>
                    </div>
                    <div className="product-price h6 text-primary">$12.00</div>
                  </div>
                  <button className="product-remove icon linearicons-trash"></button>
                </div>
                <div className="product product-small navbar-product">
                  <div className="product-media">
                    <img
                      className="product-img"
                      src="images/header-03-100x100.jpg"
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className="product-body">
                    <div className="product-title">
                      <Link className="link-dark" to="single-product.html">
                        InVision SB220Q bi 21.5 Inches Full HD IPS Ultra-Thin
                        Monitor
                      </Link>
                    </div>
                    <div className="product-price h6 text-primary">$12.00</div>
                  </div>
                  <button className="product-remove icon linearicons-trash"></button>
                </div>
              </div>
              <div className="sidebar-footer">
                <div className="sidebar-footer-price">
                  <span>Subtotal: </span>
                  <span className="text-primary fw-bold">$24.00</span>
                </div>
                <div className="sidebar-footer-btns">
                  <Link
                    className="btn btn-primary btn-block"
                    to="checkout.html"
                  >
                    Checkout
                  </Link>
                  <Link className="btn btn-secondary btn-block" to="cart.html">
                    View Cart
                  </Link>
                </div>
              </div>
            </div> */}
          </nav>
        </div>
      </header>
      {/* mobile navbar */}
      <MbHeader />
    </>
  );
}

export default withRouter(Header);
