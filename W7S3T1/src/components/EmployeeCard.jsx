const EmployeeCard = ({ name, designation, salary, department }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: '#f0f8ff',
      minWidth: '200px'
    }}>
      <h3>Employee Card</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Designation:</strong> {designation}</p>
      <p><strong>Salary:</strong> ₹{salary}</p>
      <p><strong>Department:</strong> {department}</p>
    </div>
  );
};

export default EmployeeCard;