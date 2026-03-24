function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between">
        
        {/* Location (LEFT) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
          <p>Hyderabad</p>
          <p>Telangana</p>
        </div>

        {/* Contact (RIGHT) */}
        <div className="mt-6 md:mt-0 text-left md:text-right">
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <p>mail@gmail.com</p>
          <p>+91 9632458658</p>
        </div>

      </div>

      {/* Bottom strip */}
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-700">
        © 2026 Your Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;