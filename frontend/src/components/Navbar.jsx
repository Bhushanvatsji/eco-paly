import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Leaf, LogOut, User as UserIcon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="navbar-brand">
            <Leaf size={32} className="animate-pulse" style={{ color: 'var(--primary)' }} />
            Eco<span>Play</span>
          </Link>
        </motion.div>

        <div className="navbar-nav" style={{ display: 'flex' }}>
          <Link to="/leaderboard" className={`nav-link ${isActive('/leaderboard') ? 'active' : ''}`}>Leaderboard</Link>
          {user ? (
            <>
              <Link to="/tasks" className={`nav-link ${isActive('/tasks') ? 'active' : ''}`}>Tasks</Link>
              <Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}>Dashboard</Link>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout} 
                className="btn btn-outline" 
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
              >
                <LogOut size={16} /> Logout
              </motion.button>
            </>
          ) : (
            <>
              <Link to="/login" className={`nav-link ${isActive('/login') ? 'active' : ''}`}>Login</Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/register" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Get Started</Link>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

