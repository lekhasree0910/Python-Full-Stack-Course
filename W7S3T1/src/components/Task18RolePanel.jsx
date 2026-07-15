function RolePanel({ userName, role }) {
  return (
    <div className="card">
      <h3>Task 18 - Role Panel</h3>
      <p><strong>User:</strong> {userName}</p>
      <p><strong>Role:</strong> {role}</p>
      {role === "Admin" ? (
        <div className="panel admin-panel">
          <h4>Admin Panel</h4>
          <p>Manage users, settings, and content</p>
        </div>
      ) : (
        <div className="panel user-panel">
          <h4>User Dashboard</h4>
          <p>View your profile and activities</p>
        </div>
      )}
    </div>
  );
}

export default RolePanel;
