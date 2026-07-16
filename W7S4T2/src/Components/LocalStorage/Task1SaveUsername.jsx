import { useState, useEffect } from "react";

function SaveUsername() {
  const [username, setUsername] = useState(() => {
    return localStorage.getItem("username") || "";
  });

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  return (
    <div className="card">
      <h2>LocalStorage Task 1: Save Username</h2>
      <div className="form-group">
        <label>Enter Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </div>
      {username && <p className="saved-message">Saved: {username} (persists after refresh)</p>}
    </div>
  );
}

export default SaveUsername;
