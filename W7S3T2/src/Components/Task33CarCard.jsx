function CarCard({ brand, model, year, fuelType, price }) {
  return (
    <div className="card">
      <h3>Task 33 - Car Card</h3>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Model:</strong> {model}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Fuel Type:</strong> {fuelType}</p>
      <p><strong>Price:</strong> ₹{price.toLocaleString()}</p>
      {fuelType === "Electric" && <span className="badge electric">Electric Vehicle</span>}
    </div>
  );
}

export default CarCard;
