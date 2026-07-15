const ProfileCardAdvanced = ({ profileImage, name, role, location, isVerified }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: '#fff',
      textAlign: 'center',
      position: 'relative'
    }}>
      {isVerified && (
        <span style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: '#007bff',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '15px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          ✅ Verified User
        </span>
      )}
      <img 
        src={profileImage} 
        alt={name} 
        style={{ 
          width: '100px', 
          height: '100px', 
          borderRadius: '50%', 
          objectFit: 'cover',
          border: isVerified ? '3px solid #28a745' : '3px solid #ddd'
        }}
      />
      <h3 style={{ marginTop: '10px' }}>{name}</h3>
      <p style={{ color: '#007bff' }}>{role}</p>
      <p style={{ color: '#666' }}>📍 {location}</p>
    </div>
  );
};

export default ProfileCardAdvanced;