import React from "react";

const TeamMemberSec = () => {
  return (
    <>
      <section className="section section-lg bg-100">
        <div className="container">
          <div className="row row-30 justify-content-xl-between">
            <div className="col-md-5 col-lg-6 col-xl-5">
              <div className="img-responsive">
                <img
                  src="images/team-member-01-470x560.jpg"
                  alt=""
                  width="470"
                  height="560"
                />
                <div className="social">
                  <span>Get social:</span>
                  <a
                    className="social-icon icon icon-md mdi mdi-facebook"
                    href="#"
                  ></a>
                  <a
                    className="social-icon icon icon-md mdi mdi-instagram"
                    href="#"
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              <h2 className="text-divider">
                <span className="text-divider-item"></span>Courtney Henry
              </h2>
              <h6 className="text-primary">Customer Service Manager</h6>
              <div className="divider"></div>
              <p>
                Amet nisl purus in mollis nunc sed. Dolor sit amet consectetur
                adipiscing elit pellentesque. Lorem donec massa sapien faucibus
                et. Interdum consectetur libero id faucibus nisl tincidunt eget.
                Volutpat maecenas volutpat blandit aliquam. Suspendisse interdum
                consectetur libero id faucibus. Risus viverra adipiscing at in
                tellus integer feugiat. Magna ac placerat vestibulum lectus
                mauris ultrices eros. Velit ut tortor pretium viverra
                suspendisse potenti.
              </p>
              <p>
                Purus viverra accumsan in nisl nisi. Laoreet id donec ultrices
                tincidunt arcu non sodales neque id leo in vitae turpis.
              </p>
              <div className="row row-20 row-content">
                <div className="col-xs-5 col-lg-6">
                  <article className="blurb blurb-small">
                    <div className="icon blurb-icon mdi mdi-phone"></div>
                    <div className="blurb-title h4">Phone:</div>
                    <div className="blurb-list">
                      <div className="blurb-list-item">
                        <a className="link-underline link-dark" href="tel:#">
                          +1 (480) 555-0103
                        </a>
                      </div>
                      <div className="blurb-list-item">
                        <a className="link-underline link-dark" href="tel:#">
                          +1 (480) 555-0103
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-xs-7 col-lg-6">
                  <article className="blurb blurb-small">
                    <div className="icon blurb-icon mdi mdi-email-open"></div>
                    <div className="blurb-title h4">Email:</div>
                    <div className="blurb-list">
                      <div className="blurb-list-item">
                        <a className="link-underline" href="mailto:#">
                          info@demolink.org
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <a className="btn btn-secondary btn-ujarak" href="#">
                Sign up for Repair
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMemberSec;
