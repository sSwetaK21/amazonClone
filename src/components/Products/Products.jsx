import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import ProductCard from "./ProductsCard/ProductCard";
import Header from "../Header/Header";

export default function Products() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("HTL");

  useEffect(() => {
    axios
      .get("https://localhost:7219/api/Products/getProducts")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const toggleSortMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    setMenuOpen(false);
    setProducts((prevProducts) =>
      [...prevProducts].sort((a, b) =>
        order === "HTL" ? b.price - a.price : a.price - b.price
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="products">
        <div className="productsTitle">
          <h1>Today's Deal</h1>
          <div className="sorting">
            <button className="sort-toggle" onClick={toggleSortMenu}>
              Sort
            </button>
            {menuOpen && (
              <div className="sort-menu">
                <button onClick={() => handleSort("HTL")} className="sortBtn">
                  High - Low
                </button>
                <button onClick={() => handleSort("LTH")} className="sortBtn">
                  Low - High
                </button>
              </div>
            )}
          </div>
        </div>
        <hr></hr>

        <div className="products_row">
          {products.map((product) => (
            <div className="prdctcard">
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
