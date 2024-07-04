import React, { useState, useContext, useEffect, createContext } from "react";
import axios from "axios";
import { useAuth } from "../auth/AuthProvider";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  // const [user_Id, setUser_Id] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    // fetchUserDetails();
    if (user) {
      fetchItems();
    }
  }, [user]);

  // const fetchUserDetails = async () => {
  //   try {
  //     await axios
  //       .get("https://localhost:7219/api/Users/getUsers")
  //       .then((response) => {
  //         console.log("all response===", response.data);
  //         // console.log("responseId", response.data[0].user_Id);
  //         let userId = response.data[0].user_Id;
  //         fetchItems(userId);
  //       });
  //   } catch (error) {
  //     console.error("Failed to fetch user details", error);
  //   }
  // };
  const fetchItems = async (user) => {
    if (!user) {
      console.log("User is not authenticated");
      return;
    }
    try {
      const response = await axios.get(
        `https://localhost:7219/api/Carts/cart/${user.userId}`
      );
      console.log("getcart=========>", response.data);
      setCart(response.data);
    } catch (error) {
      console.error("Failed to fetch cart items", error);
    }
  };

  // useEffect(() => {

  //   if (user_Id) {
  //     fetchItems();
  //   }
  // }, [user_Id]);

  // const addToCart = (product, quantity) => {
  //   setCart([...cart, { ...product, quantity }]);
  // };
  const addToCart = async (product, quantity) => {
    try {
      await axios.post(
        `https://localhost:7219/api/Carts/addToCart/${user.userId}/${product.products_id}/${quantity}`
      );

      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
      console.log("carts", cart);
    } catch (error) {
      console.error("Failed to add to Cart", error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(
        `https://localhost:7219/api/Carts/removeCartItem/${user.userId}/${productId}`
      );
      setCart((prevCart) =>
        prevCart.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Failed to remove item from cart", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}
