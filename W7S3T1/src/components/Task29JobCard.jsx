function JobCard({ title, company, location, salary, jobType }) {
  return (
    <div className="card">
      <h3>Task 29 - Job Card</h3>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Salary:</strong> ₹{salary}</p>
      {jobType === "remote" ? (
        <span className="badge remote">Remote</span>
      ) : (
        <span className="badge onsite">On-site</span>
      )}
    </div>
  );
}

export default JobCard;
