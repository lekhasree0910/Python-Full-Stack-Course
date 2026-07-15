function CoursePopularityCard({ courseName, instructor, duration, fee, enrollments }) {
  return (
    <div className="card">
      <h3>Task 40 - Course Popularity Card</h3>
      <p><strong>Course:</strong> {courseName}</p>
      <p><strong>Instructor:</strong> {instructor}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Fee:</strong> ₹{fee.toLocaleString()}</p>
      <p><strong>Enrollments:</strong> {enrollments.toLocaleString()}</p>
      {enrollments > 1000 && <span className="badge best-seller">Best Seller</span>}
    </div>
  );
}

export default CoursePopularityCard;
