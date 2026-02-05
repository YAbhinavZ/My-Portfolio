import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-[#00ffff]/10 bg-gradient-to-t from-black via-black/95 to-black">
      <div className="px-[7vw] md:px-[7vw] lg:px-[20vw] py-8">
        {/* Top row: name + socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-lg font-semibold text-white">
            <span className="text-[#00ffff]">&lt;</span>
            <span>Abhinav Sharma</span>
            <span className="text-[#00ffff]">/&gt;</span>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <a
              href="https://github.com/YAbhinavZ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full border border-[#00ffff]/30 hover:border-[#00ffff] hover:bg-[#00ffff]/10 text-[#00ffff] transition-colors duration-200"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinav-sharma-number02/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full border border-[#00ffff]/30 hover:border-[#00ffff] hover:bg-[#00ffff]/10 text-[#00ffff] transition-colors duration-200"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00ffff]/40 to-transparent mb-4" />

        {/* Bottom row: meta text */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-400 text-xs sm:text-sm">
          <p className="text-center sm:text-left">
            © {year} Abhinav Sharma. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Crafted with{" "}
            <span className="text-[#00ffff] font-semibold">React</span> &amp;{" "}
            <span className="text-[#00ffff] font-semibold">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;