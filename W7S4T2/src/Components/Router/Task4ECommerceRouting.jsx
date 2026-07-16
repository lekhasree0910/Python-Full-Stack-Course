import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function ECommerceRouting() {
  return (
    <div>
      <h2>Router Task 4: E-Commerce Routing</h2>
      <nav className="router-nav">
        <Link to="/ecommerce/products">Products</Link>
        <Link to="/ecommerce/cart">Cart</Link>
        <Link to="/ecommerce/checkout">Checkout</Link>
        <Link to="/ecommerce/orders">Orders</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

const productsList = [
  { id: 1, name: "Laptop", price: 65000 },
  { id: 2, name: "Phone", price: 25000 },
  { id: 3, name: "Headphones", price: 8000 },
];

function Products() {
  const navigate = useNavigate();
  return (
    <div className="page-content">
      <h3>Products</h3>
      {productsList.map((p) => (
        <div key={p.id} className="product-item">
          <p>{p.name} - ₹{p.price}</p>
          <button className="btn btn-sm" onClick={() => navigate("/ecommerce/cart")}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const navigate = useNavigate();
  return (
    <div className="page-content">
      <h3>Cart</h3>
      <p>Your cart is empty.</p>
      <button className="btn" onClick={() => navigate("/ecommerce/checkout")}>Proceed to Checkout</button>
    </div>
  );
}

function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="page-content">
      <h3>Checkout</h3>
      <p>Complete your purchase.</p>
      <button className="btn" onClick={() => navigate("/ecommerce/orders")}>Place Order</button>
    </div>
  );
}

function Orders() {
  return (
    <div className="page-content">
      <h3>Orders</h3>
      <p>Your orders will appear here.</p>
    </div>
  );
}

export default ECommerceRouting;
