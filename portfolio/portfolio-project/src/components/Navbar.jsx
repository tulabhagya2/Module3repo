import { useState } from "react";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Tula</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-white">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className="font-medium hover:text-gray-200 transition"
              >
                {link.label}
              </button>
            </li>
          ))}

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            <FaFileDownload /> Resume
          </a>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu with Fade-Up Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${open ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0"}
        `}
      >
        <div className="flex flex-col items-center gap-6 text-white">
          {links.map((link, index) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`font-medium text-lg transition-all duration-500 transform
                ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                delay-${index * 100}`}
            >
              {link.label}
            </button>
          ))}

          <a
            href="/resume.pdf"
            download
            className={`flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-200 transition
              ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
            `}
          >
            <FaFileDownload /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
