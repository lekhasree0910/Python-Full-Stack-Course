import { useState, useEffect } from "react";

function ApiRefreshCounter() {
  const [apiCalls, setApiCalls] = useState(0);

  const fetchApi = () => {
    setApiCalls((prev) => prev + 1);
  };

  return (
    <div className="card">
      <h2>UseEffect Task 1: API Refresh Counter</h2>
      <p className="api-count">API Calls: {apiCalls}</p>
      <button className="btn" onClick={fetchApi}>Fetch API</button>
    </div>
  );
}

export default ApiRefreshCounter;
