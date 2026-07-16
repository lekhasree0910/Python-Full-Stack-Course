import { useState } from "react";

function FoodOrderingApp() {
  const [page, setPage] = useState("restaurants");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cart, setCart] = useState([]);

  const restaurants = [
    { id: 1, name: "Paradise", cuisine: "Biryani", rating: 4.8 },
    { id: 2, name: "Dominos", cuisine: "Pizza", rating: 4.5 },
    { id: 3, name: "McDonalds", cuisine: "Fast Food", rating: 4.2 },
  ];

  const menuItems = {
    1: [
      { id: 1, name: "Chicken Biryani", price: 350 },
      { id: 2, name: "Veg Biryani", price: 250 },
      { id: 3, name: "Double Ka Meetha", price: 120 },
    ],
    2: [
      { id: 4, name: "Margherita Pizza", price: 300 },
      { id: 5, name: "Farmhouse Pizza", price: 400 },
      { id: 6, name: "Garlic Bread", price: 150 },
    ],
    3: [
      { id: 7, name: "Big Mac", price: 250 },
      { id: 8, name: "McChicken", price: 200 },
      { id: 9, name: "Fries", price: 100 },
    ],
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="card">
      <h2>Navigation Task 5: Food Ordering</h2>
      <nav className="nav-tabs">
        <button className={page === "restaurants" ? "active" : ""} onClick={() => { setPage("restaurants"); setSelectedRestaurant(null); }}>Restaurants</button>
        <button className={page === "menu" ? "active" : ""} onClick={() => setPage("menu")} disabled={!selectedRestaurant}>Menu</button>
        <button className={page === "cart" ? "active" : ""} onClick={() => setPage("cart")}>Cart ({cart.length})</button>
        <button className={page === "payment" ? "active" : ""} onClick={() => setPage("payment")}>Payment</button>
      </nav>

      {page === "restaurants" && (
        <div className="page-content">
          <h3>Restaurants</h3>
          {restaurants.map((r) => (
            <div key={r.id} className="list-item">
              <p><strong>{r.name}</strong> - {r.cuisine} ⭐ {r.rating}</p>
              <button className="btn btn-sm" onClick={() => { setSelectedRestaurant(r.id); setPage("menu"); }}>View Menu</button>
            </div>
          ))}
        </div>
      )}

      {page === "menu" && selectedRestaurant && (
        <div className="page-content">
          <h3>Menu - {restaurants.find((r) => r.id === selectedRestaurant)?.name}</h3>
          {menuItems[selectedRestaurant]?.map((item) => (
            <div key={item.id} className="list-item">
              <p>{item.name} - ₹{item.price}</p>
              <button className="btn btn-sm" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}

      {page === "cart" && (
        <div className="page-content">
          <h3>Cart</h3>
          {cart.length === 0 ? <p>Cart is empty.</p> : cart.map((item, index) => (
            <div key={index} className="list-item">
              <p>{item.name} - ₹{item.price}</p>
              <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
          {cart.length > 0 && <p className="cart-total"><strong>Total: ₹{total}</strong></p>}
        </div>
      )}

      {page === "payment" && (
        <div className="page-content">
          <h3>Payment</h3>
          <p>Items: {cart.length}</p>
          <p>Total: ₹{total}</p>
          <button className="btn" onClick={() => { setCart([]); setPage("restaurants"); alert("Order Placed!"); }}>Pay Now</button>
        </div>
      )}
    </div>
  );
}

export default FoodOrderingApp;
