const CourseCard = ({ courseName, trainer, duration, fee }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: '#e8f5e9',
      minWidth: '250px'
    }}>
      <h3>📚 {courseName}</h3>
      <p><strong>Trainer:</strong> {trainer}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p style={{ color: '#28a745', fontWeight: 'bold', fontSize: '18px' }}>₹{fee}</p>
    </div>
  );
};

export default CourseCard;