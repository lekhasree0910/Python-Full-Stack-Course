
const About = () => {
  return (
    <div className="container animate-fade-in" style={{ padding: '60px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
        <span className="badge badge-primary" style={{ marginBottom: '16px' }}>About Us</span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Learn React and Master Concepts</h1>
        <p style={{ fontSize: '1.1rem' }}>
          This playground compiles interactive coding exercises covering core hooks, router navigation, form bindings, and API fetching.
        </p>
      </div>

      <div className="grid grid-cols-3" style={{ gap: '24px' }}>
        <div className="card">
          <h3 style={{ marginBottom: '12px' }}>Interactive Demos</h3>
          <p>
            Test state mutations, lifecycle side effects, dynamic theme toggling, forms, and shopping carts with visual feedback.
          </p>
        </div>
        <div className="card">
          <h3 style={{ marginBottom: '12px' }}>Vibrant UI/UX</h3>
          <p>
            Experience dynamic animations, transitions, dark mode settings, and customized layout styling.
          </p>
        </div>
        <div className="card">
          <h3 style={{ marginBottom: '12px' }}>Complete CRUD</h3>
          <p>
            Inspect API calls, fetch database products, render real-time posts, and perform full CRUD mock actions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
