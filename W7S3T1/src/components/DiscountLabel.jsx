const DiscountLabel = ({ discountPercentage }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {discountPercentage > 0 && (
        <span style={{
          backgroundColor: '#ff4757',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontWeight: 'bold',
          position: 'absolute',
          top: '-10px',
          right: '-10px'
        }}>
          {discountPercentage}% OFF
        </span>
      )}
    </div>
  );
};

export default DiscountLabel;