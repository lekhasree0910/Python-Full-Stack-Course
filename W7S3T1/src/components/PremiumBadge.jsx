const PremiumBadge = ({ isPremium }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      {isPremium && (
        <span style={{
          background: 'linear-gradient(135deg, #ffd700, #ffaa00)',
          color: '#333',
          padding: '8px 20px',
          borderRadius: '20px',
          fontWeight: 'bold',
          display: 'inline-block'
        }}>
          ⭐ Premium Badge
        </span>
      )}
    </div>
  );
};

export default PremiumBadge;