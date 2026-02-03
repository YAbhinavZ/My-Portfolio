// src/components/Skills/Skills.jsx
import React from "react";
import { SKillInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#00ffff] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-6 lg:gap-8 py-10 justify-center">
      {SKillInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900/80 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 w-full sm:w-[48%] lg:w-[45%] rounded-2xl border border-[#00ffff]/20 
          hover:border-[#00ffff]/40 transition-all duration-300"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
            {category.skills.map((skill) => (
              <Tilt
                key={skill.name}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div
                  className="flex flex-col items-center justify-center space-y-2 bg-gray-800/50 border border-gray-700 rounded-2xl py-3 px-2 sm:py-4 sm:px-3 text-center 
                  hover:border-[#00ffff]/50 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;