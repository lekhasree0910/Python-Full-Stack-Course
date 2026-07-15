function StockStatus({ productName, inStock }) {
  return (
    <div className="card">
      <h3>Task 12 - Stock Status</h3>
      <p><strong>Product:</strong> {productName}</p>
      {inStock ? (
        <p className="success">Available</p>
      ) : (
        <p className="danger">Out of Stock</p>
      )}
    </div>
  );
}

export default StockStatus;
