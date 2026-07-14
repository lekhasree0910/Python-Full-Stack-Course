function RestaurantCard(props) {
  return (
    <div className="card">

      <img src={props.image} alt={props.name} />

      <h3>{props.name}</h3>

      <p>Cuisine : {props.cuisine}</p>

      <p>Rating : ⭐ {props.rating}</p>

      <p>Location : {props.location}</p>

    </div>
  );
}

export default RestaurantCard;