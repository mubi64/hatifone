import React from "react";
import CountUp from "react-countup";

const Counts = () => {
  return (
    <>
      <div className="row row-15 row-content">
        <div className="col-6 col-xl-5">
          <div className="counter-simple">
            <div className="counter-value h1">
              <span className="counter">
                <CountUp end={99} duration={0.1} />
              </span>
              <span className="counter-postfix">%</span>
            </div>
            <div className="counter-title">Success rate</div>
          </div>
        </div>
        <div className="col-6">
          <div className="counter-simple">
            <div className="counter-value h1">
              <span className="counter">
                <CountUp end={2} duration={0.1} />
              </span>
              <span className="counter-postfix">k</span>
            </div>
            <div className="counter-title">Excellent reviews</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counts;
