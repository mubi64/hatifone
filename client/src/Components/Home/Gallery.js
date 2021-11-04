import React, { useState } from "react";
import GalleryApi from "../Gallery/GalleryApi";
import GalleryCard from "../Gallery/GalleryCard";
import SimpleReactLightbox from "simple-react-lightbox";

const Gallery = () => {
  const [galleryData] = useState(GalleryApi);

  return (
    <>
      <SimpleReactLightbox>
        <GalleryCard galleryData={galleryData} />
      </SimpleReactLightbox>
    </>
  );
};

export default Gallery;
