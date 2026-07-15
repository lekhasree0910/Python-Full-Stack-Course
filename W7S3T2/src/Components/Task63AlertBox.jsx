function AlertBox({ type, title, message }) {
  const getAlertClass = (type) => {
    switch (type) {
      case "Success":
        return "alert-success";
      case "Error":
        return "alert-error";
      case "Warning":
        return "alert-warning";
      case "Info":
        return "alert-info";
      default:
        return "alert-info";
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "Success":
        return "✅";
      case "Error":
        return "❌";
      case "Warning":
        return "⚠️";
      case "Info":
        return "ℹ️";
      default:
        return "ℹ️";
    }
  };

  return (
    <div className={`alert-box ${getAlertClass(type)}`}>
      <span className="alert-icon">{getIcon(type)}</span>
      <div className="alert-content">
        <strong>{title}</strong>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default AlertBox;
