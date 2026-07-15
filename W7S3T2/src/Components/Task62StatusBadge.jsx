function StatusBadge({ status }) {
  const getStatusClass = (status) => {
    switch (status) {
      case "Success":
        return "badge-success";
      case "Error":
        return "badge-error";
      case "Warning":
        return "badge-warning";
      case "Info":
        return "badge-info";
      case "Pending":
        return "badge-pending";
      case "Active":
        return "badge-active";
      case "Inactive":
        return "badge-inactive";
      default:
        return "badge-default";
    }
  };

  return (
    <span className={`badge reusable ${getStatusClass(status)}`}>{status}</span>
  );
}

export default StatusBadge;
