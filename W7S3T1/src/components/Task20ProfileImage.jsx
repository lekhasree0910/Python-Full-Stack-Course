function ProfileImage({ userName, hasCustomImage, imageUrl }) {
  const defaultImage = "https://via.placeholder.com/150?text=User";

  return (
    <div className="card">
      <h3>Task 20 - Profile Image</h3>
      <img
        src={hasCustomImage ? imageUrl : defaultImage}
        alt={userName}
        className="profile-image"
      />
      <p><strong>User:</strong> {userName}</p>
      <p><strong>Status:</strong> {hasCustomImage ? "Custom Profile Picture" : "Default Profile Picture"}</p>
    </div>
  );
}

export default ProfileImage;
