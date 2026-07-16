import { useState } from "react";

function QuizApplication() {
  const [step, setStep] = useState("login");
  const [username, setUsername] = useState("");
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const questions = [
    { id: 1, question: "What is React?", options: ["A library", "A language", "An OS"], answer: "A library" },
    { id: 2, question: "What is JSX?", options: ["HTML in JS", "CSS framework", "Database"], answer: "HTML in JS" },
    { id: 3, question: "What is useState?", options: ["A hook", "A component", "A library"], answer: "A hook" },
  ];

  const handleLogin = () => {
    if (username.trim()) setStep("instructions");
  };

  const handleStartQuiz = () => setStep("quiz");

  const handleAnswer = (qId, answer) => {
    setAnswers({ ...answers, [qId]: answer });
  };

  const handleSubmit = () => {
    let s = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) s++;
    });
    setScore(s);
    setStep("result");
  };

  return (
    <div className="card">
      <h2>Navigation Task 1: Quiz Application</h2>

      {step === "login" && (
        <div className="quiz-step">
          <h3>Login</h3>
          <div className="form-group">
            <label>Enter your name:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <button className="btn" onClick={handleLogin}>Login</button>
        </div>
      )}

      {step === "instructions" && (
        <div className="quiz-step">
          <h3>Instructions</h3>
          <p>Welcome, {username}!</p>
          <ul><li>3 questions</li><li>1 mark each</li><li>Select one answer per question</li></ul>
          <button className="btn" onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      )}

      {step === "quiz" && (
        <div className="quiz-step">
          <h3>Quiz</h3>
          {questions.map((q) => (
            <div key={q.id} className="question">
              <p><strong>Q{q.id}: {q.question}</strong></p>
              {q.options.map((opt) => (
                <label key={opt} className="radio-label">
                  <input
                    type="radio"
                    name={`q${q.id}`}
                    checked={answers[q.id] === opt}
                    onChange={() => handleAnswer(q.id, opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button className="btn" onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {step === "result" && (
        <div className="quiz-step">
          <h3>Result</h3>
          <p className="quiz-score">Score: {score}/{questions.length}</p>
          <p>{score === questions.length ? "Excellent!" : score >= 2 ? "Good Job!" : "Keep Trying!"}</p>
          <button className="btn" onClick={() => { setStep("login"); setAnswers({}); setScore(0); }}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default QuizApplication;
