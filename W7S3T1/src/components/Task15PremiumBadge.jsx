function PremiumBadge({ userName, isPremium }) {
  return (
    <div className="card">
      <h3>Task 15 - Premium Badge</h3>
      <p><strong>User:</strong> {userName}</p>
      {isPremium && <span className="badge premium">Premium</span>}
      {!isPremium && <span className="badge standard">Standard User</span>}
    </div>
  );
}

export default PremiumBadge;
