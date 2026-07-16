import { useState } from "react";

function BankingApplication() {
  const [page, setPage] = useState("dashboard");
  const [balance, setBalance] = useState(10000);
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (type, amt) => {
    setTransactions([{ type, amount: amt, date: new Date().toLocaleString() }, ...transactions]);
  };

  const handleDeposit = () => {
    const a = Number(amount);
    if (a > 0) {
      setBalance(balance + a);
      addTransaction("Deposit", a);
      setAmount("");
    }
  };

  const handleWithdraw = () => {
    const a = Number(amount);
    if (a > 0 && a <= balance) {
      setBalance(balance - a);
      addTransaction("Withdrawal", a);
      setAmount("");
    }
  };

  return (
    <div className="card">
      <h2>Navigation Task 2: Banking Application</h2>
      <nav className="nav-tabs">
        <button className={page === "dashboard" ? "active" : ""} onClick={() => setPage("dashboard")}>Dashboard</button>
        <button className={page === "deposit" ? "active" : ""} onClick={() => setPage("deposit")}>Deposit</button>
        <button className={page === "withdraw" ? "active" : ""} onClick={() => setPage("withdraw")}>Withdraw</button>
        <button className={page === "transactions" ? "active" : ""} onClick={() => setPage("transactions")}>Transactions</button>
      </nav>

      {page === "dashboard" && (
        <div className="banking-content">
          <h3>Dashboard</h3>
          <p className="balance">Balance: ₹{balance.toLocaleString()}</p>
          <p>Total Transactions: {transactions.length}</p>
        </div>
      )}

      {page === "deposit" && (
        <div className="banking-content">
          <h3>Deposit</h3>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
          <button className="btn" onClick={handleDeposit}>Deposit</button>
        </div>
      )}

      {page === "withdraw" && (
        <div className="banking-content">
          <h3>Withdraw</h3>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
          <button className="btn btn-danger" onClick={handleWithdraw}>Withdraw</button>
        </div>
      )}

      {page === "transactions" && (
        <div className="banking-content">
          <h3>Transactions</h3>
          {transactions.length === 0 ? <p>No transactions yet.</p> : transactions.map((t, i) => (
            <div key={i} className={`transaction ${t.type.toLowerCase()}`}>
              <span>{t.type}: ₹{t.amount}</span>
              <span>{t.date}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BankingApplication;
