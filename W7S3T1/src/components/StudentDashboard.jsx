const StudentDashboard = ({ students }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
      {students.map((student, index) => {
        const isPassed = student.marks >= 35;
        const isTopper = student.marks > 90;
        const hasGoodAttendance = student.attendance >= 75;
        
        return (
          <div key={index} style={{
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            minWidth: '250px',
            position: 'relative'
          }}>
            <h4>{student.name}</h4>
            
            <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
              {isTopper && (
                <span style={{
                  background: 'linear-gradient(135deg, #ffd700, #ffaa00)',
                  color: '#333',
                  padding: '3px 8px',
                  borderRadius: '10px',
                  fontSize: '11px',
                  fontWeight: 'bold'
                }}>
                  🏆 Topper
                </span>
              )}
              
              <span style={{
                padding: '3px 8px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: 'bold',
                backgroundColor: isPassed ? '#d4edda' : '#f8d7da',
                color: isPassed ? '#155724' : '#721c24'
              }}>
                {isPassed ? '✅ Pass' : '❌ Fail'}
              </span>
            </div>
            
            <p><strong>Course:</strong> {student.course}</p>
            <p><strong>Marks:</strong> {student.marks}</p>
            
            <div style={{ marginTop: '10px' }}>
              <p style={{ fontSize: '12px', marginBottom: '5px' }}>
                <strong>Attendance:</strong> {student.attendance}%
              </p>
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${student.attendance}%`,
                  height: '100%',
                  backgroundColor: hasGoodAttendance ? '#28a745' : '#dc3545',
                  borderRadius: '4px'
                }}></div>
              </div>
              <p style={{
                fontSize: '11px',
                color: hasGoodAttendance ? '#28a745' : '#dc3545',
                marginTop: '5px'
              }}>
                {hasGoodAttendance ? '✅ Good Attendance' : '⚠️ Low Attendance'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StudentDashboard;