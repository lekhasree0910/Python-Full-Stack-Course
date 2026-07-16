import { useState } from "react";

function HospitalManagement() {
  const [page, setPage] = useState("patients");

  const [patients] = useState([
    { id: 1, name: "Rahul", age: 35, disease: "Fever" },
    { id: 2, name: "Priya", age: 28, disease: "Headache" },
    { id: 3, name: "Anil", age: 45, disease: "Diabetes" },
  ]);

  const [doctors] = useState([
    { id: 1, name: "Dr. Sharma", specialty: "General", available: true },
    { id: 2, name: "Dr. Patel", specialty: "Cardiologist", available: false },
    { id: 3, name: "Dr. Singh", specialty: "Orthopedic", available: true },
  ]);

  const [appointments] = useState([
    { id: 1, patient: "Rahul", doctor: "Dr. Sharma", time: "10:00 AM" },
    { id: 2, patient: "Priya", doctor: "Dr. Patel", time: "11:30 AM" },
  ]);

  const [bills] = useState([
    { id: 1, patient: "Rahul", amount: 2500, status: "Paid" },
    { id: 2, patient: "Priya", amount: 1800, status: "Pending" },
  ]);

  return (
    <div className="card">
      <h2>Navigation Task 3: Hospital Management</h2>
      <nav className="nav-tabs">
        <button className={page === "patients" ? "active" : ""} onClick={() => setPage("patients")}>Patients</button>
        <button className={page === "doctors" ? "active" : ""} onClick={() => setPage("doctors")}>Doctors</button>
        <button className={page === "appointments" ? "active" : ""} onClick={() => setPage("appointments")}>Appointments</button>
        <button className={page === "billing" ? "active" : ""} onClick={() => setPage("billing")}>Billing</button>
      </nav>

      {page === "patients" && (
        <div className="page-content">
          <h3>Patients</h3>
          {patients.map((p) => (
            <div key={p.id} className="list-item">
              <p><strong>{p.name}</strong> - Age: {p.age} - {p.disease}</p>
            </div>
          ))}
        </div>
      )}

      {page === "doctors" && (
        <div className="page-content">
          <h3>Doctors</h3>
          {doctors.map((d) => (
            <div key={d.id} className="list-item">
              <p><strong>{d.name}</strong> - {d.specialty}</p>
              <span className={`badge ${d.available ? "available" : "unavailable"}`}>
                {d.available ? "Available" : "Unavailable"}
              </span>
            </div>
          ))}
        </div>
      )}

      {page === "appointments" && (
        <div className="page-content">
          <h3>Appointments</h3>
          {appointments.map((a) => (
            <div key={a.id} className="list-item">
              <p>Patient: {a.patient} | Doctor: {a.doctor} | Time: {a.time}</p>
            </div>
          ))}
        </div>
      )}

      {page === "billing" && (
        <div className="page-content">
          <h3>Billing</h3>
          {bills.map((b) => (
            <div key={b.id} className="list-item">
              <p>Patient: {b.patient} | Amount: ₹{b.amount}</p>
              <span className={`badge ${b.status === "Paid" ? "paid" : "pending"}`}>{b.status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HospitalManagement;
