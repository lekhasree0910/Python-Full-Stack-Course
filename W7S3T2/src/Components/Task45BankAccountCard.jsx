function BankAccountCard({ accountHolder, accountNumber, bankName, balance }) {
  return (
    <div className="card">
      <h3>Task 45 - Bank Account Card</h3>
      <p><strong>Account Holder:</strong> {accountHolder}</p>
      <p><strong>Account No:</strong> {accountNumber}</p>
      <p><strong>Bank:</strong> {bankName}</p>
      <p><strong>Balance:</strong> ₹{balance.toLocaleString()}</p>
      {balance < 1000 && <span className="badge warning">Minimum Balance Warning</span>}
    </div>
  );
}

export default BankAccountCard;
