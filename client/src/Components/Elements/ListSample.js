import React from "react";
import DividerSection from "./DividerSection";

const ListSample = () => {
  return (
    <>
      <section className="section-lg bg-transparent">
        <div className="container">
          <div className="row row-30">
            <div className="col-xs-6">
              <h3 className="text-divider">
                <span className="text-divider-item"></span>Unordered List
              </h3>
              <ul className="list list-marked">
                <li className="list-item">Lorem ipsum dolor sit amet</li>
                <li className="list-item">
                  Consectetur adipiscing elit, sed do eiusmod
                </li>
                <li className="list-item">
                  Labore et dolore magna aliqua
                  <ul className="list list-marked">
                    <li className="list-item">
                      Ut enim ad minim veniam, quis nostrud
                    </li>
                    <li className="list-item">Lorem ipsum dolor sit amet</li>
                  </ul>
                </li>
                <li className="list-item">Adipiscing elit sed do eiusmod</li>
                <li className="list-item">Dolor amet consectetur</li>
              </ul>
            </div>
            <div className="col-xs-6">
              <h3 className="text-divider">
                <span className="text-divider-item"></span>Ordered List
              </h3>
              <ol className="list list-ordered">
                <li className="list-item">Lorem ipsum dolor sit amet</li>
                <li className="list-item">
                  Consectetur adipiscing elit, sed do eiusmod
                  <ol className="list list-ordered">
                    <li className="list-item">Labore et dolore magna aliqua</li>
                    <li className="list-item">
                      Ut enim ad minim veniam, quis nostrud
                    </li>
                  </ol>
                </li>
                <li className="list-item">Adipiscing elit sed do eiusmod</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <DividerSection />
    </>
  );
};

export default ListSample;
