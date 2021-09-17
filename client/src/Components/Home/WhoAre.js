import React from "react";
import Counts from "../About/Counts";
import SignUpCom from "./SignUp/SignUpCom";

const WhoAre = () => {
  return (
    <>
      <SignUpCom
        className="section section-lg bg-transparent"
        title="Who we are 
        and How we Work"
        pera="Hatifone provides software driven communication to some of the
        leading brands in Pakistan and Middle East. Enabling seamless
        customer experience, this powerful platform is the answer to all
        your communication challenges. Hatifone enhances leads by a
        significant percentage to increase campaign effectiveness, it
        enables you to call back your customers who gave missed calls,
        the call is processed via auto-dialer, connecting the target
        audience with automated IVR messages and agents."
        // agry="I agree to the"
        // agrylink1=" Privacy Policy "
        // and="and"
        // agrylink2=" Terms of Service"
      />
      {/* <section className="section section-lg bg-100">
        <div className="container">
          <div className="row row-30 justify-content-xl-between">
            <div className="col-md-6 col-xl-5">
              <h2 className="text-divider">
                <span className="text-divider-item"></span>Who we are <br />
                and How we Work
              </h2>
              <p>
                Hatifone provides software driven communication to some of the
                leading brands in Pakistan and Middle East. Enabling seamless
                customer experience, this powerful platform is the answer to all
                your communication challenges. Hatifone enhances leads by a
                significant percentage to increase campaign effectiveness, it
                enables you to call back your customers who gave missed calls,
                the call is processed via auto-dialer, connecting the target
                audience with automated IVR messages and agents.
              </p>
              <Counts />
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
                  <label className="form-label" htmlFor="repair-name">
                    Your name
                  </label>
                  <input
                    className="form-input"
                    id="repair-name"
                    type="text"
                    name="name"
                    data-constraints="@Required"
                  />
                </div>
                <div className="form-wrap">
                  <div className="form-icon mdi mdi-phone"></div>
                  <label className="form-label" htmlFor="repair-phone">
                    Your phone
                  </label>
                  <input
                    className="form-input"
                    id="repair-phone"
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
                </div> */}
      {/* <div className="form-meta">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span>By clicking the button you agree to the </span>
                    <a className="link-underline" href="privacy-policy.html">
                      Privacy Policy
                    </a>
                    <span> and </span>
                    <a className="link-underline" href="#">
                      Terms of Service
                    </a>
                  </label>
                </div> */}
      {/* </form>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default WhoAre;
