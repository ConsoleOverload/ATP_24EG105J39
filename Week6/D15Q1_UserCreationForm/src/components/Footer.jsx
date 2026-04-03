function Footer() {
  return (
    <footer className="bg-linear-to-r from-slate-900 to-slate-800 text-gray-300 mt-10">
  <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between">
    
    {/* Location */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
      <p className="text-sm">Hyderabad</p>
      <p className="text-sm">Telangana</p>
    </div>

    {/* Contact */}
    <div className="mt-6 md:mt-0 text-left md:text-right">
      <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
      <p className="text-sm">mail@gmail.com</p>
      <p className="text-sm">+91 9632458658</p>
    </div>

  </div>

  <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-700">
    © 2026 Your Company. All rights reserved.
  </div>
</footer>
  );
}

export default Footer;