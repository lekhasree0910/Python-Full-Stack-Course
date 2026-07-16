import { useState, useEffect } from "react";

function BackgroundColorChanger() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dda0dd", "#98d8c8", "#f7dc6f"];

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => { document.body.style.backgroundColor = "#f0f2f5"; };
  }, [bgColor]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => {
        const next = (prev + 1) % colors.length;
        setBgColor(colors[next]);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <h2>UseEffect Task 5: Background Color Changer</h2>
      <div className="color-display" style={{ backgroundColor: bgColor }}>
        <p>Current Color: {bgColor}</p>
      </div>
      <p className="note">Background changes every 3 seconds</p>
      <div className="color-buttons">
        {colors.map((color, index) => (
          <button
            key={index}
            className="color-btn"
            style={{ backgroundColor: color }}
            onClick={() => { setBgColor(color); setColorIndex(index); }}
          />
        ))}
      </div>
    </div>
  );
}

export default BackgroundColorChanger;
