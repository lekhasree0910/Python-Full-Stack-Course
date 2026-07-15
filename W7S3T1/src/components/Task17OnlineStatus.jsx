function OnlineStatus({ userName, isActive }) {
  return (
    <div className="card">
      <h3>Task 17 - Online Status</h3>
      <p><strong>User:</strong> {userName}</p>
      {isActive ? (
        <p className="status online">Online</p>
      ) : (
        <p className="status offline">Offline</p>
      )}
    </div>
  );
}

export default OnlineStatus;
