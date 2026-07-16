import { useState, useEffect } from "react";

function TodoLocalStorage() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input.trim(), id: Date.now() }]);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="card">
      <h2>LocalStorage Task 3: Todo List</h2>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo"
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
        />
        <button className="btn" onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.length === 0 ? <p>No todos yet.</p> : todos.map((t) => (
          <div key={t.id} className="todo-item">
            <span>{t.text}</span>
            <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(t.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoLocalStorage;
