import React from "react";
import Header from "../Header/Header";
import Carousel from "../Carousel/Carousel";
import MyCarousel from "../Carousel/Carousel";
import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="Grid_layout">
      <div className="body_img">
        <img src="src/assets/images/body_img.jpg" alt="body Img" />
        <div class="click_link">
          <p class="click_text">
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
              <h3>Gaming accessories</h3>
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
              <h3>Shop by catergory</h3>
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
            </div>

            <div class="cards_three cards_style cards">
              <h3 class="card_head">Get fit at home</h3>
              <div class="card_fitimg">
                <img
                  src="src/assets/images/Yoha.webp"
                  alt="card"
                  class="card_1img"
                />
              </div>
              <div class="card_text">
                <a href="#" class="card_link">
                  {" "}
                  Shop Now{" "}
                </a>
              </div>
            </div>

            <div class="cards_four cards_style cards">
              <h2 class="card_head">Sign in for the best experience</h2>
              <div class="signBox">
                <button class="card_button" routerLink="/login">
                  Sign in securely
                </button>
                <p>
                  New Customer? <a routerLink="/login">Start here</a>
                </p>
              </div>
            </div>

            <div class="cards_five cards">
              <img
                src="/assets/images/shipp.jpg"
                alt="card"
                class="card_image"
              />
            </div>

            <div class="cards_six cards_style cards">
              <h3 class="card_head">Shop Father's Day Gifts</h3>
              <div class="card_img">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/FathersDay/Fuji_FathersDay22_Dash_1X._SY304_CB636880260_.jpg"
                  alt="card"
                  class="card_1img"
                />
              </div>
              <div class="card_text">
                <a href="#" class="card_link">
                  {" "}
                  Shop Now{" "}
                </a>
              </div>
            </div>

            <div class="cards_seven cards_style cards">
              <h3 class="card_head">Health & Personal Care</h3>
              <div class="card_img">
                <img
                  src="/assets/images/health.jpg"
                  alt="card"
                  class="card_1img"
                />
              </div>
              <div class="card_text">
                <a href="#" class="card_link">
                  {" "}
                  Shop Now{" "}
                </a>
              </div>
            </div>

            <div class="cards_eight cards_style">
              <h3 class="card_head">Deal of the Day</h3>
              <div class="card_img">
                <img
                  src="/assets/images/41EPNuI8YaL._AC_SY230_.jpg"
                  alt="card"
                  class="card_2img"
                />
              </div>
              <div class="card_text">
                <button class="card_btn">Upto 50% off</button>
                <p class="card_ends">Top deal</p>
                <h2 class="card_head">$24.95</h2>
                <p class="card_graypara">
                  List Price: <span class="crossline">$59.99</span>
                </p>
                <p class="card_para2">Giraffe Tools Garden Hoses</p>
                <a href="#" class="card_link">
                  {" "}
                  Shop Now{" "}
                </a>
              </div>
            </div>

            <div class="cards_nine cards_style">
              <h3 class="card_head">Computers & Accessories</h3>
              <div class="card_img">
                <img
                  src="/assets/images/comp.jpg"
                  alt="card"
                  class="card_1img"
                />
              </div>
              <div class="card_text">
                <a href="#" class="card_link">
                  {" "}
                  Shop Now{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
