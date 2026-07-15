const Student = ({ name, age, course }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>Student Details</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Course:</strong> {course}</p>
    </div>
  );
};

export default Student;