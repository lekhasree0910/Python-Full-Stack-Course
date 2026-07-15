function PlayerCard({ name, sport, team, runs, isCaptain }) {
  return (
    <div className="card">
      <h3>Task 43 - Player Card</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Sport:</strong> {sport}</p>
      <p><strong>Team:</strong> {team}</p>
      <p><strong>Runs:</strong> {runs}</p>
      {isCaptain && <span className="badge captain">Captain</span>}
    </div>
  );
}

export default PlayerCard;
