import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactImageZoom from "react-image-zoom";
import Header from "../../Header/Header";
import "./ProductDetail.css";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();

  const product = location.state?.product;
  if (!product) {
    return <div>Product not found</div>;
  }

  const zoomProps = {
    width: 400,
    height: 400,
    zoomWidth: 500,
    img: product.imageUrl,
  };

  return (
    <div>
      <Header />
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="productImg">
                {/* <ReactImageZoom {...zoomProps} /> */}
                <div className="zoom-effect">
                  <div className="zoom-area">
                    <img src={product.imageUrl} alt="Zoomed Product" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="productInfo">
                <h1 className="productTitle">{product.title}</h1>
                <hr />
                <div className="productPrice d-flex align-items-center">
                  <p className="price">₹ {product.price}</p>
                  <p className="discountPrice"> -{product.discountPrice}%</p>
                </div>
                <div className="amazon d-flex">
                  <div className="img1">
                    <img
                      src="../src/assets/images/prodslide.png"
                      alt="7 Days Replacement"
                    />
                    <span>7 Days Replacement</span>
                  </div>
                  <div className="img1">
                    <img
                      src="../src/assets/images/prodslide2.png"
                      alt="Free Delivery"
                    />
                    <span>Free Delivery</span>
                  </div>
                  <div className="img1">
                    <img
                      src="../src/assets/images/prodsldie3.png"
                      alt="1 year Warranty"
                    />
                    <span>1 year Warranty</span>
                  </div>
                </div>
                <div className="quantity">
                  <button className="qbtn">&minus;</button>
                  <input
                    type="text"
                    value={quantity}
                    className="inputQty"
                    readOnly
                  />
                  <button className="qbtn"> + </button>
                </div>

                <button className="addCart add">Add to Cart</button>
                <hr></hr>

                <table class="table table-borderless mb-0">
                  <tbody>
                    <tr>
                      <td>Product Code:</td>
                      <td>FBB00255</td>
                    </tr>
                    <tr>
                      <td>Availability:</td>
                      <td>In Stock</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Clothes</td>
                    </tr>
                    <tr>
                      <td>Shipping:</td>
                      <td>
                        <small>
                          01 day shipping.
                          <span class="text-muted">( Free pickup today)</span>
                        </small>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
