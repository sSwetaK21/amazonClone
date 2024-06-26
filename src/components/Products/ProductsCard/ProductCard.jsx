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
          <Card.Header>
            <Card.Title>{product.title}</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="d-flex">
              <p className="price">₹ {product.price}</p>
              <p className="discount">- {product.discountPrice} %</p>
            </div>
            <p>{product.description}</p>
            <button className="addCart">Add to Cart</button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}
