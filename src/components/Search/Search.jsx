import React, { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../Products/ProductsCard/ProductCard";
import { Link } from "react-router-dom";

export default function Search() {
  const [sortOrder, setSortOrder] = useState("HTL");
  const [menuOpen, setMenuOpen] = useState(false);
  const { query } = useParams();
  const [searchProdresult, setSearchProdResult] = useState([]);
  const [noSearchResult, setNoSearchResult] = useState(false);

  useEffect(() => {
    if (query) {
      axios
        .get(
          `https://localhost:7219/api/Products/getProductsbyCategory/${query}`
        )
        .then((response) => {
          setSearchProdResult(response.data);

          setNoSearchResult(response.data.length < 1);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  }, [query]);

  const sortProduct = (order) => {
    setSortOrder(order);
    // const sortedProducts = [...searchProdresult];
    // if (order === "highToLow") {
    //   sortedProducts.sort((a, b) => b.price - a.price);
    // } else if (order === "lowToHigh") {
    //   sortedProducts.sort((a, b) => a.price - b.price);
    // }
    setMenuOpen(false);
    setSearchProdResult((prevProducts) =>
      [...prevProducts].sort((a, b) =>
        order === "highToLow" ? b.price - a.price : a.price - b.price
      )
    );
  };

  const toggleSortMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="productsTitle">
        <h2 className="title">Search Results</h2>

        <div className="sorting">
          <button className="sort-toggle" onClick={toggleSortMenu}>
            Sort
          </button>
          {menuOpen && (
            <div className="sort-menu">
              <button
                onClick={() => sortProduct("highToLow")}
                className="sortBtn"
              >
                High - Low
              </button>
              <button
                onClick={() => sortProduct("lowToHigh")}
                className="sortBtn"
              >
                Low - High
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="col-12">
        {noSearchResult ? (
          <h2>No search Results found for: {query}</h2>
        ) : (
          <div className="products_row">
            {searchProdresult.map((product, index) => (
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
        )}
      </div>
    </>
  );
}
