import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Local student state to allow full Student Management CRUD operations
  const [students, setStudents] = useState([
    { id: 1, name: 'Saran K', email: 'saran@university.edu', course: 'Computer Science' },
    { id: 2, name: 'Ananya Sharma', email: 'ananya@university.edu', course: 'Data Science' },
    { id: 3, name: 'David Smith', email: 'david@university.edu', course: 'Information Technology' },
  ]);

  const [newStudent, setNewStudent] = useState({ name: '', email: '', course: '' });
  const [showAddForm, setShowAddForm] = useState(false);

  // Profile details
  const [profile] = useState({
    name: 'Saran K',
    email: 'saran.k@admin.org',
    role: 'Principal Administrator',
    department: 'Department of Computer Science',
    joined: 'January 2024',
  });

  // Settings details
  const [settings, setSettings] = useState({
    siteName: 'React Learning Hub',
    maintenanceMode: false,
    notificationsEnabled: true,
    theme: 'Dark',
  });

  // Courses
  const coursesList = [
    { code: 'CS101', name: 'Introduction to React.js', students: 124, duration: '8 Weeks' },
    { code: 'CS202', name: 'Advanced Hook Architectures', students: 89, duration: '6 Weeks' },
    { code: 'CS303', name: 'Single Page Routing Systems', students: 56, duration: '4 Weeks' },
    { code: 'CS404', name: 'REST API Fetching Patterns', students: 142, duration: '10 Weeks' },
  ];

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.email || !newStudent.course) return;

    const nextId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    setStudents([...students, { id: nextId, ...newStudent }]);
    setNewStudent({ name: '', email: '', course: '' });
    setShowAddForm(false);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const renderContent = () => {
    switch (currentPath) {
      case '/profile':
        return (
          <div className="animate-fade-in">
            <div style={{ marginBottom: '30px' }}>
              <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>User Profile</h1>
              <p>View your administrator details and system permissions.</p>
            </div>
            <div className="card" style={{ maxWidth: '600px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-glow)',
                  color: 'var(--primary-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                }}>
                  {profile.name.charAt(0)}
                </div>
                <div>
                  <h3 style={{ margin: 0 }}>{profile.name}</h3>
                  <span className="badge badge-primary">{profile.role}</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={styles.infoRow}>
                  <span style={styles.infoLabel}>Email</span>
                  <span style={styles.infoValue}>{profile.email}</span>
                </div>
                <div style={styles.infoRow}>
                  <span style={styles.infoLabel}>Department</span>
                  <span style={styles.infoValue}>{profile.department}</span>
                </div>
                <div style={styles.infoRow}>
                  <span style={styles.infoLabel}>Member Since</span>
                  <span style={styles.infoValue}>{profile.joined}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case '/settings':
        return (
          <div className="animate-fade-in">
            <div style={{ marginBottom: '30px' }}>
              <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Settings</h1>
              <p>Configure project preferences and portal variables.</p>
            </div>
            <div className="card" style={{ maxWidth: '600px' }}>
              <div className="form-group" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                <div>
                  <h4 style={{ margin: 0 }}>Portal Title</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem' }}>Change the brand title of this sandbox</p>
                </div>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '200px' }}
                  value={settings.siteName}
                  onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                />
              </div>

              <div className="form-group" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', padding: '16px 0' }}>
                <div>
                  <h4 style={{ margin: 0 }}>Push Notifications</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem' }}>Receive alert banners on CRUD tasks</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.notificationsEnabled}
                  onChange={(e) => setSettings({ ...settings, notificationsEnabled: e.target.checked })}
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
              </div>

              <div className="form-group" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px' }}>
                <div>
                  <h4 style={{ margin: 0 }}>Maintenance Override</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem' }}>Lock pages for external visitors</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.maintenanceMode}
                  onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })}
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        );

      case '/dashboard':
      default:
        return (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Stats section */}
            <div>
              <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Dashboard Overview</h1>
              <div className="grid grid-cols-3" style={{ gap: '20px' }}>
                <div className="card" style={styles.statCard}>
                  <div style={{ fontSize: '2rem' }}>🎓</div>
                  <div>
                    <h4 style={{ color: 'var(--text-secondary)' }}>Total Students</h4>
                    <h2 style={{ fontSize: '2rem' }}>{students.length}</h2>
                  </div>
                </div>
                <div className="card" style={styles.statCard}>
                  <div style={{ fontSize: '2rem' }}>📚</div>
                  <div>
                    <h4 style={{ color: 'var(--text-secondary)' }}>Courses Offered</h4>
                    <h2 style={{ fontSize: '2rem' }}>{coursesList.length}</h2>
                  </div>
                </div>
                <div className="card" style={styles.statCard}>
                  <div style={{ fontSize: '2rem' }}>🛡️</div>
                  <div>
                    <h4 style={{ color: 'var(--text-secondary)' }}>Admin Level</h4>
                    <h2 style={{ fontSize: '1.25rem', marginTop: '8px' }}>Superuser</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Management */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem' }}>Student Management</h2>
                  <p style={{ margin: 0 }}>Create, view, and delete records instantly.</p>
                </div>
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className={`btn ${showAddForm ? 'btn-secondary' : 'btn-primary'}`}
                >
                  {showAddForm ? 'Cancel' : '+ Add Student'}
                </button>
              </div>

              {showAddForm && (
                <div className="card animate-fade-in" style={{ marginBottom: '24px', maxWidth: '600px' }}>
                  <h3 style={{ marginBottom: '16px' }}>Add New Student Record</h3>
                  <form onSubmit={handleAddStudent}>
                    <div className="form-group">
                      <label className="form-label">Student Name</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="John Doe"
                        value={newStudent.name}
                        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        placeholder="john@example.com"
                        value={newStudent.email}
                        onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Course Pathway</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Software Engineering"
                        value={newStudent.course}
                        onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
                      />
                    </div>
                    <button type="submit" className="btn btn-success" style={{ width: '100%', marginTop: '10px' }}>
                      Register Student
                    </button>
                  </form>
                </div>
              )}

              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Course</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.length > 0 ? (
                      students.map((student) => (
                        <tr key={student.id}>
                          <td>{student.id}</td>
                          <td>
                            <Link to={`/student/${student.id}`} style={{ fontWeight: 600 }}>
                              {student.name}
                            </Link>
                          </td>
                          <td>{student.email}</td>
                          <td>{student.course}</td>
                          <td style={{ textAlign: 'right', display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                            <Link to={`/student/${student.id}`} className="btn btn-secondary btn-sm">
                              View Profile
                            </Link>
                            <button
                              onClick={() => handleDeleteStudent(student.id)}
                              className="btn btn-danger btn-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)' }}>
                          No registered student records available.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Course management */}
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Course Pathways</h2>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Course Name</th>
                      <th>Duration</th>
                      <th>Subscribers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesList.map((course, idx) => (
                      <tr key={idx}>
                        <td style={{ fontWeight: 700, color: 'var(--primary-color)' }}>{course.code}</td>
                        <td>{course.name}</td>
                        <td>{course.duration}</td>
                        <td>
                          <span className="badge badge-info">{course.students} students</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar navigation */}
      <aside className="sidebar">
        <div style={{ marginBottom: '20px', padding: '0 16px' }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>
            System Nav
          </span>
        </div>

        <Link to="/dashboard" className={`sidebar-link ${currentPath === '/dashboard' ? 'active' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="9" />
            <rect x="14" y="3" width="7" height="5" />
            <rect x="14" y="12" width="7" height="9" />
            <rect x="3" y="16" width="7" height="5" />
          </svg>
          Dashboard Overview
        </Link>

        <Link to="/profile" className={`sidebar-link ${currentPath === '/profile' ? 'active' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Admin Profile
        </Link>

        <Link to="/settings" className={`sidebar-link ${currentPath === '/settings' ? 'active' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
          Portal Settings
        </Link>

        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
          <button onClick={handleLogout} style={styles.logoutBtn} className="btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main panel body */}
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

const styles = {
  statCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid var(--border-color)',
  },
  infoLabel: {
    color: 'var(--text-secondary)',
    fontWeight: 600,
    fontSize: '0.95rem',
  },
  infoValue: {
    color: 'var(--text-primary)',
    fontWeight: 500,
    fontSize: '0.95rem',
  },
  logoutBtn: {
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(244, 63, 94, 0.08)',
    color: 'var(--danger-color)',
    border: '1px solid rgba(244, 63, 94, 0.15)',
    padding: '10px 16px',
    borderRadius: '8px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'var(--transition)',
  },
};

export default Dashboard;
