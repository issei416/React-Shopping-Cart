import React from "react";
import TotalCartBtn from "./TotalCartBtn";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border border-dark" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          logo
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
          <ul className="navbar-nav w-100">
            <li className="nav-item text-start ">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item text-start ">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown text-start ">
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
            <li className="nav-item ms-lg-auto">
              <TotalCartBtn />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
