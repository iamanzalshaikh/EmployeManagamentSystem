import React from 'react';

const Header = ({ userData, handleLogout }) => {
  return (
    <div className="flex items-end justify-between px-6 py-4 bg-gray-800 rounded-lg">
      <h1 className="text-2xl text-white">
        Hello <br />
        <span className="text-3xl font-semibold text-white">
          {userData?.name || userData?.firstName || "User"}
        </span>
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;