function Result({ marks }) {
  return (
    <div className="card">
      <h3>Task 13 - Pass/Fail</h3>
      <p><strong>Marks:</strong> {marks}</p>
      {marks >= 35 ? (
        <p className="success">Pass</p>
      ) : (
        <p className="danger">Fail</p>
      )}
    </div>
  );
}

export default Result;
