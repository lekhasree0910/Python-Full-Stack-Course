const StudentCard = ({ name, age, course, marks }) => {
  const isTopper = marks > 90;
  const isPassed = marks >= 35;
  
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: '#f9f9f9',
      position: 'relative'
    }}>
      {isTopper && (
        <span style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'linear-gradient(135deg, #ffd700, #ffaa00)',
          color: '#333',
          padding: '5px 10px',
          borderRadius: '15px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          🏆 Topper
        </span>
      )}
      <h3>{name}</h3>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Marks:</strong> {marks}</p>
      <span style={{
        display: 'inline-block',
        padding: '5px 10px',
        borderRadius: '15px',
        fontSize: '12px',
        fontWeight: 'bold',
        backgroundColor: isPassed ? '#d4edda' : '#f8d7da',
        color: isPassed ? '#155724' : '#721c24'
      }}>
        {isPassed ? '✅ Pass' : '❌ Fail'}
      </span>
    </div>
  );
};

export default StudentCard;