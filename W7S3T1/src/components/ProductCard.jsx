const ProductCard = ({ name, price, description, image, category }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: '#fff',
      minWidth: '200px',
      maxWidth: '250px'
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
      />
      <h3>{name}</h3>
      <p style={{ color: '#666', fontSize: '14px' }}>{description}</p>
      <p style={{ color: '#28a745', fontWeight: 'bold', fontSize: '18px' }}>₹{price}</p>
      <p style={{ color: '#888', fontSize: '12px' }}>{category}</p>
    </div>
  );
};

export default ProductCard;