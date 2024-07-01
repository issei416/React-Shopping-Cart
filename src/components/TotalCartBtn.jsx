import React from "react";

const TotalCartBtn = () => {
  return (
          <div className="btn d-flex justify-content-center align-tems-center border border-black" id="cartBtn">
              <img src= "./src/assets/cart.png" alt="cart" id="cartImg" className="mx-2"/>
              <div>Cart</div>
              <span className="badge bg-dark text-white rounded-pill mx-2 d-flex align-items-center">0</span>
          </div>
  );
};

export default TotalCartBtn;
