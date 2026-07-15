const UserDashboard = ({ role }) => {
  return (
    <div style={{
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: role === 'Admin' ? '#e3f2fd' : '#f3e5f5',
      textAlign: 'center'
    }}>
      {role === 'Admin' ? (
        <div>
          <h3>🔧 Admin Panel</h3>
          <p>Welcome, Admin! You have full access.</p>
        </div>
      ) : (
        <div>
          <h3>📊 User Dashboard</h3>
          <p>Welcome! Here's your dashboard.</p>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;