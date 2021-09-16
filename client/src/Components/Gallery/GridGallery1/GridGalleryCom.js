import React from "react";
import GridCard from "../GalleryPrpps/GirdCard";

const GridGalleryCom = (props) => {
  return (
    <>
      <section className="section section-lg section-b12 bg-transparent text-center">
        <h1 className="text-divider">
          <span className="text-divider-item"></span>
          {props.title}
        </h1>
        <p className="px-3">
          <span className="d-inline-block" style={{ maxWidth: "600px" }}>
            {props.pera}
          </span>
        </p>
        <div
          className="row row-gutters-12 row-12 row-content"
          data-lightgallery="group"
        >
          <GridCard
            width="471"
            height="340"
            clasess="col-xs-6 col-sm-6 col-md-4 col-xl-3"
            imagelink="images/home-06-1200x800.jpg"
            img="images/home-06-1200x800.jpg"
          />
          <GridCard
            width="471"
            height="340"
            clasess="col-xs-6 col-sm-6 col-md-4 col-xl-3"
            imagelink="images/home-07-1200x800.jpg"
            img="images/home-07-1200x800.jpg"
          />
          <GridCard
            width="471"
            height="340"
            clasess="col-xs-6 col-sm-6 col-md-4 col-xl-3"
            imagelink="images/home-08-1200x800.jpg"
            img="images/home-08-1200x800.jpg"
          />
          <GridCard
            width="471"
            height="340"
            clasess="col-xs-6 col-sm-6 col-md-4 col-xl-3"
            imagelink="images/home-09-1200x800.jpg"
            img="images/home-09-1200x800.jpg"
          />
          <GridCard
            width="471"
            height="340"
            clasess="col-xs-6 col-sm-6 col-md-4 col-xl-3"
            imagelink="images/home-10-1200x800.jpg"
            img="images/home-10-1200x800.jpg"
          />
          <GridCard
            width="471"
            height="340"
            clasess="col-xs-6 col-sm-6 col-md-4 col-xl-3"
            imagelink="images/home-11-1200x800.jpg"
            img="images/home-11-1200x800.jpg"
          />
          <GridCard
            width="471"
            height="340"
            clasess="col-xs-6 col-sm-6 col-md-4 col-xl-3"
            imagelink="images/home-12-1200x800.jpg"
            img="images/home-12-1200x800.jpg"
          />
          <GridCard
            width="471"
            height="340"
            clasess="col-xs-6 col-sm-6 col-md-4 col-xl-3"
            imagelink="images/home-16-1200x800.jpg"
            img="images/home-16-1200x800.jpg"
          />
        </div>
      </section>
    </>
  );
};

export default GridGalleryCom;
