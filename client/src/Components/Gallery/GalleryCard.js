const GalleryCard = ({ galleryData }) => {
  return (
    <>
      <section className="section">
        <div
          className="row row-gutters-12 row-12 row-content"
          data-lightgallery="group"
        >
          {galleryData.map((curElem) => {
            return (
              <div
                className="col-xs-6 col-sm-6 col-md-4 col-xl-3"
                key={curElem.id}
              >
                <a
                  className="thumbnail thumbnail-gallery"
                  data-lightgallery="item"
                  href={curElem.link}
                >
                  <img
                    className="thumbnail-img"
                    src={curElem.image}
                    alt=""
                    width="471"
                    height="340"
                  />
                  <div className="thumbnail-body">
                    <div className="thumbnail-icon icon mdi mdi-plus"></div>
                  </div>
                </a>
              </div>
            );
          })}
          <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
            <blockquote className="quote quote-1">
              <div className="icon quote-icon mdi mdi-format-quote"></div>
              <q className="quote-text lead">
                The quality of work offered by Hatifone was excellent. I would
                highly recommend this.
              </q>
              <cite className="quote-cite text-caption">
                - Virginia Turner, Client
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryCard;
