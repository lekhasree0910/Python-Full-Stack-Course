import { useState } from 'react';
import { Link } from 'react-router-dom';
import UseStateTasks from '../sections/UseStateTasks';
import UseEffectTasks from '../sections/UseEffectTasks';
import EventHandlingTasks from '../sections/EventHandlingTasks';
import FetchApiTasks from '../sections/FetchApiTasks';
import MiniProject from '../sections/MiniProject';

const Home = () => {
  const [activeSection, setActiveSection] = useState('usestate');

  const renderSection = () => {
    switch (activeSection) {
      case 'useeffect':
        return <UseEffectTasks />;
      case 'events':
        return <EventHandlingTasks />;
      case 'fetchapi':
        return <FetchApiTasks />;
      case 'miniproject':
        return <MiniProject />;
      case 'usestate':
      default:
        return <UseStateTasks />;
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      
      {/* Banner Jumbotron */}
      <header style={styles.header}>
        <div style={styles.badgeContainer}>
          <span className="badge badge-primary">Vite + React 19 Sandbox</span>
        </div>
        <h1 style={styles.title}>
          React Interactive <span style={{ color: 'var(--primary-color)' }}>Concept Hub</span>
        </h1>
        <p style={styles.description}>
          An enterprise-grade training ground compiling all learning objectives for React state, hooks, lifecycle effects, navigation portals, and HTTP API bindings.
        </p>

        <div style={styles.ctaContainer}>
          <Link to="/login" className="btn btn-primary">
            🔐 Portal Login
          </Link>
          <Link to="/dashboard" className="btn btn-secondary">
            📊 View Dashboard
          </Link>
        </div>
      </header>

      {/* Navigation Quicklinks */}
      <section style={{ marginBottom: '40px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>🎯 Routing & Parameter Quicklinks</h3>
        <div className="grid grid-cols-4" style={{ gap: '16px' }}>
          
          <div className="card" style={{ padding: '16px' }}>
            <span className="badge badge-primary" style={{ marginBottom: '8px' }}>Task 4.4</span>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '8px' }}>Student Profile 1</h4>
            <Link to="/student/1" className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
              View Student #1
            </Link>
          </div>

          <div className="card" style={{ padding: '16px' }}>
            <span className="badge badge-primary" style={{ marginBottom: '8px' }}>Task 4.4</span>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '8px' }}>Student Profile 2</h4>
            <Link to="/student/2" className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
              View Student #2
            </Link>
          </div>

          <div className="card" style={{ padding: '16px' }}>
            <span className="badge badge-success" style={{ marginBottom: '8px' }}>Task 5.4</span>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '8px' }}>Product Catalog</h4>
            <button 
              onClick={() => setActiveSection('fetchapi')} 
              className="btn btn-primary btn-sm" 
              style={{ width: '100%' }}
            >
              Go to Catalog
            </button>
          </div>

          <div className="card" style={{ padding: '16px' }}>
            <span className="badge badge-danger" style={{ marginBottom: '8px' }}>Task 4.5</span>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '8px' }}>Invalid Page Testing</h4>
            <Link to="/this-route-does-not-exist" className="btn btn-danger btn-sm" style={{ width: '100%' }}>
              Test 404 Route
            </Link>
          </div>

        </div>
      </section>

      {/* Section Dashboard Tabs */}
      <section style={styles.playgroundArea}>
        <div style={styles.sidebarTabs}>
          <button 
            onClick={() => setActiveSection('usestate')} 
            style={{ ...styles.sidebarBtn, ...(activeSection === 'usestate' ? styles.sidebarBtnActive : {}) }}
          >
            <span style={{ fontSize: '1.25rem' }}>⚡</span>
            <span>useState Playground</span>
          </button>

          <button 
            onClick={() => setActiveSection('useeffect')} 
            style={{ ...styles.sidebarBtn, ...(activeSection === 'useeffect' ? styles.sidebarBtnActive : {}) }}
          >
            <span style={{ fontSize: '1.25rem' }}>⏰</span>
            <span>useEffect Playground</span>
          </button>

          <button 
            onClick={() => setActiveSection('events')} 
            style={{ ...styles.sidebarBtn, ...(activeSection === 'events' ? styles.sidebarBtnActive : {}) }}
          >
            <span style={{ fontSize: '1.25rem' }}>🖱️</span>
            <span>Event Handlers</span>
          </button>

          <button 
            onClick={() => setActiveSection('fetchapi')} 
            style={{ ...styles.sidebarBtn, ...(activeSection === 'fetchapi' ? styles.sidebarBtnActive : {}) }}
          >
            <span style={{ fontSize: '1.25rem' }}>🌐</span>
            <span>Fetch REST API</span>
          </button>

          <button 
            onClick={() => setActiveSection('miniproject')} 
            style={{ ...styles.sidebarBtn, ...(activeSection === 'miniproject' ? styles.sidebarBtnActive : {}) }}
          >
            <span style={{ fontSize: '1.25rem' }}>🎛️</span>
            <span>Mini Project Hub</span>
          </button>
        </div>

        {/* Sandbox Board Container */}
        <div style={styles.playgroundDisplay}>
          {renderSection()}
        </div>
      </section>

    </div>
  );
};

const styles = {
  header: {
    textAlign: 'center',
    padding: '60px 0 40px 0',
    maxWidth: '800px',
    margin: '0 auto',
  },
  badgeContainer: {
    marginBottom: '16px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 800,
    marginBottom: '16px',
    letterSpacing: '-0.03em',
    lineHeight: 1.2,
  },
  description: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    marginBottom: '32px',
    lineHeight: 1.6,
  },
  ctaContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  },
  playgroundArea: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    gap: '40px',
    marginTop: '20px',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
  sidebarTabs: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  sidebarBtn: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    padding: '16px 20px',
    borderRadius: '12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    textAlign: 'left',
    color: 'var(--text-secondary)',
    fontWeight: 600,
    fontSize: '0.95rem',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition)',
  },
  sidebarBtnActive: {
    borderColor: 'var(--primary-color)',
    color: 'var(--primary-color)',
    backgroundColor: 'var(--primary-glow)',
    boxShadow: 'var(--shadow-md)',
  },
  playgroundDisplay: {
    minWidth: 0,
  },
};

export default Home;
