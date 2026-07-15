function TaskCard({ title, description, assignee, deadline, priority }) {
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return "high";
      case "Medium":
        return "medium";
      case "Low":
        return "low";
      default:
        return "";
    }
  };

  return (
    <div className="card">
      <h3>Task 51 - Task Card</h3>
      <p><strong>Task:</strong> {title}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Assignee:</strong> {assignee}</p>
      <p><strong>Deadline:</strong> {deadline}</p>
      <span className={`badge ${getPriorityBadge(priority)}`}>{priority} Priority</span>
    </div>
  );
}

export default TaskCard;
