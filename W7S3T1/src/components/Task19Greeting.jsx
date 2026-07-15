function Greeting() {
  const currentHour = new Date().getHours();

  let greeting;
  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div className="card">
      <h3>Task 19 - Time-Based Greeting</h3>
      <p className="greeting">{greeting}!</p>
      <p><strong>Current Time:</strong> {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export default Greeting;
