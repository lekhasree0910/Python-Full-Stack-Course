import { Routes, Route, Link, useParams } from "react-router-dom";

const blogs = [
  { id: 1, title: "Introduction to React", content: "React is a JavaScript library for building UIs." },
  { id: 2, title: "Understanding Props", content: "Props are used to pass data between components." },
  { id: 3, title: "State Management", content: "useState and useReducer help manage state." },
];

function BlogApplication() {
  return (
    <div>
      <h2>Router Task 3: Blog Application</h2>
      <nav className="router-nav">
        <Link to="/blog">Home</Link>
        <Link to="/blog/blogs">Blogs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<BlogHome />} />
        <Route path="blogs" element={<BlogList />} />
        <Route path="blogs/:id" element={<BlogDetails />} />
      </Routes>
    </div>
  );
}

function BlogHome() {
  return <div className="page-content"><h3>Blog Home</h3><p>Welcome to our blog!</p></div>;
}

function BlogList() {
  return (
    <div className="page-content">
      <h3>All Blogs</h3>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          <Link to={`/blog/blogs/${blog.id}`}>{blog.title}</Link>
        </div>
      ))}
    </div>
  );
}

function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));
  if (!blog) return <p>Blog not found</p>;
  return (
    <div className="page-content">
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogApplication;
