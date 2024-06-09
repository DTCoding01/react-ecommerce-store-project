import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <Link to="/cart">Go to Cart</Link> {/* Add link to cart page */}
      <ProductList />
    </div>
  );
};

export default HomePage;
