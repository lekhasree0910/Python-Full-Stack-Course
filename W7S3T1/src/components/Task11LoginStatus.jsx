function LoginStatus({ isLoggedIn }) {
  return (
    <div className="card">
      <h3>Task 11 - Login Status</h3>
      {isLoggedIn ? (
        <p className="success">Login Successful</p>
      ) : (
        <p className="warning">Please Login</p>
      )}
    </div>
  );
}

export default LoginStatus;
