import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const text = "Full Stack Web Developer | Backend Enthusiast";
  const [show, setShow] = useState("");
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Typing effect
    if (i < text.length) {
      const t = setTimeout(() => {
        setShow((prev) => prev + text[i]);
        setI(i + 1);
      }, 80);
      return () => clearTimeout(t);
    }
  }, [i]);

  useEffect(() => {
    // Fade in when component mounts
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
  id="home"
  className={`
    pt-40 md:pt-48 min-h-screen flex flex-col items-center justify-center text-center
    bg-gradient-to-br from-indigo-50 via-white to-purple-50
    transition-all duration-700
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
>
  <h1 className="text-5xl md:text-6xl font-extrabold">
    Hi, I’m{" "}
    <span className="text-indigo-600">Tula Bhagya Sri</span> 👋
  </h1>

  <p className="mt-6 text-xl md:text-2xl font-mono text-indigo-600">
    {show}
    <span className="animate-pulse">|</span>
  </p>


      <div className="flex gap-6 mt-8 text-3xl">
        <a
          href="https://github.com/tulabhagya2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/tula-bhagya-sri"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
