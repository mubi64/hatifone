import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <section
        className="section swiper-container swiper-slider swiper-slider-1"
        data-swiper='{"autoplay":{"enabled":false},"effect":"fade"}'
      >
        <video
          muted
          autoPlay
          loop
          style={{
            position: "absolute",
          }}
          poster="/image/home-10-471x340.jpg"
          className="swiper-slide context-dark vide"
        >
          <source src="/video/hatifone_video.mp4" />
        </video>
        <div className="swiper-wrapper">
          <div
            className="swiper-slide context-dark vide"
            data-vide-bg="video/hatifone_video"
            data-vide-options="posterType: jpg"
          >
            <div className="swiper-slide-caption vide-inner">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6">
                    <h1
                      className="text-divider"
                      data-caption-animate="fadeInUp"
                    >
                      <span className="text-divider-item"></span>Modern Call
                      Center Software Solution
                    </h1>
                    <p
                      className="big"
                      data-caption-animate="fadeInUp"
                      data-caption-delay="250"
                    >
                      A asterisk based "Digital PBX Solution" which comes with
                      software or software+agent, both.
                    </p>
                    <Link
                      className="btn btn-secondary btn-ujarak"
                      to="/services"
                      data-caption-animate="fadeInUp"
                      data-caption-delay="450"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className="swiper-slide context-dark"
            data-slide-bg="images/slider-01-1920x900.jpg"
           >
            <div className="swiper-slide-caption">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6">
                    <h1
                      className="text-divider"
                      data-caption-animate="fadeInUp"
                    >
                      <span className="text-divider-item"></span>Computer Repair
                      in Your City
                    </h1>
                    <p
                      className="big"
                      data-caption-animate="fadeInUp"
                      data-caption-delay="250"
                    >
                      Computer repair, reinstallation of windows, cleaning,
                      repair of laptops with a visit of the master.
                    </p>
                    <a
                      className="btn btn-secondary btn-ujarak"
                      href="services.html"
                      data-caption-animate="fadeInUp"
                      data-caption-delay="450"
                    >
                      View All Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="swiper-pagination"></div>
      </section>
    </>
  );
}
