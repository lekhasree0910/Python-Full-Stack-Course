function JobHiringCard({ title, company, location, salary, vacancies }) {
  return (
    <div className="card">
      <h3>Task 49 - Job Hiring Card</h3>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Salary:</strong> ₹{salary.toLocaleString()}</p>
      <p><strong>Vacancies:</strong> {vacancies}</p>
      {vacancies > 0 ? (
        <span className="badge hiring">Actively Hiring</span>
      ) : (
        <span className="badge not-hiring">Not Hiring</span>
      )}
    </div>
  );
}

export default JobHiringCard;
