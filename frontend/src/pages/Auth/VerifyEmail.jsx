import React, { useState } from "react";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        className="bg-white p-10 rounded-2xl shadow-lg w-96 space-y-6"
        onSubmit={handleVerify}
      >
        <h2 className="text-3xl font-bold text-center">Verify Email</h2>
        <p className="text-center text-gray-500">
          Enter the OTP sent to your email
        </p>
        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full p-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <Link to="/">
          <button className="w-full bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:opacity-90">
            Verify
          </button>
        </Link>
      </form>
    </div>
  );
};

export default VerifyEmail;
