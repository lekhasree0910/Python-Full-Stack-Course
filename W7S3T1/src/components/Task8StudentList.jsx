function StudentList({ students }) {
  return (
    <div className="card">
      <h3>Task 8 - Student List (Array Props)</h3>
      {students.map((student, index) => (
        <div key={index} className="student-item">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Marks:</strong> {student.marks}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default StudentList;
