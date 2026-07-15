const UserStatus = ({ isActive }) => {
  return (
    <div style={{
      padding: '15px',
      borderRadius: '8px',
      backgroundColor: isActive ? '#d4edda' : '#f8d7da',
      textAlign: 'center'
    }}>
      <span style={{
        display: 'inline-block',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: isActive ? '#28a745' : '#dc3545',
        marginRight: '8px'
      }}></span>
      <strong>{isActive ? '🟢 Online' : '🔴 Offline'}</strong>
    </div>
  );
};

export default UserStatus;