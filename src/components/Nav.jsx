import React from "react";
import TotalCartBtn from "./TotalCartBtn";

const Nav = ({cartItems}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
      <div className="container py-2 fs-5">
        <a className="navbar-brand" href="#">
          <img src="../src/assets/shoelogo.png" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 ps-lg-3">
            <li className="nav-item me-lg-4 text-start ">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
                      </li>
                      <hr />
            <li className="nav-item me-lg-4 text-start ">
              <a className="nav-link" href="#">
                About
              </a>
                      </li>
                      <hr />
            <li className="nav-item me-lg-4 dropdown text-start ">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    All Products
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    New Items
                  </a>
                </li>
              </ul>
                      </li>
                      <hr />
            <li className="nav-item ms-lg-auto">
                          <TotalCartBtn cartItems={cartItems} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
