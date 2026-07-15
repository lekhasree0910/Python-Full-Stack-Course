function PaymentCard({ orderId, customerName, amount, paymentDate, status }) {
  return (
    <div className="card">
      <h3>Task 54 - Payment Card</h3>
      <p><strong>Order ID:</strong> #{orderId}</p>
      <p><strong>Customer:</strong> {customerName}</p>
      <p><strong>Amount:</strong> ₹{amount.toLocaleString()}</p>
      <p><strong>Date:</strong> {paymentDate}</p>
      {status === "Paid" ? (
        <span className="badge paid">Paid</span>
      ) : (
        <span className="badge pending-payment">Pending Payment</span>
      )}
    </div>
  );
}

export default PaymentCard;
