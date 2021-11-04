import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="section footer bg-primary context-dark">
        <div className="container">
          <div className="row row-40">
            <div className="col-md-5 col-xl-6">
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
              <div className="xsmall">A brand by Sowaan Private Limited</div>
              <hr />
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="xsmall">Call Us for any question:</div>
                  <div className="contact-info-link h3">
                    <a href="tel:+92 (301) 183 2653">+92 (301) 183 2653</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  1/6-P, PECHS, Block 6, Laeeq Begum Road,
                  <br className="d-none d-xl-inline" />
                  Near Nursery Flyover, Shahra-e-Faisal,
                  <br className="d-none d-xl-inline" />
                  Karachi Pakistan
                </div>
                <div className="contact-info-item">
                  <a
                    className="link link-btn link-btn-1"
                    href="mailto:info@hatifone.com"
                  >
                    info@hatifone.com
                  </a>
                </div>
                <div className="social">
                  <a
                    className="social-icon icon icon-md mdi mdi-facebook"
                    href="https://www.facebook.com/HatifOne"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <a
                    className="social-icon icon icon-md mdi mdi-twitter"
                    href="https://www.facebook.com/HatifOne"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <a
                    className="social-icon icon icon-md mdi mdi-instagram"
                    href="https://www.facebook.com/HatifOne"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <a
                    className="social-icon icon icon-md mdi mdi-youtube-play"
                    href="https://www.facebook.com/HatifOne"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-xl-6">
              <h3>Subscribe to Newsletter</h3>
              <p>
                Sign up for our e-mail and be the first to know about our
                special offers!
              </p>
              <form
                className="rd-mailform rd-form-inline form-inline-1 text-start"
                data-form-output="form-output-global"
                data-form-type="subscribe"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="form-wrap">
                  <div className="form-icon mdi mdi-email-outline"></div>
                  <label className="form-label" htmlFor="footer-subscribe">
                    Type your email
                  </label>
                  <input
                    className="form-input"
                    id="footer-subscribe"
                    type="email"
                    name="name"
                    data-constraints="@Required @Email"
                  />
                </div>
                <div className="form-button">
                  <button className="btn btn-secondary btn-block" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
              {/* <div className="row row-12">
                <div className="col-xs-3 col-sm-4">
                  <ul className="list">
                    <li>
                      <Link to="/about">Who We Are</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <Link to="/contactus">Contacts</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-9 col-sm-8">
                  <ul className="list">
                    <li>
                      <Link to="/singleServices">
                        Laptop Repair / Computer Repair
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleServices">
                        Cleaning Laptops / Replacing Thermal Paste
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleServices">Data Recovery</Link>
                    </li>
                    <li>
                      <Link to="/singleServices">OS Installation</Link>
                    </li>
                    <li>
                      <Link to="/singleServices">
                        Assembling a Personal Computer at Home
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div className="col-12">
              <p className="rights text-caption">
                <span>&copy;&nbsp;</span>
                <span className="copyright-year"></span>
                <span>&nbsp;</span>
                <span>Hatifone</span>
                <span>.&nbsp;</span>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="snackbars" id="form-output-global"></div>
    </>
  );
};

export default Footer;
