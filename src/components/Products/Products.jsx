import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import ProductCard from "./ProductsCard/ProductCard";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import CustomHeader from "../CustomComponets/CustomHeader";
import { filters } from "./filters";

export default function Products() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
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
  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters((prevFilters) => {
      const newFilters = checked
        ? [...prevFilters, value]
        : prevFilters.filter((filter) => filter !== value);
      return newFilters;
    });
  };

  const filteredProducts = products.filter(
    (product) =>
      selectedFilters.length === 0 || selectedFilters.includes(product.category)
  );
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
      {/* <Header /> */}
      {/* <CustomHeader isVisible={false} ></CustomHeader> */}
      <div className="products">
        <div className="productsTitle">
          <h1 className="title">Today's Deal</h1>
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
        {/* //filter */}

        <div className="products_row">
          <div className="col-3">
            <div className="filterSection">
              <h2>Filter</h2>
              <form>
                {filters.map((filter) => (
                  <div className="filters" key={filter.id}>
                    <h3 className="f-title">{filter.name}</h3>
                    <div className="f-section">
                      {filter.options.map((opt) => (
                        <div className="flexBoxx" key={opt.value}>
                          <input
                            type="checkbox"
                            id={`filter-${opt.value}`}
                            value={opt.value}
                            onChange={handleFilterChange}
                          />
                          <label htmlFor={`filter-${opt.value}`}>
                            {opt.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </form>
            </div>
          </div>
          <div className="col-8">
            <div className="prodRow">
              {filteredProducts.map((product, index) => (
                <div className="prdctcard" key={index}>
                  <Link
                    to={`/product/${product.products_id}`}
                    state={{ product }}
                  >
                    <ProductCard product={product} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
