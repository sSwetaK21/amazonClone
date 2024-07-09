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
import { AuthProvider } from "./components/auth/AuthProvider";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <div className="App">
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <WithHeader user={user}>
                    <Home />
                  </WithHeader>
                }
              />
              <Route
                path="/home"
                element={
                  <WithHeader user={user}>
                    <Home />
                  </WithHeader>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/footer" element={<Footer />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
