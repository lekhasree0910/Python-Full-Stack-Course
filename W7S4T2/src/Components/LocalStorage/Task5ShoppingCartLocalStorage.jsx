import { useState, useEffect } from "react";

function ShoppingCartLocalStorage() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = () => {
    if (item.trim() && price) {
      setCart([...cart, { name: item.trim(), price: Number(price), id: Date.now() }]);
      setItem("");
      setPrice("");
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  const total = cart.reduce((sum, c) => sum + c.price, 0);

  return (
    <div className="card">
      <h2>LocalStorage Task 5: Shopping Cart</h2>
      <div className="input-group">
        <input type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder="Item name" />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
        <button className="btn" onClick={addItem}>Add to Cart</button>
      </div>
      <div className="cart-list">
        {cart.length === 0 ? <p>Cart is empty.</p> : cart.map((c) => (
          <div key={c.id} className="cart-item">
            <span>{c.name} - ₹{c.price}</span>
            <button className="btn btn-danger btn-sm" onClick={() => removeItem(c.id)}>Remove</button>
          </div>
        ))}
      </div>
      {cart.length > 0 && <p className="cart-total"><strong>Total: ₹{total.toLocaleString()}</strong></p>}
      <p className="note">Cart persists after page refresh</p>
    </div>
  );
}

export default ShoppingCartLocalStorage;
