function RestaurantCard({ name, cuisine, rating, location, openHour, closeHour }) {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= openHour && currentHour < closeHour;

  return (
    <div className="card">
      <h3>Task 26 - Restaurant Card</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Cuisine:</strong> {cuisine}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Hours:</strong> {openHour}:00 - {closeHour}:00</p>
      {isOpen ? (
        <span className="badge open-now">Open Now</span>
      ) : (
        <span className="badge closed-now">Closed</span>
      )}
    </div>
  );
}

export default RestaurantCard;
