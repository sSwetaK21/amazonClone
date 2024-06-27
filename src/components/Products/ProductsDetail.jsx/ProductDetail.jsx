import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./ProductDetail.css";
import Header from "../../Header/Header";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();

  const product = location.state?.product;
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-6">
          <div className="productImg">
            <img src={product.imageUrl} alt="product" />
          </div>
        </div>
        <div className="col-6">
          <div className="productInfo">
            <h1 className="productTitle">{product.title}</h1>
            <hr></hr>
            <div className="productPrice">
              <p>Price :{product.price}</p>
              <p>Discount: - {product.discountPrice}%</p>
            </div>
            <div className="amazon">
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
              <input type="text" value={quantity} />
              <button className="qbtn">-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
