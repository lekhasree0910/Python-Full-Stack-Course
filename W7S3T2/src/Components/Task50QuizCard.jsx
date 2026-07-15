function QuizCard({ quizTitle, subject, totalQuestions, score, attempted }) {
  return (
    <div className="card">
      <h3>Task 50 - Quiz Card</h3>
      <p><strong>Quiz:</strong> {quizTitle}</p>
      <p><strong>Subject:</strong> {subject}</p>
      <p><strong>Total Questions:</strong> {totalQuestions}</p>
      {attempted ? (
        <>
          <p><strong>Score:</strong> {score}/{totalQuestions}</p>
          <span className="badge completed">Completed</span>
        </>
      ) : (
        <span className="badge not-attempted">Not Attempted</span>
      )}
    </div>
  );
}

export default QuizCard;
