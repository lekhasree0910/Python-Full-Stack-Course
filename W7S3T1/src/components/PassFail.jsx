const PassFail = ({ marks }) => {
  const isPassed = marks >= 35;
  return (
    <div style={{
      padding: '15px',
      borderRadius: '8px',
      backgroundColor: isPassed ? '#d4edda' : '#f8d7da',
      color: isPassed ? '#155724' : '#721c24',
      textAlign: 'center'
    }}>
      <p>Marks: {marks}</p>
      <h3>{isPassed ? '✅ Pass' : '❌ Fail'}</h3>
    </div>
  );
};

export default PassFail;