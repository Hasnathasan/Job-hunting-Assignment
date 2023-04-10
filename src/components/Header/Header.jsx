import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-violet-50">
      <div className="container mx-auto flex flex-col sm:flex-row gap-5 justify-between items-center px-5 py-5">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          Code Your Career
        </h2>
        <nav className="flex gap-10">
          <Link to="/" className="font-bold text-base text-gray-700">
            Home
          </Link>
          <Link to="/statistics" className="font-bold text-base">
            Statistics
          </Link>
          <Link to="/appliedJobs" className="font-bold text-base">
            Applied Jobs
          </Link>
          <Link to="/blog" className="font-bold text-base">
            Blog
          </Link>
        </nav>
        <button className="btn border-none">Start Applying</button>
      </div>
    </div>
  );
};

export default Header;
