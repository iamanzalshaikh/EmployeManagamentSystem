import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="border-2 border-red-600 p-8 rounded-xl shadow-xl">
        <h2 className="text-white text-2xl font-bold text-center mb-6">Login</h2>
        <form  
          onSubmit={submitHandler}
          className="flex flex-col items-center space-y-6"
        >
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your Email"
            className="text-white placeholder:text-white bg-transparent border-2 border-emerald-600 text-xl py-3 px-6 rounded-full outline-none w-80"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter your Password"
            className="text-white placeholder:text-white bg-transparent border-2 border-emerald-600 text-xl py-3 px-6 rounded-full outline-none w-80"
          />
          <button
            type="submit"
            className="bg-emerald-600 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-emerald-700 transition"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-white text-sm">
          <p>Admin: admin@gmail.com / 123</p>
          <p>Employee: saaliq@gmail.com / 123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;