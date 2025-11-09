import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {

  const [toggle, setToggle] = useState(false);
  const { signInWithEmail, signInWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignInUserWithEmail = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log('signIn user', email, password);

    signInWithEmail(email, password)
      .then(result => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User login successfully",
          showConfirmButton: false,
          timer: 1500
        });

        navigate(location?.state || '/')
        e.target.reset();

      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please provide valid email and password!",
        });
        console.log(error.message);

      })
  }

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user);
         Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User login successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(location?.state || '/')

      })
      .catch(error => {
        console.log(error.message);
            Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });

      })



  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#53629E] to-[#53629E] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back to <span className="text-indigo-600">StudyMate</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSignInUserWithEmail} className="space-y-4">
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <div className="relative">
              <input
                type={toggle ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              <span onClick={() => setToggle(!toggle)} className="absolute top-3 right-5 z-10">
                {
                  toggle ? <FaEyeSlash /> : <FaEye />
                }
              </span>

            </div>
            <div className="text-right mt-2">
              <Link
                to="/forgot-password"
                className="text-sm text-indigo-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        <button
          className="btn btn-outline w-full flex items-center justify-center gap-2 hover:bg-gray-100"
          onClick={handleSignInWithGoogle}
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>


        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
