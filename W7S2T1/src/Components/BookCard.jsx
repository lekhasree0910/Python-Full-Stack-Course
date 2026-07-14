function BookCard(props) {
  return (
    <div className="card">

      <img src={props.image} alt={props.title} />

      <h3>{props.title}</h3>

      <p>Author : {props.author}</p>

      <p>Price : ₹{props.price}</p>

      <p>Category : {props.category}</p>

    </div>
  );
}

export default BookCard;