import React from "react";
import GridCard from "../GalleryPrpps/GirdCard";

const CobblesGallery = () => {
  return (
    <>
      <section className="section section-lg section-b12 bg-transparent text-center isotope-wrap">
        <h1 className="text-divider">
          <span className="text-divider-item"></span>Cobbles Gallery
        </h1>
        <p className="px-3">
          <span className="d-inline-block" style={{ maxWidth: "600px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </span>
        </p>
        <div
          className="isotope row-content"
          data-isotope-layout="masonry"
          data-isotope-group="gallery"
        >
          <div className="row g-0" data-lightgallery="group">
            <GridCard
              clasess="col-sm-6 col-md-4 col-xl-3 isotope-item"
              width="471"
              height="340"
              imagelink="images/home-06-1200x800.jpg"
              img="images/home-06-1200x800.jpg"
            />
            <GridCard
              clasess="col-sm-6 col-md-4 col-xl-3 isotope-item"
              width="471"
              height="340"
              imagelink="images/home-09-1200x800.jpg"
              img="images/gallery-04-471x340.jpg"
            />
            <div className="col-sm-6 col-md-6 isotope-item">
              <a
                className="thumbnail thumbnail-gallery"
                data-lightgallery="item"
                href="images/home-08-1200x800.jpg"
              >
                <img
                  className="thumbnail-img"
                  src="images/gallery-03-942x680.jpg"
                  alt=""
                  width="942"
                  height="680"
                />
                <div className="thumbnail-body">
                  <div className="thumbnail-icon icon mdi mdi-plus"></div>
                </div>
              </a>
            </div>
            <GridCard
              clasess="col-sm-6 col-md-4 col-xl-3 isotope-item"
              width="471"
              height="340"
              imagelink="images/home-16-1200x800.jpg"
              img="images/gallery-08-471x340.jpg"
            />
            <GridCard
              clasess="col-sm-6 col-md-4 col-xl-3 isotope-item"
              width="471"
              height="680"
              imagelink="images/home-10-1200x800.jpg"
              img="images/gallery-05-471x680.jpg"
            />
            <GridCard
              clasess="col-sm-6 col-md-4 col-xl-3 isotope-item"
              width="471"
              height="680"
              imagelink="images/home-11-1200x800.jpg"
              img="images/gallery-06-471x680.jpg"
            />
            <GridCard
              clasess="col-sm-6 col-md-4 col-xl-3 isotope-item"
              width="471"
              height="680"
              imagelink="images/home-07-1200x800.jpg"
              img="images/gallery-02-471x680.jpg"
            />
            <GridCard
              clasess="col-sm-6 col-md-4 col-xl-3 isotope-item"
              width="471"
              height="340"
              imagelink="images/home-12-1200x800.jpg"
              img="images/gallery-07-471x340.jpg"
            />
            <GridCard
              clasess="col-sm-6 col-md-4 col-xl-3 isotope-item"
              width="471"
              height="340"
              imagelink="images/home-17-1200x800.jpg"
              img="images/gallery-09-471x340.jpg"
            />
            <GridCard
              clasess="col-sm-6 col-md-4 col-xl-3 isotope-item"
              width="471"
              height="340"
              imagelink="images/home-18-1200x800.jpg"
              img="images/gallery-10-471x340.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CobblesGallery;
