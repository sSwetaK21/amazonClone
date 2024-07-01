import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Header/Header";
import "./ProductDetail.css";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();

  const product = location.state?.product;
  if (!product) {
    return <div>Product not found</div>;
  }

  // console.log("=location.state", location.state.productId);
  return (
    <div>
      <Header />
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="productImg">
                <img src={product.imageUrl} alt="product" />
              </div>
            </div>{" "}
            <div className="col-md-6">
              <div className="productInfo">
                <h1 className="productTitle">{product.title}</h1>
                <hr></hr>
                <div className="productPrice d-flex     align-items: center;">
                  <p className="price">₹ {product.price}</p>
                  <p className="discountPrice"> -{product.discountPrice}%</p>
                </div>
                <div className="amazon d-flex">
                  <div className="img1">
                    <img src="../src/assets/images/prodslide.png" alt="Img" />
                    <span>7 Days Replacement</span>
                  </div>
                  <div className="img1">
                    <img src="../src/assets/images/prodslide2.png" alt="Img" />
                    <span>Free Delivery</span>
                  </div>
                  <div className="img1">
                    <img src="../src/assets/images/prodsldie3.png" alt="Img" />
                    <span>1 year Warranty</span>
                  </div>
                </div>

                <div className="qunatity">
                  <button className="qbtn">+</button>
                  <input type="text" />
                  <button className="qbtn">-</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
