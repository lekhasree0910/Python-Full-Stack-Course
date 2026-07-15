const BookCard = ({ title, author, price, category }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: '#f5f5dc',
      minWidth: '200px'
    }}>
      <h3>📖 {title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p style={{ color: '#28a745', fontWeight: 'bold' }}>₹{price}</p>
      <span style={{
        backgroundColor: '#007bff',
        color: 'white',
        padding: '3px 8px',
        borderRadius: '10px',
        fontSize: '12px'
      }}>
        {category}
      </span>
    </div>
  );
};

export default BookCard;