function UserPanel({ role }) {
  return (
    <div className="card">
      <h3>Task 18 - User Panel</h3>
      {role === "Admin" ? (
        <div>
          <p className="badge admin">Admin Panel</p>
          <p>Manage users, settings, and content.</p>
        </div>
      ) : (
        <div>
          <p className="badge user">User Dashboard</p>
          <p>View your profile and activity.</p>
        </div>
      )}
    </div>
  );
}

export default UserPanel;
