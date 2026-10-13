// Auth Context
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { api } from '../api/client';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Initialize auth state from localStorage
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('ayojon_token');
      const storedUser = localStorage.getItem('ayojon_user');
      
      if (storedToken && storedUser) {
        api.setToken(storedToken);
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
        
        // Verify token is still valid
        try {
          const response = await api.me();
          if (response.success) {
            setUser(response.data.user);
            localStorage.setItem('ayojon_user', JSON.stringify(response.data.user));
          } else {
            logout();
          }
        } catch {
          logout();
        }
      }
      setLoading(false);
    };
    
    initAuth();
  }, []);
  
  const login = useCallback(async (userData, tokenData, rememberMe = false) => {
    api.setToken(tokenData);
    setToken(tokenData);
    setUser(userData);
    
    if (rememberMe) {
      localStorage.setItem('ayojon_token', tokenData);
      localStorage.setItem('ayojon_user', JSON.stringify(userData));
    } else {
      sessionStorage.setItem('ayojon_token', tokenData);
      sessionStorage.setItem('ayojon_user', JSON.stringify(userData));
    }
  }, []);
  
  const logout = useCallback(() => {
    api.clearToken();
    setToken(null);
    setUser(null);
    localStorage.removeItem('ayojon_token');
    localStorage.removeItem('ayojon_user');
    sessionStorage.removeItem('ayojon_token');
    sessionStorage.removeItem('ayojon_user');
  }, []);
  
  const value = {
    user,
    token,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
    isOrganizer: user?.role === 'organizer',
    isAttendee: user?.role === 'attendee',
    isVolunteer: user?.role === 'volunteer'
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}