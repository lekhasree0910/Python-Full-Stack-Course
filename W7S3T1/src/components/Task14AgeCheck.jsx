function AgeCheck({ age }) {
  return (
    <div className="card">
      <h3>Task 14 - Age Check</h3>
      <p><strong>Age:</strong> {age}</p>
      {age >= 18 ? (
        <p className="success">Adult</p>
      ) : (
        <p className="warning">Minor</p>
      )}
    </div>
  );
}

export default AgeCheck;
