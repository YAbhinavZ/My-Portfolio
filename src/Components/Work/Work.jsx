import React from "react";
import { projects } from "../../constants";

function Work() {
  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-gray-950"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          PROJECTS
        </h2>
        <div className="w-24 h-1 bg-[#00ffff] mx-auto mt-2" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A selection of my recent work, showcasing full‑stack development and
          problem‑solving skills.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden border border-[#00ffff]/15 hover:border-[#00ffff]/40 transition-all duration-300 flex flex-col"
          >
            {/* Project Image */}
            {project.image && (
              <div className="w-full h-52 sm:h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            {/* Project Content */}
            <div className="p-6 sm:p-7 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs sm:text-sm text-[#00ffff] bg-[#00ffff]/10 border border-[#00ffff]/30 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="mt-auto flex gap-4 flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-sm sm:text-base font-semibold text-black hover:shadow-lg transition-all duration-300"
                    style={{
                      background: "linear-gradient(90deg, #00ffff, #00ccff)",
                    }}
                  >
                    View Code
                  </a>
                )}
                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-sm sm:text-base font-semibold border border-[#00ffff]/60 text-[#00ffff] hover:bg-[#00ffff]/10 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;