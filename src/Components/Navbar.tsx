import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-zinc-800">
      <div className="flex items-center gap-2">
        <img src="/assets/images/logo.png" alt="logo" className="w-12 mr-2" />
        <span className="text-2xl font-semibold">Attendance Tracker</span>
      </div>
      <button className="text-zinc-300">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 16.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0-6c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0-6c.828 0 1.5-.672 1.5-1.5S12.828 1.5 12 1.5 10.5 2.172 10.5 3s.672 1.5 1.5 1.5z" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
