import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="animate-fade-in" style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconContainer}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--danger-color)' }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h1 style={styles.title}>404</h1>
        <h2 style={styles.subtitle}>Page Not Found</h2>
        <p style={styles.text}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary" style={styles.button}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Home
        </Link>
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
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-lg)',
    padding: '48px 32px',
    maxWidth: '480px',
    width: '100%',
    boxShadow: 'var(--shadow-lg)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'rgba(244, 63, 94, 0.1)',
    borderRadius: '50%',
    padding: '20px',
    marginBottom: '24px',
  },
  title: {
    fontSize: '6rem',
    fontWeight: 900,
    lineHeight: 1,
    color: 'var(--danger-color)',
    letterSpacing: '-0.05em',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '1.75rem',
    fontWeight: 700,
    marginBottom: '16px',
    color: 'var(--text-primary)',
  },
  text: {
    color: 'var(--text-secondary)',
    fontSize: '0.975rem',
    lineHeight: 1.6,
    marginBottom: '32px',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  },
};

export default NotFound;
