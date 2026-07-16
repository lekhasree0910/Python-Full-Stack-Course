import { useState } from 'react';

const UseStateTasks = () => {
  // Task 1: Counter Application State
  const [counter, setCounter] = useState(0);

  // Task 2: Student Form State
  const [studentForm, setStudentForm] = useState({ name: '', email: '', course: '' });
  const [submittedStudent, setSubmittedStudent] = useState(null);

  // Task 3: Local Toggle Theme State
  const [localDarkTheme, setLocalDarkTheme] = useState(false);

  // Task 4: Password Visibility State
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Task 5: Shopping Cart State
  const [cart, setCart] = useState([]);
  const products = [
    { id: 'laptop', name: 'Laptop', price: 999 },
    { id: 'mobile', name: 'Mobile Phone', price: 699 },
    { id: 'keyboard', name: 'Mechanical Keyboard', price: 129 },
  ];

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    setSubmittedStudent({ ...studentForm });
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }} className="animate-fade-in">
      <div>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>useState Hooks Playground</h2>
        <p>Interactive testing dashboard for state management tasks using standard React state hooks.</p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '30px' }}>
        
        {/* Task 1: Counter Application */}
        <div className="card" style={styles.taskCard}>
          <div style={styles.cardHeader}>
            <span className="badge badge-primary">Task 1</span>
            <h3 style={styles.cardTitle}>Counter Application</h3>
          </div>
          <div style={styles.counterBody}>
            <h1 style={styles.counterValue}>{counter}</h1>
            <div style={styles.btnGroup}>
              <button onClick={() => setCounter(counter - 1)} className="btn btn-danger btn-sm">- Decrement</button>
              <button onClick={() => setCounter(0)} className="btn btn-secondary btn-sm">Reset</button>
              <button onClick={() => setCounter(counter + 1)} className="btn btn-success btn-sm">+ Increment</button>
            </div>
          </div>
        </div>

        {/* Task 3: Toggle Theme (Local Card Theme) */}
        <div 
          className="card" 
          style={{ 
            ...styles.taskCard, 
            backgroundColor: localDarkTheme ? '#1e293b' : 'var(--bg-secondary)',
            color: localDarkTheme ? '#f8fafc' : 'var(--text-primary)',
            borderColor: localDarkTheme ? '#475569' : 'var(--border-color)',
            transition: 'var(--transition)'
          }}
        >
          <div style={styles.cardHeader}>
            <span className="badge badge-warning">Task 3</span>
            <h3 style={{ ...styles.cardTitle, color: localDarkTheme ? '#f8fafc' : 'var(--text-primary)' }}>Toggle Theme</h3>
          </div>
          <p style={{ color: localDarkTheme ? '#cbd5e1' : 'var(--text-secondary)', marginBottom: '24px' }}>
            Click the button to dynamically switch this card's styling between Light and Dark mode.
          </p>
          <button 
            onClick={() => setLocalDarkTheme(!localDarkTheme)} 
            className="btn btn-primary"
            style={{ alignSelf: 'flex-start' }}
          >
            {localDarkTheme ? '☀ Switch to Light' : '🌙 Switch to Dark'}
          </button>
        </div>

        {/* Task 4: Password Visibility */}
        <div className="card" style={styles.taskCard}>
          <div style={styles.cardHeader}>
            <span className="badge badge-danger">Task 4</span>
            <h3 style={styles.cardTitle}>Password Visibility</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Password Shield</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Enter passcode..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ paddingRight: '90px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.revealBtn}
                >
                  {showPassword ? 'Hide Key' : 'Reveal Key'}
                </button>
              </div>
            </div>
            {password && (
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Strength Meter: <span style={{ fontWeight: 700, color: password.length > 7 ? 'var(--success-color)' : 'var(--warning-color)' }}>
                  {password.length > 7 ? 'Secured' : 'Weak (min 8 chars)'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Task 5: Shopping Cart */}
        <div className="card" style={styles.taskCard}>
          <div style={styles.cardHeader}>
            <span className="badge badge-info">Task 5</span>
            <h3 style={styles.cardTitle}>Shopping Cart</h3>
          </div>
          
          <div style={styles.cartLayout}>
            {/* Products grid */}
            <div style={styles.productsGrid}>
              {products.map((p) => (
                <div key={p.id} style={styles.productRow}>
                  <div>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{p.name}</span>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>${p.price}</span>
                  </div>
                  <button onClick={() => addToCart(p)} className="btn btn-primary btn-sm" style={{ padding: '4px 8px' }}>
                    + Add
                  </button>
                </div>
              ))}
            </div>

            {/* Cart overview */}
            <div style={styles.cartConsole}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Cart Overview</span>
                <span className="badge badge-success">{cart.length} Items</span>
              </div>

              {cart.length > 0 ? (
                <>
                  <div style={styles.cartItemsScroll}>
                    {cart.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '4px 0' }}>
                        <span>• {item.name}</span>
                        <span>${item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '8px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                    <span>Total:</span>
                    <span>${cart.reduce((acc, curr) => acc + curr.price, 0)}</span>
                  </div>
                  <button onClick={clearCart} className="btn btn-secondary btn-sm" style={{ width: '100%', marginTop: '10px', padding: '4px' }}>
                    Empty Cart
                  </button>
                </>
              ) : (
                <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', padding: '16px 0' }}>
                  Your cart is empty.
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Task 2: Student Registration Form */}
      <div className="card" style={{ width: '100%' }}>
        <div style={styles.cardHeader}>
          <span className="badge badge-primary">Task 2</span>
          <h3 style={styles.cardTitle}>Student Registry Form</h3>
        </div>
        
        <div style={styles.formSplitGrid}>
          <form onSubmit={handleStudentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Student Name</label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="Saran Kumar"
                value={studentForm.name}
                onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
              />
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Email Address</label>
              <input
                type="email"
                required
                className="form-control"
                placeholder="saran@domain.com"
                value={studentForm.email}
                onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
              />
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Course Program</label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="React Software Engineering"
                value={studentForm.course}
                onChange={(e) => setStudentForm({ ...studentForm, course: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '8px' }}>
              Register & Save Details
            </button>
          </form>

          {/* Details Output display */}
          <div style={styles.formOutputConsole}>
            <h4 style={{ marginBottom: '12px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              Registered Output Console
            </h4>
            {submittedStudent ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <span style={styles.consoleLabel}>Full Name:</span>
                  <span style={styles.consoleVal}>{submittedStudent.name}</span>
                </div>
                <div>
                  <span style={styles.consoleLabel}>Email Address:</span>
                  <span style={styles.consoleVal}>{submittedStudent.email}</span>
                </div>
                <div>
                  <span style={styles.consoleLabel}>Course Pathway:</span>
                  <span style={styles.consoleVal}>{submittedStudent.course}</span>
                </div>
                <div style={{ marginTop: '8px', padding: '8px 12px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.08)', color: 'var(--success-color)', fontSize: '0.85rem', fontWeight: 600 }}>
                  ✓ Successfully saved to useState memory.
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                Submit the form on the left to capture and display state bindings.
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
  counterBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    gap: '16px',
  },
  counterValue: {
    fontSize: '3.5rem',
    fontWeight: 900,
    color: 'var(--primary-color)',
    lineHeight: 1,
  },
  btnGroup: {
    display: 'flex',
    gap: '8px',
  },
  revealBtn: {
    position: 'absolute',
    right: '12px',
    background: 'none',
    border: 'none',
    color: 'var(--primary-color)',
    fontSize: '0.8rem',
    fontWeight: 700,
    cursor: 'pointer',
  },
  cartLayout: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '16px',
    alignItems: 'stretch',
    flexGrow: 1,
  },
  productsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  productRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 12px',
    backgroundColor: 'var(--bg-tertiary)',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
  },
  cartConsole: {
    backgroundColor: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    borderRadius: '10px',
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
  },
  cartItemsScroll: {
    maxHeight: '80px',
    overflowY: 'auto',
    flexGrow: 1,
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

export default UseStateTasks;
