import React from "react";
import BlockText from "../News/SinglePost/BlockText";

const BlockQuote = () => {
  return (
    <>
      <section className="section section-lg bg-transparent">
        <div className="container">
          <div className="row row-30">
            <div className="col-lg-8">
              <h3 className="text-divider">
                <span className="text-divider-item"></span>Blockquote
              </h3>
              <BlockText />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlockQuote;
