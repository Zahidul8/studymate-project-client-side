import React from "react";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#53629E] to-[#53629E] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Join <span className="text-indigo-600">StudyMate</span> Today
        </h2>

        {/* Registration Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="url"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Sign-In */}
        <button
          className="btn btn-outline w-full flex items-center justify-center gap-2 hover:bg-gray-100"
          onClick={() => alert("Google Sign-In clicked!")}
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>

        {/* Login link */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
