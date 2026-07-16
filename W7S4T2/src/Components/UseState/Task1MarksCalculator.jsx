import { useState } from "react";

function MarksCalculator() {
  const [math, setMath] = useState("");
  const [science, setScience] = useState("");
  const [english, setEnglish] = useState("");

  const total = Number(math) + Number(science) + Number(english);
  const average = total / 3;

  const getGrade = (avg) => {
    if (avg >= 90) return "A+";
    if (avg >= 80) return "A";
    if (avg >= 70) return "B";
    if (avg >= 60) return "C";
    if (avg >= 50) return "D";
    return "F";
  };

  return (
    <div className="card">
      <h2>UseState Task 1: Marks Calculator</h2>
      <div className="form-group">
        <label>Math:</label>
        <input
          type="number"
          value={math}
          onChange={(e) => setMath(e.target.value)}
          placeholder="Enter Math marks"
        />
      </div>
      <div className="form-group">
        <label>Science:</label>
        <input
          type="number"
          value={science}
          onChange={(e) => setScience(e.target.value)}
          placeholder="Enter Science marks"
        />
      </div>
      <div className="form-group">
        <label>English:</label>
        <input
          type="number"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
          placeholder="Enter English marks"
        />
      </div>
      <div className="result">
        <p><strong>Total:</strong> {total}</p>
        <p><strong>Average:</strong> {average.toFixed(2)}</p>
        <p><strong>Grade:</strong> {getGrade(average)}</p>
      </div>
    </div>
  );
}

export default MarksCalculator;
