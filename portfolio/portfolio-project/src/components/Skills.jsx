import { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "VS Code", icon: <FaCode className="text-purple-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "GitHub", icon: <FaGitAlt className="text-red-500" /> },
];

export default function Skills() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className={`pt-28 p-8 bg-gray-100 transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-indigo-600">
         Technical Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-3xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            onClick={() => setActive(skill.name)}
            className="relative group cursor-pointer flex flex-col items-center"
          >
            <div className="text-5xl p-6 bg-white rounded-xl shadow hover:scale-110 transition">
              {skill.icon}
            </div>
            <span className="absolute -bottom-10 scale-0 group-hover:scale-100 transition bg-black text-white text-xs px-2 py-1 rounded">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <div className="h-16 mt-10 flex items-center justify-center">
        {active && (
          <span className="px-6 py-2 bg-white rounded-full shadow text-lg font-semibold">
            {active}
          </span>
        )}
      </div>
    </section>
  );
}
