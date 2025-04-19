import React from "react";
import SingleProduct from "./SingleProduct";
import ProductGrid from "./ProductGrid";
import productsData from "../../Asset/bodyData";


const AppleProducts = () => {
 

  return (
    <div>
      {productsData.map((product) =>
        product.type === "single" ? (
          <SingleProduct key={product.id} product={product} />
        ) : (
          <ProductGrid key={product.id} grid={product} />
        )
      )}
    </div>
  );
};

export default AppleProducts;
