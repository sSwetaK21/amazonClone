import React from "react";
import { useCart } from "../Cart/CartProvider";
import { useNavigate } from "react-router-dom";

export default function Thankyou() {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const handleCart = () => {
    clearCart();
    navigate("/home");
  };
  return (
    <div className="thankyou">
      <h2>Thank You!</h2>
      <p>Your order has been placed successfully</p>
      <button className="addCart" onClick={handleCart}>
        Continue Shopping
      </button>
    </div>
  );
}
