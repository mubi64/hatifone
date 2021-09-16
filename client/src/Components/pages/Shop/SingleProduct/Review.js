import React from "react";

const Review = () => {
  return (
    <>
      <section className="section section-lg bg-transparent">
        <div className="container">
          <div className="tab">
            <ul className="nav nav-line" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#navLine1-1"
                  role="tab"
                  aria-selected="true"
                >
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#navLine1-2"
                  role="tab"
                  aria-selected="false"
                >
                  Additional information
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#navLine1-3"
                  role="tab"
                  aria-selected="false"
                >
                  Reviews (0)
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="navLine1-1"
                role="tabpanel"
              >
                <h3>Description</h3>
                <div className="row row-15 row-content">
                  <div className="col-md-6">
                    <p>
                      Aliquet risus feugiat in ante. Sed cras ornare arcu dui.
                      Pretium lectus quam id leo. Eu augue ut lectus arcu
                      bibendum at varius vel pharetra. Sed enim ut sem viverra
                      aliquet eget.
                    </p>
                    <p>
                      Elementum sagittis vitae et leo duis ut diam quam nulla.
                      Commodo elit at imperdiet dui accumsan sit amet nulla
                      facilisi. In ante metus dictum at tempor commodo
                      ullamcorper. Dignissim cras tincidunt lobortis feugiat.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      Ut lectus arcu bibendum at varius vel pharetra vel turpis.
                      Laoreet non curabitur gravida arcu ac tortor dignissim
                      convallis.
                    </p>
                    <p>
                      Ultricies mi quis hendrerit dolor magna eget est lorem.
                      Tempus iaculis urna id volutpat lacus laoreet non. Morbi
                      leo urna molestie at elementum eu pulvinar elementum
                      integer.
                    </p>
                    <img
                      src="images/single-product-06-370x210.jpg"
                      alt=""
                      width="370"
                      height="210"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="navLine1-2" role="tabpanel">
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis.
                </p>
              </div>
              <div className="tab-pane fade" id="navLine1-3" role="tabpanel">
                <p>
                  Cras consequat augue nibh, congue ultricies nisi dictum quis.
                  Suspendisse lectus nibh, pretium ut sapien quis, ullamcorper
                  dictum nisi. Donec placerat dictum pellentesque. In urna
                  ligula, suscipit non molestie quis, posuere a nulla. In hac
                  habitasse platea dictumst. Nam lacinia purus non turpis
                  hendrerit, tristique bibendum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
