import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import LoadingSpinner from "../components/LoadingSpinner";
import { imageUploadCloudinary } from "../utils";

const Register = () => {
    const [toggle, setToggle] = useState();
    const [error, setError] = useState('')
    const {createUser,signOutUser,updataUserProfile,signInWithGoogle,loading,setLoading} = useAuth();
     const location = useLocation();
  const navigate = useNavigate();


    // const handleCreateUser = (e) => {
    //   e.preventDefault();
    //   const displayName = e.target.name.value;
    //   const email = e.target.email.value;
    //   const imageFile = e.target.photo.files[0];
    //   const password = e.target.password.value;
    //   console.log('create user', displayName, email, password);
    
    //   const hasUppercase = /[A-Z]/;
    //   const hasLowercase =  /[a-z]/;

    //   setError('')
    //   if (password.length < 6) {
    //     setError('Password must be at least 6 characters long.')
    //     return 
    //   } else if (!hasUppercase.test(password)) {
    //     setError("Password must contain at least one uppercase letter.")
    //     return;
    //   } else if (!hasLowercase.test(password)) {
    //     setError("Password must contain at least one lowercase letter.")
    //     return;
    //   }


    //   createUser(email, password)
    //   .then(result => {
    //    updataUserProfile(displayName, photoURl)
    //    .then()
    //    .catch(error => {
    //     console.log(error.message);
        
    //    })
    //     signOutUser()
    //     .then()
    //     .catch(error => {
    //       console.log(error.message);
          
    //     })
    //     e.target.reset();
    //      Swal.fire({
    //       position: "top-center",
    //       icon: "success",
    //       title: "User registered successfully",
    //       showConfirmButton: false,
    //       timer: 2000
    //     });
    //     navigate('/');
        
    //   })
    //   .catch(error => {
    //     console.log(error.message);
    //     let message = '';
    //     if (error.code === "auth/email-already-in-use") {
    //       message = "This email is already registered. Please use a different email or try logging in."
    //     } else {
    //       message = "Registration failed. Please try again later.";
    //     }
    //        Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: message,
    //     });
        
        
    //   })
    //    .finally(() => {
    //     setLoading(false);
    //   })
      
    // }

    const handleCreateUser = async (e) => {
  e.preventDefault();

  const displayName = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const imageFile = e.target.photo.files[0];

  const hasUppercase = /[A-Z]/;
  const hasLowercase = /[a-z]/;

  setError("");

  if (password.length < 6) {
    setError("Password must be at least 6 characters long.");
    return;
  } else if (!hasUppercase.test(password)) {
    setError("Password must contain at least one uppercase letter.");
    return;
  } else if (!hasLowercase.test(password)) {
    setError("Password must contain at least one lowercase letter.");
    return;
  }

  try {
    setLoading(true);

    // 1️⃣ Upload image to Cloudinary (if user selected one)
    let photoURL = "";
    if (imageFile) {
      photoURL = await imageUploadCloudinary(imageFile);
    }

    // 2️⃣ Create user
    const result = await createUser(email, password);

    // 3️⃣ Update profile
    await updataUserProfile(displayName, photoURL);

    // 4️⃣ Optional sign out
    await signOutUser();

    e.target.reset();

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "User registered successfully",
      showConfirmButton: false,
      timer: 2000,
    });

    navigate("/");
  } catch (error) {
    console.error(error.message);

    let message = "Registration failed. Please try again later.";
    if (error.code === "auth/email-already-in-use") {
      message =
        "This email is already registered. Please use a different email or try logging in.";
    }

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  } finally {
    setLoading(false);
  }
};


  const handleSignInWithGoogle = () => {

    const timeout = setTimeout(() => {
      setLoading(false);
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


   if (loading) {
   return <LoadingSpinner></LoadingSpinner>
    
   }
  return (
    <div className=" flex items-center justify-center">
      <title>StudyMate-Register</title>
      <div className="w-full my-10 max-w-md bg-white shadow-2xl rounded-2xl p-4 sm:p-8">
        {/* Title */}
        <h2 className="auth-title font-bold text-center text-gray-800 mb-6">
          Join <span className="text-indigo-600">StudyMate</span> Today
        </h2>

        {/* Registration Form */}
        <form onSubmit={handleCreateUser} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text text-gray-800 font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              name='name'
              placeholder="Enter your full name"
              className="input input-bordered w-full border-gray-600 text-gray-800 bg-white"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text text-gray-800 font-semibold">Email</span>
            </label>
            <input
              type="email"
              name='email'
              placeholder="Enter your email"
              className="input input-bordered w-full border-gray-600 text-gray-800 bg-white"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">
              <span className="label-text text-gray-800 font-semibold">Photo URL</span>
            </label>
            <input
              type="file"
              name='photo'
              placeholder="Enter your photo URL"
              className="file-input input-bordered w-full border-gray-600 text-gray-800 bg-white"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text text-gray-800 font-semibold">Password</span>
            </label>
           <div className="relative">
             <input
              type={toggle? 'text': 'password'}
              name='password'
              placeholder="Enter your password"
              className="input input-bordered w-full border-gray-600 text-gray-800 bg-white"
              required
            />
             <span onClick={() => setToggle(!toggle)} className="absolute top-3 right-5 z-10">
                {
                    toggle?<FaEyeSlash className="text-gray-800"/>: <FaEye className="text-gray-800"/>
                }
            </span>
           </div>
           <p className="text-[14px] text-red-500 mt-2">{error}</p>
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
          <div className=" text-center my-3 text-gray-800">OR</div>

        {/* Google Sign-In */}
        <button
          className="btn btn-outline w-full flex text-gray-800 items-center justify-center gap-2 hover:bg-gray-100"
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
