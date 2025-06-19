import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
    <div className="relative min-h-screen flex flex-col overflow-hidden text-white bg-gray-900">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Dhirendra Portfolio | Web Developer</title>
        <meta
          name="description"
          content="Welcome to Dhirendra's portfolio. Explore projects, skills, and design work that showcase beautiful and functional web experiences."
        />
      </Helmet>

      {/* Hero Section */}
      <main
        className="flex-grow flex flex-col justify-center items-center px-4 py-32 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        role="main"
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-cyan-300 drop-shadow-[0_0_15px_#00ffff]"
          data-aos="fade-up"
        >
          Welcome to My Portfolio
        </h1>
        <p
          className="mt-6 text-base sm:text-lg md:text-xl text-cyan-200 max-w-2xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Crafting beautiful and functional web experiences.
          <br />
          We don’t just build websites — we build lasting connections.
        </p>

        <button
          onClick={() => navigate('/project')}
          aria-label="Explore My Work Section"
          className="mt-8 inline-block px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full shadow-lg hover:bg-cyan-400 transition-all duration-300"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Explore My Work
        </button>
      </main>

      {/* About Section */}
      <section data-aos="fade-up" className="px-4 py-16 bg-gray-950" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="about-heading" className="sr-only">About Me</h2>
          <About />
        </div>
      </section>
    </div>
  );
};

export default Home;
