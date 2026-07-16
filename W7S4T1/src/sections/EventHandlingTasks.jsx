import { useState } from 'react';

const EventHandlingTasks = () => {
  // Task 1: Button Click State
  const [clickCount, setClickCount] = useState(0);
  const [clickedMessage, setClickedMessage] = useState('');

  const handleButtonClick = () => {
    setClickCount((prev) => prev + 1);
    setClickedMessage('Button Clicked!');
    setTimeout(() => setClickedMessage(''), 2000);
  };

  // Task 2: Input Field State
  const [username, setUsername] = useState('');

  // Task 3: Form Submission State
  const [formInputs, setFormInputs] = useState({ name: '', email: '' });
  const [submittedMessage, setSubmittedMessage] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Event Form Submitted:', formInputs);
    setSubmittedMessage({ ...formInputs });
    setTimeout(() => setSubmittedMessage(null), 5000);
  };

  // Task 4: Mouse Events State
  const [mouseAction, setMouseAction] = useState('Idle');
  const [mouseColor, setMouseColor] = useState('var(--bg-tertiary)');

  const handleMouseOver = () => {
    setMouseAction('Hovering (onMouseOver)');
    setMouseColor('var(--primary-glow)');
  };

  const handleMouseLeave = () => {
    setMouseAction('Left (onMouseLeave)');
    setMouseColor('var(--bg-tertiary)');
  };

  const handleMouseClick = () => {
    setMouseAction('Clicked (onClick)');
    setMouseColor('rgba(16, 185, 129, 0.15)');
  };

  // Task 5: Keyboard Events State
  const [lastKey, setLastKey] = useState('None');
  const [keyState, setKeyState] = useState('Idle');

  const handleKeyDown = (e) => {
    setLastKey(e.key);
    setKeyState('Down (onKeyDown)');
  };

  const handleKeyUp = () => {
    setKeyState('Up (onKeyUp)');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }} className="animate-fade-in">
      <div>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Event Handling Playground</h2>
        <p>Observe browser triggers, form interception, and key/mouse capture APIs.</p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '30px' }}>
        
        {/* Task 1: Button Click */}
        <div className="card" style={styles.taskCard}>
          <div style={styles.cardHeader}>
            <span className="badge badge-primary">Task 1</span>
            <h3 style={styles.cardTitle}>Button Click Trigger</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1, justifyContent: 'center' }}>
            <div>
              <button onClick={handleButtonClick} className="btn btn-primary">
                Click Me
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Click Count:</span>
              <span className="badge badge-info" style={{ fontSize: '0.9rem' }}>{clickCount} times</span>
            </div>
            {clickedMessage && (
              <span className="badge badge-success" style={{ alignSelf: 'flex-start', padding: '6px 12px' }}>
                {clickedMessage}
              </span>
            )}
          </div>
        </div>

        {/* Task 2: Input Field Welcome */}
        <div className="card" style={styles.taskCard}>
          <div style={styles.cardHeader}>
            <span className="badge badge-success">Task 2</span>
            <h3 style={styles.cardTitle}>Input Field Welcome</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1, justifyContent: 'center' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Type Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type Saran..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div style={styles.welcomeBox}>
              <h3 style={{ margin: 0, fontWeight: 700 }}>
                {username ? `Welcome ${username}` : 'Waiting for username input...'}
              </h3>
            </div>
          </div>
        </div>

        {/* Task 4: Mouse Events Pad */}
        <div className="card" style={styles.taskCard}>
          <div style={styles.cardHeader}>
            <span className="badge badge-warning">Task 4</span>
            <h3 style={styles.cardTitle}>Mouse Events Monitor</h3>
          </div>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Move, leave, or click the color pad below to trigger event hooks.
          </p>
          <div 
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={handleMouseClick}
            style={{ ...styles.mousePad, backgroundColor: mouseColor }}
          >
            Hover or Click inside this Area
          </div>
          <div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Last Action:</span>
            <span className="badge badge-primary" style={{ marginLeft: '8px', textTransform: 'none' }}>{mouseAction}</span>
          </div>
        </div>

        {/* Task 5: Keyboard Events Listener */}
        <div className="card" style={styles.taskCard}>
          <div style={styles.cardHeader}>
            <span className="badge badge-danger">Task 5</span>
            <h3 style={styles.cardTitle}>Keyboard Key Capturer</h3>
          </div>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Focus the text field and press any key to display key events.
          </p>
          <input
            type="text"
            className="form-control"
            placeholder="Click & type here to capture..."
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            style={{ fontFamily: 'monospace' }}
          />
          <div style={styles.keyDisplayGrid}>
            <div>
              <span style={styles.subLabel}>Key Pressed</span>
              <div style={styles.keyValue}>{lastKey === ' ' ? 'Spacebar' : lastKey}</div>
            </div>
            <div>
              <span style={styles.subLabel}>Event Callback</span>
              <div style={{ ...styles.keyValue, color: 'var(--primary-color)' }}>{keyState}</div>
            </div>
          </div>
        </div>

      </div>

      {/* Task 3: Form Submission */}
      <div className="card" style={{ width: '100%' }}>
        <div style={styles.cardHeader}>
          <span className="badge badge-info">Task 3</span>
          <h3 style={styles.cardTitle}>Form Submission Interception</h3>
        </div>
        
        <div style={styles.formSplitGrid}>
          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Submitting triggers `event.preventDefault()` to block page reloading.
            </p>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Name</label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="Saran"
                value={formInputs.name}
                onChange={(e) => setFormInputs({ ...formInputs, name: e.target.value })}
              />
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Email Address</label>
              <input
                type="email"
                required
                className="form-control"
                placeholder="saran@domain.com"
                value={formInputs.email}
                onChange={(e) => setFormInputs({ ...formInputs, email: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Form (Prevent Refresh)
            </button>
          </form>

          {/* Details Output display */}
          <div style={styles.formOutputConsole}>
            <h4 style={{ marginBottom: '12px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              Form Submitted Output
            </h4>
            {submittedMessage ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <span style={styles.consoleLabel}>Captured Name:</span>
                  <span style={styles.consoleVal}>{submittedMessage.name}</span>
                </div>
                <div>
                  <span style={styles.consoleLabel}>Captured Email:</span>
                  <span style={styles.consoleVal}>{submittedMessage.email}</span>
                </div>
                <div style={{ marginTop: '8px', padding: '8px 12px', borderRadius: '6px', background: 'rgba(99, 102, 241, 0.08)', color: 'var(--primary-color)', fontSize: '0.85rem', fontWeight: 600 }}>
                  ✓ Intercepted: refreshed blocked. Values printed to browser console log.
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                Submit the form on the left to capture and verify form events.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  taskCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '270px',
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
  welcomeBox: {
    backgroundColor: 'var(--bg-tertiary)',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    textAlign: 'center',
  },
  mousePad: {
    height: '100px',
    borderRadius: '10px',
    border: '2px dashed var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'var(--transition)',
    margin: '12px 0',
  },
  keyDisplayGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '12px',
    marginTop: '12px',
  },
  subLabel: {
    display: 'block',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  keyValue: {
    backgroundColor: 'var(--bg-tertiary)',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid var(--border-color)',
    fontSize: '0.9rem',
    fontWeight: 700,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  formSplitGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '30px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  formOutputConsole: {
    backgroundColor: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  consoleLabel: {
    display: 'block',
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  consoleVal: {
    fontSize: '1rem',
    fontWeight: 600,
    color: 'var(--text-primary)',
  },
};

export default EventHandlingTasks;
