import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";

const Register = () => {
    const [toggle, setToggle] = useState();
    const {createUser,signOutUser,updataUserProfile,signInWithGoogle} = useAuth();


    const handleCreateUser = (e) => {
      e.preventDefault();
      const displayName = e.target.name.value;
      const email = e.target.email.value;
      const photoURl = e.target.photo.value;
      const password = e.target.password.value;
      console.log('create user', displayName, email, photoURl, password);


      createUser(email, password)
      .then(result => {
       updataUserProfile(displayName, photoURl)
       .then()
       .catch(error => {
        console.log(error.message);
        
       })
        signOutUser()
        .then()
        .catch(error => {
          console.log(error.message);
          
        })
        e.target.reset();
        
      })
      .catch(error => {
        console.log(error.message);
        
      })
      
    }


        const handleSignInWithGoogle = () => {
      signInWithGoogle()
      .then(result => {
        console.log(result.user);
        
      })
      .catch(error => {
        console.log(error.message);
        
      })
     
      

    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#53629E] to-[#53629E] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Join <span className="text-indigo-600">StudyMate</span> Today
        </h2>

        {/* Registration Form */}
        <form onSubmit={handleCreateUser} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              name='name'
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
              name='email'
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
              type="text"
              name='photo'
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
           <div className="relative">
             <input
              type={toggle? 'text': 'password'}
              name='password'
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
             <span onClick={() => setToggle(!toggle)} className="absolute top-3 right-5 z-10">
                {
                    toggle?<FaEyeSlash />: <FaEye />
                }
            </span>
           </div>
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
          onClick={handleSignInWithGoogle}
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
