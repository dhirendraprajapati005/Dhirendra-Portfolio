import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <button onClick={() => navigate("/")}> 
          <h1 className="text-2xl font-bold tracking-wide">Portfolio</h1>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><button onClick={() => navigate("/")} className="hover:text-cyan-400 transition">Home</button></li>
          <li><button onClick={() => navigate("/project")} className="hover:text-cyan-400 transition">Projects</button></li>
          <li><button onClick={() => navigate("/contact")} className="hover:text-cyan-400 transition">Contact</button></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-20" onClick={handleClick}>
          {click ? (
            <FaTimes size={22} className="text-white" />
          ) : (
            <FaBars size={22} className="text-white" />
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        <ul
          className={`absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center gap-6 py-6 font-medium md:hidden transition-all duration-300 ${
            click ? "block" : "hidden"
          }`}
        >
          <li onClick={() => { setClick(false); navigate("/"); }}>Home</li>
          <li onClick={() => { setClick(false); navigate("/project"); }}>Projects</li>
          <li onClick={() => { setClick(false); navigate("/contact"); }}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
