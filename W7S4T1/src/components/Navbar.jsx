import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isDark, toggleTheme, isLoggedIn, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-color)' }}>
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          <span style={styles.logoText}>React<span style={{ color: 'var(--primary-color)' }}>Hub</span></span>
        </Link>

        {/* Mobile Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} style={styles.mobileBtn}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? <line x1="18" y1="6" x2="6" y2="18" /> : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Links Menu */}
        <div className={isOpen ? 'active-menu' : ''} style={{ ...styles.linksContainer, ...(isOpen ? styles.linksContainerActive : {}) }}>
          <NavLink to="/" end style={({ isActive }) => isActive ? { ...styles.link, ...styles.linkActive } : styles.link} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/services" style={({ isActive }) => isActive ? { ...styles.link, ...styles.linkActive } : styles.link} onClick={() => setIsOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/about" style={({ isActive }) => isActive ? { ...styles.link, ...styles.linkActive } : styles.link} onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" style={({ isActive }) => isActive ? { ...styles.link, ...styles.linkActive } : styles.link} onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>

          <span style={styles.divider}></span>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} style={styles.themeToggle} title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            {isDark ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fbbf24' }}>
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#475569' }}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Auth Button */}
          {isLoggedIn ? (
            <div style={styles.authContainer}>
              <Link to="/dashboard" style={styles.dashboardBtn} onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
              <button onClick={handleLogoutClick} style={styles.logoutBtn}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" style={styles.loginBtn} onClick={() => setIsOpen(false)}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    height: '70px',
    backgroundColor: 'var(--bg-secondary)',
    borderBottom: '1px solid var(--border-color)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    color: 'var(--text-primary)',
    fontWeight: 800,
    fontSize: '1.25rem',
  },
  logoText: {
    letterSpacing: '-0.03em',
  },
  mobileBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    padding: '6px',
    borderRadius: '4px',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
  linksContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  link: {
    color: 'var(--text-secondary)',
    fontWeight: 600,
    fontSize: '0.92rem',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    padding: '6px 12px',
    borderRadius: '6px',
  },
  linkActive: {
    color: 'var(--primary-color)',
    backgroundColor: 'var(--primary-glow)',
  },
  divider: {
    width: '1px',
    height: '24px',
    backgroundColor: 'var(--border-color)',
  },
  themeToggle: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '6px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s ease',
  },
  authContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  loginBtn: {
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '0.9rem',
    textDecoration: 'none',
    transition: 'var(--transition)',
  },
  dashboardBtn: {
    backgroundColor: 'var(--bg-tertiary)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-color)',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '0.9rem',
    textDecoration: 'none',
    transition: 'var(--transition)',
  },
  logoutBtn: {
    backgroundColor: 'rgba(244, 63, 94, 0.1)',
    color: 'var(--danger-color)',
    border: '1px solid rgba(244, 63, 94, 0.2)',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'var(--transition)',
  },
};

// Add raw CSS styling to handle responsive styles since inline style queries aren't natively supported
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (max-width: 768px) {
      nav button {
        display: block !important;
      }
      nav > div > div:last-child {
        display: none !important;
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        background-color: var(--bg-secondary);
        border-bottom: 1px solid var(--border-color);
        flex-direction: column;
        align-items: stretch !important;
        padding: 24px;
        gap: 16px !important;
        box-shadow: var(--shadow-lg);
        animation: fadeIn 0.2s ease-out;
      }
      nav > div > div:last-child.active-menu {
        display: flex !important;
      }
      nav span {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}

export default Navbar;
