import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import AboutSection from '../components/AboutSection.jsx';


const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gray-900 text-white">
     
      <div className="absolute inset-0 -z-10">
    
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-40 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-cyan-300 drop-shadow-[0_0_15px_#00ffff] animate-fadeIn">
          Welcome to My Portfolio
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-cyan-100 max-w-2xl leading-relaxed animate-fadeIn delay-300">
          Crafting beautiful and functional web experiences.<br />
          We don’t just build websites — we build lasting connections.
        </p>

        <a 
          href="/project"
          className="mt-8 inline-block px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full shadow-lg hover:bg-cyan-400 transition-all duration-300 animate-fadeIn delay-500"
        >
          Explore My Work
        </a>
      </main>

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
