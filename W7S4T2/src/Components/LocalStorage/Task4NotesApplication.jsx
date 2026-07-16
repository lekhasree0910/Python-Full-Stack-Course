import { useState, useEffect } from "react";

function NotesApplication() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (title.trim() && content.trim()) {
      if (editId) {
        setNotes(notes.map((n) => (n.id === editId ? { ...n, title, content } : n)));
        setEditId(null);
      } else {
        setNotes([...notes, { id: Date.now(), title, content }]);
      }
      setTitle("");
      setContent("");
    }
  };

  const editNote = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditId(note.id);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="card">
      <h2>LocalStorage Task 4: Notes Application</h2>
      <div className="form-group">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Note title" />
      </div>
      <div className="form-group">
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Note content" rows={3} />
      </div>
      <button className="btn" onClick={addNote}>{editId ? "Update Note" : "Add Note"}</button>
      <div className="notes-list">
        {notes.length === 0 ? <p>No notes yet.</p> : notes.map((n) => (
          <div key={n.id} className="note-item">
            <h4>{n.title}</h4>
            <p>{n.content}</p>
            <div className="note-actions">
              <button className="btn btn-sm" onClick={() => editNote(n)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => deleteNote(n.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesApplication;
