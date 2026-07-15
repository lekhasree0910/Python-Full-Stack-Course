function MovieCard({ title, poster, rating, genre }) {
  return (
    <div className="card">
      <h3>Task 4 - Movie Card</h3>
      <img src={poster} alt={title} className="card-image" />
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
      <p><strong>Genre:</strong> {genre}</p>
    </div>
  );
}

export default MovieCard;
