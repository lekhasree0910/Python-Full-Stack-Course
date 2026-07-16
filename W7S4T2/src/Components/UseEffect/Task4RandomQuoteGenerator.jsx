import { useState, useEffect } from "react";

function RandomQuoteGenerator() {
  const [quote, setQuote] = useState("Loading quote...");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("https://dummyjson.com/quotes/random");
        const data = await res.json();
        setQuote(data.quote);
        setAuthor(data.author);
      } catch {
        setQuote("Failed to fetch quote.");
        setAuthor("");
      }
    };

    fetchQuote();
    const interval = setInterval(fetchQuote, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card quote-card">
      <h2>UseEffect Task 4: Random Quote Generator</h2>
      <p className="quote">"{quote}"</p>
      {author && <p className="author">- {author}</p>}
      <p className="note">Quote refreshes every 5 seconds</p>
    </div>
  );
}

export default RandomQuoteGenerator;
