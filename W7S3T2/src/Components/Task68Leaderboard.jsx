function Leaderboard({ students }) {
  const sorted = [...students].sort((a, b) => b.marks - a.marks);

  const getBadge = (index) => {
    if (index === 0) return "gold";
    if (index === 1) return "silver";
    if (index === 2) return "bronze";
    return "";
  };

  return (
    <div className="card">
      <h3>Task 68 - Leaderboard</h3>
      {sorted.map((student, index) => (
        <div key={index} className="leaderboard-item">
          <p>
            <strong>#{index + 1}</strong> {student.name} - {student.marks} marks
          </p>
          {index < 3 && (
            <span className={`badge ${getBadge(index)}`}>
              {index === 0 ? "Gold" : index === 1 ? "Silver" : "Bronze"}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
