import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("");

  const calculate = (op) => {
    const a = Number(num1);
    const b = Number(num2);
    setOperation(op);
    switch (op) {
      case "+": setResult(a + b); break;
      case "-": setResult(a - b); break;
      case "*": setResult(a * b); break;
      case "/": setResult(b !== 0 ? a / b : "Error"); break;
      default: setResult(null);
    }
  };

  return (
    <div className="card">
      <h2>Event Task 1: Calculator</h2>
      <div className="calc-inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
        />
        <span className="calc-op">{operation || "?"}</span>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
        />
      </div>
      <div className="calc-buttons">
        <button className="btn" onClick={() => calculate("+")}>+</button>
        <button className="btn" onClick={() => calculate("-")}>-</button>
        <button className="btn" onClick={() => calculate("*")}>*</button>
        <button className="btn" onClick={() => calculate("/")}>/</button>
      </div>
      {result !== null && <p className="calc-result">Result: {result}</p>}
    </div>
  );
}

export default Calculator;
