function DiscountLabel({ productName, price, discountPercent }) {
  return (
    <div className="card">
      <h3>Task 16 - Discount Label</h3>
      <p><strong>Product:</strong> {productName}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      {discountPercent > 0 && (
        <span className="badge discount">{discountPercent}% OFF</span>
      )}
    </div>
  );
}

export default DiscountLabel;
