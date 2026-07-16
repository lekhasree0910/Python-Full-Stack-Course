import { Routes, Route, Link } from "react-router-dom";

function CollegeWebsite() {
  return (
    <div>
      <h2>Router Task 1: College Website</h2>
      <nav className="router-nav">
        <Link to="/college">Home</Link>
        <Link to="/college/departments">Departments</Link>
        <Link to="/college/faculty">Faculty</Link>
        <Link to="/college/placements">Placements</Link>
        <Link to="/college/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CollegeHome />} />
        <Route path="departments" element={<Departments />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="placements" element={<Placements />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function CollegeHome() {
  return <div className="page-content"><h3>Welcome to Tech College</h3><p>Empowering students since 2000.</p></div>;
}

function Departments() {
  return (
    <div className="page-content">
      <h3>Departments</h3>
      <ul><li>Computer Science</li><li>Electronics</li><li>Mechanical</li><li>Civil</li></ul>
    </div>
  );
}

function Faculty() {
  return (
    <div className="page-content">
      <h3>Faculty</h3>
      <p>Dr. Sharma - HOD, CSE</p>
      <p>Prof. Patel - HOD, Electronics</p>
    </div>
  );
}

function Placements() {
  return (
    <div className="page-content">
      <h3>Placements</h3>
      <p>95% placement rate this year!</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page-content">
      <h3>Contact Us</h3>
      <p>Email: info@techcollege.edu</p>
      <p>Phone: +91 9876543210</p>
    </div>
  );
}

export default CollegeWebsite;
