import React, { useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { setLocalStorage } from "./utils/localStorage";

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Initialize localStorage with default data
    setLocalStorage();
    
    // Check if user is already logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      setUserData(parsedUser);
    }
  }, []);

  const handleLogin = (email, password) => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    // Check admin login
    const adminUser = admin.find(a => a.email === email && a.password === password);
    if (adminUser) {
      const loginData = { ...adminUser, role: "admin" };
      localStorage.setItem("loggedInUser", JSON.stringify(loginData));
      setUser("admin");
      setUserData(loginData);
      return;
    }

    // Check employee login
    const employeeUser = employees.find(e => e.email === email && e.password === password);
    if (employeeUser) {
      const loginData = { ...employeeUser, role: "employee" };
      localStorage.setItem("loggedInUser", JSON.stringify(loginData));
      setUser("employee");
      setUserData(loginData);
      return;
    }

    alert("Invalid credentials!");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setUserData(null);
  };

  return (
    <div style={{ color: 'white', backgroundColor: '#121212', minHeight: '100vh', padding: '20px' }}>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && userData && (
        <AdminDashboard userData={userData} handleLogout={handleLogout} />
      )}

      {user === "employee" && userData && (
        <EmployeeDashboard userData={userData} handleLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;