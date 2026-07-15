function ProductCard({ name, price, description, image }) {
  return (
    <div className="card">
      <h3>Task 3 - Product Card</h3>
      <img src={image} alt={name} className="card-image" />
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
}

export default ProductCard;
