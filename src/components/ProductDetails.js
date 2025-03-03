import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found!</p>;

  return (
    <div>
      <img src={product.image} alt={product.name} width="200" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to="/">Back to Products</Link>
    </div>
  );
};

export default ProductDetails;
