import React from "react";
import Page2Header from "../Page2Header";

const Search = () => {
  return (
    <>
      <Page2Header active="SEARCH RESULTS" />
      <section className="section-md">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <form
                className="rd-form rd-search rd-form-inline"
                action="/searchresults"
                method="GET"
              >
                <div className="form-wrap">
                  <label className="form-label" htmlFor="rd-search-form-input">
                    Enter your search request
                  </label>
                  <input
                    className="form-input"
                    id="rd-search-form-input"
                    type="text"
                    name="s"
                    autoComplete="off"
                  />
                </div>
                <div className="form-wrap form-button">
                  <button className="btn btn-primary btn-ujarak" type="submit">
                    Search
                  </button>
                </div>
              </form>
              <div className="rd-search-results"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
