import React, { useEffect } from "react";
import AboutHeaderSection from "../../About/AboutHeaderSection";
import NextNumber from "../GridNews/NextNumber";
import ListNewsPrps from "./ListNewsPrps";

const ListNewsCom = () => {
  useEffect(() => {
    document.title = "List News";
  }, []);
  return (
    <>
      <AboutHeaderSection
        className="section breadcrumbs-custom bg-100"
        item1="NEWS"
        item2="LIST NEWS"
      />
      <section className="section section-lg bg-100 text-center">
        <div className="container">
          <h1 className="text-divider">
            <span className="text-divider-item"></span>List News
          </h1>
          <div className="row row-30 justify-content-center">
            <div className="col-12">
              <ListNewsPrps
                img="images/news-03-570x340.jpg"
                title="How to Speed Up Your Old MacOS Laptop"
                pera="Eget id at lorem amet ultrices malesuada sed. Vel dui nec. Cras consequat arcu magna. Suspendisse quis suscipit dui. Maecenas nulla metus, volutpat sed maximus sit amet, elementum a mauris..."
              />
              <ListNewsPrps
                img="images/news-05-570x340.jpg"
                title="Recycling an Old Computer Safely"
                pera="Fermentum nunc nunc elementum, mi. Vel vulputate id donec in. Morbi porta mauris nec eleifend lacinia. Integer pulvinar, ligula at iaculis cursus, ipsum nisl tempus ex, in accumsan nibh ligula eget risus..."
              />
              <ListNewsPrps
                img="images/news-06-570x340.jpg"
                title="Top 10 Tips to Keep your PC in its Best Shape"
                pera="Tempus adipiscing ut purus quam lorem vel tincidunt integer orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sagittis arcu eu arcu vulputate..."
              />
              <ListNewsPrps
                img="images/news-07-570x340.jpg"
                title="HDD or SSD: What to Choose and Why?"
                pera="Purus in non at amet purus sodales. Eget adipiscing vel turpis tempor. Vivamus venenatis urna diam, finibus malesuada lorem auctor vel. Nunc fermentum odio mi. Nullam tempor congue sem, eu tristique..."
              />
            </div>
          </div>
          <NextNumber className="pag justify-content-center" />
        </div>
      </section>
    </>
  );
};

export default ListNewsCom;
