function NavBar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-blue-400">
          LOGO
        </h1>

        {/* Links */}
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <a href="#" className="hover:text-blue-400 transition duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition duration-200">
              Register
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition duration-200">
              Login
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default NavBar;