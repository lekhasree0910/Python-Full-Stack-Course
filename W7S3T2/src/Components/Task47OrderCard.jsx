function OrderCard({ orderId, customerName, product, amount, status }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "pending";
      case "Shipped":
        return "shipped";
      case "Delivered":
        return "delivered";
      default:
        return "";
    }
  };

  return (
    <div className={`card order-card ${getStatusColor(status)}`}>
      <h3>Task 47 - Order Card</h3>
      <p><strong>Order ID:</strong> #{orderId}</p>
      <p><strong>Customer:</strong> {customerName}</p>
      <p><strong>Product:</strong> {product}</p>
      <p><strong>Amount:</strong> ₹{amount.toLocaleString()}</p>
      <span className={`badge ${getStatusColor(status)}`}>{status}</span>
    </div>
  );
}

export default OrderCard;
