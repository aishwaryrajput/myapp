import { useNavigate } from "react-router-dom";
import React, { useState, createContext, useContext } from 'react';
const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
    const navigate = useNavigate(); 
    
  const login = user => {
    setUser(user);
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}