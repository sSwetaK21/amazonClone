// src/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  const username = localStorage.getItem("username") || "User";

  return (
    <>
      <header className="header">
        <div className="grid_container">
          <div className="brand">
            <Link to="/home">
              <img
                src="src\assets\images\white-amazon.webp"
                alt="amazon logo"
                className="Brand-img"
              />
            </Link>
          </div>
          <div className="location">
            <div className="icon">
              <i className="bx bx-location-plus"></i>
            </div>
            <div className="icon-text">
              <p className="location-text">
                <span className="loc-txt">Deliver to</span>
                <br />
                India
              </p>
            </div>
          </div>
          <div className="nav-center">
            <div className="nav-fill">
              <select name="Amazon" id="selector">
                <option value="All">All</option>
                <option value="dress">Dress</option>
                <option value="shirts">Shirts</option>
                <option value="jeans">Jeans</option>
              </select>
            </div>
            <div className="search-container d-flex">
              <input type="search" placeholder="Search" name="search" />
            </div>
            <div className="search">
              <button className="btnsearch">
                <i className="bx bx-search-alt-2"></i>
              </button>
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-flag">
              <img
                src="src\assets\images\Flag_of_India.svg"
                alt="flag"
                className="flag"
              />
              <select name="language" id="selector1">
                <option value="Flag_of_India">India</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Telugu">Telugu</option>
                <option value="Tamil">Tamil</option>
              </select>
            </div>
            <Dropdown className="dropdown">
              <Link
                to="/login"
                className="d-flex align-items-center text-decoration-none "
                style={{ color: "white" }}
              >
                <Dropdown.Toggle className="hello_text" id="dropdown-basic">
                  <span className="hello-txt"> Hello, {username}</span>
                  <br />
                  Accounts & Lists
                </Dropdown.Toggle>
              </Link>
              <Dropdown.Menu className="dropdown-menu text-small shadow">
                <Dropdown.Item className="signBox">
                  <button className="card_button">Sign Out</button>
                  <p>
                    New Customer? <Link to="/register">Start here</Link>
                  </p>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="cart">
              <Link to="/cart" className="cart_icon">
                <i className="bx bx-cart"></i>
              </Link>
              <span>0</span>
            </div>
          </div>
        </div>
      </header>
      {/* //navbar */}

      <nav className="nav_bar">
        <div className="menu_icon" routerLink="/all">
          <i className="bx bx-menu"></i>All
        </div>
        <div className="menu_lists">
          <Link to="#" className="menu_link" routerLink="/products">
            Today's Deals
          </Link>
          <Link to="#" className="menu_link">
            Customer Service
          </Link>
          <Link to="#" className="menu_link">
            Registry
          </Link>
          <Link to="#" className="menu_link">
            Gifts Cards
          </Link>
          <Link to="#" className="menu_link">
            Sell
          </Link>
        </div>
        <div className="menu_last_link">
          <Link to="#" className="menu_last">
            Shop Father's Day Gifts
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
