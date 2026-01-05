const Features = () => {
  return (
    <section className="p-6">
      <h3 className="text-2xl font-bold text-center mb-4">Features</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3].map((item) => (
          <div key={item} className="bg-white p-4 rounded shadow">
            <img src="https://via.placeholder.com/200" className="rounded mb-3" />
            <h4 className="font-bold text-lg">Feature {item}</h4>
            <p className="text-gray-600">Utility-first responsive design.</p>
            <button className="mt-3 px-4 py-1 rounded 
              bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
