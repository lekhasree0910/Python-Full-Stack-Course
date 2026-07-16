import { useState } from "react";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = (e) => {
    e.preventDefault();
    if (name && amount) {
      setExpenses([...expenses, { name, amount: Number(amount) }]);
      setName("");
      setAmount("");
    }
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="card">
      <h2>UseState Task 5: Expense Tracker</h2>
      <form onSubmit={addExpense}>
        <div className="form-group">
          <label>Expense Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Groceries"
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <button type="submit" className="btn">Add Expense</button>
      </form>
      <div className="expense-summary">
        <div className="summary-card">
          <p>Total Expenses</p>
          <p className="summary-value">₹{totalExpenses.toLocaleString()}</p>
        </div>
        <div className="summary-card">
          <p>Transactions</p>
          <p className="summary-value">{expenses.length}</p>
        </div>
      </div>
      <div className="expense-list">
        {expenses.map((exp, index) => (
          <div key={index} className="expense-item">
            <span>{exp.name}</span>
            <span>₹{exp.amount.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseTracker;
