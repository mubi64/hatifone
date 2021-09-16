import React from "react";
import GridHeader from "../GalleryPrpps/GridHeader";
import GridGalleryCom from "../GridGallery1/GridGalleryCom";

const GridGallery = () => {
  return (
    <>
      <GridHeader active="Grid Gallery 2" />
      <GridGalleryCom
        title="Grid Gallery #2"
        pera="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
      />
    </>
  );
};

export default GridGallery;
