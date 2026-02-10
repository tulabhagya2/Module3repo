import { useEffect, useState } from "react";

export default function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
      className={`pt-28 p-8 bg-white transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <h2 className="text-3xl font-bold mb-4 text-indigo-600">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-100 rounded">
          <h3 className="font-bold text-lg">Portfolio Website</h3>
          <div className="mt-2 flex gap-3">
            <a className="text-blue-500" href="#">GitHub</a>
            <a className="text-green-500" href="#">Clone</a>
          </div>
        </div>
      </div>
    </section>
  );
}
