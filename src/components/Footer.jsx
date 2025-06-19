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
    <footer className="bg-gray-900 text-white pt-10 pb-6" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-gray-700 pb-6">
        {/* Left Section */}
        <div>
          <div className="flex items-start gap-4 mb-6">
            <FaHome size={24} className="text-cyan-400 mt-1" />
            <div>
              <p className="text-sm text-gray-300">
                <strong>Work:</strong> DDU University, Gorakhpur, UP
              </p>
              <p className="text-sm text-gray-300">
                <strong>Home:</strong> Gorakhpur, Uttar Pradesh
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMailBulk size={24} className="text-cyan-400" />
            <a
              href="mailto:prajapatidhirendra005@gmail.com"
              className="text-sm text-gray-300 hover:underline"
            >
              prajapatidhirendra005@gmail.com
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-cyan-300">
            Who is Dhirendra?
          </h4>
          <p className="text-sm mb-4 text-gray-300">
            I'm Dhirendra Prajapati, a student at DDU University, Gorakhpur. I’m passionate about web development and always eager to learn and build better digital experiences.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://www.telegram.com"
              aria-label="Telegram"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FaTelegram size={22} />
            </a>
            <a
              href="https://www.instagram.com/dhirendraprajapati_005/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Dhirendra Prajapati. All rights reserved.
        </p>
        <Link
          to="/privacy-policy"
          className="mt-2 md:mt-0 hover:text-white transition"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
