import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FetchApiTasks = () => {
  const navigate = useNavigate();

  // Navigation tab for the API sections
  const [activeTab, setActiveTab] = useState('users');

  // Task 1: Fetch Users State
  const [usersData, setUsersData] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  // Task 2: Fetch Posts State
  const [postsData, setPostsData] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  // Task 3: Fetch Todos State
  const [todosData, setTodosData] = useState([]);
  const [loadingTodos, setLoadingTodos] = useState(true);

  // Task 4: Fetch Products State
  const [productsData, setProductsData] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  // Task 5: CRUD User State (simulated on local array synced with JSONPlaceholder mock endpoints)
  const [crudUsers, setCrudUsers] = useState([]);
  const [loadingCrud, setLoadingCrud] = useState(true);
  const [crudForm, setCrudForm] = useState({ id: null, name: '', email: '', companyName: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [showCrudForm, setShowCrudForm] = useState(false);

  // Split Tab Loaders to respect dependency arrays and avoid synchronous state updates
  useEffect(() => {
    if (activeTab === 'users' && usersData.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
          setUsersData(data);
          setLoadingUsers(false);
        })
        .catch(() => setLoadingUsers(false));
    }
  }, [activeTab, usersData.length]);

  useEffect(() => {
    if (activeTab === 'posts' && postsData.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then((res) => res.json())
        .then((data) => {
          setPostsData(data);
          setLoadingPosts(false);
        })
        .catch(() => setLoadingPosts(false));
    }
  }, [activeTab, postsData.length]);

  useEffect(() => {
    if (activeTab === 'todos' && todosData.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
        .then((res) => res.json())
        .then((data) => {
          setTodosData(data);
          setLoadingTodos(false);
        })
        .catch(() => setLoadingTodos(false));
    }
  }, [activeTab, todosData.length]);

  useEffect(() => {
    if (activeTab === 'products' && productsData.length === 0) {
      fetch('https://fakestoreapi.com/products?limit=6')
        .then((res) => res.json())
        .then((data) => {
          setProductsData(data);
          setLoadingProducts(false);
        })
        .catch(() => setLoadingProducts(false));
    }
  }, [activeTab, productsData.length]);

  useEffect(() => {
    if (activeTab === 'crud' && crudUsers.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
          const mapped = data.map((u) => ({
            id: u.id,
            name: u.name,
            email: u.email,
            companyName: u.company?.name || 'Self-Employed',
          }));
          setCrudUsers(mapped);
          setLoadingCrud(false);
        })
        .catch(() => setLoadingCrud(false));
    }
  }, [activeTab, crudUsers.length]);

  // CRUD Actions
  const handleCrudSubmit = (e) => {
    e.preventDefault();
    if (!crudForm.name || !crudForm.email) return;

    if (isEditing) {
      setLoadingCrud(true);
      // PUT API Action
      fetch(`https://jsonplaceholder.typicode.com/users/${crudForm.id}`, {
        method: 'PUT',
        body: JSON.stringify(crudForm),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
        .then((res) => res.json())
        .then(() => {
          // Update in local state
          setCrudUsers(crudUsers.map((u) => (u.id === crudForm.id ? { ...crudForm } : u)));
          setIsEditing(false);
          setShowCrudForm(false);
          setCrudForm({ id: null, name: '', email: '', companyName: '' });
          setLoadingCrud(false);
          alert('User updated successfully (Simulated PUT).');
        })
        .catch(() => setLoadingCrud(false));
    } else {
      setLoadingCrud(true);
      // POST API Action
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(crudForm),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
        .then((res) => res.json())
        .then(() => {
          // JSONPlaceholder mock POST returns id: 11
          const nextId = crudUsers.length > 0 ? Math.max(...crudUsers.map((u) => u.id)) + 1 : 1;
          setCrudUsers([{ ...crudForm, id: nextId }, ...crudUsers]);
          setShowCrudForm(false);
          setCrudForm({ id: null, name: '', email: '', companyName: '' });
          setLoadingCrud(false);
          alert('User created successfully (Simulated POST).');
        })
        .catch(() => setLoadingCrud(false));
    }
  };

  const handleEditClick = (user) => {
    setCrudForm({ ...user });
    setIsEditing(true);
    setShowCrudForm(true);
  };

  const handleDeleteClick = (id) => {
    if (!window.confirm('Delete this user?')) return;
    setLoadingCrud(true);
    // DELETE API Action
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setCrudUsers(crudUsers.filter((u) => u.id !== id));
        setLoadingCrud(false);
        alert('User deleted successfully (Simulated DELETE).');
      })
      .catch(() => setLoadingCrud(false));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }} className="animate-fade-in" id="fetch-api">
      <div>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Fetch API Sandbox</h2>
        <p>Manage API data flows, query mock JSON structures, fetch products, and execute CRUD transactions.</p>
      </div>

      {/* Tabs list */}
      <div style={styles.tabContainer}>
        <button onClick={() => setActiveTab('users')} style={{ ...styles.tabBtn, ...(activeTab === 'users' ? styles.tabBtnActive : {}) }}>
          Task 1: Users
        </button>
        <button onClick={() => setActiveTab('posts')} style={{ ...styles.tabBtn, ...(activeTab === 'posts' ? styles.tabBtnActive : {}) }}>
          Task 2: Posts
        </button>
        <button onClick={() => setActiveTab('todos')} style={{ ...styles.tabBtn, ...(activeTab === 'todos' ? styles.tabBtnActive : {}) }}>
          Task 3: Todos
        </button>
        <button onClick={() => setActiveTab('products')} style={{ ...styles.tabBtn, ...(activeTab === 'products' ? styles.tabBtnActive : {}) }}>
          Task 4: Product Navigation
        </button>
        <button onClick={() => setActiveTab('crud')} style={{ ...styles.tabBtn, ...(activeTab === 'crud' ? styles.tabBtnActive : {}) }}>
          Task 5: CRUD Portal
        </button>
      </div>

      {/* Rendering tab bodies */}
      <div className="card" style={{ minHeight: '350px' }}>
        
        {/* Task 1: Users Table */}
        {activeTab === 'users' && (
          <div className="animate-fade-in">
            <h3 style={{ marginBottom: '16px' }}>Task 1: Fetch API Users Directory</h3>
            {loadingUsers ? (
              <div style={styles.spinnerWrapper}>
                <div className="spinner"></div>
                <p style={{ marginTop: '12px' }}>Querying JSONPlaceholder...</p>
              </div>
            ) : (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email Address</th>
                      <th>Company</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersData.map((u) => (
                      <tr key={u.id}>
                        <td style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.company?.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Task 2: Posts list */}
        {activeTab === 'posts' && (
          <div className="animate-fade-in">
            <h3 style={{ marginBottom: '16px' }}>Task 2: Query Thread Posts</h3>
            {loadingPosts ? (
              <div style={styles.spinnerWrapper}>
                <div className="spinner"></div>
                <p style={{ marginTop: '12px' }}>Reading active feeds...</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {postsData.map((post) => (
                  <div key={post.id} style={styles.postBlock}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: 700 }}>POST #{post.id}</span>
                    <h4 style={{ fontSize: '1.1rem', margin: '4px 0 8px 0', textTransform: 'capitalize' }}>{post.title}</h4>
                    <p style={{ margin: 0, fontSize: '0.925rem' }}>{post.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Task 3: Todos list */}
        {activeTab === 'todos' && (
          <div className="animate-fade-in">
            <h3 style={{ marginBottom: '16px' }}>Task 3: Todo Task Registers</h3>
            {loadingTodos ? (
              <div style={styles.spinnerWrapper}>
                <div className="spinner"></div>
                <p style={{ marginTop: '12px' }}>Loading checklist...</p>
              </div>
            ) : (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Task Title</th>
                      <th style={{ textAlign: 'right' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todosData.map((todo) => (
                      <tr key={todo.id}>
                        <td style={{ fontSize: '0.925rem' }}>{todo.title}</td>
                        <td style={{ textAlign: 'right' }}>
                          {todo.completed ? (
                            <span className="badge badge-success">Completed</span>
                          ) : (
                            <span className="badge badge-warning">Pending</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Task 4: Products Catalogue */}
        {activeTab === 'products' && (
          <div className="animate-fade-in">
            <h3 style={{ marginBottom: '16px' }}>Task 4: Products Catalog (FakeStore API)</h3>
            <p style={{ marginBottom: '20px' }}>Click on a card to test navigate("/product/:id") dynamic routing.</p>
            {loadingProducts ? (
              <div style={styles.spinnerWrapper}>
                <div className="spinner"></div>
                <p style={{ marginTop: '12px' }}>Catalog fetching...</p>
              </div>
            ) : (
              <div className="grid grid-cols-3" style={{ gap: '20px' }}>
                {productsData.map((prod) => (
                  <div key={prod.id} className="card" style={styles.productCard}>
                    <div style={styles.productImageContainer}>
                      <img src={prod.image} alt={prod.title} style={styles.productImage} />
                    </div>
                    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                      <h4 style={styles.productTitle} title={prod.title}>{prod.title}</h4>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                        <span style={{ fontWeight: 800, color: 'var(--success-color)', fontSize: '1.1rem' }}>
                          ${prod.price.toFixed(2)}
                        </span>
                        <button 
                          onClick={() => navigate(`/product/${prod.id}`)}
                          className="btn btn-primary btn-sm"
                          style={{ padding: '6px 12px' }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Task 5: CRUD Portal */}
        {activeTab === 'crud' && (
          <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <h3 style={{ margin: 0 }}>Task 5: User Database Admin Panel</h3>
                <p style={{ margin: 0, fontSize: '0.85rem' }}>POST, PUT, and DELETE actions are simulated via JSONPlaceholder calls.</p>
              </div>
              <button 
                onClick={() => {
                  setIsEditing(false);
                  setCrudForm({ id: null, name: '', email: '', companyName: '' });
                  setShowCrudForm(!showCrudForm);
                }} 
                className="btn btn-primary btn-sm"
              >
                {showCrudForm ? 'Close Form' : '+ Create User'}
              </button>
            </div>

            {showCrudForm && (
              <div className="card animate-fade-in" style={{ marginBottom: '24px', maxWidth: '500px', backgroundColor: 'var(--bg-tertiary)' }}>
                <h4 style={{ marginBottom: '16px' }}>{isEditing ? 'Edit User Details' : 'Create New User'}</h4>
                <form onSubmit={handleCrudSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Saran Kumar"
                      value={crudForm.name}
                      onChange={(e) => setCrudForm({ ...crudForm, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      required
                      className="form-control"
                      placeholder="saran@corporation.com"
                      value={crudForm.email}
                      onChange={(e) => setCrudForm({ ...crudForm, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Google Inc"
                      value={crudForm.companyName}
                      onChange={(e) => setCrudForm({ ...crudForm, companyName: e.target.value })}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                    <button type="submit" className="btn btn-success" style={{ flexGrow: 1 }}>
                      {isEditing ? 'Save Changes' : 'Create User'}
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setShowCrudForm(false)} 
                      className="btn btn-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {loadingCrud ? (
              <div style={styles.spinnerWrapper}>
                <div className="spinner"></div>
                <p style={{ marginTop: '12px' }}>Executing database operations...</p>
              </div>
            ) : (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {crudUsers.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.companyName}</td>
                        <td style={{ textAlign: 'right' }}>
                          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                            <button onClick={() => handleEditClick(user)} className="btn btn-secondary btn-sm" style={{ padding: '4px 8px' }}>
                              Edit
                            </button>
                            <button onClick={() => handleDeleteClick(user.id)} className="btn btn-danger btn-sm" style={{ padding: '4px 8px' }}>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

const styles = {
  tabContainer: {
    display: 'flex',
    gap: '8px',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '12px',
    flexWrap: 'wrap',
  },
  tabBtn: {
    background: 'none',
    border: '1px solid transparent',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    color: 'var(--text-secondary)',
    fontWeight: 600,
    fontSize: '0.9rem',
    transition: 'var(--transition)',
  },
  tabBtnActive: {
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    borderColor: 'var(--primary-color)',
  },
  spinnerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 0',
  },
  postBlock: {
    backgroundColor: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    borderRadius: '10px',
    padding: '16px 20px',
    textAlign: 'left',
  },
  productCard: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    height: '100%',
  },
  productImageContainer: {
    backgroundColor: '#ffffff',
    padding: '16px',
    borderRadius: '8px',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid var(--border-color)',
  },
  productImage: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
  },
  productTitle: {
    fontSize: '0.9rem',
    fontWeight: 700,
    lineHeight: 1.4,
    color: 'var(--text-primary)',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    height: '2.8em',
    textAlign: 'left',
  },
};

export default FetchApiTasks;
