function MovieCard(props) {
  return (
    <div className="card">

      <img src={props.image} alt={props.title} />

      <h3>{props.title}</h3>

      <p>Genre : {props.genre}</p>

      <p>Rating : ⭐ {props.rating}</p>

      <p>Year : {props.year}</p>

    </div>
  );
}

export default MovieCard;