function HotelCard({ name, location, rating, pricePerNight, breakfastIncluded }) {
  return (
    <div className="card">
      <h3>Task 35 - Hotel Card</h3>
      <p><strong>Hotel:</strong> {name}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
      <p><strong>Price/Night:</strong> ₹{pricePerNight.toLocaleString()}</p>
      {breakfastIncluded && <span className="badge breakfast">Free Breakfast</span>}
    </div>
  );
}

export default HotelCard;
