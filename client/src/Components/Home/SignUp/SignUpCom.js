import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import AppConfig from "../../../App.config";

const SignUpCom = (props) => {
  const HomeForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [token, setToken] = useState("");
    const reCaptcha = useRef();

    const handleRequest = async (e) => {
      if (!token) {
        setError("You must verify the captcha");
        return;
      }

      setError("");
      if (email && name && subject !== "") {
        e.preventDefault();
        setLoading(true);
        console.log({ email, name, subject });

        const body = {
          name,
          email,
          subject,
        };

        await axios
          .post("/api", body, {
            headers: {
              "Content-type": "application/json",
            },
          })
          .then((res) => {
            // alert("Email Sent Successfully");
            setLoading(false);
            console.log(res);
            // window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      } else {
        alert("Please fill all required filled");
      }
      setEmail("");
      setName("");
      setSubject("");
    };
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
                  // data-form-output="form-output-global"
                  // data-form-type="contact"
                  // method="post"
                  // action="bat/rd-mailform.php"
                  onSubmit={handleRequest}
                  method="post"
                >
                  <div className="form-boxed-header">
                    <h3>Sign up for a Consultancy</h3>
                    <p>Enter your contact details to schedule a meeting.</p>
                  </div>
                  <div className="form-wrap">
                    <div className="form-icon mdi mdi-account-outline"></div>
                    <input
                      className="form-input"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required={true}
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-wrap">
                    <div className="form-icon mdi mdi-email-outline "></div>
                    <input
                      className="form-input"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required={true}
                      type="text"
                      placeholder="Your mail"
                    />
                  </div>
                  <div className="form-wrap">
                    <div className="form-icon mdi mdi-subject"></div>
                    <input
                      className="form-input"
                      id="company"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      type="number"
                      placeholder="Your subject"
                    />
                  </div>
                  <div className="form-meta">
                    <ReCAPTCHA
                      ref={reCaptcha}
                      sitekey={AppConfig.GOOGLE.reCaptcha}
                      onChange={(token) => setToken(token)}
                      onErrored={(e) => setToken("")}
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <div className="form-button">
                    <button
                      className="btn btn-secondary btn-ujarak btn-block"
                      type="submit"
                      disabled={loading}
                      onClick={handleRequest}
                    >
                      {loading ? "Sending..." : "Submit Request"}
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
  return (
    <>
      <HomeForm />
    </>
  );
};

export default SignUpCom;
