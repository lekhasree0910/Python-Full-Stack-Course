function SubscriptionCard({ userName, planName, startDate, expiryDate }) {
  const now = new Date();
  const expiry = new Date(expiryDate);
  const daysLeft = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));

  let status;
  if (daysLeft < 0) {
    status = "Expired";
  } else if (daysLeft <= 7) {
    status = "Renew Soon";
  } else {
    status = "Active";
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":
        return "active";
      case "Expired":
        return "expired";
      case "Renew Soon":
        return "renew";
      default:
        return "";
    }
  };

  return (
    <div className="card">
      <h3>Task 59 - Subscription Card</h3>
      <p><strong>User:</strong> {userName}</p>
      <p><strong>Plan:</strong> {planName}</p>
      <p><strong>Start Date:</strong> {startDate}</p>
      <p><strong>Expiry Date:</strong> {expiryDate}</p>
      {status === "Active" && <p><strong>Days Left:</strong> {daysLeft}</p>}
      <span className={`badge ${getStatusBadge(status)}`}>{status}</span>
    </div>
  );
}

export default SubscriptionCard;
