import React from "react";
import { Link } from "react-router-dom";

const SignUpCom = (props) => {
  return (
    <>
      <section className={props.className} id="signUp">
        <div className="container">
          <div className="row row-30 justify-content-xl-between">
            <div className="col-md-6 col-xl-5">
              <h2 className="text-divider">
                <span className="text-divider-item"></span>
                {props.title}
              </h2>
              <p style={{ textAlign: "justify" }}>{props.pera}</p>
            </div>
            <div className="col-md-6 col-xl-5">
              <form
                className="rd-mailform form-boxed text-start"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="form-boxed-header">
                  <h3>Sign up for a Consultancy</h3>
                  <p>Enter your contact details to schedule a meeting.</p>
                </div>
                <div className="form-wrap">
                  <div className="form-icon mdi mdi-account-outline"></div>
                  <label className="form-label" htmlFor="repair-name-1">
                    Your name
                  </label>
                  <input
                    className="form-input"
                    id="repair-name-1"
                    type="text"
                    name="name"
                    data-constraints="@Required"
                  />
                </div>
                <div className="form-wrap">
                  <div className="form-icon mdi mdi-phone"></div>
                  <label className="form-label" htmlFor="repair-phone-1">
                    Your phone
                  </label>
                  <input
                    className="form-input"
                    id="repair-phone-1"
                    type="text"
                    name="phone"
                    data-constraints="@Required @Numeric"
                  />
                </div>
                <div className="form-button">
                  <button
                    className="btn btn-secondary btn-ujarak btn-block"
                    type="submit"
                  >
                    Submit Request
                  </button>
                </div>
                {/* <div className="form-meta">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span>{props.agry} </span>
                    <Link className="link-underline" to="privacy-policy.html">
                      {props.agrylink1}
                    </Link>
                    <span> {props.and} </span>
                    <a className="link-underline" href="#">
                      {props.agrylink2}
                    </a>
                  </label>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpCom;
