const MovieCardAdvanced = ({ title, poster, rating, genre }) => {
  const isBlockbuster = rating > 8.5;
  
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: '#1a1a2e',
      color: 'white',
      position: 'relative'
    }}>
      {isBlockbuster && (
        <span style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'linear-gradient(135deg, #ff6b6b, #ee5a5a)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '15px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          🔥 Blockbuster
        </span>
      )}
      <img 
        src={poster} 
        alt={title} 
        style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '5px' }}
      />
      <h3 style={{ marginTop: '10px' }}>{title}</h3>
      <p style={{ color: '#ffd700' }}>⭐ {rating}</p>
      <p style={{ color: '#aaa' }}>{genre}</p>
    </div>
  );
};

export default MovieCardAdvanced;