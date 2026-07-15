const StudentList = ({ students }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px'
    }}>
      {students.map((student, index) => (
        <div key={index} style={{
          border: '1px solid #ddd',
          padding: '15px',
          borderRadius: '8px',
          backgroundColor: '#f0f8ff',
          minWidth: '180px'
        }}>
          <h4>{student.name}</h4>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Marks:</strong> {student.marks}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentList;