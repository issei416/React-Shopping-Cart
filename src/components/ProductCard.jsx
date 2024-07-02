import React from "react";
import CartBtn from "./CartBtn";

const ProductCard = ({
  product,
  cartItems,
  setCartItems,
  onCartUpdate,
}) => {
  return (
    <>
      <div className="col">
        <div className="card h-100 position-realtive">
          <img src={product.image} className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h4 className="card-title">{product.productName}</h4>
            <div className="card-text">
              {product.stars !== "" ? (
                <img src="/assets/stars.png" className="starImg"></img>
              ) : (
                ""
              )}
              {product.sale !== "" ? (
                <p>
                  <span className="text-muted text-decoration-line-through me-2">
                    {product.price}
                  </span>
                  {product.sale}
                </p>
              ) : (
                <p>{product.price}</p>
              )}
            </div>
          </div>
          <div className="card-footer bg-white border border-white">
            <CartBtn
              product={product}
              cartItems={cartItems}
              setCartItems={setCartItems}
              onCartUpdate={onCartUpdate}
            />
          </div>
          {product.sale !== "" ? (
            <div className="small border border-dark bg-black text-white rounded position-absolute end-0 m-2 px-2 letterspacing-2">
              SALE
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
