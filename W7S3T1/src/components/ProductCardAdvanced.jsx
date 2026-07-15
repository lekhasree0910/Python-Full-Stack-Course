const ProductCardAdvanced = ({ name, price, image, onSale, discount }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: '#fff',
      position: 'relative'
    }}>
      {onSale && (
        <span style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: '#ff4757',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}>
          🏷️ Sale {discount}% OFF
        </span>
      )}
      <img 
        src={image} 
        alt={name} 
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
      />
      <h3 style={{ marginTop: '10px' }}>{name}</h3>
      <p style={{ 
        color: onSale ? '#ff4757' : '#28a745', 
        fontWeight: 'bold', 
        fontSize: '18px' 
      }}>
        ₹{onSale ? (price - (price * discount / 100)).toFixed(0) : price}
        {onSale && (
          <span style={{ 
            textDecoration: 'line-through', 
            color: '#999', 
            fontSize: '14px',
            marginLeft: '5px'
          }}>
            ₹{price}
          </span>
        )}
      </p>
    </div>
  );
};

export default ProductCardAdvanced;