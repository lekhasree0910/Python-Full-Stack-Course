import { useState, useEffect } from 'react';

const MiniProject = () => {
  // 1. Counter State
  const [count, setCount] = useState(0);

  // 2. Local Dark Mode Theme State
  const [isLocalDark, setIsLocalDark] = useState(true);

  // 3. Timer State
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }} className="animate-fade-in">
      <div>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Mini Project 1: Integrated Widget Hub</h2>
        <p>A unified interface combining a Counter system, localized Theme toggler, and active interval Timer.</p>
      </div>

      <div 
        className="card" 
        style={{ 
          ...styles.container, 
          backgroundColor: isLocalDark ? '#0f172a' : '#ffffff',
          color: isLocalDark ? '#f8fafc' : '#0f172a',
          borderColor: isLocalDark ? '#334155' : '#e2e8f0',
        }}
      >
        {/* Header with Theme Toggle */}
        <div style={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.5rem' }}>🎛️</span>
            <div>
              <h3 style={{ margin: 0, color: isLocalDark ? '#f8fafc' : '#0f172a' }}>Widget Control Console</h3>
              <p style={{ margin: 0, fontSize: '0.8rem', color: isLocalDark ? '#94a3b8' : '#64748b' }}>
                Mode: {isLocalDark ? 'Dark Theme Active' : 'Light Theme Active'}
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsLocalDark(!isLocalDark)} 
            style={{
              ...styles.themeToggleBtn,
              backgroundColor: isLocalDark ? '#334155' : '#f1f5f9',
              color: isLocalDark ? '#fbbf24' : '#475569',
            }}
          >
            {isLocalDark ? (
              <>
                <span style={{ fontSize: '1rem' }}>☀️</span> Light Mode
              </>
            ) : (
              <>
                <span style={{ fontSize: '1rem' }}>🌙</span> Dark Mode
              </>
            )}
          </button>
        </div>

        {/* Console Grid */}
        <div style={styles.grid}>
          {/* Counter App Module */}
          <div style={{ ...styles.module, border: `1px solid ${isLocalDark ? '#334155' : '#e2e8f0'}` }}>
            <div style={styles.moduleHeader}>
              <span style={styles.moduleBadge}>Module A</span>
              <h4 style={{ margin: 0, color: isLocalDark ? '#f8fafc' : '#0f172a' }}>Counter Application</h4>
            </div>
            
            <div style={styles.counterWrapper}>
              <div style={{
                ...styles.counterBubble,
                backgroundColor: isLocalDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.08)',
              }}>
                <h1 style={{ ...styles.counterNum, color: isLocalDark ? '#818cf8' : '#4f46e5' }}>{count}</h1>
              </div>
              <div style={styles.btnRow}>
                <button onClick={() => setCount(count - 1)} style={styles.controlBtn}>-</button>
                <button onClick={() => setCount(0)} style={styles.resetBtn}>Reset</button>
                <button onClick={() => setCount(count + 1)} style={styles.controlBtn}>+</button>
              </div>
            </div>
          </div>

          {/* Active Timer Module */}
          <div style={{ ...styles.module, border: `1px solid ${isLocalDark ? '#334155' : '#e2e8f0'}` }}>
            <div style={styles.moduleHeader}>
              <span style={styles.moduleBadge}>Module B</span>
              <h4 style={{ margin: 0, color: isLocalDark ? '#f8fafc' : '#0f172a' }}>Interval Timer</h4>
            </div>

            <div style={styles.timerWrapper}>
              <div style={{
                ...styles.timerBubble,
                backgroundColor: isLocalDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.08)',
              }}>
                <h1 style={{ ...styles.timerNum, color: isLocalDark ? '#34d399' : '#10b981' }}>
                  {String(Math.floor(seconds / 60)).padStart(2, '0')}:
                  {String(seconds % 60).padStart(2, '0')}
                </h1>
              </div>
              
              <div style={styles.btnRow}>
                <button 
                  onClick={() => setIsTimerRunning(!isTimerRunning)} 
                  style={{
                    ...styles.controlBtn,
                    backgroundColor: isTimerRunning ? '#ef4444' : '#10b981',
                    color: 'white',
                    width: '70px'
                  }}
                >
                  {isTimerRunning ? 'Pause' : 'Start'}
                </button>
                <button 
                  onClick={() => {
                    setIsTimerRunning(false);
                    setSeconds(0);
                  }} 
                  style={styles.resetBtn}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    borderRadius: '20px',
    boxShadow: 'var(--shadow-lg)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    textAlign: 'left',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '20px',
    marginBottom: '24px',
  },
  themeToggleBtn: {
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: 600,
    fontSize: '0.85rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'all 0.2s ease',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  module: {
    borderRadius: '14px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  moduleHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  moduleBadge: {
    fontSize: '0.65rem',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '2px 8px',
    borderRadius: '4px',
    backgroundColor: 'var(--primary-glow)',
    color: 'var(--primary-color)',
  },
  counterWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  counterBubble: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterNum: {
    fontSize: '2.5rem',
    fontWeight: 800,
    margin: 0,
  },
  timerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  timerBubble: {
    width: '130px',
    height: '80px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerNum: {
    fontSize: '2.25rem',
    fontWeight: 800,
    fontFamily: 'monospace',
    margin: 0,
  },
  btnRow: {
    display: 'flex',
    gap: '8px',
  },
  controlBtn: {
    border: 'none',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    width: '40px',
    height: '36px',
    borderRadius: '8px',
    fontWeight: 700,
    fontSize: '1.2rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
  },
  resetBtn: {
    border: '1px solid var(--border-color)',
    backgroundColor: 'transparent',
    color: 'inherit',
    padding: '0 16px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '0.85rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
};

export default MiniProject;
