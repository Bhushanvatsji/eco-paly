import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ExternalLink, Share2, Link2, Mail, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--secondary)', color: 'white', padding: '6rem 0 3rem', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="grid grid-cols-3" style={{ gap: '4rem', marginBottom: '4rem' }}>
          <div>
            <Link to="/" className="navbar-brand" style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2rem' }}>
              <Leaf size={32} className="animate-pulse" style={{ color: 'var(--primary)' }} />
              Eco<span>Play</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              The future of ecological action is gamified. Join 50,000+ eco-warriors making a real difference for our planet, one task at a time.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { icon: <ExternalLink size={20} />, href: "#" },
                { icon: <Share2 size={20} />, href: "#" },
                { icon: <Link2 size={20} />, href: "#" },
                { icon: <Globe size={20} />, href: "#" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href} 
                  whileHover={{ y: -5, background: 'var(--primary)', color: 'white' }}
                  style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    padding: '0.75rem', 
                    borderRadius: '12px', 
                    color: 'rgba(255,255,255,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '2rem', fontFamily: 'Outfit' }}>Platform</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Home', 'Tasks', 'Leaderboard', 'Dashboard'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '2rem', fontFamily: 'Outfit' }}>Subscribe to Impact</h4>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>Get weekly updates on global impact and new missions.</p>
            <div style={{ position: 'relative' }}>
              <input 
                type="email" 
                placeholder="eco@warrior.com" 
                style={{ 
                  width: '100%', 
                  padding: '1rem 1.25rem', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '12px', 
                  color: 'white',
                  outline: 'none'
                }} 
              />
              <button 
                className="btn btn-primary" 
                style={{ position: 'absolute', right: '4px', top: '4px', padding: '0.75rem 1.25rem', borderRadius: '8px' }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
            © 2026 EcoPlay. All rights reserved. Built with <Heart size={14} color="var(--primary)" style={{ display: 'inline', margin: '0 2px' }} /> for the Planet.
          </p>
          <div style={{ display: 'flex', gap: '2rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%' }}></div>
    </footer>
  );
};

export default Footer;

