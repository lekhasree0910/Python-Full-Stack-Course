import { useState } from "react";

function AgeChecker() {
  const [age, setAge] = useState("");

  const isEligible = Number(age) >= 18;

  return (
    <div className="card">
      <h2>Event Task 4: Age Checker</h2>
      <div className="form-group">
        <label>Enter your age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
        />
      </div>
      {age && (
        <p className={`eligibility ${isEligible ? "eligible" : "not-eligible"}`}>
          {isEligible ? "Eligible to Vote" : "Not Eligible"}
        </p>
      )}
    </div>
  );
}

export default AgeChecker;
