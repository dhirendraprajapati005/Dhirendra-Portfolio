import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.webp';
import Skills from '../components/Skills.jsx';
import Projects from './Project.jsx';

const About = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-950 text-white py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Helmet>
        <title>About | Dhirendra Portfolio</title>
        <meta
          name="description"
          content="Learn more about Dhirendra Prajapati, a full-stack MERN developer passionate about building impactful digital experiences."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Left - Profile Image with Quote */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center text-center"
        >
          <img
            loading='lazy'
            src={profileImg}
            alt="Dhirendra"
            className="rounded-2xl w-full max-w-xs aspect-square object-cover object-top shadow-lg hover:scale-105 transition duration-500 mb-4"
          />

          <figure>
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="italic text-sm text-white max-w-xs"
            >
              “Code is like humor. When you have to explain it, it’s bad.”
            </motion.blockquote>
            <figcaption className="block mt-2 text-xs text-white">— Cory House</figcaption>
          </figure>
        </motion.div>

        {/* Right - About Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
        >
          <h2 className="text-3xl font-extrabold mb-4 text-blue-400">
            About Me
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-300">
            I’m <strong className="text-white">Dhirendra Prajapati</strong>, a passionate Full-Stack Developer and BCA final-year student from DDU University, Gorakhpur.
            I enjoy solving real-world problems and building powerful apps with the <strong>MERN Stack</strong>.
          </p>
          <p className="mb-6 text-sm leading-relaxed text-gray-300">
            From crafting beautiful frontend designs to building secure backends, I specialize in:
            user authentication, REST APIs, deploying apps on cloud platforms, blogging, and finance-based content creation.
          </p>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.a
              aria-label="Download Dhirendra's Resume"
              href="https://drive.google.com/uc?export=download&id=1kvFqU7XGChW6lT19rY7Oz_ICZ1JYIt5y"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              🚀 Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <Skills />

      {/* Projects Preview */}
      <Projects />
    </motion.div>
  );
};

export default About;
