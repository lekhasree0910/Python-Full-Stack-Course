import { useState, useEffect } from "react";

function FetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=8")
      .then((res) => res.json())
      .then((data) => { setPhotos(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="card"><h2>Fetch Task 3: Photos</h2><p>Loading...</p></div>;

  return (
    <div className="card">
      <h2>Fetch Task 3: Photos</h2>
      <div className="photo-grid">
        {photos.map((p) => (
          <div key={p.id} className="photo-item">
            <img src={p.thumbnailUrl} alt={p.title} />
            <p>{p.title.substring(0, 20)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchPhotos;
