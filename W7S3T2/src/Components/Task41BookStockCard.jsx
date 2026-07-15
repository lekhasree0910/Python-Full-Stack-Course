function BookStockCard({ title, author, price, category, quantity }) {
  return (
    <div className="card">
      <h3>Task 41 - Book Stock Card</h3>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <p><strong>Category:</strong> {category}</p>
      {quantity === 0 ? (
        <span className="badge out-of-stock">Out of Stock</span>
      ) : (
        <p><strong>Quantity:</strong> {quantity}</p>
      )}
    </div>
  );
}

export default BookStockCard;
