const JobCard = ({ title, company, location, jobType, salary }) => {
  const isRemote = jobType.toLowerCase() === 'remote';
  
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: isRemote ? '#e8f5e9' : '#fff3e0',
      position: 'relative'
    }}>
      <span style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: isRemote ? '#28a745' : '#ff9800',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '15px',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        {isRemote ? '🏠 Remote' : '🏢 On-site'}
      </span>
      <h3>{title}</h3>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Type:</strong> {jobType}</p>
      <p style={{ color: '#28a745', fontWeight: 'bold' }}>₹{salary}</p>
    </div>
  );
};

export default JobCard;