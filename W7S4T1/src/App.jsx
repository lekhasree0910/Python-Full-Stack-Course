import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import StudentDetails from './pages/StudentDetails';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  // Set default theme to Dark (premium and sleek first impression)
  const [isDark, setIsDark] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar 
          isDark={isDark} 
          toggleTheme={toggleTheme} 
          isLoggedIn={isLoggedIn} 
          onLogout={() => setIsLoggedIn(false)} 
        />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login onLogin={setIsLoggedIn} />} />
            
            {/* Protected Student / Admin Dashboard Routes */}
            <Route 
              path="/dashboard" 
              element={isLoggedIn ? <Dashboard onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/login" replace />} 
            />
            <Route 
              path="/profile" 
              element={isLoggedIn ? <Dashboard onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/login" replace />} 
            />
            <Route 
              path="/settings" 
              element={isLoggedIn ? <Dashboard onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/login" replace />} 
            />
            
            {/* Dynamic Parameter Routes */}
            <Route path="/student/:id" element={<StudentDetails />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;