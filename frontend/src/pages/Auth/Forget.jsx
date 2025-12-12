import React, { useState } from "react";
import { Link } from "react-router-dom";

const Forget = () => {
  const [email, setEmail] = useState("");

  const handleForgot = (e) => {
    e.preventDefault();
    // TODO: Call backend API
    console.log({ email });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        className="bg-white p-10 rounded-2xl shadow-lg w-96 space-y-6"
        onSubmit={handleForgot}
      >
        <h2 className="text-3xl font-bold text-center">Forgot Password</h2>
        <p className="text-center text-gray-500">
          Enter your email to receive a password reset link
        </p>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Link to="/verify-email">
          <button className="w-full bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:opacity-90">
            Send Reset Link
          </button>
        </Link>

        <p className="text-sm text-center text-gray-500">
          Remember password?{" "}
          <Link to="/login" className="text-purple-500 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Forget;
