// src/components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import addToCart from './Cart';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://654d8ba1cbc325355741a10b.mockapi.io/store/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    return <div>Item not found...</div>;
  }

  return (
    <div>
      <h2>Product Detail</h2>
      <p><b>Name:</b> {product.productName}</p>
      <p><b>Description:</b> {product.productDescription}</p>
      <p><b>Price:</b> ${product.productPrice}</p>
      <button onClick={() => addToCart(product)}>Add {product.productName} to Cart</button> <p></p>
    </div>
  );
};

export default ProductDetail;
