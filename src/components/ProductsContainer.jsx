import React from "react";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ products }) => {
  return (
    <>
      <div className="container my-5">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.map((product, ind) => {
            console.log(product);
            return <ProductCard product={product} key={ind} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsContainer;
