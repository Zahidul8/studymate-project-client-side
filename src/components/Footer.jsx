import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import logo from '../assets/logo.jpg';
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer >
        <div className="footer mx-auto sm:footer-horizontal max-w-6xl text-white p-10 ">

      {/* Project Info */}
      <nav>
        <div className="text-gray-300 flex flex-col md:flex-row md:items-center gap-2">
          <Link to='/'><img src={logo} className="w-[55px] h-[55px] rounded-full" alt="" /></Link>
         <p>
           <span className="text-2xl font-bold">StudyMate</span> — Find Your Perfect Study Partner
         </p>
        </div>
        <p className="max-w-[450px] text-sm ">
          StudyMate helps students connect with the perfect study partners. Find classmates who share your goals,
          subjects, and schedule — making learning more engaging, productive, and fun.
        </p>
      </nav>

     
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>

      
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          {/* Twitter */}
         <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className=""
          >
          <BsTwitterX size={25} />
        </a>

         
          <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-transparent"
          >
            <BsInstagram size={25} />
         
        </a>

     
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={25} />
            
          </a>

          
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={25} />
           
          </a>
        </div>
      </nav>

              </div>
      
      <div className="footer-center text-center mt-8 pb-4 w-full border-t border-base-100 text-white pt-4 text-sm ">
        StudyMate © 2025 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
