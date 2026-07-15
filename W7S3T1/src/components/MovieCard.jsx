const MovieCard = ({ title, poster, rating, genre }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: '#1a1a2e',
      color: 'white',
      minWidth: '200px'
    }}>
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

export default MovieCard;