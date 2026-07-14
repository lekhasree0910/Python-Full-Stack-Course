function TeamCard(props) {
  return (
    <div className="card">

      <img src={props.image} alt={props.name} />

      <h3>{props.name}</h3>

      <p>{props.role}</p>

      <h2>🔗 📧 💼</h2>

    </div>
  );
}

export default TeamCard;