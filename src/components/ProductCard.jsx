import React from "react";
import CartBtn from "./CartBtn";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={product.image} className="card-img-top h-50" alt="..." />
          <div className="card-body h-25">
            <h4 className="card-title">{product.productName}</h4>
            <p className="card-text">
              <p>{product.price}</p>
            </p>
          </div>
          <div className="mb-3">
            <CartBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
