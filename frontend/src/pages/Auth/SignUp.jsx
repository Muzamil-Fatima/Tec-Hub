import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // TODO: Call backend API
    console.log({ username, email, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        className="bg-white p-10 rounded-2xl shadow-lg w-96 space-y-6"
        onSubmit={handleSignup}
      >
        <h2 className="text-3xl font-bold text-center">
          Sign Up for{" "}
          <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            TecHub
          </span>
        </h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="w-full bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:opacity-90">
          Sign Up
        </button>
        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-500 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
