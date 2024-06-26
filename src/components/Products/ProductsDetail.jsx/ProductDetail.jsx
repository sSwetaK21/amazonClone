import React from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetail.css";
import Header from "../../Header/Header";

export default function ProductDetail() {
  const location = useLocation();
  const product = location.state?.product;
  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-6">
          <div className="productImg">
            <img src={product.imageUrl} alt="product" />
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}
