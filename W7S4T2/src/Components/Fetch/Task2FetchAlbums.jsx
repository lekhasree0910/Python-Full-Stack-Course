import { useState, useEffect } from "react";

function FetchAlbums() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums?_limit=10")
      .then((res) => res.json())
      .then((data) => { setAlbums(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="card"><h2>Fetch Task 2: Albums</h2><p>Loading...</p></div>;

  return (
    <div className="card">
      <h2>Fetch Task 2: Albums</h2>
      {albums.map((a) => (
        <div key={a.id} className="list-item">
          <p><strong>Album #{a.id}:</strong> {a.title}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchAlbums;
