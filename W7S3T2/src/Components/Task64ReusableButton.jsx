function ReusableButton({ label, color, size, onClick }) {
  const getButtonClass = (size) => {
    switch (size) {
      case "small":
        return "btn-small";
      case "medium":
        return "btn-medium";
      case "large":
        return "btn-large";
      default:
        return "btn-medium";
    }
  };

  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button
      className={`btn reusable-btn ${getButtonClass(size)}`}
      style={buttonStyle}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default ReusableButton;
