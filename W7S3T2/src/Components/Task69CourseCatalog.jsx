function CourseCatalog({ courses }) {
  return (
    <div className="card">
      <h3>Task 69 - Course Catalog</h3>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <p><strong>{course.name}</strong></p>
            <p>Instructor: {course.instructor}</p>
            <p>Fee: ₹{course.fee.toLocaleString()}</p>
            <p>Enrollments: {course.enrollments}</p>
            <p>Seats Left: {course.seatsLeft}</p>
            <div className="badges">
              {course.enrollments > 500 && <span className="badge popular">Popular</span>}
              {course.seatsLeft <= 10 && course.seatsLeft > 0 && (
                <span className="badge limited-seats">Limited Seats</span>
              )}
              {course.isNew && <span className="badge new-course">New Course</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCatalog;
