function ProductCard({ name, price, image, onSale }) {
  return (
    <div className="card">
      <h3>Task 24 - Product Card</h3>
      <img src={image} alt={name} className="card-image" />
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      {onSale && <span className="badge sale">Sale</span>}
    </div>
  );
}

export default ProductCard;
