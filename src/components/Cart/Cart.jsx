import React from "react";
import { useCart } from "./CartProvider";
import "./Cart.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const calculateQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const getTotalPrice = (price, quantity) => {
    return price * quantity;
  };
  return (
    <>
      <Header />
      <div className="cartSection">
        <div className="containers">
          <div className="cartTitle">
            <h3 className="title">Shopping Cart</h3>
          </div>
          <hr />

          <div className="row justify-content-center">
            <div className="col-sm-6 whiteBox">
              <div className="cartDetails">
                {cart.length === 0 ? (
                  <p>You Cart is Empty </p>
                ) : (
                  cart.map((product) => (
                    <div className="row cartItem mt-3" key={product.id}>
                      <div className="col-sm-4">
                        <div className="cartproduct">
                          <img src={product.imageUrl} alt="ProductImage" />
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="cartInfo">
                          <h2 className="productTitle">{product.title}</h2>
                          <div className="productdescription">
                            <p>Sold by : {product.brand}</p>
                            <p>
                              <img
                                src="../src/assets/images/prodslide2.png"
                                alt="Amazon Delivered"
                              />
                              Amazon Delivered
                            </p>
                            <p>Size : {product.size}</p>
                            {/* <p>Color : {product.color}</p> */}
                            <p>Quantity : {product.quantity}</p>
                          </div>

                          <button
                            className="buyBtn"
                            onClick={() => removeFromCart(product.id)}
                          >
                            Delete
                          </button>
                        </div>
                        <hr />
                        <div className="Totalprice">
                          <p>Product Price : ₹{product.price}</p>
                          <p>
                            Total Price:
                            <b>
                              {" "}
                              ₹{getTotalPrice(product.price, product.quantity)}
                            </b>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="col-sm-3 whiteBox subTotal">
              <h2>Summary</h2>
              <div className="itemList">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                      <div>Service Fee</div>
                    </div>
                    <span> ₹100</span>
                  </li>
                  {cart.map((product) => (
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="me-auto">
                        <div> Discount Price</div>
                      </div>
                      <span> ₹{product.discountPrice}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="Totalprice">
                <p>
                  SubTotal ({calculateQuantity()} Items) :
                  <b>
                    ₹
                    {cart.reduce(
                      (total, product) =>
                        total + getTotalPrice(product.price, product.quantity),
                      0
                    )}
                  </b>
                </p>
              </div>
              <button
                className="card_button"
                onClick={() => alert("Proceed to Buy")}
              >
                Proceed to Buy
              </button>
              <div className="des">
                <p>
                  <small>
                    By placing your order, you agree to be bound by the Amazon
                    &nbsp;
                    <Link>Terms of Service</Link> &nbsp; and &nbsp;
                    <Link> Privacy Policy.</Link>
                  </small>
                </p>

                <p className="text-muted mb-0">
                  <small>Terms & Conditions apply</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
