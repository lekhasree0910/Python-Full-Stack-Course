function MovieGallery({ movies }) {
  return (
    <div className="card">
      <h3>Task 66 - Movie Gallery</h3>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div key={index} className="movie-item">
            <p><strong>{movie.title}</strong></p>
            <p>⭐ {movie.rating}</p>
            <p>{movie.genre}</p>
            <div className="badges">
              {movie.rating >= 8.5 && <span className="badge top-rated">Top Rated</span>}
              {movie.isNew && <span className="badge new-release">New Release</span>}
              {movie.rating >= 7 && movie.rating < 8.5 && <span className="badge trending">Trending</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieGallery;
