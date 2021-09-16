import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <>
      <section className="pcSection section section-lg bg-custom text-center pb-0">
        <div className="bg-custom-inner bg-700"></div>
        <div className="container">
          <div className="context-dark">
            <h2 className="text-divider">
              <span className="text-divider-item"></span>Meet our Team
            </h2>
            <p>
              <span className="d-inline-block" style={{ maxWidth: "550px" }}>
                All our technicians are fully qualified and licensed. Moreover,
                they are incredibly skillful and proficient in various aspects
                of computer repair.
              </span>
            </p>
          </div>
          <div className="row">
            <div className="col-12">
              <Slider {...settings}>
                <div className="person">
                  <div className="person-media">
                    <img
                      className="person-img"
                      src="images/person-01-292x340.jpg"
                      alt=""
                      width="292"
                      height="340"
                    />
                  </div>
                  <div className="person-title h4">
                    <a href="team-member.html">Ralph Edwards</a>
                  </div>
                  <div className="person-meta">General Manager</div>
                </div>
                <div className="person">
                  <div className="person-media">
                    <img
                      className="person-img"
                      src="images/person-02-292x340.jpg"
                      alt=""
                      width="292"
                      height="340"
                    />
                  </div>
                  <div className="person-title h4">
                    <a href="team-member.html">Edward Robertson</a>
                  </div>
                  <div className="person-meta">Field Technician</div>
                </div>
                <div className="person">
                  <div className="person-media">
                    <img
                      className="person-img"
                      src="images/person-03-292x340.jpg"
                      alt=""
                      width="292"
                      height="340"
                    />
                  </div>
                  <div className="person-title h4">
                    <a href="team-member.html">Courtney Adams</a>
                  </div>
                  <div className="person-meta">Customer Service Manager</div>
                </div>
                <div className="person">
                  <div className="person-media">
                    <img
                      className="person-img"
                      src="images/person-04-292x340.jpg"
                      alt=""
                      width="292"
                      height="340"
                    />
                  </div>
                  <div className="person-title h4">
                    <a href="team-member.html">Brooklyn Simmons</a>
                  </div>
                  <div className="person-meta">Repair Technician</div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
