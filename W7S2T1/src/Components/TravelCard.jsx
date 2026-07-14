function TravelCard(props) {
  return (
    <div className="card">

      <img src={props.image} alt={props.place} />

      <h3>{props.place}</h3>

      <p>Country : {props.country}</p>

      <p>{props.description}</p>

    </div>
  );
}

export default TravelCard;