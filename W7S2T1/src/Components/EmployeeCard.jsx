function EmployeeCard(props) {
  return (
    <div className="card">

      <h3>{props.name}</h3>

      <p>Designation : {props.designation}</p>

      <p>Salary : ₹{props.salary}</p>

      <p>Department : {props.department}</p>

    </div>
  );
}

export default EmployeeCard;