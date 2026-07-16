import { useState } from "react";

function FavoriteMovies() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  const addMovie = () => {
    if (input.trim()) {
      setMovies([...movies, input.trim()]);
      setInput("");
    }
  };

  const removeMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h2>UseState Task 4: Favorite Movies</h2>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter movie name"
          onKeyPress={(e) => e.key === "Enter" && addMovie()}
        />
        <button className="btn" onClick={addMovie}>Add Movie</button>
      </div>
      <div className="movie-list">
        {movies.length === 0 ? (
          <p className="empty-message">No movies added yet.</p>
        ) : (
          movies.map((movie, index) => (
            <div key={index} className="movie-item">
              <span>{movie}</span>
              <button className="btn btn-danger btn-sm" onClick={() => removeMovie(index)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FavoriteMovies;
