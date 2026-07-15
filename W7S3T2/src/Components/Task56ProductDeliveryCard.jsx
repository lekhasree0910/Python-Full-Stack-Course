function ProductDeliveryCard({ name, price, quantity, orderValue }) {
  return (
    <div className="card">
      <h3>Task 56 - Product Delivery Card</h3>
      <p><strong>Product:</strong> {name}</p>
      <p><strong>Price:</strong> ₹{price.toLocaleString()}</p>
      <p><strong>Quantity:</strong> {quantity}</p>
      <p><strong>Order Value:</strong> ₹{orderValue.toLocaleString()}</p>
      {orderValue > 500 && <span className="badge free-delivery">Free Delivery</span>}
    </div>
  );
}

export default ProductDeliveryCard;
