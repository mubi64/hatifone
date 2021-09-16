import React from "react";
import ProdectImg from "./ProdectImg";
import ProductHeader from "./ProductHeader";
import RecentProducts from "./RecentProducts";
import Review from "./Review";

const SingleProductCom = () => {
  return (
    <>
      <ProductHeader item1="peges" item2="shop" item3="single product" />
      <ProdectImg />
      <Review />
      <RecentProducts />
    </>
  );
};

export default SingleProductCom;
