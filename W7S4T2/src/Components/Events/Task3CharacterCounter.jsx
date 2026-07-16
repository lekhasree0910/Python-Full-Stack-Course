import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div className="card">
      <h2>Event Task 3: Character Counter</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here..."
        rows={6}
      />
      <p className="char-count">Characters: {text.length}</p>
      <p className="word-count">Words: {text.trim() ? text.trim().split(/\s+/).length : 0}</p>
    </div>
  );
}

export default CharacterCounter;
