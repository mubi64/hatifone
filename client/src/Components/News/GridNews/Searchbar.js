import React from "react";

const Searchbar = () => {
  return (
    <>
      <div className="widget">
        <div className="widget-body">
          <form
            className="rd-search form-search form-sm"
            action="search-results.html"
            method="GET"
          >
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                placeholder="Enter a keyword"
                autoComplete="off"
                name="s"
              />
            </div>
            <button className="form-search-btn mdi mdi-magnify"></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
