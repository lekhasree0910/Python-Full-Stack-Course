function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />

      <h2>{props.title}</h2>

      <p>{props.description}</p>

      <button>{props.button}</button>
    </div>
  );
}


export default Card;