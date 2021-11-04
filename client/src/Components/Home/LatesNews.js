import React from "react";
import LatestCom from "./LatestNews/LatestCom";

const LatesNews = () => {
  return (
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
            pera="The internet has become a space riddled with malicious links..."
            img="images/home-13-370x220.jpg"
          />
          <LatestCom
            title="How To Clean Your PC from Viruses"
            pera="  There’s nothing quite like realizing your Windows PC, Mac, or
            laptop..."
            img="images/home-14-370x220.jpg"
          />

          <LatestCom
            title="How to Speed Up Your Old MacOS Laptop"
            pera="Remember the feeling of a brand new Mac? A Mac without
            rainbow..."
            img="images/home-15-370x220.jpg"
          />
        </div>
        <a className="link link-btn link-btn-1" href="news.html">
          See All News
        </a>
      </div>
    </section>
  );
};

export default LatesNews;
