import { useState } from "react";

function EmployeeForm() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [employees, setEmployees] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && department && salary) {
      setEmployees([...employees, { name, department, salary }]);
      setName("");
      setDepartment("");
      setSalary("");
    }
  };

  return (
    <div className="card">
      <h2>UseState Task 2: Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter salary"
          />
        </div>
        <button type="submit" className="btn">Add Employee</button>
      </form>
      <div className="employee-list">
        {employees.map((emp, index) => (
          <div key={index} className="employee-card">
            <p><strong>Name:</strong> {emp.name}</p>
            <p><strong>Department:</strong> {emp.department}</p>
            <p><strong>Salary:</strong> ₹{Number(emp.salary).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeForm;
