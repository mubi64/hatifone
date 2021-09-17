import React, { useRef, useState } from "react";
import axios from "axios";
import GoogleMap from "./GoogleMap";
import ReCAPTCHA from "react-google-recaptcha";
import AppConfig from "../../../../App.config";

const ContactForm = () => {
  const Form = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [company, setCompany] = useState("");
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
      if (email && company && name && subject !== "") {
        e.preventDefault();
        setLoading(true);
        console.log({ email, name, subject, company });

        const body = {
          name,
          email,
          company,
          subject,
        };

        await axios
          .post("/mail", body, {
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
      setCompany("");
      setSubject("");
    };
    return (
      <>
        <section className="section section-lg bg-transparent">
          <div className="container">
            <div className="row row-40 justify-content-xl-between">
              <div className="col-md-6">
                <h1 className="text-divider">
                  <span className="text-divider-item"></span>Have Any Questions?
                </h1>
                <p>
                  <span
                    className="d-inline-block"
                    style={{ maxWidth: "600px" }}
                  >
                    Your email address will not be published. We promise not to
                    spam!
                  </span>
                </p>
                <ul className="list-icons">
                  <li className="list-item">
                    <div className="list-icon mdi mdi-phone"></div>
                    <a className="link-dark" href="tel:+92 (301) 183 2653">
                      +92 (301) 183 2653
                    </a>
                  </li>
                  <li className="list-item">
                    <div className="list-icon mdi mdi-email-outline"></div>
                    <a className="link" href="mailto:info@hatifone.com">
                      <u>info@hatifone.com</u>
                    </a>
                  </li>
                  <li className="list-item">
                    <div className="list-icon mdi mdi-map-marker"></div>
                    <a className="link-dark" href="#">
                      1/6-P, PECHS, Block 6, Laeeq Begum Road,
                      <br className="d-none d-xl-inline" />
                      Near Nursery Flyover, Shahra-e-Faisal,
                      <br className="d-none d-xl-inline" />
                      Karachi Pakistan
                    </a>
                  </li>
                </ul>
                <div className="social">
                  <a
                    className="social-icon icon icon-md mdi mdi-facebook"
                    href="#"
                  ></a>
                  <a
                    className="social-icon icon icon-md mdi mdi-twitter"
                    href="#"
                  ></a>
                  <a
                    className="social-icon icon icon-md mdi mdi-instagram"
                    href="#"
                  ></a>
                  <a
                    className="social-icon icon icon-md mdi mdi-youtube-play"
                    href="#"
                  ></a>
                </div>
              </div>
              <div className="col-md-6 col-xl-5 offset-custom">
                <form
                  className="rd-mailform text-start"
                  // method="post"
                  // data-form-output="form-output-global"
                  // data-form-type="contact"
                  // action="bat/rd-mailform.php"
                  // onSubmit={handleRequest}
                  // method="post"
                >
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
                    <div className="form-icon mdi mdi-phone"></div>
                    <input
                      className="form-input"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      type="number"
                      placeholder="Your phone"
                    />
                  </div>
                  <div className="form-wrap">
                    <textarea
                      className="form-input"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      type="text"
                      placeholder="Your message"
                    ></textarea>
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
                      type="button"
                      disabled={loading}
                      onClick={handleRequest}
                    >
                      {loading ? "Sending..." : "Submit Request"}
                    </button>
                  </div>
                  {/* <div className="form-meta">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span>I agree to the </span>
                    <a className="link-underline" href="#">
                      Privacy Policy
                    </a>
                    <span> and </span>
                    <a className="link-underline" href="#">
                      Terms of Service
                    </a>
                  </label>
                </div> */}
                </form>
              </div>
            </div>
          </div>
        </section>
        <GoogleMap />
      </>
    );
  };

  return (
    <div className="App">
      <>
        <Form />
      </>
    </div>
  );
};

export default ContactForm;
