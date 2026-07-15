function EmployeePromotionCard({ name, designation, department, experience, salary }) {
  return (
    <div className="card">
      <h3>Task 48 - Employee Promotion Card</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Designation:</strong> {designation}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Experience:</strong> {experience} years</p>
      <p><strong>Salary:</strong> ₹{salary.toLocaleString()}</p>
      {experience > 10 && <span className="badge promotion">Promotion Eligible</span>}
    </div>
  );
}

export default EmployeePromotionCard;
