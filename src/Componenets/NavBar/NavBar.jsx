import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function NavBar() {
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];
  
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Check scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = menuItems
        .map(item => {
          const element = document.getElementById(item.id);
          return element ? { element, id: item.id } : null;
        })
        .filter(Boolean);
      
      if (sections.length === 0) return;
      
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    
    // Delay initial check to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
          isScrolled 
            ? "bg-black/80 backdrop-blur-md border-b border-[#00ffff]/10" 
            : "bg-transparent"
        }`}
      >
        <div className="text-white justify-between py-5 flex items-center">
          <div 
            className="text-lg font-semibold cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleMenuItemClick("about")}
          >
            <span className="text-[#00ffff]">&lt;</span>
            <span className="text-white">Abhinav</span>
            <span className="text-[#00ffff]">/</span>
            <span className="text-white">Sharma</span>
            <span className="text-[#00ffff]">&gt;</span>
          </div>
          <ul className="hidden md:flex text-gray-300 space-x-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`cursor-pointer hover:text-[#00ffff] transition-colors duration-200 ${
                    activeSection === item.id ? "text-[#00ffff]" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          {/* Social media icons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/YAbhinavZ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#00ffff] transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinav-sharma-number02/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#00ffff] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
          {/* Mobile menu icons */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#00ffff] cursor-pointer hover:scale-110 transition-transform"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#00ffff] cursor-pointer hover:scale-110 transition-transform"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
          {/* Mobile menu items */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-black/95 backdrop-filter backdrop-blur-lg z-50 rounded-lg md:hidden mt-2 mx-[7vw] border border-[#00ffff]/10">
              <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleMenuItemClick(item.id)}
                      className={`cursor-pointer hover:text-white transition-colors duration-200 text-lg ${
                        activeSection === item.id ? "text-[#00ffff]" : "text-gray-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <div className="flex space-x-4 pt-2">
                  <a
                    href="https://github.com/YAbhinavZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhinav-sharma-number02/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
