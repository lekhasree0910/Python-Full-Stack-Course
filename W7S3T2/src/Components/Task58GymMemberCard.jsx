function GymMemberCard({ name, membershipType, startDate, expiryDate }) {
  const isExpired = new Date(expiryDate) < new Date();

  return (
    <div className="card">
      <h3>Task 58 - Gym Member Card</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Membership:</strong> {membershipType}</p>
      <p><strong>Start Date:</strong> {startDate}</p>
      <p><strong>Expiry Date:</strong> {expiryDate}</p>
      {isExpired ? (
        <span className="badge expired">Membership Expired</span>
      ) : (
        <span className="badge active">Active Member</span>
      )}
    </div>
  );
}

export default GymMemberCard;
