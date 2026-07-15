const CompanyInfo = ({ company }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#fff3cd',
      maxWidth: '400px'
    }}>
      <h3>🏢 Company Details</h3>
      <p><strong>Name:</strong> {company.name}</p>
      <p><strong>Industry:</strong> {company.industry}</p>
      <p><strong>Location:</strong> {company.location}</p>
      <p><strong>Employees:</strong> {company.employees}</p>
      <p><strong>Founded:</strong> {company.founded}</p>
      <p><strong>CEO:</strong> {company.ceo}</p>
    </div>
  );
};

export default CompanyInfo;