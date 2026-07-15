function EmployeeDirectory({ employees }) {
  return (
    <div className="card">
      <h3>Task 65 - Employee Directory</h3>
      <div className="employee-grid">
        {employees.map((emp, index) => (
          <div key={index} className="employee-item">
            <p><strong>{emp.name}</strong></p>
            <p>{emp.designation}</p>
            <p>{emp.department}</p>
            {emp.isActive ? (
              <span className="badge active">Active</span>
            ) : (
              <span className="badge inactive">Inactive</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeDirectory;
