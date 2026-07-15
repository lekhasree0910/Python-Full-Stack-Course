function CourseCard({ courseName, trainer, duration, fee }) {
  return (
    <div className="card">
      <h3>Task 6 - Course Card</h3>
      <p><strong>Course:</strong> {courseName}</p>
      <p><strong>Trainer:</strong> {trainer}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Fee:</strong> ₹{fee}</p>
    </div>
  );
}

export default CourseCard;
