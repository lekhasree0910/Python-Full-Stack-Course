function StudentScholarshipCard({ name, course, marks, attendance }) {
  return (
    <div className="card">
      <h3>Task 55 - Student Scholarship Card</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Marks:</strong> {marks}%</p>
      <p><strong>Attendance:</strong> {attendance}%</p>
      {marks > 95 && <span className="badge scholarship">Scholarship</span>}
    </div>
  );
}

export default StudentScholarshipCard;
