function ServiceCard(props) {
  return (
    <div className="card">
      <h1>{props.icon}</h1>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button>Learn More</button>
    </div>
  );
}

export default ServiceCard;