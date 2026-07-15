function DoctorCard({ name, specialty, experience, consultationFee, availableToday }) {
  return (
    <div className="card">
      <h3>Task 36 - Doctor Card</h3>
      <p><strong>Doctor:</strong> Dr. {name}</p>
      <p><strong>Specialty:</strong> {specialty}</p>
      <p><strong>Experience:</strong> {experience} years</p>
      <p><strong>Consultation Fee:</strong> ₹{consultationFee}</p>
      {availableToday ? (
        <span className="badge available">Available Today</span>
      ) : (
        <span className="badge not-available">Not Available</span>
      )}
    </div>
  );
}

export default DoctorCard;
