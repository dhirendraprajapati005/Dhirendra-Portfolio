import React from "react";
import {
  FaHome,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-gray-700 pb-6">
        {/* Left Section */}
        <div>
          <div className="flex items-start gap-4 mb-6">
            <FaHome size={30} className="text-white mt-1" />
            <div>
              <p className="text-sm">Work Address: DDU University, Gorakhpur, UP</p>
              <p className="text-sm">Home Address: Gorakhpur</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMailBulk size={30} className="text-white" />
            <p className="text-sm">prajapatidhirendra005@gmail.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Who is Dhirendra?</h4>
          <p className="text-sm mb-4 text-gray-300">
            I'm Dhirendra Prajapati, a student at DDU University, Gorakhpur. I’m passionate about web development and constantly learning new skills.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook size={26} className="hover:text-blue-500 transition" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin size={26} className="hover:text-blue-400 transition" />
            </a>
            <a href="https://www.telegram.com" target="_blank" rel="noreferrer">
              <FaTelegram size={26} className="hover:text-blue-300 transition" />
            </a>
            <a href="https://www.instagram.com/dhirendraprajapati_005/" target="_blank" rel="noreferrer">
              <FaInstagram size={26} className="hover:text-pink-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Dhirendra Prajapati. All rights reserved.</p>
        <Link to="/privacy-policy" className="hover:text-white transition">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
