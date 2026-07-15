const Button = ({ text, color = '#007bff', onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '5px'
      }}
    >
      {text}
    </button>
  );
};

export default Button;