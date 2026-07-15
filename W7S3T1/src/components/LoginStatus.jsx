const LoginStatus = ({ isLoggedIn }) => {
  return (
    <div style={{
      padding: '15px',
      borderRadius: '8px',
      backgroundColor: isLoggedIn ? '#d4edda' : '#f8d7da',
      color: isLoggedIn ? '#155724' : '#721c24',
      textAlign: 'center'
    }}>
      {isLoggedIn ? '✅ Login Successful' : '❌ Please Login'}
    </div>
  );
};

export default LoginStatus;