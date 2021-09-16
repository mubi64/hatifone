import React from "react";

const Form = (props) => {
  return (
    <>
      <form
        className="rd-mailform rd-form-inline text-start"
        data-form-output="form-output-global"
        data-form-type="subscribe"
        method="post"
        action="bat/rd-mailform.php"
      >
        <div className="form-wrap">
          <div className="form-icon mdi mdi-email-outline"></div>
          <label className="form-label" htmlFor="coming-soon-subscribe">
            Type your email
          </label>
          <input
            className="form-input"
            id="coming-soon-subscribe"
            type="email"
            name="name"
            data-constraints="@Required @Email"
          />
        </div>
        <div className="form-button">
          <button
            className="btn btn-secondary btn-ujarak btn-block"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
