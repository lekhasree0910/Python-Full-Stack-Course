import { useState, useEffect } from 'react';

const UseEffectTasks = () => {
  // Task 1: Component Loaded Logs
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()}: Component Loaded (useEffect Triggered!)`]);
    }, 0);
    return () => clearTimeout(timerId);
  }, []);

  // Task 2: Timer Application State
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    if (!timerActive) return;
    if (timer >= 10) {
      const timerId = setTimeout(() => setTimerActive(false), 0);
      return () => clearTimeout(timerId);
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, timerActive]);

  // Task 3: Digital Clock State
  const [clockTime, setClockTime] = useState(new Date());

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setClockTime(new Date());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  // Task 4: API Fetch on Load State
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.slice(0, 5)); // display first 5 users
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Task 5: Title Changer State
  const [titleCount, setTitleCount] = useState(0);

  useEffect(() => {
    document.title = `Count : ${titleCount}`;
  }, [titleCount]);

  // Reset clock clean up when component unmounts to restore previous title
  useEffect(() => {
    return () => {
      document.title = 'React Learning Hub';
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }} className="animate-fade-in">
      <div>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>useEffect Hooks Playground</h2>
        <p>Explore component mounting, intervals, event loop cleanups, and title mutations.</p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '30px' }}>
        
        {/* Task 1: Component Loaded Log */}
        <div className="card" style={styles.taskCard}>
          <div style={styles.cardHeader}>
            <span className="badge badge-primary">Task 1</span>
            <h3 style={styles.cardTitle}>Component Loaded Logger</h3>
          </div>
          <div style={styles.consoleContainer}>
            <div style={styles.consoleHeader}>
              <div style={styles.dotRed}></div>
              <div style={styles.dotYellow}></div>
              <div style={styles.dotGreen}></div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '12px', fontWeight: 600 }}>Console Log Output</span>
            </div>
            <div style={styles.consoleBody}>
              {logs.map((log, idx) => (
                <div key={idx} style={{ color: 'var(--success-color)', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                  &gt; {log}
                </div>
              ))}
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '10px' }}>
                * Mount hook completes and prints to console.
              </div>
            </div>
          </div>
        </div>

        {/* Task 2: Timer Application */}
        <div className="card" style={styles.taskCard}>
          <div style={styles.cardHeader}>
            <span className="badge badge-success">Task 2</span>
            <h3 style={styles.cardTitle}>Auto Timer (0 to 10)</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1, gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: 0, color: 'var(--primary-color)' }}>{timer}</h1>
              <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>seconds</span>
            </div>

            {timer >= 10 && (
              <span className="badge badge-danger" style={{ animation: 'pulse-glow 2s infinite' }}>
                Stopped at 10
              </span>
            )}

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => {
                  setTimer(0);
                  setTimerActive(true);
                }}
                className="btn btn-secondary btn-sm"
              >
                Reset Timer
              </button>
              {timer < 10 && (
                <button
                  onClick={() => setTimerActive(!timerActive)}
                  className={`btn btn-sm ${timerActive ? 'btn-danger' : 'btn-success'}`}
                >
                  {timerActive ? 'Pause' : 'Resume'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Task 3: Digital Clock */}
        <div className="card" style={styles.taskCard}>
          <div style={styles.cardHeader}>
            <span className="badge badge-warning">Task 3</span>
            <h3 style={styles.cardTitle}>Digital Clock</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
            <div style={styles.clockBody}>
              <div style={styles.clockDigitContainer}>
                <span style={styles.clockDigit}>{String(clockTime.getHours()).padStart(2, '0')}</span>
                <span style={styles.clockLabel}>Hours</span>
              </div>
              <span style={styles.clockColon}>:</span>
              <div style={styles.clockDigitContainer}>
                <span style={styles.clockDigit}>{String(clockTime.getMinutes()).padStart(2, '0')}</span>
                <span style={styles.clockLabel}>Min</span>
              </div>
              <span style={styles.clockColon}>:</span>
              <div style={styles.clockDigitContainer}>
                <span style={{ ...styles.clockDigit, color: 'var(--primary-color)' }}>
                  {String(clockTime.getSeconds()).padStart(2, '0')}
                </span>
                <span style={styles.clockLabel}>Sec</span>
              </div>
            </div>
          </div>
        </div>

        {/* Task 5: Title Changer */}
        <div className="card" style={styles.taskCard}>
          <div style={styles.cardHeader}>
            <span className="badge badge-danger">Task 5</span>
            <h3 style={styles.cardTitle}>Tab Title Changer</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1, justifyContent: 'center' }}>
            <p style={{ margin: 0, fontSize: '0.925rem' }}>
              Observe the browser tab text: <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--primary-color)' }}>Count : {titleCount}</span>
            </p>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button onClick={() => setTitleCount(titleCount + 1)} className="btn btn-primary btn-sm">
                + Increment Title
              </button>
              <button onClick={() => setTitleCount(0)} className="btn btn-secondary btn-sm">
                Reset Title
              </button>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
              * Triggering state change prompts a title update in useEffect.
            </p>
          </div>
        </div>

      </div>

      {/* Task 4: API Fetch on Load */}
      <div className="card" style={{ width: '100%' }}>
        <div style={styles.cardHeader}>
          <span className="badge badge-info">Task 4</span>
          <h3 style={styles.cardTitle}>API Fetch on Load (Users)</h3>
        </div>
        <p style={{ marginBottom: '20px' }}>This component queries user records on mount using fetch.</p>

        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px' }}>
            <div className="spinner"></div>
            <p style={{ marginTop: '12px', fontSize: '0.9rem' }}>Downloading directory...</p>
          </div>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Full Name</th>
                  <th>Email Address</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td style={{ fontWeight: 600 }}>{u.id}</td>
                    <td style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{u.name}</td>
                    <td>{u.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  taskCard: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '260px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '16px',
  },
  cardTitle: {
    fontSize: '1.15rem',
    margin: 0,
  },
  consoleContainer: {
    backgroundColor: '#0f172a',
    borderRadius: '10px',
    border: '1px solid #1e293b',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  consoleHeader: {
    backgroundColor: '#1e293b',
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'center',
  },
  dotRed: { width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444', marginRight: '6px' },
  dotYellow: { width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b', marginRight: '6px' },
  dotGreen: { width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' },
  consoleBody: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flexGrow: 1,
    textAlign: 'left',
  },
  clockBody: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: 'var(--bg-tertiary)',
    padding: '16px 24px',
    borderRadius: '16px',
    border: '1px solid var(--border-color)',
  },
  clockDigitContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  clockDigit: {
    fontSize: '2.5rem',
    fontWeight: 800,
    fontFamily: 'monospace',
    lineHeight: 1,
  },
  clockLabel: {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontWeight: 700,
    marginTop: '4px',
  },
  clockColon: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1,
    paddingBottom: '20px',
  },
};

export default UseEffectTasks;
