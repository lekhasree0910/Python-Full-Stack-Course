import { useState, useEffect } from "react";

function RandomUserApi() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = () => {
    setLoading(true);
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => { setUser(data.results[0]); setLoading(false); })
      .catch(() => setLoading(false));
  };

  useEffect(() => { fetchUser(); }, []);

  if (loading) return <div className="card"><h2>Fetch Task 4: Random User</h2><p>Loading...</p></div>;

  return (
    <div className="card">
      <h2>Fetch Task 4: Random User</h2>
      {user && (
        <div className="user-profile">
          <img src={user.picture.large} alt={user.name.first} className="user-avatar" />
          <p><strong>{user.name.first} {user.name.last}</strong></p>
          <p>{user.email}</p>
          <p>{user.location.city}, {user.location.country}</p>
          <button className="btn" onClick={fetchUser}>Get New User</button>
        </div>
      )}
    </div>
  );
}

export default RandomUserApi;
