function BookCard({ title, author, price, category }) {
  return (
    <div className="card">
      <h3>Task 5 - Book Card</h3>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <p><strong>Category:</strong> {category}</p>
    </div>
  );
}

export default BookCard;
