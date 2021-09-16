import React, {useEffect} from "react";
import SingleProductCom from "./SingleProductCom";

const SingleProduct = () => {
  useEffect(() => {
    document.title = "Single Product";
  }, []);
  return (
    <div>
      <SingleProductCom />
    </div>
  );
};

export default SingleProduct;
