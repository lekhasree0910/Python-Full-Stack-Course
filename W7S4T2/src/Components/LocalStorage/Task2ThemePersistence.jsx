import { useState, useEffect } from "react";

function ThemePersistence() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`card theme-${theme}`}>
      <h2>LocalStorage Task 2: Theme Persistence</h2>
      <div className="theme-buttons">
        <button
          className={`btn ${theme === "light" ? "active" : ""}`}
          onClick={() => setTheme("light")}
        >
          Light Mode
        </button>
        <button
          className={`btn ${theme === "dark" ? "active" : ""}`}
          onClick={() => setTheme("dark")}
        >
          Dark Mode
        </button>
      </div>
      <p>Current Theme: {theme} (persists after refresh)</p>
    </div>
  );
}

export default ThemePersistence;
