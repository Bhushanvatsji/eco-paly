import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Medal, Award, Zap, History } from 'lucide-react';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="dashboard-header" style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, #065F46 100%)', borderRadius: '0 0 3rem 3rem' }}>
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1rem' }}
          >
            Welcome back, {user.name}!
          </motion.h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem' }}>Your contribution is making the world a better place.</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '6rem', marginTop: '-4rem' }}>
        <div className="grid grid-cols-2" style={{ marginBottom: '3rem' }}>
          <motion.div 
            whileHover={{ y: -10 }}
            className="stat-card"
          >
            <div className="stat-value">{user.points}</div>
            <div style={{ fontSize: '1.25rem', fontWeight: '600', opacity: 0.9, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
              <Leaf size={24} /> Total Eco Points
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="stat-card" 
            style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}
          >
            <div className="stat-value">Eco Warrior</div>
            <div style={{ fontSize: '1.25rem', fontWeight: '600', opacity: 0.9, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
              <Medal size={24} /> Current Status
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--primary-glow)', padding: '0.75rem', borderRadius: '12px', color: 'var(--primary)' }}>
                  <Zap size={24} />
                </div>
                <h2>Next Milestones</h2>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'var(--surface-muted)', padding: '1.25rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontWeight: 600 }}>Reach 500 Points</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{user.points}/500</span>
                </div>
                <div style={{ height: '8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((user.points / 500) * 100, 100)}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ height: '100%', background: 'var(--primary)' }}
                  />
                </div>
              </div>
              <Link to="/tasks" className="btn btn-primary" style={{ width: '100%' }}>
                Earn More Points <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '0.75rem', borderRadius: '12px', color: '#3B82F6' }}>
                <Award size={24} />
              </div>
              <h2>Recent Achievements</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: '1px solid var(--border)', borderRadius: '12px' }}>
                <div style={{ background: '#fef3c7', padding: '0.5rem', borderRadius: '50%', color: '#d97706' }}>
                  <Medal size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>First Act Complete</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>You completed your very first task!</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: '1px solid var(--border)', borderRadius: '12px', opacity: 0.6 }}>
                <div style={{ background: '#f1f5f9', padding: '0.5rem', borderRadius: '50%', color: '#64748b' }}>
                  <History size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>Coming Soon</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Keep going to unlock more badges.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;

