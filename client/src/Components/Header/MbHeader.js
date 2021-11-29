import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MbHeader = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);
  const [, setAboutMenu] = useState(false); // aboutMenu
  const [, setServiceMenu] = useState(false); // serviceMenu
  const [, setNewsMenu] = useState(false); // newsMenu
  const [, setPagesMenu] = useState(false); // pagesMenu
  const [, setPages1] = useState(false); // pages1
  const [, setPages2] = useState(false); // pages2
  const [, setGallry] = useState(false); // gallry
  const [, setShop] = useState(false); // shop
  const [, setElementMenu] = useState(false); // elementMenu
  const [toggle, setToggle] = useState(false);
  const [, setActiveToggle] = useState(false); // activeToggle

  useEffect(() => {
    setActiveMenu(false);
    setShop(false);
    setPages1(false);
    setPages2(false);
    setGallry(false);
    setPagesMenu(false);
    setAboutMenu(false);
    setServiceMenu(false);
    setNewsMenu(false);
    setElementMenu(false);
    setToggle(false);
    setActiveToggle(false);
  }, [location]);

  return (
    <>
      <header className="mdsection page-header">
        <div className="rd-navbar-wrap" style={{ height: "0px" }}>
          <nav
            className="rd-navbar rd-navbar-creative rd-navbar-creative-2 rd-navbar--is-touch rd-navbar-original rd-navbar-fixed"
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
                    onClick={() => setActiveMenu(!activeMenu)}
                    className={`rd-navbar-toggle toggle-original ${
                      activeMenu ? "active" : ""
                    }`}
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
                <div
                  className={`rd-navbar-nav-wrap toggle-original-elements ${
                    activeMenu ? "active" : ""
                  }`}
                >
                  <ul className="rd-navbar-nav">
                    <li className="rd-nav-item">
                      <Link className="rd-nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li
                      // onClick={() => setAboutMenu(!aboutMenu)}
                      // className={`rd-nav-item rd-navbar--has-dropdown rd-navbar-submenu ${
                      //   aboutMenu ? "opened" : ""
                      // } `}
                      className="rd-nav-item rd-navbar--has-dropdown rd-navbar-submenu "
                    >
                      <Link className="rd-nav-link" to="/about">
                        About
                      </Link>
                      {/* <span className="rd-navbar-submenu-toggle"></span> */}
                      {/* <ul
                        className="rd-menu rd-navbar-dropdown rd-navbar-open-right"
                        // style=""
                      >
                        <li className="rd-dropdown-item">
                          <Link className="rd-dropdown-link" to="/team">
                            Team
                          </Link>
                        </li>
                        <li className="rd-dropdown-item">
                          <Link className="rd-dropdown-link" to="/teamMember">
                            Team member
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li
                      // // onClick={() => setServiceMenu(!serviceMenu)}
                      // className={`rd-nav-item rd-navbar--has-dropdown rd-navbar-submenu ${
                      //   serviceMenu ? "opened" : ""
                      // } `}
                      className="rd-nav-item rd-navbar--has-dropdown rd-navbar-submenu"
                    >
                      <Link className="rd-nav-link" to="/services">
                        Services
                      </Link>
                      {/* <span className="rd-navbar-submenu-toggle"></span> */}
                      {/* <ul className="rd-menu rd-navbar-dropdown rd-navbar-open-right">
                        <li className="rd-dropdown-item">
                          <Link
                            className="rd-dropdown-link"
                            // style={{
                            //     color: getColor("/singleServices"),
                            //     textDecoration: gettrasition("/singleServices"),
                            //   }}
                            to="/singleServices"
                          >
                            Single service
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="rd-nav-item">
                      <Link className="rd-nav-link" to="/clients">
                        Clients
                      </Link>
                    </li>
                    <li className="rd-nav-item">
                      <Link className="rd-nav-link" to="/contactus">
                        Contact us
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
                      <a
                        href="https://wa.me/923212897837"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span class="iconify" data-icon="mdi:whatsapp"></span>
                        +92 321 289 7837
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => setToggle(!toggle)}
              className={`sidebar-wrap sidebar-wrap-1 ${
                toggle ? "active" : ""
              }`}
            >
              <button
                className={`sidebar-close ${toggle ? "active" : ""}`}
                data-multitoggle=".sidebar-wrap-1 "
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
                        <a
                          href="https://wa.me/923212897837"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span class="iconify" data-icon="mdi:whatsapp"></span>{" "}
                          +92 321 289 7837
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="unit unit-spacing-md">
                      <div className="unit-left">
                        <span className="icon mdi mdi-email-outline"></span>
                      </div>
                      <div className="unit-body">
                        <a href="mailto:#">info@demolink.org</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="unit unit-spacing-md">
                      <div className="unit-left">
                        <span className="icon mdi mdi-map-marker"></span>
                      </div>
                      <div className="unit-body">
                        <a href="/">
                          2972 Westheimer Rd. Santa Ana, Illinois 85486
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
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
                  </li>
                </ul>
              </div>
              <div className="sidebar-panel">
                <ul className="list-social">
                  <li>
                    <a
                      className="icon mdi mdi-facebook"
                      href="https://www.facebook.com/HatifOne"
                    ></a>
                  </li>
                  <li>
                    <Link className="icon mdi mdi-twitter" to="/"></Link>
                  </li>
                  <li>
                    <Link className="icon mdi mdi-instagram" to="/"></Link>
                  </li>
                  <li>
                    <a
                      className="icon mdi mdi-linkedin"
                      href="https://www.linkedin.com/company/hatifone/"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MbHeader;
