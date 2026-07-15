function FoodCard({ name, restaurant, price, isVeg }) {
  return (
    <div className="card">
      <h3>Task 38 - Food Card</h3>
      <p><strong>Dish:</strong> {name}</p>
      <p><strong>Restaurant:</strong> {restaurant}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      {isVeg ? (
        <span className="badge veg">Veg</span>
      ) : (
        <span className="badge non-veg">Non-Veg</span>
      )}
    </div>
  );
}

export default FoodCard;
