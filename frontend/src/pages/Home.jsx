import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, TrendingUp, Users, Target, Globe, ShieldCheck } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 className="hero-title">
              Small Acts. <br/>
              <span style={{ 
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>Massive Impact.</span>
            </h1>
            <p className="hero-subtitle">
              Join the world's most rewarding ecological platform. Turn your sustainable habits into points, rewards, and a healthier planet.
            </p>
            <div className="hero-actions">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/register" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                  Start Your Journey <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/leaderboard" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                  Global Leaderboard
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Floating background elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '15%', right: '10%', opacity: 0.1, zIndex: 1 }}
        >
          <Leaf size={200} color="var(--primary)" />
        </motion.div>
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', bottom: '10%', left: '5%', opacity: 0.1, zIndex: 1 }}
        >
          <Globe size={150} color="var(--primary)" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="grid grid-cols-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="stat-card"
            >
              <div className="stat-value">50k+</div>
              <p style={{ fontWeight: 600, opacity: 0.8 }}>Active Users</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="stat-card"
              style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)' }}
            >
              <div className="stat-value">1.2M</div>
              <p style={{ fontWeight: 600, opacity: 0.8 }}>Trees Saved</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="stat-card"
            >
              <div className="stat-value">850t</div>
              <p style={{ fontWeight: 600, opacity: 0.8 }}>CO2 Reduced</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ fontSize: '3rem', marginBottom: '1rem' }}
            >
              The EcoPlay Framework
            </motion.h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>Science-backed gamification for environmental change</p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3"
          >
            {[
              { icon: <Leaf />, title: "1. Discover", desc: "Browse a curated list of high-impact ecological tasks verified by climate experts." },
              { icon: <Target />, title: "2. Execute", desc: "Perform the action and log it with EcoPlay. Your photo/location data secures the proof." },
              { icon: <TrendingUp />, title: "3. Prosper", desc: "Earn points, level up your profile, and exchange EcoTokens for real-world rewards." }
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="card" style={{ textAlign: 'center' }}>
                <div style={{ 
                  background: 'rgba(34, 197, 94, 0.1)', 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '24px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 2rem', 
                  color: 'var(--primary)',
                  boxShadow: 'inset 0 0 20px rgba(34, 197, 94, 0.1)'
                }}>
                  {React.cloneElement(item.icon, { size: 40 })}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'var(--secondary)', overflow: 'hidden', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="card glass" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <h2 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem' }}>Ready to be part of the solution?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Join 50,000+ warriors fighting for a greener future. Every action counts.</p>
            <Link to="/register" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.25rem' }}>
              Create Free Account
            </Link>
          </div>
        </div>
        <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '600px', height: '600px', background: 'rgba(34, 197, 94, 0.1)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-40%', right: '-10%', width: '400px', height: '400px', background: 'rgba(34, 197, 94, 0.1)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
      </section>
    </div>
  );
};

export default Home;

