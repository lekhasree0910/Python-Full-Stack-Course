function EmployeeCard({ name, designation, salary, department, experience }) {
  return (
    <div className="card">
      <h3>Task 22 - Employee Card</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Designation:</strong> {designation}</p>
      <p><strong>Salary:</strong> ₹{salary}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Experience:</strong> {experience} years</p>
      {experience > 5 && <span className="badge senior">Senior Employee</span>}
    </div>
  );
}

export default EmployeeCard;
