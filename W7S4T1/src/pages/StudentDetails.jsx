import { useParams, useNavigate } from 'react-router-dom';

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock student details lookup
  const studentData = {
    1: { name: 'Saran K', email: 'saran@university.edu', course: 'Computer Science', gpa: '3.9', year: '3rd Year' },
    2: { name: 'Ananya Sharma', email: 'ananya@university.edu', course: 'Data Science', gpa: '3.8', year: '2nd Year' },
    3: { name: 'David Smith', email: 'david@university.edu', course: 'Information Technology', gpa: '3.6', year: '4th Year' },
  };

  const student = studentData[id] || {
    name: 'Unknown Student',
    email: 'n/a',
    course: 'General Studies',
    gpa: 'N/A',
    year: 'N/A',
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '60px 24px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-secondary btn-sm"
          style={{ marginBottom: '24px' }}
        >
          ← Go Back
        </button>

        <div className="card" style={{ padding: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary-glow)',
              color: 'var(--primary-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.75rem',
              fontWeight: 800,
            }}>
              {student.name.charAt(0)}
            </div>
            <div>
              <span className="badge badge-primary" style={{ marginBottom: '4px' }}>
                Student ID: {id}
              </span>
              <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{student.name}</h2>
              <p style={{ margin: 0 }}>{student.email}</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={styles.detailRow}>
              <span style={styles.label}>Course Enrolled</span>
              <span style={styles.value}>{student.course}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.label}>Academic Year</span>
              <span style={styles.value}>{student.year}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.label}>GPA Rating</span>
              <span style={{ ...styles.value, color: 'var(--success-color)', fontWeight: 700 }}>
                {student.gpa} / 4.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid var(--border-color)',
  },
  label: {
    color: 'var(--text-secondary)',
    fontWeight: 600,
    fontSize: '0.925rem',
  },
  value: {
    color: 'var(--text-primary)',
    fontWeight: 500,
    fontSize: '0.925rem',
  },
};

export default StudentDetails;
