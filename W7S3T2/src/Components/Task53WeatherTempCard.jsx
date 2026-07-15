function WeatherTempCard({ city, temperature, condition }) {
  const getTempCategory = (temp) => {
    if (temp >= 35) return "hot";
    if (temp >= 20) return "normal";
    return "cold";
  };

  const category = getTempCategory(temperature);

  return (
    <div className={`card weather-${category}`}>
      <h3>Task 53 - Weather Card</h3>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Temperature:</strong> {temperature}°C</p>
      <p><strong>Condition:</strong> {condition}</p>
      <span className={`badge temp-${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
    </div>
  );
}

export default WeatherTempCard;
