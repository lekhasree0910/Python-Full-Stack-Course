function TeacherCard({ name, subject, experience, qualification, designation }) {
  return (
    <div className="card">
      <h3>Task 44 - Teacher Card</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Subject:</strong> {subject}</p>
      <p><strong>Experience:</strong> {experience} years</p>
      <p><strong>Qualification:</strong> {qualification}</p>
      <p><strong>Designation:</strong> {designation}</p>
      {designation === "Head of Department" && <span className="badge hod">HOD</span>}
    </div>
  );
}

export default TeacherCard;
