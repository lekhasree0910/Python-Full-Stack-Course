function LaptopCard({ brand, model, ram, processor, price }) {
  return (
    <div className="card">
      <h3>Task 31 - Laptop Card</h3>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Model:</strong> {model}</p>
      <p><strong>RAM:</strong> {ram}GB</p>
      <p><strong>Processor:</strong> {processor}</p>
      <p><strong>Price:</strong> ₹{price.toLocaleString()}</p>
      {ram >= 16 && <span className="badge gaming">Gaming Laptop</span>}
    </div>
  );
}

export default LaptopCard;
