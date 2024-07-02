import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "boxicons/css/boxicons.min.css";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/auth/Login/Login";
import Register from "./components/auth/Register/Register";
import WithHeader from "./components/WithHeader/WithHeader";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/Products/ProductsDetail.jsx/ProductDetail";
import { CartProvider } from "./components/Cart/CartProvider";
function App() {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || "User"
  );

  return (
    <>
      <div className="App">
        <CartProvider>
          <Routes>
            <Route
              path="/"
              element={
                <WithHeader username={username}>
                  <Home />
                </WithHeader>
              }
            />
            <Route
              path="/home"
              element={
                <WithHeader username={username}>
                  <Home />
                </WithHeader>
              }
            />
            <Route
              path="/login"
              element={<Login setUsername={setUsername} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/footer" element={<Footer />} />
          </Routes>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
