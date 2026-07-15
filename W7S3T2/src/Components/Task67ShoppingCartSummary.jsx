function ShoppingCartSummary({ items, cartTotal }) {
  return (
    <div className="card">
      <h3>Task 67 - Shopping Cart Summary</h3>
      {items.map((item, index) => (
        <div key={index} className="cart-item">
          <p><strong>{item.name}</strong> x {item.quantity}</p>
          <p>₹{item.price.toLocaleString()}</p>
        </div>
      ))}
      <hr />
      <p><strong>Cart Total:</strong> ₹{cartTotal.toLocaleString()}</p>
      {cartTotal > 1000 && <span className="badge free-shipping">Free Shipping</span>}
    </div>
  );
}

export default ShoppingCartSummary;
