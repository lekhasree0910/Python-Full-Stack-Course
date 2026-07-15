function NotificationCard({ title, message, type }) {
  const getIcon = (type) => {
    switch (type) {
      case "Success":
        return "✅";
      case "Warning":
        return "⚠️";
      case "Error":
        return "❌";
      case "Info":
        return "ℹ️";
      default:
        return "🔔";
    }
  };

  return (
    <div className={`card notification-${type.toLowerCase()}`}>
      <h3>Task 52 - Notification Card</h3>
      <p className="notification-icon">{getIcon(type)}</p>
      <p><strong>{title}</strong></p>
      <p>{message}</p>
      <span className={`badge notif-${type.toLowerCase()}`}>{type}</span>
    </div>
  );
}

export default NotificationCard;
