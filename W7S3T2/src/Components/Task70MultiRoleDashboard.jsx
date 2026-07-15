function MultiRoleDashboard({ user }) {
  const renderDashboard = () => {
    switch (user.role) {
      case "Student":
        return (
          <div className="role-dashboard student-dash">
            <h3>Student Dashboard</h3>
            <p>Welcome, {user.name}!</p>
            <div className="role-features">
              <p>📚 View Courses</p>
              <p>📝 Take Quizzes</p>
              <p>📊 Check Results</p>
              <p>📅 View Schedule</p>
            </div>
          </div>
        );
      case "Faculty":
        return (
          <div className="role-dashboard faculty-dash">
            <h3>Faculty Dashboard</h3>
            <p>Welcome, Prof. {user.name}!</p>
            <div className="role-features">
              <p>📖 Manage Courses</p>
              <p>📝 Create Quizzes</p>
              <p>📋 Grade Students</p>
              <p>📅 Manage Schedule</p>
            </div>
          </div>
        );
      case "Admin":
        return (
          <div className="role-dashboard admin-dash">
            <h3>Admin Dashboard</h3>
            <p>Welcome, Admin {user.name}!</p>
            <div className="role-features">
              <p>👥 Manage Users</p>
              <p>⚙️ System Settings</p>
              <p>📊 View Analytics</p>
              <p>🔔 Manage Notifications</p>
            </div>
          </div>
        );
      case "Trainer":
        return (
          <div className="role-dashboard trainer-dash">
            <h3>Trainer Dashboard</h3>
            <p>Welcome, Trainer {user.name}!</p>
            <div className="role-features">
              <p>📚 Create Content</p>
              <p>👥 View Trainees</p>
              <p>📝 Create Assessments</p>
              <p>📊 Track Progress</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="role-dashboard">
            <p>Unknown role: {user.role}</p>
          </div>
        );
    }
  };

  return (
    <div className="card multi-role">
      <h3>Task 70 - Multi-Role Dashboard</h3>
      <p><strong>User:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      {renderDashboard()}
    </div>
  );
}

export default MultiRoleDashboard;
