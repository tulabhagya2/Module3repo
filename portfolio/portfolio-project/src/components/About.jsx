import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className={`pt-28 p-8 min-h-screen
        bg-white transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <h2 className="text-3xl font-bold mb-4 text-indigo-600">About Me</h2>
      <p className="text-lg text-gray-700">
        I am a fresher passionate about frontend and backend development.
      </p>
    </section>
  );
}
