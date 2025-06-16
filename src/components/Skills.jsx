import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress } from 'react-icons/si';

const skillsData = {
  Frontend: [
    { name: "React", level: 78, color: "bg-blue-500", icon: <FaReact /> },
    { name: "HTML", level: 90, color: "bg-orange-500", icon: <FaHtml5 /> },
    { name: "CSS", level: 85, color: "bg-sky-400", icon: <FaCss3Alt /> },
  ],
  Backend: [
    { name: "Node.js", level: 65, color: "bg-green-500", icon: <FaNodeJs /> },
    { name: "Express.js", level: 60, color: "bg-lime-500", icon: <SiExpress /> },
  ],
  Database: [
    { name: "MongoDB", level: 70, color: "bg-pink-500", icon: <SiMongodb /> },
    { name: "MySQL", level: 55, color: "bg-yellow-400", icon: <SiMysql /> },
  ],
};

const Skills = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">My Skills</h3>

      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="mb-10">
          <h4 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">{category}</h4>
          <div className="space-y-4">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                  <span className="flex items-center gap-2">{skill.icon} {skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
