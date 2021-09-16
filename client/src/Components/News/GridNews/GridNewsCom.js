import React, { useEffect } from "react";
import AboutHeaderSection from "../../About/AboutHeaderSection";
import Category from "./Category";
import GridPropsCom from "./GridPropsCom";
import NextNumber from "./NextNumber";
import Searchbar from "./Searchbar";
import SidebarCom from "./SidebarCom";
import Calender from "./Calender"

const GridNewsCom = () => {
  useEffect(() => {
    document.title = "Grid News";
  }, []);
  return (
    <>
      <AboutHeaderSection
        className="section breadcrumbs-custom bg-100"
        item1="NEWS"
        item2="GRID NEWS"
      />
      <section className="section section-lg bg-100 text-center">
        <div className="container">
          <h1 className="text-divider">
            <span className="text-divider-item"></span>Grid News
          </h1>
          <div className="row row-50 row-content-2 justify-content-xl-between text-start">
            <div className="col-md-8">
              <div className="row row-30 justify-content-center">
                <GridPropsCom
                  img="images/news-01-370x220.jpg"
                  title="Top 10 Network Security Tips from Our Experts"
                  pera="Purus tempus leo nibh malesuada. Sit parturient dignissim posuere ut."
                />
                <GridPropsCom
                  img="images/news-02-370x220.jpg"
                  title="How To Clean Your PC from Viruses"
                  pera="Volutpat duis ut ullamcorper fermentum duis sed. Vitae vel."
                />
                <GridPropsCom
                  img="images/news-03-370x220.jpg"
                  title="How to Speed Up Your Old MacOS Laptop"
                  pera="Eget id at lorem amet ultrices malesuada sed. Vel dui nec."
                />
                <GridPropsCom
                  img="images/news-04-370x220.jpg"
                  title="Get the Most out of Your Computer"
                  pera="Egestas ultricies nunc adipiscing arcu sit nunc metus dictumst."
                />
                <GridPropsCom
                  img="images/news-05-370x220.jpg"
                  title="Recycling an Old Computer Safely"
                  pera="Fermentum nunc nunc elementum, mi. Vel vulputate id donec in."
                />
                <GridPropsCom
                  img="images/news-06-370x220.jpg"
                  title="Top 10 Tips to Keep your PC in its Best Shape"
                  pera="Tempus adipiscing ut purus quam lorem vel tincidunt integer orci."
                />
                <GridPropsCom
                  img="images/news-07-370x220.jpg"
                  title="HDD or SSD: What to Choose and Why?"
                  pera="Purus in non at amet purus sodales. Eget adipiscing vel turpis tempor."
                />
                <GridPropsCom
                  img="images/news-08-370x220.jpg"
                  title="Checking the Speed of Your Internet Connection"
                  pera="Nunc felis vulputate elementum risus, egestas aenean. Sem in."
                />
              </div>
              <NextNumber className="pag justify-content-center justify-content-md-start" />
            </div>
            <div className="col-md-4 col-lg-3 widgets">
              <Searchbar />
              <Category />
              <SidebarCom />

              <div className="widget">
                <h6 className="widget-title">Recent comment</h6>
                <div className="widget-body">
                  <div className="comment comment-small">
                    <div className="comment-meta">
                      <div className="comment-meta-item">
                        <div className="comment-meta-icon mdi mdi-account-outline"></div>
                        <div className="comment-author">Adam Smith on</div>
                      </div>
                    </div>
                    <div className="comment-title h4">
                      <a href="#">Repairing Your Computer Quicker for Less</a>
                    </div>
                  </div>
                  <div className="comment comment-small">
                    <div className="comment-meta">
                      <div className="comment-meta-item">
                        <div className="comment-meta-icon mdi mdi-account-outline"></div>
                        <div className="comment-author">Adam Smith on</div>
                      </div>
                    </div>
                    <div className="comment-title h4">
                      <a href="#">Don’t Fall Victim to the Blackmail Scam</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget">
                <div className="widget-title h6">Archive</div>
                <div className="widget-body">
                  <ul className="widget-list widget-list-2 list-marked-1">
                    <li className="widget-list-item">
                      <div className="d-flex justify-content-sm-between">
                        <a
                          className="widget-list-link link-dark link-underline"
                          href="#"
                        >
                          November 2021
                        </a>
                        <span>2</span>
                      </div>
                    </li>
                    <li className="widget-list-item">
                      <div className="d-flex justify-content-sm-between">
                        <a
                          className="widget-list-link link-dark link-underline"
                          href="#"
                        >
                          September 2021
                        </a>
                        <span>14</span>
                      </div>
                    </li>
                    <li className="widget-list-item">
                      <div className="d-flex justify-content-sm-between">
                        <a
                          className="widget-list-link link-dark link-underline"
                          href="#"
                        >
                          July 2021
                        </a>
                        <span>8</span>
                      </div>
                    </li>
                    <li className="widget-list-item">
                      <div className="d-flex justify-content-sm-between">
                        <a
                          className="widget-list-link link-dark link-underline"
                          href="#"
                        >
                          June 2021
                        </a>
                        <span>3</span>
                      </div>
                    </li>
                    <li className="widget-list-item">
                      <div className="d-flex justify-content-sm-between">
                        <a
                          className="widget-list-link link-dark link-underline"
                          href="#"
                        >
                          May 2021
                        </a>
                        <span>1</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget">
                <div className="widget-title h6">Quick Links</div>
                <div className="widget-body">
                  <ul className="widget-list widget-list-2 list-marked-1">
                    <li className="widget-list-item">
                      <a
                        className="widget-list-link link-dark link-underline"
                        href="#"
                      >
                        Our Team
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a
                        className="widget-list-link link-dark link-underline"
                        href="#"
                      >
                        Services
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a
                        className="widget-list-link link-dark link-underline"
                        href="#"
                      >
                        Gallery
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a
                        className="widget-list-link link-dark link-underline"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget widget-about">
                <div className="widget-title h6">About Company</div>
                <div className="widget-body">
                  <img
                    src="images/news-09-270x270.jpg"
                    alt=""
                    width="270"
                    height="270"
                  />
                  <h4>Providing Professional PC Repair Services</h4>
                  <p className="small">
                    Eu libero urna, nunc volutpat condimentum. Fringilla
                    suspendisse a aliquam porttitor molestie purus. A mattis
                    cras nunc aliquam penatibus vitae dolor ut nunc. Ultrices.
                  </p>
                  <a className="link-btn link-btn-1" href="about.html">
                    Read More
                  </a>
                </div>
              </div>
              <div className="widget">
                <div className="widget-title h6">Tags</div>
                <div className="widget-body">
                  <div className="widget-tags">
                    <a className="widget-tag" href="">
                      Computer
                    </a>
                    <span>, </span>
                    <a className="widget-tag" href="">
                      Processors
                    </a>
                    <span>, </span>
                    <a className="widget-tag" href="">
                      Graphics Cards
                    </a>
                    <span>, </span>
                    <a className="widget-tag" href="">
                      Memory
                    </a>
                    <span>, </span>
                    <a className="widget-tag" href="">
                      SSD
                    </a>
                  </div>
                </div>
              </div>
              <Calender />
              <div className="widget">
                <h6 className="widget-title">
                  <span className="mdi mdi-rss text-orange me-2"></span>
                  <span>RSS</span>
                </h6>
                <div className="widget-body">
                  <div className="post post-small">
                    <div className="post-title h4">
                      <a href="single-post.html">
                        Top 10 Network Security Tips
                      </a>
                    </div>
                    <div className="post-meta">
                      <div className="post-meta-item">
                        <div className="post-tag text-caption">
                          <a href="#">News</a>
                        </div>
                      </div>
                      <div className="post-meta-item">
                        <div className="post-meta-icon mdi mdi-calendar"></div>
                        <div className="post-date">September 16, 2021</div>
                      </div>
                    </div>
                    <div className="post-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </div>
                    <div className="post-meta">
                      <div className="post-meta-item">
                        <div className="post-meta-icon mdi mdi-account-outline"></div>
                        <div className="post-author">Adam Smith on</div>
                      </div>
                    </div>
                  </div>
                  <div className="post post-small">
                    <div className="post-title h4">
                      <a href="single-post.html">
                        How To Clean Your PC from Viruses
                      </a>
                    </div>
                    <div className="post-meta">
                      <div className="post-meta-item">
                        <div className="post-tag text-caption">
                          <a href="#">News</a>
                        </div>
                      </div>
                      <div className="post-meta-item">
                        <div className="post-meta-icon mdi mdi-calendar"></div>
                        <div className="post-date">September 16, 2021</div>
                      </div>
                    </div>
                    <div className="post-text">
                      Ac tempor a tellus maecenas et cras sed. Justo, lectus
                      velit, facilisi amet tincidunt. Varius fringilla et
                      maecenas in. Sit integer rhoncus nulla.
                    </div>
                    <div className="post-meta">
                      <div className="post-meta-item">
                        <div className="post-meta-icon mdi mdi-account-outline"></div>
                        <div className="post-author">Adam Smith on</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget">
                <h6 className="widget-title">Our Gallery</h6>
                <div className="widget-body">
                  <div className="widget-text">
                    <div className="h7 widget-text-title text-primary">
                      Recent Repairs
                    </div>
                    <figure className="widget-text-image">
                      <img
                        src="images/news-10-270x152.jpg"
                        alt=""
                        width="270"
                        height="152"
                      />
                    </figure>
                  </div>
                  <div className="widget-text">
                    <div className="h7 widget-text-title text-primary">
                      What We Work On
                    </div>
                    <figure className="widget-text-image">
                      <img
                        src="images/news-11-270x152.jpg"
                        alt=""
                        width="270"
                        height="152"
                      />
                      <figcaption className="text-600 xsmall">
                        PC & Laptop Repairs
                      </figcaption>
                    </figure>
                  </div>
                  <div className="widget-text">
                    <div className="h7 widget-text-title">Great service!</div>
                    <div className="small widget-text-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua feugiat. <br />
                      😉 😀
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GridNewsCom;
