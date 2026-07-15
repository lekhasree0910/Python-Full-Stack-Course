function WeatherCard({ city, temperature, condition }) {
  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return "☀️";
      case "rainy":
        return "🌧️";
      case "cloudy":
        return "☁️";
      case "snowy":
        return "❄️";
      case "windy":
        return "💨";
      default:
        return "🌤️";
    }
  };

  return (
    <div className="card">
      <h3>Task 27 - Weather Card</h3>
      <p className="weather-icon">{getWeatherIcon(condition)}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Temperature:</strong> {temperature}°C</p>
      <p><strong>Condition:</strong> {condition}</p>
    </div>
  );
}

export default WeatherCard;
