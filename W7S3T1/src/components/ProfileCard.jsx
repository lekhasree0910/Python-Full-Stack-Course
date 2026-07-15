const ProfileCard = ({ profileImage, name, role, location }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: '#fff',
      textAlign: 'center',
      minWidth: '200px'
    }}>
      <img 
        src={profileImage} 
        alt={name} 
        style={{ 
          width: '100px', 
          height: '100px', 
          borderRadius: '50%', 
          objectFit: 'cover',
          border: '3px solid #007bff'
        }}
      />
      <h3 style={{ marginTop: '10px' }}>{name}</h3>
      <p style={{ color: '#007bff' }}>{role}</p>
      <p style={{ color: '#666' }}>📍 {location}</p>
    </div>
  );
};

export default ProfileCard;