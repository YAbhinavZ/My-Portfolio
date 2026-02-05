import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-gradient-to-b from-gray-950 via-black to-black"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          CONTACT
        </h2>
        <div className="w-24 h-1 bg-[#00ffff] mx-auto mt-2" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Have an idea, opportunity, or collaboration in mind? I&apos;d love to
          hear from you.
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-4xl mx-auto grid gap-10 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr] items-start">
        {/* Message & CTA */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">
            Let&apos;s build something impactful together.
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            I&apos;m open to internships, full-time roles, and freelance
            projects in web development and software engineering. Whether
            it&apos;s a product idea, a team you&apos;re building, or a complex
            problem you want to solve, feel free to reach out and we can discuss
            how I can contribute.
          </p>

          <a
            href="mailto:abhinavvirtuoso@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm sm:text-base font-semibold text-black hover:shadow-lg transition-all duration-300"
            style={{
              background: "linear-gradient(90deg, #00ffff, #00ccff)",
            }}
          >
            Say Hello
          </a>
        </div>

        {/* Contact details card */}
        <div className="w-full bg-gray-900/80 border border-[#00ffff]/25 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,255,255,0.08)]">
          <h4 className="text-xl font-semibold text-white mb-4">
            Contact Details
          </h4>
          <div className="space-y-4 text-sm sm:text-base">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-1">
                Email
              </p>
              <a
                href="mailto:abhinavvirtuoso@gmail.com"
                className="text-gray-200 hover:text-[#00ffff] break-all transition-colors"
              >
                abhinavvirtuoso@gmail.com
              </a>
            </div>

            <div>
              <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-1">
                GitHub
              </p>
              <a
                href="https://github.com/YAbhinavZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-200 hover:text-[#00ffff] transition-colors"
              >
                <FaGithub size={16} />
                <span>github.com/YAbhinavZ</span>
              </a>
            </div>

            <div>
              <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-1">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/abhinav-sharma-number02/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-200 hover:text-[#00ffff] transition-colors"
              >
                <FaLinkedin size={16} />
                <span>linkedin.com/in/abhinav-sharma-number02</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;