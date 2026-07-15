function MedicineCard({ name, manufacturer, price, requiresPrescription }) {
  return (
    <div className="card">
      <h3>Task 37 - Medicine Card</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Manufacturer:</strong> {manufacturer}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      {requiresPrescription && <span className="badge prescription">Prescription Required</span>}
    </div>
  );
}

export default MedicineCard;
