import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ id: 'dummy_id', name: 'Demo User', points: 150 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Auth bypassed for testing
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock login
    setUser({ id: 'dummy_id', name: 'Demo User', points: 150 });
  };

  const register = async (name, email, password) => {
    // Mock register
    setUser({ id: 'dummy_id', name: name, points: 0 });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
