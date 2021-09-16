import React, { useEffect } from "react";
import AboutHeaderSection from "../../About/AboutHeaderSection";

const ModernNewscom = () => {
  useEffect(() => {
    document.title = "Modern News";
  }, []);
  return (
    <>
      <AboutHeaderSection
        className="section breadcrumbs-custom bg-100"
        item1="News"
        item2="Modern news"
      />
      <section className="section text-center bg-100 margin-1">
        <section className="timeline text-start">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 text-start text-lg-center">
                <time className="h5 meta-timeline" dateTime="2020">
                  May 2021
                </time>
              </div>
              <div className="col-11 col-lg-5 col-lg-offset-0">
                <article className="post post-boxed section-custom">
                  <div className="post-heading">
                    <a className="post-media" href="/singlepost">
                      <img
                        className="post-img"
                        src="images/news-03-470x450.jpg"
                        alt=""
                        width="470"
                        height="450"
                      />
                    </a>
                    <div className="post-tags">
                      <a className="post-tag tag tag-secondary" href="#">
                        News
                      </a>
                    </div>
                  </div>
                  <div className="post-body">
                    <div className="post-meta">
                      <div className="post-meta-item">
                        <div className="post-meta-icon mdi mdi-calendar"></div>
                        <div className="post-date">May 12, 2021</div>
                      </div>
                    </div>
                    <div className="post-title h4">
                      <a href="/singlepost">
                        How to Speed Up Your Old MacOS Laptop
                      </a>
                    </div>
                    <div className="post-text">
                      Eget id at lorem amet ultrices malesuada sed. Vel dui nec.
                    </div>
                  </div>
                </article>
                <article className="post post-boxed section-custom">
                  <div className="post-heading">
                    <a className="post-media" href="/singlepost">
                      <img
                        className="post-img"
                        src="images/news-04-470x275.jpg"
                        alt=""
                        width="470"
                        height="275"
                      />
                    </a>
                    <div className="post-tags">
                      <a className="post-tag tag tag-secondary" href="#">
                        News
                      </a>
                    </div>
                  </div>
                  <div className="post-body">
                    <div className="post-meta">
                      <div className="post-meta-item">
                        <div className="post-meta-icon mdi mdi-calendar"></div>
                        <div className="post-date">May 12, 2021</div>
                      </div>
                    </div>
                    <div className="post-title h4">
                      <a href="/singlepost">
                        Get the Most out of Your Computer
                      </a>
                    </div>
                    <div className="post-text">
                      Egestas ultricies nunc adipiscing arcu sit nunc metus
                      dictumst.
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-11 col-lg-5 pt-5 timeline-right">
                <article className="post post-boxed section-custom">
                  <div className="post-heading">
                    <a className="post-media" href="/singlepost">
                      <img
                        className="post-img"
                        src="images/single-post-01-770x457.jpg  "
                        alt=""
                        width="470"
                        height="450"
                      />
                    </a>
                    <div className="post-tags">
                      <a className="post-tag tag tag-secondary" href="#">
                        News
                      </a>
                    </div>
                  </div>
                  <div className="post-body">
                    <div className="post-meta">
                      <div className="post-meta-item">
                        <div className="post-meta-icon mdi mdi-calendar"></div>
                        <div className="post-date">April 12, 2021</div>
                      </div>
                    </div>
                    <div className="post-title h4">
                      <a href="/singlepost">
                        Top 10 Tips to Keep your PC in its Best Shape
                      </a>
                    </div>
                    <div className="post-text">
                      Tempus adipiscing ut purus quam lorem vel tincidunt
                      integer orci.{" "}
                    </div>
                  </div>
                </article>
                <article className="post post-boxed section-custom">
                  <div className="post-heading">
                    <a className="post-media" href="/singlepost">
                      <img
                        className="post-img"
                        src="images/news-02-370x220.jpg"
                        alt=""
                        width="470"
                        height="450"
                      />
                    </a>
                    <div className="post-tags">
                      <a className="post-tag tag tag-secondary" href="#">
                        News
                      </a>
                    </div>
                  </div>
                  <div className="post-body">
                    <div className="post-meta">
                      <div className="post-meta-item">
                        <div className="post-meta-icon mdi mdi-calendar"></div>
                        <div className="post-date">April 12, 2021</div>
                      </div>
                    </div>
                    <div className="post-title h4">
                      <a href="/singlepost">
                        Top 10 Tips to Keep your PC in its Best Shape
                      </a>
                    </div>
                    <div className="post-text">
                      How To Clean Your PC from Viruses
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-12 timeline-hidden">
                <div className="row justify-content-between">
                  <div className="col-12 text-start text-lg-center">
                    <time className="h5 meta-timeline" dateTime="2016">
                      April 2021
                    </time>
                  </div>
                  <div className="col-11 col-lg-5 col-lg-offset-0">
                    <article className="post post-boxed section-custom">
                      <div className="post-heading">
                        <a className="post-media" href="/singlepost">
                          <img
                            className="post-img"
                            src="images/news-07-470x450.jpg"
                            alt=""
                            width="470"
                            height="450"
                          />
                        </a>
                        <div className="post-tags">
                          <a className="post-tag tag tag-secondary" href="#">
                            News
                          </a>
                        </div>
                      </div>
                      <div className="post-body">
                        <div className="post-meta">
                          <div className="post-meta-item">
                            <div className="post-meta-icon mdi mdi-calendar"></div>
                            <div className="post-date">April 12, 2021</div>
                          </div>
                        </div>
                        <div className="post-title h4">
                          <a href="/singlepost">
                            HDD or SSD: What to Choose and Why?
                          </a>
                        </div>
                        <div className="post-text">
                          Purus in non at amet purus sodales. Eget adipiscing
                          vel turpis tempor.{" "}
                        </div>
                      </div>
                    </article>
                    <article className="post post-boxed section-custom">
                      <div className="post-heading">
                        <a className="post-media" href="/singlepost">
                          <img
                            className="post-img"
                            src="images/news-02-470x275.jpg"
                            alt=""
                            width="470"
                            height="275"
                          />
                        </a>
                        <div className="post-tags">
                          <a className="post-tag tag tag-secondary" href="#">
                            News
                          </a>
                        </div>
                      </div>
                      <div className="post-body">
                        <div className="post-meta">
                          <div className="post-meta-item">
                            <div className="post-meta-icon mdi mdi-calendar"></div>
                            <div className="post-date">April 12, 2021</div>
                          </div>
                        </div>
                        <div className="post-title h4">
                          <a href="/singlepost">
                            How To Clean Your PC from Viruses
                          </a>
                        </div>
                        <div className="post-text">
                          Volutpat duis ut ullamcorper fermentum duis sed. Vitae
                          vel.
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-11 col-lg-5 pt-5 timeline-right">
                    <article className="post post-boxed section-custom">
                      <div className="post-heading">
                        <a className="post-media" href="/singlepost">
                          <img
                            className="post-img"
                            src="images/news-08-470x275.jpg"
                            alt=""
                            width="470"
                            height="275"
                          />
                        </a>
                        <div className="post-tags">
                          <a className="post-tag tag tag-secondary" href="#">
                            News
                          </a>
                        </div>
                      </div>
                      <div className="post-body">
                        <div className="post-meta">
                          <div className="post-meta-item">
                            <div className="post-meta-icon mdi mdi-calendar"></div>
                            <div className="post-date">April 12, 2021</div>
                          </div>
                        </div>
                        <div className="post-title h4">
                          <a href="/singlepost">
                            Checking the Speed of Your Internet Connection
                          </a>
                        </div>
                        <div className="post-text">
                          Eget id at lorem amet ultrices malesuada sed. Vel dui
                          nec.
                        </div>
                      </div>
                    </article>
                    <article className="post post-boxed section-custom">
                      <div className="post-heading">
                        <a className="post-media" href="/singlepost">
                          <img
                            className="post-img"
                            src="images/news-06-470x450.jpg"
                            alt=""
                            width="470"
                            height="450"
                          />
                        </a>
                        <div className="post-tags">
                          <a className="post-tag tag tag-secondary" href="#">
                            News
                          </a>
                        </div>
                      </div>
                      <div className="post-body">
                        <div className="post-meta">
                          <div className="post-meta-item">
                            <div className="post-meta-icon mdi mdi-calendar"></div>
                            <div className="post-date">April 12, 2021</div>
                          </div>
                        </div>
                        <div className="post-title h4">
                          <a href="/singlepost">
                            Top 10 Tips to Keep your PC in its Best Shape
                          </a>
                        </div>
                        <div className="post-text">
                          Tempus adipiscing ut purus quam lorem vel tincidunt
                          integer orci.{" "}
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center mb-5">
                <button className="btn btn-primary timeline-btn">
                  <span>Load More</span>
                  <span>Hide</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ModernNewscom;
