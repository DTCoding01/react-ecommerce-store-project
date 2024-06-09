
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart'; 
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} /> {/* Add route for cart */}
      </Routes>
    </Router>
  );
}

export default App;
