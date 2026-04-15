import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trophy, Medal, Crown, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetchLeaders();
  }, []);

  const fetchLeaders = async () => {
    // Simulated API fetch
    setLeaders([
      { _id: '1', name: 'Vansh Bhushan Vats', points: 1250 },
      { _id: '2', name: 'Eco Explorer', points: 1100 },
      { _id: '3', name: 'Green Warrior', points: 950 },
      { _id: '4', name: 'Planet Protector', points: 800 },
      { _id: '5', name: 'Nature Lover', points: 750 },
    ]);
  };

  const getRankClass = (index) => {
    if (index === 0) return 'rank-1';
    if (index === 1) return 'rank-2';
    if (index === 2) return 'rank-3';
    return 'rank-other';
  };

  const getRankIcon = (index) => {
    if (index === 0) return <Crown size={20} />;
    if (index === 1) return <Trophy size={18} />;
    if (index === 2) return <Medal size={18} />;
    return <span>{index + 1}</span>;
  };

  return (
    <div className="section-padding" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              padding: '0.5rem 1.5rem', 
              background: '#FEF3C7', 
              color: '#D97706', 
              borderRadius: '999px',
              fontWeight: 700,
              marginBottom: '1.5rem'
            }}
          >
            <Trophy size={20} /> Hall of Fame
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '3.5rem', marginBottom: '1rem' }}
          >
            Global Eco Leaders
          </motion.h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>Inspiring the world, one ecological act at a time.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="leaderboard-container"
          style={{ maxWidth: '900px' }}
        >
          <div style={{ background: 'var(--secondary)', color: 'white', padding: '1.5rem 2.5rem', display: 'grid', gridTemplateColumns: '80px 1fr 120px', fontWeight: 700 }}>
            <span>Rank</span>
            <span>Eco Warrior</span>
            <span style={{ textAlign: 'right' }}>Points</span>
          </div>
          
          <div className="leaderboard-list">
            {leaders.map((leader, index) => (
              <motion.div 
                key={leader._id}
                whileHover={{ background: 'rgba(34, 197, 94, 0.05)' }}
                className="leaderboard-row"
              >
                <div className={`rank-circle ${getRankClass(index)}`}>
                  {getRankIcon(index)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--surface-muted)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--secondary)' }}>
                    {leader.name.charAt(0)}
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{leader.name}</span>
                </div>
                <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem' }}>
                  <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.25rem' }}>{leader.points}</span>
                  <TrendingUp size={16} color="var(--primary)" opacity={0.6} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;
