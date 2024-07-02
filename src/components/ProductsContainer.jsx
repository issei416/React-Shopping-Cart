import React from "react";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ products,cartItems,setCartItems,onCartUpdate }) => {
  return (
    <>
      <div className="container my-5">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.map((product) => {
              return <ProductCard product={product} key={product.id} cartItems={cartItems} setCartItems={setCartItems} onCartUpdate={ onCartUpdate }/>;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsContainer;
