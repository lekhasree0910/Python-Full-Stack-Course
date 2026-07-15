function CompanyCard({ company }) {
  return (
    <div className="card">
      <h3>Task 9 - Company Card (Object Prop)</h3>
      <p><strong>Name:</strong> {company.name}</p>
      <p><strong>Industry:</strong> {company.industry}</p>
      <p><strong>Location:</strong> {company.location}</p>
      <p><strong>Employees:</strong> {company.employees}</p>
      <p><strong>Founded:</strong> {company.founded}</p>
      <p><strong>Website:</strong> {company.website}</p>
    </div>
  );
}

export default CompanyCard;
