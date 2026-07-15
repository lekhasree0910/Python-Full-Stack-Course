function StudentDashboard({ students }) {
  return (
    <div className="card dashboard">
      <h3>Task 30 - Student Management Dashboard</h3>
      <div className="dashboard-grid">
        {students.map((student, index) => (
          <div key={index} className="student-card">
            <h4>{student.name}</h4>
            <p><strong>Course:</strong> {student.course}</p>
            <p><strong>Marks:</strong> {student.marks}</p>
            <p><strong>Attendance:</strong> {student.attendance}%</p>

            <div className="badges">
              {student.marks >= 35 ? (
                <span className="badge pass">Pass</span>
              ) : (
                <span className="badge fail">Fail</span>
              )}

              {student.marks > 90 && (
                <span className="badge topper">Topper</span>
              )}

              {student.attendance >= 75 ? (
                <span className="badge good-attendance">Good Attendance</span>
              ) : (
                <span className="badge low-attendance">Low Attendance</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
