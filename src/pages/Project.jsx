import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import myproject1 from '../assets/myproject1.webp';
import myproject2 from '../assets/myproject2.webp';
import myproject3 from '../assets/myproject3.webp';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const projectList = [
    {
      img: myproject1,
      title: 'MERN Auth System',
      desc: 'A complete authentication system using MERN stack with JWT, OTP, and email verification.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: 'https://github.com/dhirendraprajapati005/mern-auth',
    },
    {
      img: myproject2,
      title: 'File Upload App',
      desc: 'Upload and download vector files. Only logged-in users can access download links.',
      tech: ['React', 'Tailwind', 'Node', 'Mongoose'],
      link: 'https://yourdomain.com',
    },
    {
      img: myproject3,
      title: 'AI Chatbot Assistant',
      desc: 'AI-based emotional companion assistant using speech-to-text and GPT integration.',
      tech: ['React', 'OpenAI', 'Node.js', 'Socket.io'],
      link: '#',
    },
  ];

  const filteredProjects = projectList.filter(project =>
    project.title.toLowerCase().includes(searchTerm) ||
    project.desc.toLowerCase().includes(searchTerm) ||
    project.tech.some(t => t.toLowerCase().includes(searchTerm))
  );

  return (
    <section className="relative bg-gray-950 text-white py-16 px-4 min-h-screen overflow-hidden" aria-labelledby="projects-heading">
      <Helmet>
        <title>Projects | Dhirendra Portfolio</title>
        <meta name="description" content="Explore MERN stack projects by Dhirendra including authentication systems, AI tools, and secure file upload apps." />
        <meta property="og:title" content="Projects | Dhirendra Portfolio" />
        <meta property="og:description" content="Explore Dhirendra's top MERN stack and AI-based projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dhirendraportfolio.store/projects" />
      </Helmet>

      <div className="absolute top-[-100px] left-[50%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] transform -translate-x-1/2 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          id="projects-heading"
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
        >
          My Projects
        </h2>

        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search by title, description or tech..."
            aria-label="Search Projects"
            className="w-full max-w-md px-4 py-2 bg-gray-800 placeholder-gray-400 text-white rounded-md focus:ring-2 focus:ring-cyan-500 outline-none transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{
                  rotateX: 5,
                  rotateY: -5,
                  scale: 1.02,
                  boxShadow: "0px 20px 50px rgba(0, 255, 255, 0.15)",
                }}
                className="bg-gray-900/60 backdrop-blur-md border border-gray-700/40 rounded-2xl p-6 transition-all duration-300 ease-in-out flex flex-col perspective-1000"
              >
                <img
                  loading="lazy"
                  src={project.img}
                  alt={`Screenshot of ${project.title}`}
                  className="rounded-xl mb-4 w-full object-cover h-48 shadow-lg"
                />
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 flex-grow tracking-wide leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link !== '#' ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-block text-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-5 py-2 text-sm rounded-full font-semibold transition shadow-md"
                    aria-label={`View ${project.title}`}
                  >
                    🚀 View Project
                  </a>
                ) : (
                  <span
                    className="mt-auto inline-block text-center bg-gray-700 px-5 py-2 text-sm rounded-full cursor-not-allowed opacity-50"
                    aria-disabled="true"
                    title="Coming Soon"
                  >
                    ⏳ Coming Soon
                  </span>
                )}
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">
              No projects match your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
