import { useState } from "react";

function MultipleCounters() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <div className="card">
      <h2>UseState Task 3: Multiple Counters</h2>
      <div className="counters-container">
        <div className="counter-box">
          <h3>Counter 1</h3>
          <p className="count">{count1}</p>
          <div className="counter-buttons">
            <button className="btn" onClick={() => setCount1(count1 + 1)}>+</button>
            <button className="btn btn-danger" onClick={() => setCount1(count1 - 1)}>-</button>
            <button className="btn btn-secondary" onClick={() => setCount1(0)}>Reset</button>
          </div>
        </div>
        <div className="counter-box">
          <h3>Counter 2</h3>
          <p className="count">{count2}</p>
          <div className="counter-buttons">
            <button className="btn" onClick={() => setCount2(count2 + 1)}>+</button>
            <button className="btn btn-danger" onClick={() => setCount2(count2 - 1)}>-</button>
            <button className="btn btn-secondary" onClick={() => setCount2(0)}>Reset</button>
          </div>
        </div>
        <div className="counter-box">
          <h3>Counter 3</h3>
          <p className="count">{count3}</p>
          <div className="counter-buttons">
            <button className="btn" onClick={() => setCount3(count3 + 1)}>+</button>
            <button className="btn btn-danger" onClick={() => setCount3(count3 - 1)}>-</button>
            <button className="btn btn-secondary" onClick={() => setCount3(0)}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultipleCounters;
