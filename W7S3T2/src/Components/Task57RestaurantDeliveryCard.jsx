function RestaurantDeliveryCard({ name, cuisine, rating, priceRange, homeDelivery }) {
  return (
    <div className="card">
      <h3>Task 57 - Restaurant Delivery Card</h3>
      <p><strong>Restaurant:</strong> {name}</p>
      <p><strong>Cuisine:</strong> {cuisine}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
      <p><strong>Price Range:</strong> {priceRange}</p>
      {homeDelivery ? (
        <span className="badge delivery-available">Home Delivery Available</span>
      ) : (
        <span className="badge delivery-not-available">No Home Delivery</span>
      )}
    </div>
  );
}

export default RestaurantDeliveryCard;
