import React, { useState } from "react";
import GalleryApi from "../Gallery/GalleryApi";
import GalleryCard from "../Gallery/GalleryCard";

const Gallery = () => {
  const [galleryData] = useState(GalleryApi);

  return (
    <>
      <GalleryCard galleryData={galleryData} />
    </>
  );
};

export default Gallery;
