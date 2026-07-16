import { useState, useEffect } from "react";

function OnlineOfflineDetector() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="card">
      <h2>UseEffect Task 2: Online/Offline Detector</h2>
      <p className={`status ${isOnline ? "online" : "offline"}`}>
        {isOnline ? "You are Online" : "You are Offline"}
      </p>
    </div>
  );
}

export default OnlineOfflineDetector;
