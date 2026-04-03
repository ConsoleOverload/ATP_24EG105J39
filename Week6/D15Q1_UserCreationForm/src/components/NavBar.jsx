function NavBar() {
  return (
    <nav className="bg-slate-900 text-white shadow-sm">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    
    <h1 className="text-2xl font-bold tracking-wide text-blue-400">
      LOGO
    </h1>

    <ul className="flex gap-10 text-lg font-medium">
      {["Home","Register","Login"].map((item)=>(
        <li key={item} className="relative group cursor-pointer">
          <a className="transition duration-200 group-hover:text-blue-400">
            {item}
          </a>
          
          {/* underline animation */}
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </li>
      ))}
    </ul>

  </div>
</nav>
  );
}

export default NavBar;