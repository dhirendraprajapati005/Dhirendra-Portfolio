import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';

import myproject1 from '../assets/myproject1.png';
import myproject2 from '../assets/myproject2.png';
import myproject3 from '../assets/myproject3.png';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
      link: '#', // Placeholder
    },
  ];

  const filteredProjects = projectList.filter(project =>
    project.title.toLowerCase().includes(searchTerm) ||
    project.desc.toLowerCase().includes(searchTerm) ||
    project.tech.some(t => t.toLowerCase().includes(searchTerm))
  );

  return (
    <section
      className="bg-gray-950 text-white py-16 px-4 min-h-screen"
      aria-labelledby="projects-heading"
    >
      <Helmet>
        <title>Projects | Dhirendra Portfolio</title>
        <meta
          name="description"
          content="Explore Dhirendra's MERN projects including authentication systems, AI tools, and file upload apps."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          id="projects-heading"
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          My Projects
        </h2>

        {/* Search Input */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-5 shadow-lg hover:shadow-cyan-500/30 transition duration-300 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <img
                  src={project.img}
                  alt={`Screenshot of ${project.title}`}
                  className="rounded-md mb-4 w-full object-cover h-48"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-200 mb-4 flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-cyan-600 text-white px-2 py-1 rounded"
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
                    className="mt-auto inline-block text-center bg-cyan-500 hover:bg-cyan-600 px-4 py-2 text-sm rounded-md transition"
                    aria-label={`View ${project.title}`}
                  >
                    View Project
                  </a>
                ) : (
                  <span
                    className="mt-auto inline-block text-center bg-gray-700 px-4 py-2 text-sm rounded-md cursor-not-allowed opacity-50"
                    aria-disabled="true"
                    title="Coming Soon"
                  >
                    Coming Soon
                  </span>
                )}
              </div>
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
