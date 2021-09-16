import React, { useEffect } from "react";
import GridShopHeader from "./GridShopHeader";
import ShopCom from "./ShopCom";

const GridShop = () => {
  useEffect(() => {
    document.title = "Grid Shop";
  }, []);
  return (
    <>
      <GridShopHeader
        className="section breadcrumbs-custom-1 bg-100"
        link="Grid Shop"
        title="Grid Shop"
      />
      <ShopCom />
    </>
  );
};

export default GridShop;
