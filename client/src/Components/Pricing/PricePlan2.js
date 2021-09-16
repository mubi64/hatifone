import React from "react";
import AboutHeading from "../About/AboutHeading";

const PricePlan2 = () => {
  return (
    <>
      <section className="section section-lg bg-transparent text-center">
        <div className="container">
          <AboutHeading
            title="Pricing Plan 2"
            pera="Suspendisse tellus, sollicitudin lorem donec sit egestas volutpat aliquam. Fringilla posuere rhoncus semper id nec turpis cum arcu est."
          />
          <div className="row row-xl row-30 row-lg-50 justify-content-center text-start">
            <div className="col-xs-10 col-lg-4">
              <article className="pricing-listed">
                <div className="h3 pricing-listed-title">Basic Plan</div>
                <div className="h3 pricing-listed-price">$15</div>
                <div className="pricing-listed-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </div>
                <ul className="list-marked pricing-listed-list small">
                  <li>
                    Sed porta consectetur eleifend fermentum faucibus quis.
                    Eget.
                  </li>
                  <li>
                    Scelerisque ac vestibulum maecenas gravida amet cras risus
                    nulla.{" "}
                  </li>
                  <li>
                    Nibh ante mi tempus volutpat. Justo laoreet nunc eu nullam
                    feugiat justo.
                  </li>
                  <li>Ipsum purus proin quis vitae cras.</li>
                  <li>Ut augue egestas eu nunc.</li>
                </ul>
                <a
                  className="btn pricing-listed-btn btn-ujarak btn-block btn-white"
                  href="/"
                >
                  Order now
                </a>
              </article>
            </div>
            <div className="col-xs-10 col-lg-4">
              <article className="pricing-listed pricing-accent">
                <div className="h3 pricing-listed-title">Standard Plan</div>
                <div className="h3 pricing-listed-price">$20</div>
                <div className="pricing-listed-text">
                  Massa at ut neque, sapien tristique bibendum. Tristique in ut
                  mauris nisl porttitor. Mauris ut feugiat.
                </div>
                <ul className="list-marked pricing-listed-list small">
                  <li>
                    Massa pellentesque blandit felis integer sit pulvinar id
                    neque morbi.
                  </li>
                  <li>
                    Mi auctor iaculis sem ullamcorper. Pharetra fermentum
                    commodo.
                  </li>
                  <li>
                    Vulputate massa pellentesque volutpat libero mattis quis.
                    Lacus.
                  </li>
                  <li>Fringilla elementum eu viverra.</li>
                  <li>Neque et, sed sit mi turpis nibh. </li>
                </ul>
                <a
                  className="btn pricing-listed-btn btn-ujarak btn-block btn-primary"
                  href="/"
                >
                  Order now
                </a>
              </article>
            </div>
            <div className="col-xs-10 col-lg-4">
              <article className="pricing-listed">
                <div className="h3 pricing-listed-title">Ultimate Plan</div>
                <div className="h3 pricing-listed-price">$25</div>
                <div className="pricing-listed-text">
                  Cras commodo proin et egestas. Pellentesque aliquet at neque
                  auctor. Dignissim sed tortor.
                </div>
                <ul className="list-marked pricing-listed-list small">
                  <li>
                    Nunc ultricies dui convallis neque vel sed ipsum nisl
                    faucibus habitant sed.
                  </li>
                  <li>
                    Malesuada quam nunc aliquam venenatis lacus eget eu vitae
                    lorem.
                  </li>
                  <li>
                    Ut magna interdum varius turpis arcu, ac. Nisl ullamcorper
                    lectus.
                  </li>
                  <li>Elementum etiam at ut penatibus.</li>
                  <li>Tortor molestie odio amet viverra.</li>
                </ul>
                <a
                  className="btn pricing-listed-btn btn-ujarak btn-block btn-white"
                  href="/"
                >
                  Order now
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricePlan2;
