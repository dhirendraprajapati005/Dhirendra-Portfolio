import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import About from './About.jsx';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-40 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-cyan-300 drop-shadow-[0_0_15px_#00ffff]"
          data-aos="fade-up"
        >
          Welcome to My Portfolio
        </h1>
        <p
          className="mt-6 text-base sm:text-lg md:text-xl text-cyan-100 max-w-2xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Crafting beautiful and functional web experiences.
          <br />
          We don’t just build websites — we build lasting connections.
        </p>

        <button
          onClick={() => navigate('/project')}
          className="mt-8 inline-block px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full shadow-lg hover:bg-cyan-400 transition-all duration-300"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Explore My Work
        </button>
      </main>

      {/* About Section */}
      <section data-aos="fade-up" className="px-4 py-12">
        <About />
      </section>
    </div>
  );
};

export default Home;
