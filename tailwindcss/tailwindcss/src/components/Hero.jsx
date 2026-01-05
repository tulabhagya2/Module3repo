const Hero = () => {
  return (
    <section className="p-6 text-center">
      <h2 className="text-xl md:text-3xl lg:text-5xl font-bold 
        bg-gradient-to-r from-blue-500 to-purple-600 
        text-transparent bg-clip-text">
        Tailwind CSS Basics
      </h2>

      <div className="mt-6 flex justify-center">
        <img
          src="https://via.placeholder.com/300"
          className="rounded-lg shadow-lg transition transform hover:scale-105"
        />
      </div>

      <button className="mt-6 px-6 py-2 rounded 
        bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
        Click Me
      </button>
    </section>
  );
};

export default Hero;
