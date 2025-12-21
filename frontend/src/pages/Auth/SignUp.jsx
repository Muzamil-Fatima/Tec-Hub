import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Utils/api.js";
import axios from "axios";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword)
      return toast.error("All fields are required");
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters Long");
    if (password !== confirmPassword)
      return toast.error("Passwords do not match!");
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/`, {
        name,
        email,
        password,
      });
      if (res.data.success) {
        toast.success(`Welcome ${name}!`);
        localStorage.setItem("user", JSON.stringify({ name, email }));
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
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
          placeholder="name"
          className="w-full p-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
