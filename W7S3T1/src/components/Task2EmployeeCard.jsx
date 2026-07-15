function EmployeeCard({ name, designation, salary, department }) {
  return (
    <div className="card">
      <h3>Task 2 - Employee Card</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Designation:</strong> {designation}</p>
      <p><strong>Salary:</strong> ₹{salary}</p>
      <p><strong>Department:</strong> {department}</p>
    </div>
  );
}

export default EmployeeCard;
