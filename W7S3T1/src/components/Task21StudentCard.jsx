function StudentCard({ name, age, course, marks }) {
  return (
    <div className="card">
      <h3>Task 21 - Student Card</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Marks:</strong> {marks}</p>
      {marks > 90 && <span className="badge topper">Topper</span>}
    </div>
  );
}

export default StudentCard;
