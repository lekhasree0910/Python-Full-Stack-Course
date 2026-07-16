import { useState, useEffect } from "react";

function CountryApi() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => { setCountries(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="card"><h2>Fetch Task 5: Countries</h2><p>Loading...</p></div>;

  return (
    <div className="card">
      <h2>Fetch Task 5: Country API</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search country..."
        className="search-input"
      />
      <div className="country-list">
        {filtered.slice(0, 15).map((c) => (
          <div key={c.cca3} className="country-item">
            <img src={c.flags.svg} alt={c.name.common} className="country-flag" />
            <div>
              <p><strong>{c.name.common}</strong></p>
              <p>Capital: {c.capital?.[0] || "N/A"}</p>
              <p>Population: {c.population.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryApi;
