import { useState } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

function ProtectedRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Router Task 5: Protected Routes</h2>
      <nav className="router-nav">
        <Link to="/protected">Login</Link>
        <Link to="/protected/dashboard">Dashboard</Link>
        <button className="btn btn-sm" onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route
          path="dashboard"
          element={isLoggedIn ? <ProtectedDashboard /> : <Navigate to="/protected" />}
        />
      </Routes>
    </div>
  );
}

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin();
      navigate("/protected/dashboard");
    }
  };

  return (
    <div className="page-content">
      <h3>Login Page</h3>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

function ProtectedDashboard() {
  return (
    <div className="page-content">
      <h3>Protected Dashboard</h3>
      <p>Welcome! You are logged in.</p>
    </div>
  );
}

export default ProtectedRoutes;
