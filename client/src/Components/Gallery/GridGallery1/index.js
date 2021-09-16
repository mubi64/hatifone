import React from "react";
import GridHeader from "../GalleryPrpps/GridHeader";
import GridGalleryCom from "./GridGalleryCom";

const GridGallery1 = () => {
  return (
    <>
      <GridHeader active="Grid Gallery 1" />
      <GridGalleryCom
        title="Grid Gallery #1"
        pera="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
      />
    </>
  );
};

export default GridGallery1;
