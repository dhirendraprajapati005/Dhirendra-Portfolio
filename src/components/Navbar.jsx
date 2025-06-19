import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    setScrolled(window.scrollY >= 100);
  };

  const toggleMenu = () => setClick(!click);

  const handleNavigate = (path) => {
    setClick(false);
    navigate(path);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <button onClick={() => navigate("/")} className="text-2xl font-bold tracking-wider text-cyan-400 hover:text-white transition">
          D-Portfolio
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-medium">
          {["/", "/about", "/project", "/contact"].map((path, idx) => (
            <li key={idx}>
              <button
                onClick={() => navigate(path)}
                className="hover:text-cyan-400 transition px-2 py-1"
              >
                {path === "/" ? "Home" : path.replace("/", "").replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          {click ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {click && (
            <motion.ul
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              exit={{ y: -200 }}
              transition={{ duration: 0.4 }}
              className="absolute top-16 left-0 w-full bg-gray-800/95 backdrop-blur-sm text-white flex flex-col items-center gap-6 py-6 font-medium md:hidden"
            >
              {["/", "/about", "/project", "/contact"].map((path, idx) => (
                <li
                  key={idx}
                  onClick={() => handleNavigate(path)}
                  className="hover:text-cyan-400 transition cursor-pointer"
                >
                  {path === "/" ? "Home" : path.replace("/", "").replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
