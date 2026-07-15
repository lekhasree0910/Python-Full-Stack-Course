const WeatherCard = ({ condition, temperature, city }) => {
  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return '☀️';
      case 'rainy':
        return '🌧️';
      case 'cloudy':
        return '☁️';
      case 'snowy':
        return '❄️';
      case 'stormy':
        return '⛈️';
      default:
        return '🌤️';
    }
  };
  
  const getBgColor = (condition) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return '#fff9e6';
      case 'rainy':
        return '#e3f2fd';
      case 'cloudy':
        return '#f5f5f5';
      case 'snowy':
        return '#e8f5e9';
      case 'stormy':
        return '#fce4ec';
      default:
        return '#fff3cd';
    }
  };
  
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '10px',
      margin: '10px',
      backgroundColor: getBgColor(condition),
      textAlign: 'center',
      minWidth: '200px'
    }}>
      <div style={{ fontSize: '60px' }}>{getWeatherIcon(condition)}</div>
      <h3>{city}</h3>
      <p style={{ fontSize: '32px', fontWeight: 'bold' }}>{temperature}°C</p>
      <p style={{ textTransform: 'capitalize', color: '#666' }}>{condition}</p>
    </div>
  );
};

export default WeatherCard;