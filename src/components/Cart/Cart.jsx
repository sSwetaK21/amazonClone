import React from "react";
import { useCart } from "./CartProvider";
import "./Cart.css";

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
      <div className="cart">
        <div className="containers">
          <div className="row justify-content-center">
            <div className="col-sm-6 whiteBox">
              <div className="cartDetails">
                <h3 className="title">Shopping Cart</h3>
                <hr />
                {cart.map((product) => (
                  <div className="row cartItem mt-3" key={product.id}>
                    <div className="col-sm-4">
                      <div className="cartproduct">
                        <img src={product.imageUrl} alt="ProductImage" />
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="cartInfo">
                        <h2 className="productTitle">{product.title}</h2>
                        <p>
                          Sold by : <a className="brand">{product.brand}</a>
                        </p>
                        <p>
                          <img
                            src="../src/assets/images/prodslide2.png"
                            alt="Amazon Delivered"
                          />
                          Amazon Delivered
                        </p>
                        <p>Size : {product.size}</p>
                        <p>Color : {product.color}</p>
                        <p>Quantity : {product.quantity}</p>
                        <button
                          className="buyBtn"
                          onClick={() => removeFromCart(product.id)}
                        >
                          Delete
                        </button>
                      </div>
                      <hr />
                      <div className="price">
                        <p>
                          Product Price :<b> ₹{product.price}</b>
                        </p>
                        <p>
                          Total Price: ₹
                          {getTotalPrice(product.price, product.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-sm-3 whiteBox subTotal">
              <div className="price">
                <p>
                  SubTotal ({calculateQuantity()} Items) :
                  <b>
                    {" "}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
