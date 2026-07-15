const CourseCardAdvanced = ({ courseName, trainer, duration, fee, seatsAvailable }) => {
  const isEnrollmentClosed = seatsAvailable === 0;
  
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: isEnrollmentClosed ? '#f8d7da' : '#e8f5e9',
      position: 'relative'
    }}>
      {isEnrollmentClosed && (
        <span style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: '#dc3545',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}>
          🚫 Enrollment Closed
        </span>
      )}
      <h3>📚 {courseName}</h3>
      <p><strong>Trainer:</strong> {trainer}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p style={{ color: '#28a745', fontWeight: 'bold', fontSize: '18px' }}>₹{fee}</p>
      <p style={{ 
        color: isEnrollmentClosed ? '#dc3545' : '#28a745',
        fontWeight: 'bold'
      }}>
        {isEnrollmentClosed ? '❌ No seats available' : `✅ ${seatsAvailable} seats available`}
      </p>
    </div>
  );
};

export default CourseCardAdvanced;