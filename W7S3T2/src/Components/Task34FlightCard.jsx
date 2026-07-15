function FlightCard({ airline, flightNumber, origin, destination, availableSeats }) {
  return (
    <div className="card">
      <h3>Task 34 - Flight Card</h3>
      <p><strong>Airline:</strong> {airline}</p>
      <p><strong>Flight:</strong> {flightNumber}</p>
      <p><strong>Route:</strong> {origin} → {destination}</p>
      <p><strong>Available Seats:</strong> {availableSeats}</p>
      {availableSeats > 0 ? (
        <span className="badge available">Seats Available</span>
      ) : (
        <span className="badge booked">Fully Booked</span>
      )}
    </div>
  );
}

export default FlightCard;
