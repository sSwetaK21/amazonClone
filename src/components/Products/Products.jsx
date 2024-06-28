import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import ProductCard from "./ProductsCard/ProductCard";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import CustomHeader from "../CustomComponets/CustomHeader";

export default function Products() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("HTL");
  const navigate = useNavigate();

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
  const handleProducts = (productId) => {
    console.log("productId", productId);
    // return;
    navigate("/productDetails", {
      state: {
        productId: productId,
      },
    });
  };

  return (
    <div>
      <Header />
      {/* <CustomHeader isVisible={false} ></CustomHeader> */}
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
          {products.map((product, index) => (
            <div
              className="prdctcard"
              key={index}
              // onClick={() => handleProducts(product.products_id)}
            >
              <Link to={`/product/${product.products_id}`} state={{ product }}>
                <ProductCard product={product} />
              </Link>

              {/* <ProductCard product={product} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
