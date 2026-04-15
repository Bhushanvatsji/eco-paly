import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Target, CheckCircle, Leaf, Sparkles, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    // Simulated API fetch
    setTasks([
      { _id: '1', title: 'Plant a Tree', description: 'Plant a tree in your neighborhood and share a photo.', points: 50, isCompleted: false, category: 'Nature' },
      { _id: '2', title: 'Zero Waste Grocery', description: 'Use reusable bags and containers for your shopping trip.', points: 15, isCompleted: false, category: 'Lifestyle' },
      { _id: '3', title: 'Community Cleanup', description: 'Spend 30 minutes cleaning up a local park or street.', points: 30, isCompleted: false, category: 'Community' },
      { _id: '4', title: 'Meatless Day', description: 'Eat only plant-based meals for an entire day.', points: 20, isCompleted: true, category: 'Diet' },
    ]);
  };

  const completeTask = async (taskId) => {
    const task = tasks.find(t => t._id === taskId);
    if(task && !task.isCompleted) {
      setUser({ ...user, points: user.points + task.points });
      setTasks(tasks.map(t => t._id === taskId ? { ...t, isCompleted: true } : t));
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="section-padding" style={{ background: 'radial-gradient(circle at top right, #f0fdf4 0%, #ffffff 100%)', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{ 
              background: 'var(--primary-glow)', 
              width: '64px', 
              height: '64px', 
              borderRadius: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 1.5rem',
              color: 'var(--primary)'
            }}
          >
            <Sparkles size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '3.5rem', marginBottom: '1rem' }}
          >
            Daily Missions
          </motion.h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>Your daily contribution to a sustainable future starts here.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2"
        >
          {tasks.map(task => (
            <motion.div key={task._id} variants={item}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', border: '1px solid var(--border)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
                   <span className="task-badge">
                      <Leaf size={14} /> {task.category}
                   </span>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', paddingRight: '100px' }}>{task.title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', minHeight: '3rem' }}>{task.description}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 800, fontSize: '1.25rem' }}>
                    <Plus size={20} /> {task.points} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>Points</span>
                  </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  {task.isCompleted ? (
                    <div style={{ 
                      width: '100%', 
                      padding: '1rem', 
                      background: 'var(--surface-muted)', 
                      color: 'var(--text-muted)', 
                      borderRadius: 'var(--radius-full)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      fontWeight: 700
                    }}>
                      <CheckCircle size={20} /> Completed
                    </div>
                  ) : (
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => completeTask(task._id)} 
                      className="btn btn-primary" 
                      style={{ width: '100%' }}
                    >
                      Complete Action
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Tasks;

