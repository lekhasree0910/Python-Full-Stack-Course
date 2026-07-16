import { useState } from "react";

function ColorPicker() {
  const [bgColor, setBgColor] = useState("#f0f2f5");

  const colors = [
    { name: "Red", color: "#ff6b6b" },
    { name: "Blue", color: "#4ecdc4" },
    { name: "Green", color: "#45b7d1" },
  ];

  return (
    <div className="card" style={{ backgroundColor: bgColor, transition: "background-color 0.3s" }}>
      <h2>Event Task 2: Color Picker</h2>
      <div className="color-buttons">
        {colors.map((c) => (
          <button
            key={c.name}
            className="btn"
            style={{ backgroundColor: c.color, color: "white" }}
            onClick={() => setBgColor(c.color)}
          >
            {c.name}
          </button>
        ))}
        <button className="btn btn-secondary" onClick={() => setBgColor("#f0f2f5")}>Reset</button>
      </div>
      <p className="current-color">Current Color: {bgColor}</p>
    </div>
  );
}

export default ColorPicker;
