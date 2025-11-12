import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {

  const [toggle, setToggle] = useState(false);
  const { signInWithEmail, signInWithGoogle,setLoading } = useAuth();
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
          title: "User login successfull",
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
        .finally(() => {
      setLoading(false);
    })
  }

  const handleSignInWithGoogle = () => {

    const timeout = setTimeout(() =>{
      setLoading(false)
    }, 1200)


    signInWithGoogle()
      .then(result => {
        console.log(result.user);
         Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User login successfull",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(location?.state || '/')

      })
      .catch(error => {
        console.log(error.message);
        
      })
       .finally(() => {
      clearTimeout(timeout);
      setLoading(false);
    })



  }
  return (
    <div className="flex items-center justify-center">
      <title>StudyMate-Login</title>
      <div className="w-full my-10  max-w-md bg-white shadow-2xl rounded-2xl p-4 sm:p-8">
        {/* Title */}
        <h2 className="auth-title font-bold text-center text-gray-800 mb-6">
          Welcome Back to <span className="text-indigo-600">StudyMate</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSignInUserWithEmail} className="space-y-4">
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text text-gray-800 font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered border-gray-600 text-gray-800 bg-white w-full"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text text-gray-800 font-semibold">Password</span>
            </label>
            <div className="relative">
              <input
                type={toggle ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered border-gray-600 text-gray-800 bg-white w-full"
                required
              />
              <span onClick={() => setToggle(!toggle)} className="absolute top-3 right-5 z-10">
                {
                  toggle ? <FaEyeSlash className="text-gray-800"/> : <FaEye className="text-gray-800"/>
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
        <div className=" text-center my-3 text-gray-800">OR</div>

        <button
          className="btn btn-outline w-full flex text-gray-800 items-center justify-center gap-2 hover:bg-gray-100"
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
