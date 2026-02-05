import React from "react";
import { education } from "../../constants";

function Education() {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-black"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EDUCATION
        </h2>
        <div className="w-24 h-1 bg-[#00ffff] mx-auto mt-2" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey and qualifications that shaped my foundation.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center vertical line on desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00ffff]/40 to-transparent pointer-events-none" />

        <div className="space-y-10">
          {education.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row items-stretch"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-[#00ffff] shadow-[0_0_16px_rgba(0,255,255,0.8)] border-4 border-black" />
                </div>

                {/* Connector for mobile */}
                {index !== education.length - 1 && (
                  <div className="md:hidden absolute left-4 top-full h-6 border-l border-dashed border-[#00ffff]/40" />
                )}

                {/* Card wrapper for left/right alignment */}
                <div
                  className={`mt-4 md:mt-0 w-full md:w-1/2 ${
                    isLeft ? "md:pr-10 md:items-end md:flex" : "md:pl-10 md:ml-auto"
                  }`}
                >
                  <div className="relative flex flex-col md:flex-row gap-5 bg-gray-900/80 border border-[#00ffff]/20 rounded-2xl p-6 sm:p-7 hover:border-[#00ffff]/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all duration-300">
                    {/* Accent bar on side */}
                    <div
                      className="hidden md:block absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#00ffff] via-[#00ffff]/40 to-transparent rounded-full opacity-60"
                      style={{ [isLeft ? "right" : "left"]: "-0.25rem" }}
                    />

                    {/* Logo */}
                    <div className="flex-shrink-0 flex justify-center md:justify-start">
                      {item.img && (
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center border border-gray-700">
                          <img
                            src={item.img}
                            alt={item.school}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 max-w-xl">
                      <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white">
                          {item.school}
                        </h3>
                        <span className="text-xs sm:text-sm text-[#00ffff] bg-[#00ffff]/10 rounded-full px-3 py-1">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base font-medium mb-2">
                        {item.degree}
                      </p>
                      {item.grade && (
                        <p className="text-gray-400 text-sm sm:text-base mb-4">
                          <span className="font-semibold text-[#00ffff]">
                            Grade:{" "}
                          </span>
                          {item.grade}
                        </p>
                      )}
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed md:leading-7">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;