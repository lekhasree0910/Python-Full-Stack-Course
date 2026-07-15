function CustomerCard({ name, email, totalSpent, points }) {
  const getMembership = (points) => {
    if (points >= 1000) return "Gold";
    if (points >= 500) return "Silver";
    return "Bronze";
  };

  const membership = getMembership(points);

  return (
    <div className="card">
      <h3>Task 42 - Customer Card</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Total Spent:</strong> ₹{totalSpent.toLocaleString()}</p>
      <p><strong>Points:</strong> {points}</p>
      <span className={`badge membership-${membership.toLowerCase()}`}>{membership} Member</span>
    </div>
  );
}

export default CustomerCard;
