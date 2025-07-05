import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  if (!userData) {
    return (
      <div style={{ 
        color: "white", 
        padding: "20px", 
        backgroundColor: "#121212", 
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <p>Loading user data...</p>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;