function Student({ name, age, course }) {
  return (
    <div className="card">
      <h3>Task 1 - Student</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Course:</strong> {course}</p>
    </div>
  );
}

export default Student;
