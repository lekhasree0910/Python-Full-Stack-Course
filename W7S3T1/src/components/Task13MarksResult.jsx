function MarksResult({ studentName, marks }) {
  return (
    <div className="card">
      <h3>Task 13 - Marks Result</h3>
      <p><strong>Student:</strong> {studentName}</p>
      <p><strong>Marks:</strong> {marks}</p>
      {marks >= 35 ? (
        <p className="success">Pass</p>
      ) : (
        <p className="danger">Fail</p>
      )}
    </div>
  );
}

export default MarksResult;
