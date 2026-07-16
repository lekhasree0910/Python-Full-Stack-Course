import { useState } from "react";

function LearningManagementSystem() {
  const [page, setPage] = useState("courses");

  const [courses] = useState([
    { id: 1, name: "React Fundamentals", progress: 80 },
    { id: 2, name: "Node.js Basics", progress: 45 },
    { id: 3, name: "Python Advanced", progress: 100 },
  ]);

  const [assignments] = useState([
    { id: 1, title: "Build a Todo App", course: "React", deadline: "2026-07-20", status: "Submitted" },
    { id: 2, title: "REST API Project", course: "Node.js", deadline: "2026-07-25", status: "Pending" },
  ]);

  const completedCourses = courses.filter((c) => c.progress === 100);

  return (
    <div className="card">
      <h2>Navigation Task 4: LMS</h2>
      <nav className="nav-tabs">
        <button className={page === "courses" ? "active" : ""} onClick={() => setPage("courses")}>Courses</button>
        <button className={page === "assignments" ? "active" : ""} onClick={() => setPage("assignments")}>Assignments</button>
        <button className={page === "progress" ? "active" : ""} onClick={() => setPage("progress")}>Progress</button>
        <button className={page === "certificates" ? "active" : ""} onClick={() => setPage("certificates")}>Certificates</button>
      </nav>

      {page === "courses" && (
        <div className="page-content">
          <h3>My Courses</h3>
          {courses.map((c) => (
            <div key={c.id} className="list-item">
              <p><strong>{c.name}</strong></p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${c.progress}%` }}>{c.progress}%</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {page === "assignments" && (
        <div className="page-content">
          <h3>Assignments</h3>
          {assignments.map((a) => (
            <div key={a.id} className="list-item">
              <p><strong>{a.title}</strong> - {a.course}</p>
              <p>Deadline: {a.deadline}</p>
              <span className={`badge ${a.status === "Submitted" ? "submitted" : "pending"}`}>{a.status}</span>
            </div>
          ))}
        </div>
      )}

      {page === "progress" && (
        <div className="page-content">
          <h3>Progress</h3>
          {courses.map((c) => (
            <div key={c.id} className="list-item">
              <p>{c.name}: {c.progress}% complete</p>
            </div>
          ))}
        </div>
      )}

      {page === "certificates" && (
        <div className="page-content">
          <h3>Certificates</h3>
          {completedCourses.length === 0 ? (
            <p>No certificates yet. Complete a course!</p>
          ) : (
            completedCourses.map((c) => (
              <div key={c.id} className="list-item certificate">
                <p>Certificate of Completion - {c.name}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default LearningManagementSystem;
