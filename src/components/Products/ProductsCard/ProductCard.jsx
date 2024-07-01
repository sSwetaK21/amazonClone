import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div>
      <Card className="matCard">
        <div className="image">
          <Card.Img src={product.imageUrl} />
        </div>
        <div className="card_content">
          <h2 className="card-title">{product.title}</h2>
          {/* <Card.Header>
            <Card.Title>{product.title}</Card.Title>
          </Card.Header> */}
          <div className="cardBody">
            <div className="d-flex">
              <p className="card_price">₹ {product.price}</p>
              <p className="card_ends discount">- {product.discountPrice} %</p>
            </div>
            {/* <p>{product.description}</p> */}
            <button className="addCart">Add to Cart</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
