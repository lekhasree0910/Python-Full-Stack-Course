import { useState, useEffect } from "react";

function ScreenWidthTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="card">
      <h2>UseEffect Task 3: Screen Width Tracker</h2>
      <p className="screen-width">Width: {width}px</p>
      <p className="screen-height">Height: {window.innerHeight}px</p>
    </div>
  );
}

export default ScreenWidthTracker;
