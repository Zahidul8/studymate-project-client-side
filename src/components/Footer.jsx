import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from "../assets/logo.jpg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer mx-auto sm:footer-horizontal max-w-6xl text-white p-10">

        {/* Project Info */}
        <nav>
          <div className="text-gray-300 flex flex-col md:flex-row md:items-center gap-2">
            <Link to="/">
              <img src={logo} className="w-[55px] h-[55px] rounded-full" alt="StudyMate Logo" />
            </Link>
            <p>
              <span className="text-2xl font-bold">StudyMate</span> — Find Your Perfect Study Partner
            </p>
          </div>

          <p className="max-w-[450px] text-sm mt-2">
            StudyMate helps students connect with compatible study partners.
            Learn together, share resources, and stay motivated throughout your academic journey.
          </p>
        </nav>

        {/* Quick Links */}
        <nav>
          <h6 className="footer-title">Explore</h6>
          <Link to="/aboutUs" className="link link-hover">About Us</Link>
          <Link to="/findPartners" className="link link-hover">Find Study Partner</Link>
          <Link to="/resources" className="link link-hover">Study Resources</Link>
        </nav>

    
        {/* Contact Info */}
        <nav>
          <h6 className="footer-title">Contact</h6>
          <p className="flex items-center gap-2 text-sm">
            <MdEmail /> support@studymate.com
          </p>
          <p className="flex items-center gap-2 text-sm">
            <MdPhone /> +880 1234-567890
          </p>
          <p className="flex items-center gap-2 text-sm">
            <MdLocationOn /> Dhaka, Bangladesh
          </p>
        </nav>

        {/* Social */}
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <BsTwitterX size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <BsInstagram size={22} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="footer-center text-center w-full border-t border-white/20 text-gray-300 py-4 text-sm">
        © 2025 StudyMate — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
