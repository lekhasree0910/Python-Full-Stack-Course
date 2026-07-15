const RestaurantCard = ({ name, cuisine, rating, location, openTime, closeTime }) => {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= openTime && currentHour < closeTime;
  
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: isOpen ? '#d4edda' : '#f8d7da',
      position: 'relative'
    }}>
      <span style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: isOpen ? '#28a745' : '#dc3545',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '15px',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        {isOpen ? '🟢 Open Now' : '🔴 Closed'}
      </span>
      <h3>🍽️ {name}</h3>
      <p><strong>Cuisine:</strong> {cuisine}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Hours:</strong> {openTime}:00 - {closeTime}:00</p>
    </div>
  );
};

export default RestaurantCard;