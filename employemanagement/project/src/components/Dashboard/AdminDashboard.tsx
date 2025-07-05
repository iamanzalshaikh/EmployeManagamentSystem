import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdminDashboard = ({ userData, handleLogout }) => {
  return (
    <div style={{ padding: "20px", color: "white", backgroundColor: "#111", minHeight: "100vh" }}>
      <Header userData={userData} handleLogout={handleLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;