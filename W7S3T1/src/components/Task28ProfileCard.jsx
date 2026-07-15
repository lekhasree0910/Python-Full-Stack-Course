function ProfileCard({ image, name, role, location, isVerified }) {
  return (
    <div className="card">
      <h3>Task 28 - Profile Card</h3>
      <img src={image} alt={name} className="card-image" />
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Location:</strong> {location}</p>
      {isVerified && <span className="badge verified">Verified User</span>}
    </div>
  );
}

export default ProfileCard;
