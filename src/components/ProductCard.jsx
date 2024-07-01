import React from "react";
import CartBtn from "./CartBtn";

const ProductCard = ({ product }) => {
  return (
    <>
      <div class="col">
        <div class="card h-100">
          <img src={product.image} class="card-img-top" alt="..." />
          <div class="card-body">
                      <h4 class="card-title">{ product.productName}</h4>
            <p class="card-text">
                          <p>{product.price}</p>
                      </p>
            <CartBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
