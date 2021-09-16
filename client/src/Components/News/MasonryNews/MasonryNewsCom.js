import React, { useEffect } from "react";
import AboutHeaderSection from "../../About/AboutHeaderSection";
import LatestCom from "../../Home/LatestNews/LatestCom";
import NextNumber from "../GridNews/NextNumber";

const MasonryNewsCom = () => {
  useEffect(() => {
    document.title = "Masonry News";
  }, []);
  return (
    <>
      <AboutHeaderSection
        className="section breadcrumbs-custom bg-100"
        item1="News"
        item2="MASONRY NEWS"
      />
      <section className="section section-lg bg-100 text-center">
        <div className="container">
          <h2 className="text-divider">
            <span className="text-divider-item"></span>Latest News
          </h2>
          <p>
            <span className="d-inline-block" style={{ maxWidth: "550px" }}>
              Check out the latest publications by our team.
            </span>
          </p>
          <div className="row row-30 justify-content-center text-start">
            <LatestCom
              title="Top 10 Network Security Tips from Our Experts"
              pera="Purus tempus leo nibh malesuada. Sit parturient dignissim posuere ut. Cras consequat arcu magna. Suspendisse quis suscipit dui."
              img="images/home-14-370x220.jpg"
            />
            <LatestCom
              title="Get the Most out of Your Computer"
              pera="Egestas ultricies nunc adipiscing arcu sit nunc metus dictumst."
              img="images/news-04-370x220.jpg"
            />
            <LatestCom
              title="HDD or SSD: What to Choose and Why?"
              pera="Purus in non at amet purus sodales. Eget adipiscing vel turpis tempor. Cras consequat arcu magna."
              img="images/news-03-370x220.jpg"
            />
            <LatestCom
              title="How To Clean Your PC from Viruses"
              pera="Volutpat duis ut ullamcorper fermentum duis sed. Lectus et ullamcorper. Sed blandit porttitor massa, id aliquam tellus lacinia in."
              img="images/home-15-370x220.jpg"
            />
            <LatestCom
              title="Recycling an Old Computer Safely"
              pera="Fermentum nunc nunc elementum, mi. Vel vulputate id donec in."
              img="images/news-05-370x220.jpg"
            />
            <LatestCom
              title="Checking the Speed of Your Internet Connection"
              pera="Nunc felis vulputate elementum risus, egestas aenean. Sem in."
              img="images/news-08-370x220.jpg"
            />
          </div>
          <NextNumber className="pag justify-content-center" />
        </div>
      </section>
    </>
  );
};

export default MasonryNewsCom;
