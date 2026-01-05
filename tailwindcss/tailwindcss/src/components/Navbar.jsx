const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex flex-col md:flex-row md:justify-between">
      <h1 className="text-xl font-bold">MyApp</h1>

      <div className="flex flex-col md:flex-row gap-4 mt-3 md:mt-0">
        <a className="hover:text-blue-600" href="#">Home</a>
        <a className="hover:text-blue-600" href="#">Features</a>
        <a className="hover:text-blue-600" href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
