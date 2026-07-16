import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    onLogin(true);
    navigate('/dashboard');
  };

  return (
    <div className="container animate-fade-in" style={styles.container}>
      <div className="card" style={styles.card}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Welcome Back</h2>
          <p>Login to access the Admin Student Dashboard</p>
        </div>

        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              required
              className="form-control"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label className="form-label">Password</label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.toggleBtn}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div style={styles.infoBox}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Demo Details:</span>
            <span style={{ fontSize: '0.85rem' }}>Any email/password will authorize entry.</span>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '12px' }}>
            Login Now
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 120px)',
    padding: '24px',
  },
  card: {
    maxWidth: '420px',
    width: '100%',
  },
  toggleBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--primary-color)',
    fontSize: '0.825rem',
    fontWeight: 600,
    cursor: 'pointer',
    padding: '0 4px',
  },
  infoBox: {
    backgroundColor: 'var(--bg-tertiary)',
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    marginBottom: '16px',
    color: 'var(--text-secondary)',
  },
};

export default Login;
