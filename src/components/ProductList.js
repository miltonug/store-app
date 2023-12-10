// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://654d8ba1cbc325355741a10b.mockapi.io/store')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(store => (
          <li key={store.id}>
            <Link to={`/store/${store.id}`}>{store.productName}</Link><p></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
