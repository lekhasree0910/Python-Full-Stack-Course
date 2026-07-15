function CourseCard({ courseName, trainer, duration, fee, seats }) {
  return (
    <div className="card">
      <h3>Task 25 - Course Card</h3>
      <p><strong>Course:</strong> {courseName}</p>
      <p><strong>Trainer:</strong> {trainer}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Fee:</strong> ₹{fee}</p>
      <p><strong>Available Seats:</strong> {seats}</p>
      {seats === 0 ? (
        <p className="danger">Enrollment Closed</p>
      ) : (
        <p className="success">Enrollment Open</p>
      )}
    </div>
  );
}

export default CourseCard;
