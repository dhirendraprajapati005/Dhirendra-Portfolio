import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import frontendAnim from '../assets/lottie/frontend.json';
import backendAnim from '../assets/lottie/backend.json';
import databaseAnim from '../assets/lottie/database.json';
import { Helmet } from 'react-helmet';

const skillTabs = {
  Frontend: [
    { name: 'React', level: '78%', title: 'React.js UI Library' },
    { name: 'HTML5', level: '90%', title: 'Semantic HTML markup' },
    { name: 'CSS3', level: '85%', title: 'Modern CSS styling' },
  ],
  Backend: [
    { name: 'Node.js', level: '65%', title: 'Node runtime' },
    { name: 'Express.js', level: '60%', title: 'Express.js framework' },
  ],
  Database: [
    { name: 'MongoDB', level: '70%', title: 'Mongo NoSQL DB' },
    { name: 'MySQL', level: '55%', title: 'Relational SQL DB' },
  ],
};

const lotties = {
  Frontend: frontendAnim,
  Backend: backendAnim,
  Database: databaseAnim,
};

const Skills = () => {
  const [active, setActive] = useState('Frontend');

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 to-black py-16 text-white">
      <Helmet>
        <title>My Skills | Dhirendra Portfolio</title>
        <meta
          name="description"
          content="Explore Dhirendra's skills in frontend development, backend technologies, and databases including React, Node.js, MongoDB, and more."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-cyan-400 mb-10">My Tech Stack</h1>

        <nav aria-label="Skill Categories" className="flex justify-center flex-wrap gap-4 mb-12">
          {Object.keys(skillTabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              aria-label={`Show ${tab} skills`}
              className={`px-6 py-2 rounded-full font-semibold border-2 transition text-sm sm:text-base ${
                active === tab
                  ? 'bg-cyan-600 border-cyan-400 text-white shadow-lg'
                  : 'border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Lottie Animation */}
          <figure className="mx-auto w-64 md:w-96">
            <Lottie animationData={lotties[active]} loop aria-label={`${active} animation`} />
          </figure>

          {/* Skill Bars */}
          <div className="space-y-6 text-left">
            {skillTabs[active].map((skill) => (
              <article
                key={skill.name}
                title={skill.title}
                className="relative bg-gray-800 bg-opacity-70 p-5 rounded-xl shadow-md hover:shadow-cyan-500/30 transition-transform transform hover:-translate-y-1"
              >
                <header className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-cyan-300">{skill.name}</h3>
                  <span className="text-sm text-gray-300">{skill.level}</span>
                </header>
                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-500 rounded-full transition-all"
                    style={{ width: skill.level }}
                    role="progressbar"
                    aria-valuenow={parseInt(skill.level)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
