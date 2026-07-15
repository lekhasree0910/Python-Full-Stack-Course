const ProfileImage = ({ hasCustomImage, imageUrl, name }) => {
  const defaultImage = `https://ui-avatars.com/api/?name=${name}&background=007bff&color=fff`;
  
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={hasCustomImage && imageUrl ? imageUrl : defaultImage}
        alt={name}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: hasCustomImage ? '3px solid #28a745' : '3px solid #dc3545'
        }}
      />
      <p style={{ marginTop: '10px' }}>
        {hasCustomImage ? '✅ Custom Profile Picture' : '📷 Default Profile Picture'}
      </p>
    </div>
  );
};

export default ProfileImage;