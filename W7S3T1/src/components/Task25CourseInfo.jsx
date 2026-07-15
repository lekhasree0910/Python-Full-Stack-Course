function CourseInfo({ courseName, trainer, duration, fee, seatsLeft }) {
  return (
    <div className="card">
      <h3>Task 25 - Course Info</h3>
      <p><strong>Course:</strong> {courseName}</p>
      <p><strong>Trainer:</strong> {trainer}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Fee:</strong> ₹{fee}</p>
      <p><strong>Seats Left:</strong> {seatsLeft}</p>
      {seatsLeft === 0 ? (
        <span className="badge closed">Enrollment Closed</span>
      ) : (
        <span className="badge open">Enrollment Open</span>
      )}
    </div>
  );
}

export default CourseInfo;
