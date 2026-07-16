import { useState, useEffect } from "react";

function FetchComments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
      .then((res) => res.json())
      .then((data) => { setComments(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="card"><h2>Fetch Task 1: Comments</h2><p>Loading...</p></div>;

  return (
    <div className="card">
      <h2>Fetch Task 1: Comments</h2>
      {comments.map((c) => (
        <div key={c.id} className="list-item">
          <p><strong>{c.name}</strong></p>
          <p className="email">{c.email}</p>
          <p>{c.body.substring(0, 80)}...</p>
        </div>
      ))}
    </div>
  );
}

export default FetchComments;
