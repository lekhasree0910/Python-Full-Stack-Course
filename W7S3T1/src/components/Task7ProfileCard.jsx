function ProfileCard({ image, name, role, location }) {
  return (
    <div className="card">
      <h3>Task 7 - Profile Card</h3>
      <img src={image} alt={name} className="card-image" />
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}

export default ProfileCard;
