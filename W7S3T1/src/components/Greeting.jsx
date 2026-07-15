const Greeting = () => {
  const hour = new Date().getHours();
  
  let greeting, emoji, bgColor;
  
  if (hour < 12) {
    greeting = 'Good Morning';
    emoji = '🌅';
    bgColor = '#fff9e6';
  } else if (hour < 17) {
    greeting = 'Good Afternoon';
    emoji = '☀️';
    bgColor = '#fff3cd';
  } else {
    greeting = 'Good Evening';
    emoji = '🌙';
    bgColor = '#e3f2fd';
  }
  
  return (
    <div style={{
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: bgColor,
      textAlign: 'center',
      fontSize: '24px'
    }}>
      {emoji} {greeting}!
    </div>
  );
};

export default Greeting;