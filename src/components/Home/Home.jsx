import React from "react";
import Header from "../Header/Header";
import "./Homee.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import MyCarousel from "../Carousel/Carousel";
export default function Home() {
  const homeImg = [
    { src: "src/assets/images/p1.jpg", alt: "Home1" },
    { src: "src/assets/images/p2.jpg", alt: "Home2" },
    { src: "src/assets/images/p3.jpg", alt: "Home3" },
    { src: "src/assets/images/p1.jpg", alt: "Home4" },
    { src: "src/assets/images/p5.jpg", alt: "Home5" },
    { src: "src/assets/images/p7.jpg", alt: "Home6" },
    { src: "src/assets/images/shop3.jpg", alt: "Home7" },
  ];
  return (
    <>
      <div className="Grid_layout">
        <div className="body_img">
          <img
            src="src/assets/images/body_img.jpg"
            alt="body Img"
            className="body_imgtag"
          />
          <div className="click_link">
            <p className="click_text">
              You are on amazon.com. You can also shop on Amazon India for
              millions of products with fast local delivery.
              <Link to="/" className="card_link">
                Click here to go to amazon.in
              </Link>
            </p>
          </div>
        </div>
        <div className="section_grid">
          <div className="container">
            <div className="cards_row">
              <div className="card_one cards_style cards">
                <h3 className="card_title">Gaming accessories</h3>
                <div className="card_img">
                  <img
                    src="src\assets\images\game1.jpg"
                    alt="card"
                    className="card_imgtag"
                  />
                  <img
                    src="src\assets\images\game2.jpg"
                    alt="card"
                    className="card_imgtag"
                  />
                  <img
                    src="src\assets\images\game3.jpg"
                    alt="card"
                    className="card_imgtag"
                  />
                  <img
                    src="src\assets\images\game4.jpg"
                    alt="card"
                    className="card_imgtag"
                  />
                </div>
                <div className="card_text">
                  <a href="#" className="card_link">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="card_two cards_style cards">
                <h3 className="card_title">Shop by category</h3>
                <div className="card_img">
                  <img
                    src="src\assets\images\shop1.jpg"
                    alt="card"
                    className="card_imgtag"
                  />
                  <img
                    src="src\assets\images\shop2.jpg"
                    alt="card"
                    className="card_imgtag"
                  />
                  <img
                    src="src\assets\images\shop3.jpg"
                    alt="card"
                    className="card_imgtag"
                  />
                  <img
                    src="src\assets\images\hop4.jpg"
                    alt="card"
                    className="card_imgtag"
                  />
                </div>
                <div className="card_text">
                  <a href="#" className="card_link">
                    Shop Now
                  </a>
                </div>
              </div>

              <div className="cards_three cards_style cards">
                <h3 className="card_title">Get fit at home</h3>
                <div className="card_fitimg">
                  <img
                    src="src/assets/images/Yoha.webp"
                    alt="card"
                    className="card_1img"
                  />
                </div>
                <div className="card_text">
                  <a href="#" className="card_link">
                    {" "}
                    Shop Now{" "}
                  </a>
                </div>
              </div>

              <div className="cardParent">
                <div className="cards_four cards_style cards_">
                  <h2 className="card_head ">
                    Sign in for the best experience
                  </h2>
                  <div className="signBox">
                    <button className="card_button">
                      <Link to="/login" className="link">
                        Sign in securely{" "}
                      </Link>
                    </button>

                    <p>
                      New Customer? <Link to="/register">Start here</Link>
                    </p>
                  </div>
                </div>

                <div className="cards_five cards_">
                  <img
                    src="src/assets/images/shipp.jpg"
                    alt="card"
                    className="card_image"
                  />
                </div>
              </div>

              <div className="cards_six cards_style cards">
                <h3 className="card_title">Shop Father's Day Gifts</h3>
                <div className="card_img card_fitimg">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/FathersDay/Fuji_FathersDay22_Dash_1X._SY304_CB636880260_.jpg"
                    alt="card"
                    className="card_1img"
                  />
                </div>
                <div className="card_text">
                  <a href="#" className="card_link">
                    {" "}
                    Shop Now{" "}
                  </a>
                </div>
              </div>

              <div className="cards_seven cards_style cards">
                <h3 className="card_title">Health & Personal Care</h3>
                <div className="card_img card_fitimg">
                  <img
                    src="src/assets/images/health.jpg"
                    alt="card"
                    className="card_1img"
                  />
                </div>
                <div className="card_text">
                  <a href="#" className="card_link">
                    {" "}
                    Shop Now{" "}
                  </a>
                </div>
              </div>

              <div className="cards_eight cards_style cards">
                <h3 className="card_title">Deal of the Day</h3>
                <div className="cardDetail">
                  <div className="card_img sale ">
                    <img
                      src="src/assets/images/41EPNuI8YaL._AC_SY230_.jpg"
                      alt="card"
                      className="card_2img"
                    />
                  </div>
                  <div className="card_text">
                    <button className="card_btn">Upto 50% off</button>
                    <p className="card_ends">Top deal</p>
                    <h2 className="card_price">₹24,095</h2>
                    <p className="card_graypara">
                      List Price: <span className="crossline">₹59,099</span>
                    </p>
                    <p className="card_para2">Giraffe Tools Garden Hoses</p>
                    <a href="#" className="card_link">
                      {" "}
                      Shop Now{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="cards_nine cards_style cards ">
                <h3 className="card_title">Computers & Accessories</h3>
                <div className="card_img card_fitimg">
                  <img
                    src="src/assets/images/comp.jpg"
                    alt="card"
                    className="card_1img"
                  />
                </div>
                <div className="card_text">
                  <a href="#" className="card_link">
                    {" "}
                    Shop Now{" "}
                  </a>
                </div>
              </div>

              <div className="card_ten">
                <MyCarousel images={homeImg} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
