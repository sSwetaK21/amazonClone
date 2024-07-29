import React, { useState, useContext, useEffect, createContext } from "react";
import axios from "axios";
import { useAuth } from "../auth/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  // const [user_Id, setUser_Id] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    // fetchUserDetails();
    if (user) {
      // console.log("User is authenticated, fetching cart items from server...");
      fetchItems();
    } else {
      // console.log(
      //   "User is not authenticated, loading cart items from local storage..."
      // );
      const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
      if (storedCartItems) {
        setCart(storedCartItems);
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("cartItems", JSON.stringify(cart));
    }
  }, [cart, user]);

  const fetchItems = async (user) => {
    if (!user) {
      return;
    }
    try {
      const response = await axios.get(
        `https://localhost:7219/api/Carts/cart/${user.userId}`
      );
      setCart(response.data);
    } catch (error) {
      console.error("Failed to fetch cart items", error);
    }
  };

  const addToCart = async (product, quantity) => {
    if (!user) {
      toast.warning("You don't have access. Please Login.");
      return;
    }
    try {
      await axios.post(
        `https://localhost:7219/api/Carts/addToCart/${user.userId}/${product.products_id}/${quantity}`
      );

      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
      toast.success("Product added to cart!");
    } catch (error) {
      console.error("Failed to add to Cart", error);
      toast.error("Failed to add product to cart.");
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(
        `https://localhost:7219/api/Carts/removeCartItem/${user.userId}/${productId}`
      );
      setCart((prevCart) =>
        prevCart.filter((product) => product.products_id !== productId)
      );
      toast.success("Product removed from cart!");
    } catch (error) {
      console.error("Failed to remove item from cart", error);
      toast.error("Failed to add product to cart.");
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}
