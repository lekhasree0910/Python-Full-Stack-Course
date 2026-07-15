function BusTicketCard({ passengerName, busNumber, route, departureTime, status }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Confirmed":
        return "confirmed";
      case "Waiting List":
        return "waiting";
      case "Cancelled":
        return "cancelled";
      default:
        return "";
    }
  };

  return (
    <div className="card">
      <h3>Task 46 - Bus Ticket Card</h3>
      <p><strong>Passenger:</strong> {passengerName}</p>
      <p><strong>Bus:</strong> {busNumber}</p>
      <p><strong>Route:</strong> {route}</p>
      <p><strong>Departure:</strong> {departureTime}</p>
      <p><strong>Status:</strong> {status}</p>
      <span className={`badge ${getStatusBadge(status)}`}>{status}</span>
    </div>
  );
}

export default BusTicketCard;
