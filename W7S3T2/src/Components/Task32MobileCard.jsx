function MobileCard({ brand, model, ram, storage, price, supports5G }) {
  return (
    <div className="card">
      <h3>Task 32 - Mobile Card</h3>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Model:</strong> {model}</p>
      <p><strong>RAM:</strong> {ram}GB</p>
      <p><strong>Storage:</strong> {storage}GB</p>
      <p><strong>Price:</strong> ₹{price.toLocaleString()}</p>
      {supports5G && <span className="badge five-g">5G Supported</span>}
    </div>
  );
}

export default MobileCard;
