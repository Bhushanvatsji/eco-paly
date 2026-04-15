import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Leaf, Lock, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'An error occurred during login.');
    }
  };

  return (
    <div className="auth-page">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card auth-card"
      >
        <div className="auth-header">
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}
          >
            <div style={{ background: 'var(--primary-glow)', padding: '1rem', borderRadius: '20px', color: 'var(--primary)' }}>
              <Leaf size={40} className="animate-pulse" />
            </div>
          </motion.div>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>Welcome Back</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Log in to your EcoPlay account</p>
        </div>

        {error && <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="alert alert-danger">{error}</motion.div>}

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="email" 
                className="form-input" 
                style={{ paddingLeft: '3rem' }}
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
                placeholder="warrior@ecoplay.com"
              />
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="password" 
                className="form-input" 
                style={{ paddingLeft: '3rem' }}
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required
                placeholder="••••••••"
              />
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '1rem' }}
          >
            Sign In <ArrowRight size={20} />
          </motion.button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1rem', color: 'var(--text-muted)' }}>
          Don't have an account yet? <Link to="/register" style={{ color: 'var(--primary)', fontWeight: '700' }}>Join the movement</Link>
        </p>
      </motion.div>
      
      {/* Decorative Orbs */}
      <div style={{ position: 'absolute', top: '10%', right: '15%', width: '200px', height: '200px', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.05, borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', left: '15%', width: '300px', height: '300px', background: 'var(--secondary)', filter: 'blur(120px)', opacity: 0.05, borderRadius: '50%' }}></div>
    </div>
  );
};

export default Login;

