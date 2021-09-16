import React from "react";

const FaqsCom = () => {
  return (
    <>
      <section className="section section-lg bg-100 text-center">
        <div className="container">
          <div className="row row-15 row-content justify-content-center">
            <div className="col-lg-10">
              <h1 className="text-divider">
                <span className="text-divider-item"></span>Frequently Asked{" "}
                <br />
                Questions
              </h1>
              <p>
                <span className="d-inline-block" style={{ maxWidth: "600px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </span>
              </p>
              <div
                className="card-group-custom"
                id="accordion1"
                role="tablist"
                aria-multiselectable="false"
              >
                <article className="card card-custom card-corporate">
                  <div className="card-header" role="tab">
                    <div className="card-title h4">
                      <a
                        id="accordion1-card-head-lcwyhgwv"
                        data-bs-toggle="collapse"
                        data-parent="#accordion1"
                        href="#accordion1-card-body-etnsbnrw"
                        aria-controls="accordion1-card-body-etnsbnrw"
                        aria-expanded="true"
                        role="button"
                      >
                        Do you provide any scripts with your templates?
                        <div className="card-arrow"></div>
                      </a>
                    </div>
                  </div>
                  <div
                    className="collapse show"
                    id="accordion1-card-body-etnsbnrw"
                    aria-labelledby="accordion1-card-head-lcwyhgwv"
                    data-parent="#accordion1"
                    role="tabpanel"
                  >
                    <div className="card-body">
                      <p>
                        Our templates do not include any additional scripts.
                        Newsletter subscriptions, search fields, forums, image
                        galleries (in HTML versions of Flash products) are
                        inactive. Basic scripts can be easily added at zemez.io
                        If you are not sure that the element you’re interested
                        in is active please contact our Support Chat for
                        clarification.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="card card-custom">
                  <div className="card-header" role="tab">
                    <div className="card-title h4">
                      <a
                        className="collapsed"
                        id="accordion1-card-head-wdpxehrm"
                        data-bs-toggle="collapse"
                        data-parent="#accordion1"
                        href="#accordion1-card-body-tbeqktni"
                        aria-controls="accordion1-card-body-tbeqktni"
                        aria-expanded="false"
                        role="button"
                      >
                        What are the advantages of purchasing a website
                        template?
                        <div className="card-arrow"></div>
                      </a>
                    </div>
                  </div>
                  <div
                    className="collapse"
                    id="accordion1-card-body-tbeqktni"
                    aria-labelledby="accordion1-card-head-wdpxehrm"
                    data-parent="#accordion1"
                    role="tabpanel"
                  >
                    <div className="card-body">
                      <p>
                        The major advantage is price: You get a high quality
                        design for just $20-$70. You don’t have to hire a web
                        designer or web design studio. Second advantage is time
                        frame: It usually takes 5-15 days for a good designer to
                        produce a web page of such quality.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="card card-custom">
                  <div className="card-header" role="tab">
                    <div className="card-title h4">
                      <a
                        className="collapsed"
                        id="accordion1-card-head-yllkbvcs"
                        data-bs-toggle="collapse"
                        data-parent="#accordion1"
                        href="#accordion1-card-body-etmigofg"
                        aria-controls="accordion1-card-body-etmigofg"
                        aria-expanded="false"
                        role="button"
                      >
                        What do I receive when I order a template from Zemez?
                        <div className="card-arrow"></div>
                      </a>
                    </div>
                  </div>
                  <div
                    className="collapse"
                    id="accordion1-card-body-etmigofg"
                    aria-labelledby="accordion1-card-head-yllkbvcs"
                    data-parent="#accordion1"
                    role="tabpanel"
                  >
                    <div className="card-body">
                      <p>
                        After you complete the payment via our secure form you
                        will receive the instructions for downloading the
                        product. The source files in the download package can
                        vary based on the type of the product you have
                        purchased.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="card card-custom">
                  <div className="card-header" role="tab">
                    <div className="card-title h4">
                      <a
                        className="collapsed"
                        id="accordion1-card-head-vkklwmst"
                        data-bs-toggle="collapse"
                        data-parent="#accordion1"
                        href="#accordion1-card-body-skdxvaxe"
                        aria-controls="accordion1-card-body-skdxvaxe"
                        aria-expanded="false"
                        role="button"
                      >
                        In what formats are your templates available?
                        <div className="card-arrow"></div>
                      </a>
                    </div>
                  </div>
                  <div
                    className="collapse"
                    id="accordion1-card-body-skdxvaxe"
                    aria-labelledby="accordion1-card-head-vkklwmst"
                    data-parent="#accordion1"
                    role="tabpanel"
                  >
                    <div className="card-body">
                      <p>
                        Website templates are available in Photoshop and HTML
                        formats. Fonts are included with the Photoshop file. In
                        most templates, HTML is compatible with Adobe®
                        Dreamweaver® and Microsoft® FrontPage®.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqsCom;
