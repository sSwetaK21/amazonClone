import React from "react";
import "./Footer.css";
import Form from "react-bootstrap/Form";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="footer-main">
        <div className="back-to-top" onClick={handleScrollToTop}>
          <p>Back To Top</p>
        </div>

        <div className="footer-container container">
          <div className="footer-section">
            <h2 className="footer-title">Get to Know Us</h2>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="footer-section">
            <h2 className="footer-title">Connect with Us</h2>
            <ul className="footer-list">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          <div className="footer-section">
            <h2 className="footer-title">Make Money with Us</h2>
            <ul className="footer-list">
              <li>Amazon Business</li>
              <li>Sell on Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Protect and Build Your Brand</li>
            </ul>
          </div>

          <div className="footer-section">
            <h2 className="footer-title">Let Us Help You</h2>
            <ul className="footer-list">
              <li>COVID-19 and Amazon</li>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <hr></hr>

        <div className="footer-bottom">
          <img
            src="src/assets/images/white-amazon.webp"
            alt="logo"
            className="footerlogo"
          ></img>

          <div className="footer-language">
            <Form.Select aria-label="language">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Telugu">Telugu</option>
            </Form.Select>
          </div>

          <div className="Footer_flag">
            <img
              src="src\assets\images\Flag_of_India.svg"
              alt="flag"
              className="footer_flagImg"
            />
            <p>India</p>
          </div>
        </div>
      </div>
    </div>
  );
}
