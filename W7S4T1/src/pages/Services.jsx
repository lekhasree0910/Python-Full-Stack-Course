
const Services = () => {
  const services = [
    {
      title: 'State Architecture',
      description: 'Learn useState with shopping carts, passwords, forms, and dynamic styles.',
      icon: '⚡',
    },
    {
      title: 'Lifecycle Effects',
      description: 'Master useEffect via components mounted logs, timers, clocks, and title changes.',
      icon: '⏰',
    },
    {
      title: 'Routing & Navigation',
      description: 'Deep dive into nested dashboards, protected logins, dynamic path params, and 404 targets.',
      icon: '🛣️',
    },
    {
      title: 'API Integrations',
      description: 'Query remote servers, perform lists rendering, dynamic pagination, and complete CRUD updates.',
      icon: '🌐',
    },
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '60px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
        <span className="badge badge-success" style={{ marginBottom: '16px' }}>Services</span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Comprehensive Feature Matrix</h1>
        <p style={{ fontSize: '1.1rem' }}>
          Explore our customized React teaching modules and build modern interactive single-page apps.
        </p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '30px' }}>
        {services.map((service, index) => (
          <div key={index} className="card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{
              fontSize: '2.5rem',
              backgroundColor: 'var(--bg-tertiary)',
              padding: '16px',
              borderRadius: '12px',
              lineHeight: 1,
            }}>
              {service.icon}
            </div>
            <div>
              <h3 style={{ marginBottom: '8px' }}>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
