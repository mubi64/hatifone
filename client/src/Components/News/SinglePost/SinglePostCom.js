import React, { useEffect } from "react";
import Searchbar from "../GridNews/Searchbar";
import Category from "../GridNews/Category";
import SidebarCom from "../GridNews/SidebarCom";
import AboutHeaderSection from "../../About/AboutHeaderSection";
import BlockText from "./BlockText";
import GridPropsCom from "../GridNews/GridPropsCom";

const SinglePostCom = () => {
  useEffect(() => {
    document.title = "Single Post";
  }, []);
  return (
    <>
      <AboutHeaderSection
        className="section breadcrumbs-custom bg-transparent"
        item1="news"
        item2="single post"
      />
      <section className="section section-lg bg-transparent text-center">
        <div className="container">
          <div className="row row-50 row-content-2 justify-content-xl-end justify-content-xxl-between text-start">
            <div className="col-md-8">
              <div className="post-single">
                <div className="post-single-section">
                  <div className="tag tag-lg tag-secondary">News</div>
                  <h1>Top 10 Network Security Tips from Our Experts</h1>
                  <div className="post-meta">
                    <div className="post-meta-item">
                      <div className="post-meta-icon mdi mdi-calendar"></div>
                      <div className="post-date">September 16, 2021</div>
                    </div>
                    <div className="post-meta-item">
                      <div className="post-meta-icon mdi mdi-account-outline"></div>
                      <div className="post-author">Adam Smith</div>
                    </div>
                  </div>
                  <figure>
                    <img
                      src="images/single-post-01-770x457.jpg"
                      alt=""
                      width="770"
                      height="457"
                    />
                    <figcaption>Quality PC tips</figcaption>
                  </figure>
                  <h3>Protecting Your Local Network</h3>
                  <h4>Be aware of phishing attacks</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua augue mauris augue neque.
                  </p>
                  <ul className="list-marked">
                    <li className="list-item">Lorem ipsum dolor sit amet</li>
                    <li className="list-item">
                      Consectetur adipiscing elit, sed do eiusmod
                    </li>
                    <li className="list-item">Labore et dolore magna aliqua</li>
                    <li className="list-item">
                      Ut enim ad minim veniam, quis nostrud exercitation
                    </li>
                  </ul>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <h4>Biometric identifications</h4>
                  <p>
                    Aliquet risus feugiat in ante. Sed cras ornare arcu dui.
                    Pretium lectus quam id leo. Eu augue ut lectus arcu bibendum
                    at varius vel pharetra. Sed enim ut sem viverra aliquet
                    eget. Ut lectus arcu bibendum at varius vel pharetra vel
                    turpis. Laoreet non curabitur gravida arcu ac tortor
                    dignissim convallis.
                  </p>
                  <p>
                    Elementum sagittis vitae et leo duis ut diam quam nulla.
                    Commodo elit at imperdiet dui accumsan sit amet nulla
                    facilisi. In ante metus dictum at tempor commodo
                    ullamcorper. Dignissim cras tincidunt lobortis feugiat.
                    Pulvinar elementum integer enim neque volutpat ac tincidunt
                    vitae. Ultricies mi quis hendrerit dolor magna eget est
                    lorem. Tempus iaculis urna id volutpat lacus laoreet non.
                    Morbi leo urna molestie at elementum eu. Cursus metus
                    aliquam eleifend mi in. Vulputate odio ut enim blandit.
                  </p>
                  <BlockText />
                  <h4>Password security</h4>
                  <p>
                    Sed enim ut sem viverra aliquet eget. Ut lectus arcu
                    bibendum at varius vel pharetra vel turpis. Laoreet non
                    curabitur gravida arcu ac tortor dignissim convallis.
                    Elementum sagittis vitae et leo duis ut diam quam nulla.
                    Commodo elit at imperdiet dui accumsan sit amet nulla
                    facilisi.
                  </p>
                  <h4>Safeguard your data</h4>
                  <p>
                    Nibh mauris cursus mattis molestie. Volutpat commodo sed
                    egestas egestas fringilla phasellus faucibus scelerisque.
                    Mattis pellentesque id nibh tortor id aliquet lectus proin
                    nibh. Pellentesque habitant morbi tristique senectus et.
                    Vestibulum lorem sed risus ultricies tristique nulla. Luctus
                    accumsan tortor posuere ac ut consequat semper viverra nam.
                    Ut lectus arcu bibendum at varius
                  </p>
                  <p>
                    Nibh nisl condimentum id venenatis a condimentum. Leo vel
                    orci porta non pulvinar neque. In nulla posuere sollicitudin
                    aliquam ultrices sagittis orci.
                  </p>
                  <div className="post-single-tags">
                    <span>
                      <span className="mdi mdi-tag-outline text-primary me-2"></span>
                      <span>Tags: </span>
                    </span>
                    <a className="tag tag-inline" href="#">
                      News
                    </a>
                    <span>, </span>
                    <a className="tag tag-inline" href="#">
                      Tips
                    </a>
                    <span>, </span>
                    <a className="tag tag-inline" href="#">
                      Network
                    </a>
                    <span>, </span>
                    <a className="tag tag-inline" href="#">
                      Security
                    </a>
                  </div>
                  <div className="post-share">
                    <div className="post-share-inner">
                      <a
                        className="icon link-dark mdi mdi-facebook"
                        href="#"
                      ></a>
                      <a
                        className="icon link-dark mdi mdi-twitter"
                        href="#"
                      ></a>
                      <a
                        className="icon link-dark mdi mdi-instagram"
                        href="#"
                      ></a>
                    </div>
                  </div>
                  <div className="post-nav">
                    <div className="post-nav-item post-nav-prev">
                      <div className="post-nav-title h4">
                        <a href="#">
                          Checking the Speed of Your Internet Connection
                        </a>
                      </div>
                      <a
                        className="link-btn link-btn-1 link-btn-2"
                        href="#"
                      >
                        &lt; Prev post
                      </a>
                    </div>
                    <div className="post-nav-item post-nav-next">
                      <div className="post-nav-title h4">
                        <a href="#">
                          HDD or SSD: What to Choose and Why?
                        </a>
                      </div>
                      <a
                        className="link-btn link-btn-1 link-btn-2"
                        href="#"
                      >
                        Next post{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="post-single-section text-center text-sm-start">
                  <h4>Related posts</h4>
                  <div className="offset-sm">
                    <div className="row row-30 justify-content-center text-start">
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
                    </div>
                  </div>
                </div>
                <div className="post-single-section">
                  <h4>3 Comments</h4>
                  <div className="comment-clouded">
                    <div className="comment-left">
                      <div className="comment-icon icon mdi mdi-account-outline"></div>
                    </div>
                    <div className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-meta-item flex-grow-1">
                          <ul className="list-dotted">
                            <li>
                              <span>by </span>
                              <span className="comment-author">
                                Emma Wilson
                              </span>
                            </li>
                            <li>
                              Posted{" "}
                              <span className="comment-date">
                                September 16, 2021
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="comment-meta-item">
                          <a
                            className="link-btn link-btn-1 link-btn-2"
                            href="#"
                          >
                            Reply
                          </a>
                        </div>
                      </div>
                      <div className="comment-cloud">
                        <div className="comment-text">
                          Sed enim ut sem viverra aliquet eget. Ut lectus arcu
                          bibendum at varius vel pharetra vel turpis. Laoreet
                          non curabitur gravida arcu ac tortor dignissim
                          convallis. Elementum sagittis vitae et leo duis ut
                          diam quam nulla.
                        </div>
                      </div>
                      <div className="comment-clouded">
                        <div className="comment-left">
                          <img
                            className="comment-image"
                            src="images/single-post-02-60x60.jpg"
                            alt=""
                            width="60"
                            height="60"
                          />
                        </div>
                        <div className="comment-body">
                          <div className="comment-meta">
                            <div className="comment-meta-item flex-grow-1">
                              <ul className="list-dotted">
                                <li>
                                  <span>by </span>
                                  <span className="comment-author">
                                    Adam Smith
                                  </span>
                                </li>
                                <li>
                                  Posted{" "}
                                  <span className="comment-date">
                                    September 16, 2021
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="comment-meta-item">
                              <a
                                className="link-btn link-btn-1 link-btn-2"
                                href="#"
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                          <div className="comment-cloud">
                            <div className="comment-text">
                              Lorem ipsum dolor sit amet conse ctetur
                              adipisicing elit
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-clouded">
                    <div className="comment-left">
                      <div className="comment-icon icon mdi mdi-account-outline"></div>
                    </div>
                    <div className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-meta-item flex-grow-1">
                          <ul className="list-dotted">
                            <li>
                              <span>by </span>
                              <span className="comment-author">John Adams</span>
                            </li>
                            <li>
                              Posted{" "}
                              <span className="comment-date">
                                September 16, 2021
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="comment-meta-item">
                          <a
                            className="link-btn link-btn-1 link-btn-2"
                            href="#"
                          >
                            Reply
                          </a>
                        </div>
                      </div>
                      <div className="comment-cloud">
                        <div className="comment-text">
                          Laoreet non curabitur gravida arcu ac tortor dignissim
                          convallis. Elementum sagittis vitae et leo duis ut
                          diam quam nulla.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-single-section">
                  <h4>Leave a comment</h4>
                  <div className="comment-text small">
                    Your email address will not be published. Required fields
                    are marked *
                  </div>
                  <form className="comment-form text-start">
                    <div className="form-wrap">
                      {/* <label className="form-label" htmlFor="contact-message">
                        Your message
                      </label> */}
                      <textarea
                        className="form-input"
                        id="contact-message"
                        name="message"
                        // defaultValue="Your message"
                        placeholder="Your message"
                        data-constraints="@Required"
                      ></textarea>
                    </div>
                    <div className="form-wrap">
                      <div className="form-icon mdi mdi-account-outline"></div>
                      {/* <label className="form-label" htmlFor="contact-name">
                        Your name
                      </label> */}
                      <input
                        className="form-input"
                        id="contact-name"
                        type="text"
                        placeholder="Your name"
                        name="name"
                        data-constraints="@Required"
                      />
                    </div>
                    <div className="form-wrap">
                      <div className="form-icon mdi mdi-email-outline"></div>
                      {/* <label className="form-label" htmlFor="contact-mail">
                        Your mail
                      </label> */}
                      <input
                        className="form-input"
                        id="contact-mail"
                        type="text"
                        name="mail"
                        placeholder="Your mail"
                        data-constraints="@Required @Email"
                      />
                    </div>
                    <div className="form-button">
                      <button
                        className="btn btn-secondary btn-ujarak"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 widgets">
              <Searchbar />
              <Category />
              <SidebarCom />
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePostCom;
