import React from "react";
import "../App.css";

const TotalCartBtn = ({ cartItems }) => {
  const totalCount = cartItems.filter((item) => item.inCart).length;

  return (
    <div
      className="btn d-flex justify-content-center align-tems-center border border-black"
      id="totalCartBtn"
    >
      <i className="fas fa-shopping-cart cart-icon me-2" id="cart-icon"></i>
      <div>Cart</div>
      <span className="badge bg-dark text-white rounded-pill mx-2 d-flex align-items-center">
        {totalCount}
      </span>
    </div>
  );
};

export default TotalCartBtn;
