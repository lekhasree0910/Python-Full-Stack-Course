function MovieRatingCard({ title, genre, year, rating, ratingType }) {
  return (
    <div className="card">
      <h3>Task 39 - Movie Rating Card</h3>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
      {ratingType === "Adult" && <span className="badge adult">18+</span>}
    </div>
  );
}

export default MovieRatingCard;
