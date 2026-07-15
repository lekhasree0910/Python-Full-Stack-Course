const AgeCategory = ({ age }) => {
  const isAdult = age >= 18;
  return (
    <div style={{
      padding: '15px',
      borderRadius: '8px',
      backgroundColor: isAdult ? '#cce5ff' : '#fff3cd',
      color: isAdult ? '#004085' : '#856404',
      textAlign: 'center'
    }}>
      <p>Age: {age}</p>
      <h3>{isAdult ? '👤 Adult' : '👶 Minor'}</h3>
    </div>
  );
};

export default AgeCategory;