// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import Product from './Product';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Fetch products and categories when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        let response = await fetch('https://fakestoreapi.com/products/categories');
        let data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  // Handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <div className="filters">
        <label htmlFor="category">Filter by Category: </label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
