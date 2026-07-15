const EmployeeCardAdvanced = ({ name, designation, salary, department, experience }) => {
  const isSenior = experience > 5;
  
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: isSenior ? '#e3f2fd' : '#f0f8ff',
      position: 'relative'
    }}>
      {isSenior && (
        <span style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'linear-gradient(135deg, #4caf50, #2e7d32)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '15px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          👔 Senior Employee
        </span>
      )}
      <h3>{name}</h3>
      <p><strong>Designation:</strong> {designation}</p>
      <p><strong>Salary:</strong> ₹{salary}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Experience:</strong> {experience} years</p>
    </div>
  );
};

export default EmployeeCardAdvanced;