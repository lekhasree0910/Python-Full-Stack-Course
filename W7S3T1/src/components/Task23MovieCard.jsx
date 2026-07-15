function MovieCard({ title, poster, rating, genre }) {
  return (
    <div className="card">
      <h3>Task 23 - Movie Card</h3>
      <img src={poster} alt={title} className="card-image" />
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
      <p><strong>Genre:</strong> {genre}</p>
      {rating > 8.5 && <span className="badge blockbuster">Blockbuster</span>}
    </div>
  );
}

export default MovieCard;
