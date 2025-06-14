import React from "react";
import profileImg from "../assets/profile.jpg"; 

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image + Quote */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative rounded-full w-64 h-64 overflow-hidden border-4 border-white">
            <img
              src={profileImg}
              alt="Profile"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 bg-yellow-400 p-4 w-full flex items-center gap-2 text-black">
              <span className="text-4xl font-bold">“</span>
              <p className="text-sm">"I turn ideas into interactive, responsive, and beautiful experiences."</p>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-4">Dhirendra Profile</h2>
          <h3 className="text-2xl font-semibold text-blue-400">Portfolio</h3>
          <p className="text-gray-300 mb-4">MERN Stack Developer</p>
          <h4 className="text-xl font-semibold text-blue-400 mb-2">Skills</h4>
          <p className="text-gray-300 mb-6">
           Here are my Powerfull Tools..........
          </p>

          {/* Skills */}
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-semibold">React</span>
              <span className="font-semibold">78%</span>
            </div>
            <div className="w-full bg-gray-600 h-3 rounded-full">
              <div className="bg-blue-500 h-3 rounded-full" style={{ width: "78%" }}></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-semibold">Node.js</span>
              <span className="font-semibold">65%</span>
            </div>
            <div className="w-full bg-gray-600 h-3 rounded-full">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: "65%" }}></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-semibold">MongoDB</span>
              <span className="font-semibold">70%</span>
            </div>
            <div className="w-full bg-gray-600 h-3 rounded-full">
              <div className="bg-pink-500 h-3 rounded-full" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
