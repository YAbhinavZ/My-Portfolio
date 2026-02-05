import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import mypfp from "../../assets/finalPfp.jpeg";

function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans pt-0 min-h-screen flex items-center"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-8 md:gap-12">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Abhinav Sharma
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#00ffff] leading-tight min-h-12">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Aspiring Developer",
                1000,
                "Software Developer",
                1000,
                "Tech Enthusiast",
                1000,
                "Coder",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am an aspiring Full Stack Developer with a strong interest in
            creating responsive and dynamic web applications. I work with the
            MERN stack and modern web technologies to build practical and
            engaging digital experiences.
          </p>
          <a
            href="https://drive.google.com/file/d/1eRp8IqIs2SEJ3GVLqtDuYUOi8GOWvaq-/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black py-3 px-8 rounded-full mt-5 text-lg font-bold transition-all duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #00ffff, #00ccff)",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="w-full h-full border-2 border-[#00ffff]/50 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={mypfp}
                alt="Abhinav Sharma"
                className="w-full h-full rounded-full object-cover object-center"
                style={{ objectPosition: 'center center' }}
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default About;
