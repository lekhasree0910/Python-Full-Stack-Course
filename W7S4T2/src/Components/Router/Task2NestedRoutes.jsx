import { Routes, Route, Link, Outlet } from "react-router-dom";

function NestedRoutes() {
  return (
    <div>
      <h2>Router Task 2: Nested Routes</h2>
      <nav className="router-nav">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/students">Students</Link>
        <Link to="/dashboard/faculty">Faculty</Link>
        <Link to="/dashboard/reports">Reports</Link>
      </nav>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="students" element={<Students />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </div>
  );
}

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <h3>Dashboard Layout</h3>
      <Outlet />
    </div>
  );
}

function DashboardHome() {
  return <div className="page-content"><p>Welcome to the Dashboard</p></div>;
}

function Students() {
  return (
    <div className="page-content">
      <h4>Students</h4>
      <p>Alice - CS</p><p>Bob - IT</p><p>Charlie - EC</p>
    </div>
  );
}

function Faculty() {
  return (
    <div className="page-content">
      <h4>Faculty</h4>
      <p>Dr. Sharma - CSE</p><p>Prof. Patel - Electronics</p>
    </div>
  );
}

function Reports() {
  return (
    <div className="page-content">
      <h4>Reports</h4>
      <p>Total Students: 500</p><p>Total Faculty: 30</p>
    </div>
  );
}

export default NestedRoutes;
