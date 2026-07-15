const StockStatus = ({ inStock }) => {
  return (
    <div style={{
      padding: '15px',
      borderRadius: '8px',
      backgroundColor: inStock ? '#d4edda' : '#f8d7da',
      color: inStock ? '#155724' : '#721c24',
      textAlign: 'center',
      fontWeight: 'bold'
    }}>
      {inStock ? '✅ Available' : '❌ Out of Stock'}
    </div>
  );
};

export default StockStatus;